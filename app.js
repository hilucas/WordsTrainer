let words = [
    { word: "compassionate", phonetic: "/kəmˈpæʃənət/", meaning: "有同情心的", cat: "attitude" },
    { word: "sympathetic", phonetic: "/ˌsɪmpəˈθetɪk/", meaning: "同情的", cat: "attitude" },
    { word: "merciful", phonetic: "/ˈmɜːsɪfl/", meaning: "仁慈的", cat: "attitude" },
    { word: "impede", phonetic: "/ɪmˈpiːd/", meaning: "阻碍", cat: "action" },
    { word: "facilitate", phonetic: "/fəˈsɪlɪteɪt/", meaning: "促进", cat: "action" },
    { word: "intricate", phonetic: "/ˈɪntrɪkət/", meaning: "复杂的", cat: "feature" },
]

let progress = JSON.parse(localStorage.getItem("progress") || "{}")
let fav = JSON.parse(localStorage.getItem("fav") || "[]")

let queue = []
let current = null
let flipped = false


/* ===== SM2 & Memory System ===== */

function grade(q) {
    let p = progress[current.word] || { ef: 2.5, interval: 0, reps: 0 }
    if (q < 3) {
        p.reps = 0
        p.interval = 1
    } else {
        p.reps++
        if (p.reps == 1) p.interval = 1
        else if (p.reps == 2) p.interval = 6
        else p.interval = Math.round(p.interval * p.ef)
    }
    p.ef = p.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    if (p.ef < 1.3) p.ef = 1.3
    p.due = Date.now() + p.interval * 86400000
    progress[current.word] = p
    save()
    next()
}


/* ===== 复习与新词队列 ===== */

function buildQueue(isNew = false) {
    let now = Date.now()
    let catFilter = category.value

    queue = words.filter(w => {
        if (catFilter && w.cat !== catFilter) return false

        let p = progress[w.word]
        if (isNew) return !p
        return !p || p.due <= now
    })

    // 随机打乱队列以获得更好体验
    queue.sort(() => Math.random() - 0.5)
}


/* ===== 导航与显示 ===== */

function startStudy() {
    buildQueue(false)
    next()
    show("study")
}

function startNew() {
    buildQueue(true)
    if (queue.length === 0) {
        alert("没有新词可以学习了！")
        return
    }
    next()
    show("study")
}

function showSearch() { show("search") }
function showStats() {
    updateStats()
    show("stats")
}
function showImport() { show("import") }

function next() {
    if (queue.length == 0) {
        alert("本组任务已完成！")
        menu()
        return
    }
    current = queue.shift()
    showFront()
}

function showFront() {
    flipped = false
    card.innerHTML = `
        <div class="card-main">${current.word}</div>
        <div class="card-phonetic">${current.phonetic}</div>
    `
    card.onclick = flip
    rate.classList.add("hidden")
    tap_hint.classList.remove("hidden")

    if (fav.includes(current.word)) favBtn.classList.add("fav-active")
    else favBtn.classList.remove("fav-active")

    wordInfo.innerHTML = "" // 翻面前先隐藏数据，保持神秘感
}

function flip() {
    if (flipped) return
    flipped = true
    card.innerHTML = `
        <div class="card-main">${current.word}</div>
        <div class="card-phonetic">${current.phonetic}</div>
        <div class="card-meaning">${current.meaning}</div>
    `
    rate.classList.remove("hidden")
    tap_hint.classList.add("hidden")

    // 显示记忆曲线数据
    let p = progress[current.word] || { ef: 2.5, interval: 0, reps: 0 }
    wordInfo.innerHTML = `掌握度: ${p.reps > 0 ? (p.ef * 20).toFixed(0) + '%' : "新词"} | 下次复习: ${p.interval} 天后`
}


/* ===== 搜索 ===== */

function search() {
    let query = document.getElementById("q").value.toLowerCase()
    if (!query) {
        result.innerHTML = ""
        return
    }
    let r = words.filter(w => w.word.toLowerCase().includes(query) || w.meaning.includes(query))
    result.innerHTML = r.map(x =>
        `<div class="glass-panel" style="margin-bottom: 12px; padding: 15px; text-align: left;">
            <div style="font-weight: 600; color: var(--primary); font-size: 18px;">${x.word}</div>
            <div style="font-size: 14px; opacity: 0.6; margin-bottom: 5px;">${x.phonetic}</div>
            <div>${x.meaning}</div>
        </div>`
    ).join("")
}


/* ===== 收藏 ===== */

function toggleFav() {
    if (fav.includes(current.word)) {
        fav = fav.filter(x => x != current.word)
        favBtn.classList.remove("fav-active")
    } else {
        fav.push(current.word)
        favBtn.classList.add("fav-active")
    }
    save()
}


/* ===== 导入 ===== */

