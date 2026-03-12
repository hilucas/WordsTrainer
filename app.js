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
        alert("今日任务已完成！")
        menu()
        return
    }
    current = queue.shift()
    showFront()
}

function showFront() {
    flipped = false
    card.innerHTML = current.word +
        "<div class=small>" + current.phonetic + "</div>"
    card.onclick = flip
    rate.classList.add("hidden")

    if (fav.includes(current.word)) favBtn.classList.add("fav-active")
    else favBtn.classList.remove("fav-active")
}

function flip() {
    if (flipped) return
    flipped = true
    card.innerHTML = current.word +
        "<div class=small>" + current.phonetic + "</div>" +
        "<br><br>" + current.meaning
    rate.classList.remove("hidden")
}


/* ===== 搜索 ===== */

function search() {
    let query = document.getElementById("q").value.toLowerCase()
    let r = words.filter(w => w.word.toLowerCase().includes(query) || w.meaning.includes(query))
    result.innerHTML = r.map(x =>
        `<div style="margin:10px; padding:10px; background:#334155; border-radius:8px; text-align:left;">
            <b>${x.word}</b> [${x.phonetic}]<br>${x.meaning}
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
    alert("导入完成！已更新词库内容。")
    importText.value = ""
    init()
}


/* ===== 发音 ===== */

function speak() {
    let u = new SpeechSynthesisUtterance(current.word)
    speechSynthesis.speak(u)
}


/* ===== 备份恢复 ===== */

function exportProgress() {
    let data = {
        progress: progress,
        fav: fav
    }
    let blob = new Blob([JSON.stringify(data)], { type: "application/json" })
    let url = URL.createObjectURL(blob)
    let a = document.createElement("a")
    a.href = url
    a.download = `word_trainer_backup_${new Date().toLocaleDateString()}.json`
    a.click()
}

function importProgress() {
    let str = prompt("请粘贴导出的备份 JSON 文本（或联系开发者协助）：")
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
        alert("格式错误，请确保粘贴的是正确的备份文本。")
    }
}


/* ===== 统计 ===== */

function updateStats() {
    let learnt = Object.keys(progress).length
    let total = words.length
    let master = Object.values(progress).filter(p => p.ef > 2.2 && p.reps > 3).length

    statText.innerHTML = `
        <p>词库总量: ${total}</p>
        <p>已学单词: ${learnt}</p>
        <p>熟练掌握: ${master}</p>
        <p>进度: ${Math.round(learnt / total * 100)}%</p>
    `

    let ctx = chart.getContext("2d")
    ctx.clearRect(0, 0, 320, 200)
    ctx.fillStyle = "#3b82f6"
    ctx.fillRect(20, 150, 280 * (learnt / total || 0), 20)
    ctx.strokeStyle = "white"
    ctx.strokeRect(20, 150, 280, 20)
}


/* ===== UI & 初始化 ===== */

function show(id) {
    document.querySelectorAll("body > div")
        .forEach(d => d.classList.add("hidden"))
    document.getElementById(id).classList.remove("hidden")
}

function menu() {
    init()
    show("menu")
}

function init() {
    let cats = [...new Set(words.map(w => w.cat))].filter(Boolean)
    category.innerHTML = '<option value="">全部分类</option>' +
        cats.map(c => `<option value="${c}">${c}</option>`).join("")

    let now = Date.now()
    let count = words.filter(w => !progress[w.word] || progress[w.word].due <= now).length
    today.innerHTML = `<p class="small">今日待复习: ${count} 词</p>`
}

function save() {
    localStorage.setItem("progress", JSON.stringify(progress))
    localStorage.setItem("fav", JSON.stringify(fav))
}

init()