function importWords() {
    let lines = importText.value.trim().split("\n")
    if (!lines[0]) return alert("请输入内容")

    lines.forEach(l => {
        let parts = l.split(",")
        if (parts[0]) {
            words.push({
                word: parts[0].trim(),
                phonetic: parts[1] ? parts[1].trim() : "",
                meaning: parts[2] ? parts[2].trim() : "",
                cat: parts[3] ? parts[3].trim() : "import"
            })
        }
    })
    alert("导入成功！已更新词库内容。")
    importText.value = ""
    init()
}


/* ===== 发音 ===== */

function speak() {
    let u = new SpeechSynthesisUtterance(current.word)
    speechSynthesis.speak(u)

    // 视觉反馈
    speakBtn.style.transform = "scale(1.2)"
    setTimeout(() => { speakBtn.style.transform = "scale(1)" }, 200)
}


/* ===== 备份恢复 ===== */

function exportProgress() {
    let data = {
        progress: progress,
        fav: fav
    }
    let str = JSON.stringify(data)
    try {
        navigator.clipboard.writeText(str)
        alert("进度数据已复制到剪贴板！请将其保存在安全的地方。")
    } catch (e) {
        // 退化方案：直接弹窗
        prompt("请复制以下文本进行备份：", str)
    }
}

function importProgress() {
    let str = prompt("请粘贴导出的备份数据：")
    if (!str) return
    try {
        let data = JSON.parse(str)
        if (data.progress && data.fav) {
            progress = data.progress
            fav = data.fav
            save()
            alert("进度恢复成功！")
            location.reload()
        }
    } catch (e) {
        alert("解析错误，请检查文本是否完整。")
    }
}


/* ===== 统计 ===== */

function updateStats() {
    let learnt = Object.keys(progress).length
    let total = words.length
    let master = Object.values(progress).filter(p => p.ef > 2.2 && p.reps > 2).length

    statText.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
            <div class="glass-panel" style="padding: 15px; text-align: center;">
                <div style="opacity: 0.6; font-size: 13px;">词库总量</div>
                <div style="font-size: 24px; font-weight: 700;">${total}</div>
            </div>
            <div class="glass-panel" style="padding: 15px; text-align: center;">
                <div style="opacity: 0.6; font-size: 13px;">已学单词</div>
                <div style="font-size: 24px; font-weight: 700;">${learnt}</div>
            </div>
            <div class="glass-panel" style="padding: 15px; text-align: center;">
                <div style="opacity: 0.6; font-size: 13px;">熟练掌握</div>
                <div style="font-size: 24px; font-weight: 700;">${master}</div>
            </div>
            <div class="glass-panel" style="padding: 15px; text-align: center;">
                <div style="opacity: 0.6; font-size: 13px;">记忆进度</div>
                <div style="font-size: 24px; font-weight: 700;">${Math.round(learnt / total * 100)}%</div>
            </div>
        </div>
    `

    let ctx = chart.getContext("2d")
    ctx.clearRect(0, 0, 300, 150)

    // 绘制简易环形图
    let centerX = 150, centerY = 75, radius = 50
    ctx.lineWidth = 10

    // 背景环
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = "rgba(255,255,255,0.1)"
    ctx.stroke()

    // 进度环
    let angle = (learnt / total) * 2 * Math.PI
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, angle - Math.PI / 2)
    ctx.strokeStyle = "#38bdf8"
    ctx.stroke()
}


/* ===== UI & 初始化 ===== */

function show(id) {
    document.querySelectorAll(".app-container > div")
        .forEach(d => d.classList.add("hidden"))
    document.getElementById(id).classList.remove("hidden")
}

function menu() {
    init()
    show("menu")
}

function init() {
    // 首页统计
    let learnt = Object.keys(progress).length
    let total = words.length
    let now = Date.now()
    let dueCount = words.filter(w => !progress[w.word] || progress[w.word].due <= now).length

    document.getElementById("quick-stats").innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <div style="font-size: 14px; opacity: 0.8;">学习进度</div>
            <div style="font-weight: 700; color: var(--primary);">${learnt}/${total}</div>
        </div>
        <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; margin: 8px 0 16px;">
            <div style="width: ${Math.round(learnt / total * 100)}%; height: 100%; background: var(--primary); border-radius: 3px; transition: width 0.5s;"></div>
        </div>
    `

    // 分类下拉
    let cats = [...new Set(words.map(w => w.cat))].filter(Boolean)
    category.innerHTML = '<option value="">全部分类 (All)</option>' +
        cats.map(c => `<option value="${c}">${c}</option>`).join("")

    today.innerHTML = `今日待复习: <span style="color: var(--accent)">${dueCount}</span>`
}

function save() {
    localStorage.setItem("progress", JSON.stringify(progress))
    localStorage.setItem("fav", JSON.stringify(fav))
}

// 启动
init()