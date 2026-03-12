let words = [
    // 态度 / 情感类
    { word: "compassionate", phonetic: "/kəmˈpæʃənət/", meaning: "adj. 有同情心的，体恤的", cat: "态度/情感" },
    { word: "sympathetic", phonetic: "/ˌsɪmpəˈθetɪk/", meaning: "adj. 同情的；赞同的", cat: "态度/情感" },
    { word: "merciful", phonetic: "/ˈmɜːsɪfl/", meaning: "adj. 仁慈的，怜悯的", cat: "态度/情感" },
    { word: "indifferent", phonetic: "/ɪnˈdɪfrənt/", meaning: "adj. 冷漠的，漠不关心的", cat: "态度/情感" },
    { word: "ruthless", phonetic: "/ˈruthləs/", meaning: "adj. 无情的，冷酷的", cat: "态度/情感" },
    { word: "pathetic", phonetic: "/pəˈθetɪk/", meaning: "adj. 可怜的，可悲的；乏味的", cat: "态度/情感" },
    { word: "miserable", phonetic: "/ˈmɪzrəbl/", meaning: "adj. 悲惨的，痛苦的", cat: "态度/情感" },
    { word: "sorrowful", phonetic: "/ˈsɒrəfl/", meaning: "adj. 悲伤的，悲痛的", cat: "态度/情感" },
    { word: "ecstatic", phonetic: "/ɪkˈstætɪk/", meaning: "adj. 狂喜的，极度兴奋的", cat: "态度/情感" },
    { word: "delighted", phonetic: "/dɪˈlaɪtɪd/", meaning: "adj. 高兴的，愉悦的", cat: "态度/情感" },
    { word: "jubilant", phonetic: "/ˈdʒuːbɪlənt/", meaning: "adj. 欢欣鼓舞的", cat: "态度/情感" },
    { word: "irritation", phonetic: "/ˌɪrɪˈteɪʃn/", meaning: "n. 恼怒，愤怒；刺激", cat: "态度/情感" },
    { word: "indignation", phonetic: "/ˌɪndɪɡˈneɪʃn/", meaning: "n. 愤慨，愤怒", cat: "态度/情感" },
    { word: "fury", phonetic: "/ˈfjʊəri/", meaning: "n. 暴怒，狂怒", cat: "态度/情感" },
    { word: "serene", phonetic: "/səˈriːn/", meaning: "adj. 平静的，安详的", cat: "态度/情感" },
    { word: "mild", phonetic: "/maɪld/", meaning: "adj. 温和的，平和的", cat: "态度/情感" },
    { word: "curiosity", phonetic: "/ˌkjʊəriˈɒsəti/", meaning: "n. 好奇心，求知欲", cat: "态度/情感" },
    { word: "inquisitiveness", phonetic: "/ɪnˈkwɪzətɪvnəs/", meaning: "n. 好奇，探究欲", cat: "态度/情感" },
    { word: "curiosity-driven", phonetic: "/ˌkjʊəriˈɒsəti ˈdrɪvn/", meaning: "adj. 受好奇心驱使的", cat: "态度/情感" },
    { word: "ambivalent", phonetic: "/æmˈbɪvələnt/", meaning: "adj. 矛盾的，犹豫不决的", cat: "态度/情感" },
    { word: "apprehensive", phonetic: "/ˌæprɪˈhensɪv/", meaning: "adj. 忧虑的，担心的", cat: "态度/情感" },
    { word: "ardent", phonetic: "/ˈɑːdnt/", meaning: "adj. 热情的，炽热的", cat: "态度/情感" },
    { word: "callous", phonetic: "/ˈkæləs/", meaning: "adj. 冷酷无情的，麻木的", cat: "态度/情感" },
    { word: "complacent", phonetic: "/kəmˈpleɪsnt/", meaning: "adj. 自满的，沾沾自喜的", cat: "态度/情感" },
    { word: "contemptuous", phonetic: "/kənˈtemptʃuəs/", meaning: "adj. 轻蔑的，鄙视的", cat: "态度/情感" },
    { word: "despondent", phonetic: "/dɪˈspɒndənt/", meaning: "adj. 沮丧的，灰心的", cat: "态度/情感" },
    { word: "eclectic", phonetic: "/ɪˈklektɪk/", meaning: "adj. 兼收并蓄的，不拘一格的", cat: "态度/情感" },
    { word: "elated", phonetic: "/iˈleɪtɪd/", meaning: "adj. 兴高采烈的，欢欣鼓舞的", cat: "态度/情感" },
    { word: "envious", phonetic: "/ˈenviəs/", meaning: "adj. 嫉妒的，羡慕的", cat: "态度/情感" },
    { word: "fervent", phonetic: "/ˈfɜːvənt/", meaning: "adj. 热烈的，热诚的", cat: "态度/情感" },
    { word: "furious", phonetic: "/ˈfjʊəriəs/", meaning: "adj. 狂怒的，暴怒的", cat: "态度/情感" },
    { word: "gloomy", phonetic: "/ˈɡluːmi/", meaning: "adj. 沮丧的，阴郁的", cat: "态度/情感" },
    { word: "grudging", phonetic: "/ˈɡrʌdʒɪŋ/", meaning: "adj. 勉强的，不情愿的", cat: "态度/情感" },
    { word: "haughty", phonetic: "/ˈhɔːti/", meaning: "adj. 傲慢的，高傲的", cat: "态度/情感" },
    { word: "indignant", phonetic: "/ɪnˈdɪɡnənt/", meaning: "adj. 愤慨的，愤愤不平的", cat: "态度/情感" },
    { word: "jovial", phonetic: "/ˈdʒəʊviəl/", meaning: "adj. 快活的，友好的", cat: "态度/情感" },
    { word: "melancholic", phonetic: "/ˌmelənˈkɒlɪk/", meaning: "adj. 忧郁的，抑郁的", cat: "态度/情感" },
    { word: "mournful", phonetic: "/ˈmɔːnfl/", meaning: "adj. 悲伤的，哀痛的", cat: "态度/情感" },
    { word: "oblivious", phonetic: "/əˈblɪviəs/", meaning: "adj. 不在意的，忘却的", cat: "态度/情感" },
    { word: "optimistic", phonetic: "/ˌɒptɪˈmɪstɪk/", meaning: "adj. 乐观的，乐观主义的", cat: "态度/情感" },
    { word: "pessimistic", phonetic: "/ˌpesɪˈmɪstɪk/", meaning: "adj. 悲观的，悲观主义的", cat: "态度/情感" },
    { word: "resentful", phonetic: "/rɪˈzentfl/", meaning: "adj. 愤愤不平的，怨恨的", cat: "态度/情感" },
    { word: "sarcastic", phonetic: "/sɑːˈkæstɪk/", meaning: "adj. 讽刺的，挖苦的", cat: "态度/情感" },
    { word: "solemn", phonetic: "/ˈsɒləm/", meaning: "adj. 严肃的，庄重的", cat: "态度/情感" },
    { word: "stolid", phonetic: "/ˈstɒlɪd/", meaning: "adj. 冷漠的，无动于衷的", cat: "态度/情感" },
    { word: "sullen", phonetic: "/ˈsʌlən/", meaning: "adj. 郁郁寡欢的，愠怒的", cat: "态度/情感" },
    { word: "tentative", phonetic: "/ˈtentətɪv/", meaning: "adj. 试探性的，犹豫的", cat: "态度/情感" },
    { word: "vexed", phonetic: "/vekst/", meaning: "adj. 恼怒的，烦恼的", cat: "态度/情感" },

    // 行为 / 动作类
    { word: "impede", phonetic: "/ɪmˈpiːd/", meaning: "v. 阻碍，妨碍", cat: "行为/动作" },
    { word: "hinder", phonetic: "/ˈhɪndə(r)/", meaning: "v. 阻碍，妨碍", cat: "行为/动作" },
    { word: "obstruct", phonetic: "/əbˈstrʌkt/", meaning: "v. 阻塞，阻碍", cat: "行为/动作" },
    { word: "hamper", phonetic: "/ˈæmpə(r)/", meaning: "v. 妨碍，牵制", cat: "行为/动作" },
    { word: "facilitate", phonetic: "/fəˈsɪlɪteɪt/", meaning: "v. 促进，使便利", cat: "行为/动作" },
    { word: "boost", phonetic: "/buːst/", meaning: "v. 促进，推动；提升", cat: "行为/动作" },
    { word: "advance", phonetic: "/ədˈvɑːns/", meaning: "v. 推进，促进", cat: "行为/动作" },
    { word: "conceal", phonetic: "/kənˈsiːl/", meaning: "v. 隐藏，隐瞒，掩盖", cat: "行为/动作" },
    { word: "hide", phonetic: "/haɪd/", meaning: "v. 隐藏，躲藏", cat: "行为/动作" },
    { word: "cover up", phonetic: "[short phrase]", meaning: "掩盖，掩饰", cat: "行为/动作" },
    { word: "obscure", phonetic: "/obˈskjʊə(r)/", meaning: "v. 遮蔽，掩盖；使模糊", cat: "行为/动作" },
    { word: "reveal", phonetic: "/rɪˈviːl/", meaning: "v. 揭露，暴露；展示", cat: "行为/动作" },
    { word: "expose", phonetic: "/ɪkˈspəʊz/", meaning: "v. 暴露，揭露；曝光", cat: "行为/动作" },
    { word: "uncover", phonetic: "/ʌnˈkʌvə(r)/", meaning: "v. 发现，揭露；揭开", cat: "行为/动作" },
    { word: "come to light", phonetic: "[short phrase]", meaning: "显露，被发现，公之于众", cat: "行为/动作" },
    { word: "shed light on", phonetic: "[short phrase]", meaning: "阐明，揭示，使真相大白", cat: "行为/动作" },
    { word: "strive for", phonetic: "/straɪv fɔː(r)/", meaning: "努力争取，追求", cat: "行为/动作" },
    { word: "endeavor", phonetic: "/ɪnˈdevə(r)/", meaning: "v./n. 努力，竭力，尝试", cat: "行为/动作" },
    { word: "strive", phonetic: "/straɪv/", meaning: "v. 努力，奋斗", cat: "行为/动作" },
    { word: "attempt", phonetic: "/əˈtempt/", meaning: "v./n. 尝试，试图", cat: "行为/动作" },
    { word: "exert", phonetic: "/ɪɡˈzɜːt/", meaning: "v. 尽力，运用；施加", cat: "行为/动作" },
    { word: "abandon", phonetic: "/əˈbændən/", meaning: "v. 放弃，抛弃", cat: "行为/动作" },
    { word: "retreat", phonetic: "/rɪˈtriːt/", meaning: "v./n. 退缩，撤退；放弃", cat: "行为/动作" },
    { word: "give up", phonetic: "[short phrase]", meaning: "放弃，戒除", cat: "行为/动作" },
    { word: "trigger", phonetic: "/ˈtrɪɡə(r)/", meaning: "v. 触发，引起，引爆 n. 扳机", cat: "行为/动作" },
    { word: "arouse", phonetic: "/əˈraʊz/", meaning: "v. 引起，唤起；唤醒", cat: "行为/动作" },
    { word: "evoke", phonetic: "/ɪˈvəʊk/", meaning: "v. 唤起，引起；激发", cat: "行为/动作" },
    { word: "spark", phonetic: "/spɑːk/", meaning: "v. 引发，触发；冒火花", cat: "行为/动作" },
    { word: "subside", phonetic: "/səbˈsaɪd/", meaning: "v. 平息，减弱；下降", cat: "行为/动作" },
    { word: "ease", phonetic: "/iːz/", meaning: "v. 缓解，减轻；使舒适", cat: "行为/动作" },
    { word: "calm", phonetic: "/kɑːm/", meaning: "v. 使平静，平息", cat: "行为/动作" },
    { word: "alleviate", phonetic: "/əˈliːvieɪt/", meaning: "v. 缓解，减轻（痛苦等）", cat: "行为/动作" },
    { word: "pass on", phonetic: "[short phrase]", meaning: "传递，转交；把… 传给", cat: "行为/动作" },
    { word: "convey", phonetic: "/kənˈveɪ/", meaning: "v. 传递，传达；运输", cat: "行为/动作" },
    { word: "transmit", phonetic: "/trænsˈmɪt/", meaning: "v. 传递，传输；传播", cat: "行为/动作" },
    { word: "hand over", phonetic: "/hænd ˈəʊvə(r)/", meaning: "交出，移交", cat: "行为/动作" },
    { word: "receive", phonetic: "/rɪˈsiːv/", meaning: "v. 接收，收到；接纳", cat: "行为/动作" },
    { word: "accept", phonetic: "/əkˈsept/", meaning: "v. 接受，接纳；承认", cat: "行为/动作" },
    { word: "embrace", phonetic: "/ɪmˈbreɪs/", meaning: "v. 接纳，拥抱；包含", cat: "行为/动作" },
    { word: "persevere in", phonetic: "/ˌpɜːsəˈvɪə(r) ɪn/", meaning: "坚持，锲而不舍", cat: "行为/动作" },
    { word: "adhere to", phonetic: "/ədˈhɪə(r) tuː/", meaning: "坚持，遵守；粘附", cat: "行为/动作" },
    { word: "stick to", phonetic: "[short phrase]", meaning: "坚持，固守", cat: "行为/动作" },
    { word: "persist", phonetic: "/pəˈsɪst/", meaning: "v. 坚持，执意；持续", cat: "行为/动作" },
    { word: "waver", phonetic: "/ˈweɪvə(r)/", meaning: "v. 动摇，犹豫不决；摇摆", cat: "行为/动作" },
    { word: "alter", phonetic: "/ˈɔːltə(r)/", meaning: "v. 改变，更改", cat: "行为/动作" },
    { word: "modify", phonetic: "/ˈmɒdɪfaɪ/", meaning: "v. 修改，更改；修饰", cat: "行为/动作" },
    { word: "accelerate", phonetic: "/əkˈseləreɪt/", meaning: "v. 加速，促进", cat: "行为/动作" },
    { word: "accomplish", phonetic: "/əˈkʌmplɪʃ/", meaning: "v. 完成，实现", cat: "行为/动作" },
    { word: "accumulate", phonetic: "/əˈkjuːmjəleɪt/", meaning: "v. 积累，积聚", cat: "行为/动作" },
    { word: "administer", phonetic: "/ədˈmɪnɪstə(r)/", meaning: "v. 管理，执行", cat: "行为/动作" },
    { word: "advocate", phonetic: "/ˈædvəkeɪt/", meaning: "v. 提倡，拥护", cat: "行为/动作" },
    { word: "avert", phonetic: "/əˈvɜːt/", meaning: "v. 避免，防止；转移", cat: "行为/动作" },
    { word: "banish", phonetic: "/ˈbænɪʃ/", meaning: "v. 驱逐，流放；消除", cat: "行为/动作" },
    { word: "bolster", phonetic: "/ˈbəʊlstə(r)/", meaning: "v. 支持，巩固", cat: "行为/动作" },
    { word: "boycott", phonetic: "/ˈbɔɪkɒt/", meaning: "v./n. 抵制，打击", cat: "行为/动作" },
    { word: "breach", phonetic: "/briːtʃ/", meaning: "v. 违反，破坏；攻破", cat: "行为/动作" },
    { word: "cajole", phonetic: "/kəˈdʒəʊl/", meaning: "v. 哄骗，劝诱", cat: "行为/动作" },
    { word: "curb", phonetic: "/kɜːb/", meaning: "v. 控制，约束", cat: "行为/动作" },
    { word: "dazzle", phonetic: "/ˈdæzl/", meaning: "v. 使目眩；使惊叹", cat: "行为/动作" },
    { word: "deter", phonetic: "/dɪˈtɜː(r)/", meaning: "v. 阻止，威慑", cat: "行为/动作" },
    { word: "discern", phonetic: "/dɪˈsɜːn/", meaning: "v. 察觉，识别；领悟", cat: "行为/动作" },
    { word: "dismantle", phonetic: "/dɪsˈmæntl/", meaning: "v. 拆除，拆卸；废除", cat: "行为/动作" },
    { word: "dispatch", phonetic: "/dɪˈspætʃ/", meaning: "v. 派遣；发送；迅速处理", cat: "行为/动作" },
    { word: "elude", phonetic: "/ɪˈluːd/", meaning: "v. 逃避，躲避；使困惑", cat: "行为/动作" },
    { word: "endeavour", phonetic: "/ɪnˈdevə(r)/", meaning: "v. 努力，竭力", cat: "行为/动作" },
    { word: "enhance", phonetic: "/ɪnˈhɑːns/", meaning: "v. 提高，增强", cat: "行为/动作" },
    { word: "eradicate", phonetic: "/ɪˈrædɪkeɪt/", meaning: "v. 根除，消灭", cat: "行为/动作" },
    { word: "evade", phonetic: "/ɪˈveɪd/", meaning: "v. 逃避，规避；躲避", cat: "行为/动作" },
    { word: "exemplify", phonetic: "/ɪɡˈzemplɪfaɪ/", meaning: "v. 举例说明，例证", cat: "行为/动作" },
    { word: "expedite", phonetic: "/ˈekspədaɪt/", meaning: "v. 加快，促进；迅速处理", cat: "行为/动作" },
    { word: "foster", phonetic: "/ˈfɒstə(r)/", meaning: "v. 培养，促进；养育", cat: "行为/动作" },
    { word: "hamstring", phonetic: "/ˈhæmstrɪŋ/", meaning: "v. 削弱，使无效", cat: "行为/动作" },
    { word: "hasten", phonetic: "/ˈheɪsn/", meaning: "v. 加速，加快；急忙", cat: "行为/动作" },
    { word: "heed", phonetic: "/hiːd/", meaning: "v. 注意，留心", cat: "行为/动作" },
    { word: "ignite", phonetic: "/ɪɡˈnaɪt/", meaning: "v. 点燃；引发，激起", cat: "行为/动作" },

    // 特征 / 属性类
    { word: "intricate", phonetic: "/ˈɪntrɪkət/", meaning: "adj. 错综复杂的", cat: "特征/属性" },
    { word: "sophisticated", phonetic: "/səˈfɪstɪkeɪtɪd/", meaning: "adj. 复杂的；精密的；老练的", cat: "特征/属性" },
    { word: "complex", phonetic: "/ˈkɒmpleks/", meaning: "adj. 复杂的，复合的", cat: "特征/属性" },
    { word: "complicated", phonetic: "/ˈkɒmplɪkeɪtɪd/", meaning: "adj. 复杂的，难懂的", cat: "特征/属性" },
    { word: "simple", phonetic: "/ˈsɪmpl/", meaning: "adj. 简单的，简易的", cat: "特征/属性" },
    { word: "straightforward", phonetic: "/ˌstreɪtˈfɔːwəd/", meaning: "adj. 直白的，简单的；坦率的", cat: "特征/属性" },
    { word: "plain", phonetic: "/pleɪn/", meaning: "adj. 简单的，朴素的；清楚的", cat: "特征/属性" },
    { word: "prevalent", phonetic: "/ˈprevələnt/", meaning: "adj. 普遍的，流行的", cat: "特征/属性" },
    { word: "popular", phonetic: "/ˈpɒpjələ(r)/", meaning: "adj. 流行的，受欢迎的", cat: "特征/属性" },
    { word: "widespread", phonetic: "/ˈwaɪdspred/", meaning: "adj. 广泛的，普遍的", cat: "特征/属性" },
    { word: "common", phonetic: "/ˈkɒmən/", meaning: "adj. 常见的，普遍的", cat: "特征/属性" },
    { word: "rare", phonetic: "/reə(r)/", meaning: "adj. 罕见的，稀有的", cat: "特征/属性" },
    { word: "scarce", phonetic: "/skeəs/", meaning: "adj. 稀缺的，罕见的", cat: "特征/属性" },
    { word: "exceptional", phonetic: "/ɪkˈsepʃənl/", meaning: "adj. 特殊的，杰出的；例外的", cat: "特征/属性" },
    { word: "unique", phonetic: "/juːˈniːk/", meaning: "adj. 独特的，独一无二的", cat: "特征/属性" },
    { word: "core", phonetic: "/kɔː(r)/", meaning: "n. 核心，精髓 adj. 核心的", cat: "特征/属性" },
    { word: "crucial", phonetic: "/ˈkruːʃl/", meaning: "adj. 关键的，至关重要的", cat: "特征/属性" },
    { word: "vital", phonetic: "/ˈvaɪtl/", meaning: "adj. 极其重要的，生死攸关的", cat: "特征/属性" },
    { word: "essential", phonetic: "/ɪˈsenʃl/", meaning: "adj. 本质的，必要的；重要的", cat: "特征/属性" },
    { word: "paltry", phonetic: "/ˈpɔːltri/", meaning: "adj. 微不足道的，琐碎的；劣质的", cat: "特征/属性" },
    { word: "trivial", phonetic: "/ˈtrɪviəl/", meaning: "adj. 琐碎的，微不足道的", cat: "特征/属性" },
    { word: "negligible", phonetic: "/ˈneɡlɪdʒəbl/", meaning: "adj. 微不足道的，可忽略的", cat: "特征/属性" },
    { word: "secondary", phonetic: "/ˈsekəndəri/", meaning: "adj. 次要的，第二位的", cat: "特征/属性" },
    { word: "malignant", phonetic: "/məˈlɪɡnənt/", meaning: "adj. 恶性的，致命的；恶毒的", cat: "特征/属性" },
    { word: "fatal", phonetic: "/ˈfeɪtl/", meaning: "adj. 致命的，毁灭性的", cat: "特征/属性" },
    { word: "deadly", phonetic: "/ˈdedli/", meaning: "adj. 致命的，极度的", cat: "特征/属性" },
    { word: "perilous", phonetic: "/ˈperələs/", meaning: "adj. 危险的，岌岌可危的", cat: "特征/属性" },
    { word: "secure", phonetic: "/sɪˈkjʊə(r)/", meaning: "adj. 安全的，可靠的", cat: "特征/属性" },
    { word: "harmless", phonetic: "/ˈhɑːmləs/", meaning: "adj. 无害的，无恶意的", cat: "特征/属性" },
    { word: "safe", phonetic: "/seɪf/", meaning: "adj. 安全的，平安的", cat: "特征/属性" },
    { word: "convincing", phonetic: "/kənˈvɪnsɪŋ/", meaning: "adj. 令人信服的，有说服力的", cat: "特征/属性" },
    { word: "credible", phonetic: "/ˈkredəbl/", meaning: "adj. 可信的，可靠的", cat: "特征/属性" },
    { word: "persuasive", phonetic: "/pəˈsweɪsɪv/", meaning: "adj. 有说服力的，劝导性的", cat: "特征/属性" },
    { word: "slippery", phonetic: "/ˈslɪpəri/", meaning: "adj. 含糊的，难以捉摸的；滑的", cat: "特征/属性" },
    { word: "suspicious", phonetic: "/səˈspɪʃəs/", meaning: "adj. 可疑的，怀疑的", cat: "特征/属性" },
    { word: "vague", phonetic: "/veɪɡ/", meaning: "adj. 模糊的，含糊的", cat: "特征/属性" },
    { word: "ambiguous", phonetic: "/æmˈbɪɡjuəs/", meaning: "adj. 模棱两可的，含糊的", cat: "特征/属性" },
    { word: "preeminent", phonetic: "/priˈemɪnənt/", meaning: "adj. 卓越的，杰出的，超群的", cat: "特征/属性" },
    { word: "eminent", phonetic: "/ˈemɪnənt/", meaning: "adj. 杰出的，著名的", cat: "特征/属性" },
    { word: "outstanding", phonetic: "/aʊtˈstændɪŋ/", meaning: "adj. 杰出的，优秀的", cat: "特征/属性" },
    { word: "distinguished", phonetic: "/dɪˈstɪŋɡwɪʃt/", meaning: "adj. 卓越的，著名的；高贵的", cat: "特征/属性" },
    { word: "mediocre", phonetic: "/ˌmiːdiˈəʊkə(r)/", meaning: "adj. 平庸的，普通的", cat: "特征/属性" },
    { word: "ordinary", phonetic: "/ˈɔːdnri/", meaning: "adj. 普通的，平常的", cat: "特征/属性" },
    { word: "average", phonetic: "/ˈævərɪdʒ/", meaning: "adj. 普通的，平均的", cat: "特征/属性" },
    { word: "abundant", phonetic: "/əˈbʌndənt/", meaning: "adj. 大量的，丰富的", cat: "特征/属性" },
    { word: "acute", phonetic: "/əˈkjuːt/", meaning: "adj. 严重的；急性的；敏锐的", cat: "特征/属性" },
    { word: "adamant", phonetic: "/ˈædəmənt/", meaning: "adj. 坚定的，固执的", cat: "特征/属性" },
    { word: "austere", phonetic: "/ɒˈstɪə(r)/", meaning: "adj. 简朴的；严厉的；苦行的", cat: "特征/属性" },
    { word: "authentic", phonetic: "/ɔːˈθentɪk/", meaning: "adj. 真实的，正宗的；可靠的", cat: "特征/属性" },
    { word: "banal", phonetic: "/bəˈnɑːl/", meaning: "adj. 平庸的，陈腐的", cat: "特征/属性" },
    { word: "brittle", phonetic: "/ˈbrɪtl/", meaning: "adj. 易碎的；脆弱的", cat: "特征/属性" },
    { word: "coherent", phonetic: "/kəʊˈhɪərənt/", meaning: "adj. 连贯的，有条理的", cat: "特征/属性" },
    { word: "compact", phonetic: "/ˈkɒmpækt/", meaning: "adj. 紧凑的，小巧的", cat: "特征/属性" },
    { word: "conspicuous", phonetic: "/kənˈspɪkjuəs/", meaning: "adj. 显眼的，明显的", cat: "特征/属性" },
    { word: "consistent", phonetic: "/kənˈsɪstənt/", meaning: "adj. 一致的，始终如一的", cat: "特征/属性" },
    { word: "cumbersome", phonetic: "/ˈkʌmbəsəm/", meaning: "adj. 笨重的；繁琐的", cat: "特征/属性" },
    { word: "diverse", phonetic: "/daɪˈvɜːs/", meaning: "adj. 多种多样的，不同的", cat: "特征/属性" },
    { word: "dominant", phonetic: "/ˈdɒmɪnənt/", meaning: "adj. 占主导的，支配的", cat: "特征/属性" },
    { word: "durable", phonetic: "/ˈdjʊərəbl/", meaning: "adj. 耐用的，持久的", cat: "特征/属性" },
    { word: "elegant", phonetic: "/ˈelɪɡənt/", meaning: "adj. 优雅的；精美的", cat: "特征/属性" },
    { word: "equivalent", phonetic: "/ɪˈkwɪvələnt/", meaning: "adj. 相等的，等价的", cat: "特征/属性" },
    { word: "eternal", phonetic: "/ɪˈtɜːnl/", meaning: "adj. 永恒的，永久的", cat: "特征/属性" },
    { word: "exquisite", phonetic: "/ɪkˈskwɪzɪt/", meaning: "adj. 精美的；敏锐的", cat: "特征/属性" },
    { word: "fragile", phonetic: "/ˈfrædʒaɪl/", meaning: "adj. 易碎的；脆弱的", cat: "特征/属性" },
    { word: "futile", phonetic: "/ˈfjuːtaɪl/", meaning: "adj. 无用的，徒劳的", cat: "特征/属性" },
    { word: "gigantic", phonetic: "/dʒaɪˈɡæntɪk/", meaning: "adj. 巨大的，庞大的", cat: "特征/属性" },
    { word: "hollow", phonetic: "/ˈhɒləʊ/", meaning: "adj. 空的；虚伪的", cat: "特征/属性" },
    { word: "homogeneous", phonetic: "/ˌhɒməˈdʒiːniəs/", meaning: "adj. 同种类的，同质的", cat: "特征/属性" },
    { word: "imperative", phonetic: "/ɪmˈperətɪv/", meaning: "adj. 极重要的，必要的", cat: "特征/属性" },
    { word: "inherent", phonetic: "/ɪnˈhɪərənt/", meaning: "adj. 内在的，固有的", cat: "特征/属性" },
    { word: "intangible", phonetic: "/ɪnˈtændʒəbl/", meaning: "adj. 无形的，难以捉摸的", cat: "特征/属性" },
    { word: "invariable", phonetic: "/ɪnˈveəriəbl/", meaning: "adj. 不变的，恒定的", cat: "特征/属性" },
    { word: "lavish", phonetic: "/ˈlævɪʃ/", meaning: "adj. 奢华的；慷慨的", cat: "特征/属性" },

    // 数量 / 范围类
    { word: "myriad", phonetic: "/ˈmɪriəd/", meaning: "adj. 无数的，多种多样的 n. 无数", cat: "数量/范围" },
    { word: "numerous", phonetic: "/ˈnjuːmərəs/", meaning: "adj. 众多的，许多的", cat: "数量/范围" },
    { word: "countless", phonetic: "/ˈkaʊtləs/", meaning: "adj. 无数的，数不清的", cat: "数量/范围" },
    { word: "massive", phonetic: "/ˈmæsɪv/", meaning: "adj. 大量的；巨大的", cat: "数量/范围" },
    { word: "scarce", phonetic: "/skeəs/", meaning: "adj. 少量的，稀缺的", cat: "数量/范围" },
    { word: "few", phonetic: "/fjuː/", meaning: "adj. 少数的，很少的", cat: "数量/范围" },
    { word: "individual", phonetic: "/ˌɪndɪˈvɪdʒuəl/", meaning: "adj. 个别的，单独的", cat: "数量/范围" },
    { word: "single", phonetic: "/ˈsɪŋɡl/", meaning: "adj. 单一的，个别的", cat: "数量/范围" },
    { word: "far and wide", phonetic: "[short phrase]", meaning: "广泛地，到处", cat: "数量/范围" },
    { word: "widely", phonetic: "/ˈwaɪdli/", meaning: "adv. 广泛地，大大地", cat: "数量/范围" },
    { word: "extensively", phonetic: "/ɪkˈstensɪvli/", meaning: "adv. 广泛地，大量地", cat: "数量/范围" },
    { word: "universally", phonetic: "/ˌjuːnɪˈvɜːsəli/", meaning: "adv. 普遍地，全体地", cat: "数量/范围" },
    { word: "limited", phonetic: "/ˈlɪmɪtɪd/", meaning: "adj. 有限的，受限的", cat: "数量/范围" },
    { word: "partial", phonetic: "/ˈpɑːʃl/", meaning: "adj. 局部的，部分的；偏袒的", cat: "数量/范围" },
    { word: "regional", phonetic: "/ˈriːdʒənl/", meaning: "adj. 地区的，局部的", cat: "数量/范围" },
    { word: "ample", phonetic: "/ˈæmpl/", meaning: "adj. 充足的，大量的", cat: "数量/范围" },
    { word: "bulk", phonetic: "/bʌlk/", meaning: "n. 主体，大部分；体积", cat: "数量/范围" },
    { word: "copious", phonetic: "/ˈkəʊpiəs/", meaning: "adj. 大量的，丰富的", cat: "数量/范围" },
    { word: "dearth", phonetic: "/dɜːθ/", meaning: "n. 缺乏，短缺", cat: "数量/范围" },
    { word: "diminutive", phonetic: "/dɪˈmɪnjətɪv/", meaning: "adj. 微小的，小型的", cat: "数量/范围" },
    { word: "enormous", phonetic: "/ɪˈnɔːməs/", meaning: "adj. 巨大的，庞大的", cat: "数量/范围" },
    { word: "excessive", phonetic: "/ɪkˈsesɪv/", meaning: "adj. 过多的，过分的", cat: "数量/范围" },
    { word: "finite", phonetic: "/ˈfaɪnaɪt/", meaning: "adj. 有限的，限定的", cat: "数量/范围" },
    { word: "gross", phonetic: "/ɡrəʊs/", meaning: "adj. 总的，毛的；严重的", cat: "数量/范围" },
    { word: "immense", phonetic: "/ɪˈmens/", meaning: "adj. 巨大的，广大的", cat: "数量/范围" },
    { word: "infinite", phonetic: "/ˈɪnfɪnət/", meaning: "adj. 无限的，无穷的", cat: "数量/范围" },
    { word: "insignificant", phonetic: "/ˌɪnsɪɡˈnɪfɪkənt/", meaning: "adj. 无关紧要的，微不足道的", cat: "数量/范围" },
    { word: "magnitude", phonetic: "/ˈmæɡnɪtjuːd/", meaning: "n. 大小，量级", cat: "数量/范围" },
    { word: "optimum", phonetic: "/ˈɒptɪməm/", meaning: "adj. 最佳的，最优的", cat: "数量/范围" },
    { word: "overwhelming", phonetic: "/ˌəʊvəˈwelmɪŋ/", meaning: "adj. 压倒性的；巨大的", cat: "数量/范围" },
    { word: "predominant", phonetic: "/prɪˈdɒmɪnənt/", meaning: "adj. 占主导的，主要的", cat: "数量/范围" },
    { word: "prolific", phonetic: "/prəˈlɪfɪk/", meaning: "adj. 多产的，丰产的", cat: "数量/范围" },
    { word: "quantitative", phonetic: "/ˈkwɒntɪtətɪv/", meaning: "adj. 数量的，定量的", cat: "数量/范围" },
    { word: "scanty", phonetic: "/ˈskænti/", meaning: "adj. 缺乏的，不足的", cat: "数量/范围" },
    { word: "substantial", phonetic: "/səbˈstænʃl/", meaning: "adj. 大量的；实质的", cat: "数量/范围" },
    { word: "sufficient", phonetic: "/səˈfɪʃnt/", meaning: "adj. 足够的，充足的", cat: "数量/范围" },
    { word: "tremendous", phonetic: "/trəˈmendəs/", meaning: "adj. 极大的，巨大的", cat: "数量/范围" },
    { word: "ultimate", phonetic: "/ˈʌltɪmət/", meaning: "adj. 最终的；根本的", cat: "数量/范围" },
    { word: "vast", phonetic: "/vɑːst/", meaning: "adj. 广阔的；巨大的", cat: "数量/范围" },

    // 状态 / 趋势类
    { word: "thrive", phonetic: "/θraɪv/", meaning: "v. 繁荣，兴旺；茁壮成长", cat: "状态/趋势" },
    { word: "flourish", phonetic: "/ˈflʌrɪʃ/", meaning: "v. 繁荣，兴旺；挥舞", cat: "状态/趋势" },
    { word: "boom", phonetic: "/buːm/", meaning: "v./n. 繁荣，激增；轰鸣", cat: "状态/趋势" },
    { word: "prosper", phonetic: "/ˈprɒspə(r)/", meaning: "v. 繁荣，成功", cat: "状态/趋势" },
    { word: "shrink", phonetic: "/ʃrɪŋk/", meaning: "v. 萎缩，收缩；退缩", cat: "状态/趋势" },
    { word: "decline", phonetic: "/dɪˈclaɪn/", meaning: "v./n. 衰退，下降；谢绝", cat: "状态/趋势" },
    { word: "recession", phonetic: "/rɪˈseʃn/", meaning: "n. 经济衰退，不景气", cat: "状态/趋势" },
    { word: "fade", phonetic: "/feɪd/", meaning: "v. 衰退，逐渐消失；褪色", cat: "状态/趋势" },
    { word: "bounce back", phonetic: "[short phrase]", meaning: "恢复，反弹，振作起来", cat: "状态/趋势" },
    { word: "recover", phonetic: "/rɪˈkʌvə(r)/", meaning: "v. 恢复，复原；收回", cat: "状态/趋势" },
    { word: "restore", phonetic: "/rɪˈstɔː(r)/", meaning: "v. 恢复，修复；重建", cat: "状态/趋势" },
    { word: "deteriorate", phonetic: "/dɪˈtɪəriəreɪt/", meaning: "v. 恶化，变坏", cat: "状态/趋势" },
    { word: "worsen", phonetic: "/ˈwɜːsn/", meaning: "v. 恶化，变得更糟", cat: "状态/趋势" },
    { word: "intensify", phonetic: "/ɪnˈtensɪfaɪ/", meaning: "v. 加剧，加强；使强烈", cat: "状态/趋势" },
    { word: "aggravate", phonetic: "/ˈæɡrəveɪt/", meaning: "v. 加重，加剧；激怒", cat: "状态/趋势" },
    { word: "equilibrium", phonetic: "/ˌiːkwɪˈlɪbriəm/", meaning: "n. 平衡，均衡", cat: "状态/趋势" },
    { word: "balance", phonetic: "/ˈæləns/", meaning: "n./v. 平衡，均衡；权衡", cat: "状态/趋势" },
    { word: "stable", phonetic: "/ˈsteɪbl/", meaning: "adj. 稳定的，稳固的", cat: "状态/趋势" },
    { word: "steady", phonetic: "/ˈstedi/", meaning: "adj. 稳定的，平稳的", cat: "状态/趋势" },
    { word: "turmoil", phonetic: "/ˈtɜːmɔɪl/", meaning: "n. 动荡，骚乱", cat: "状态/趋势" },
    { word: "chaos", phonetic: "/ˈkeɪɒs/", meaning: "n. 混乱，无序", cat: "状态/趋势" },
    { word: "imbalance", phonetic: "/ɪmˈbæləns/", meaning: "n. 失衡，不平衡", cat: "状态/趋势" },
    { word: "feasible", phonetic: "/ˈfiːzəbl/", meaning: "adj. 可行的，可能的，适宜的", cat: "状态/趋势" },
    { word: "practical", phonetic: "/ˈpræktɪkl/", meaning: "adj. 切实可行的，实际的", cat: "状态/趋势" },
    { word: "possible", phonetic: "/ˈpɒsəbl/", meaning: "adj. 可能的，潜在的", cat: "状态/趋势" },
    { word: "viable", phonetic: "/ˈvaɪəbl/", meaning: "adj. 可行的，能存活的", cat: "状态/趋势" },
    { word: "unfeasible", phonetic: "/ʌnˈfiːzəbl/", meaning: "adj. 不可行的", cat: "状态/趋势" },
    { word: "impossible", phonetic: "/ɪmˈpɒsəbl/", meaning: "adj. 不可能的", cat: "状态/趋势" },
    { word: "impractical", phonetic: "/ɪmˈpræktɪkl/", meaning: "adj. 不切实际的，不可行的", cat: "状态/趋势" },
    { word: "ascend", phonetic: "/əˈsend/", meaning: "v. 上升，攀登；晋升", cat: "状态/趋势" },
    { word: "collapse", phonetic: "/kəˈlæps/", meaning: "v./n. 倒塌；崩溃，瓦解", cat: "状态/趋势" },
    { word: "diminish", phonetic: "/dɪˈmɪnɪʃ/", meaning: "v. 减少，降低；削弱", cat: "状态/趋势" },
    { word: "ebb", phonetic: "/eb/", meaning: "v./n. 退潮；衰退，衰落", cat: "状态/趋势" },
    { word: "escalate", phonetic: "/ˈeskəleɪt/", meaning: "v. 逐步升级，加剧", cat: "状态/趋势" },
    { word: "evolve", phonetic: "/ɪˈvɒlv/", meaning: "v. 进化，演变；发展", cat: "状态/趋势" },
    { word: "fluctuate", phonetic: "/ˈflʌktʃueɪt/", meaning: "v. 波动，起伏", cat: "状态/趋势" },
    { word: "foresee", phonetic: "/fɔːˈsiː/", meaning: "v. 预见，预知", cat: "状态/趋势" },
    { word: "halt", phonetic: "/hɔːlt/", meaning: "v./n. 停止，暂停", cat: "状态/趋势" },
    { word: "hover", phonetic: "/ˈhɒvə(r)/", meaning: "v. 盘旋；徘徊", cat: "状态/趋势" },
    { word: "improvise", phonetic: "/ˈɪmprəvaɪz/", meaning: "v. 即兴创作；临时凑合", cat: "状态/趋势" },
    { word: "linger", phonetic: "/ˈlɪŋɡə(r)/", meaning: "v. 徘徊，逗留；拖延", cat: "状态/趋势" },
    { word: "loom", phonetic: "/luːm/", meaning: "v. 隐约出现；逼近", cat: "状态/趋势" },
    { word: "plummet", phonetic: "/ˈplʌmɪt/", meaning: "v. 暴跌，骤降", cat: "状态/趋势" },
    { word: "prevail", phonetic: "/prɪˈveɪl/", meaning: "v. 盛行，流行；获胜", cat: "状态/趋势" },
    { word: "proliferate", phonetic: "/prəˈlɪfəreɪt/", meaning: "v.激增，迅速繁殖", cat: "状态/趋势" },
    { word: "recede", phonetic: "/rɪˈsiːd/", meaning: "v. 后退，退去；逐渐消失", cat: "状态/趋势" },
    { word: "regress", phonetic: "/rɪˈɡres/", meaning: "v. 倒退，退化；回归", cat: "状态/趋势" },
    { word: "resurge", phonetic: "/rɪˈsɜːdʒ/", meaning: "v. 复苏，再起", cat: "状态/趋势" },
    { word: "stagnate", phonetic: "/stæɡˈneɪt/", meaning: "v. 停滞，不发展", cat: "状态/趋势" },
    { word: "surge", phonetic: "/sɜːdʒ/", meaning: "v./n. 激增，猛涨", cat: "状态/趋势" },
    { word: "sustain", phonetic: "/səˈsteɪn/", meaning: "v. 维持，支撑", cat: "状态/趋势" },
    { word: "wane", phonetic: "/weɪn/", meaning: "v./n. 衰落，衰退", cat: "状态/趋势" },
    { word: "wither", phonetic: "/ˈwɪðə(r)/", meaning: "v. 枯萎，干枯；消亡", cat: "状态/趋势" },

    // 学术 / 专业类
    { word: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", meaning: "n. 假设", cat: "学术/专业" },
    { word: "assumption", phonetic: "/əˈsʌmpʃn/", meaning: "n. 假设，假定；设想", cat: "学术/专业" },
    { word: "premise", phonetic: "/ˈpremɪs/", meaning: "n. 前提；假设", cat: "学术/专业" },
    { word: "thesis", phonetic: "/ˈθiːsɪs/", meaning: "n. 论点，论文；论题", cat: "学术/专业" },
    { word: "antithesis", phonetic: "/ænˈtɪθəsɪs/", meaning: "n. 对立面，反论；对比", cat: "学术/专业" },
    { word: "conclusion", phonetic: "/kənˈkluːʒn/", meaning: "n. 结论，推论；结束", cat: "学术/专业" },
    { word: "demonstration", phonetic: "/ˌdemənˈstreɪʃn/", meaning: "n. 论证，证明；展示", cat: "学术/专业" },
    { word: "argument", phonetic: "/ˈɑːɡjumənt/", meaning: "n. 论据，论点；争论", cat: "学术/专业" },
    { word: "analyze", phonetic: "/ˈænəlaɪz/", meaning: "v. 分析，解析；分解（美）", cat: "学术/专业" },
    { word: "analyse", phonetic: "/ˈænəlaɪz/", meaning: "v. 分析（英）", cat: "学术/专业" },
    { word: "research", phonetic: "/rɪˈsɜːtʃ/", meaning: "v./n. 研究，调查", cat: "学术/专业" },
    { word: "investigate", phonetic: "/ɪnˈvestɪɡeɪt/", meaning: "v. 调查，研究；侦查", cat: "学术/专业" },
    { word: "synthesis", phonetic: "/ˈsɪnθəsɪs/", meaning: "n. 综合，合成；整合", cat: "学术/专业" },
    { word: "integrate", phonetic: "/ɪntrɪɡreɪt/", meaning: "v. 整合，融入；使完整", cat: "学术/专业" },
    { word: "combine", phonetic: "/kəmˈbaɪn/", meaning: "v./n. 结合，联合；组合", cat: "学术/专业" },
    { word: "algorithm", phonetic: "/ˈælɡərɪðəm/", meaning: "n. 算法，计算程序", cat: "学术/专业" },
    { word: "data", phonetic: "/ˈdeɪtə/", meaning: "n. 数据，资料", cat: "学术/专业" },
    { word: "statistic", phonetic: "/stəˈtɪstɪk/", meaning: "n. 统计数据 adj. 统计的", cat: "学术/专业" },
    { word: "model", phonetic: "/ˈmɒdl/", meaning: "n. 模型，模式；模范", cat: "学术/专业" },
    { word: "methodology", phonetic: "/ˌmeθəˈdɒlədʒi/", meaning: "n. 方法论，方法学", cat: "学术/专业" },
    { word: "approach", phonetic: "/əˈprəʊtʃ/", meaning: "n. 方法，方式；途径", cat: "学术/专业" },
    { word: "method", phonetic: "/ˈmeθəd/", meaning: "n. 方法，办法", cat: "学术/专业" },
    { word: "abstract", phonetic: "/ˈæbstrækt/", meaning: "adj. 抽象的 n. 摘要", cat: "学术/专业" },
    { word: "annotate", phonetic: "/ˈænəteɪt/", meaning: "v. 注释，注解", cat: "学术/专业" },
    { word: "approximate", phonetic: "/əˈpɒksɪmət/", meaning: "adj. 近似的 v. 近似", cat: "学术/专业" },
    { word: "articulate", phonetic: "/ɑːˈtɪkjuleɪt/", meaning: "v. 清晰表达，阐明", cat: "学术/专业" },
    { word: "ascertain", phonetic: "/ˌæsəˈteɪn/", meaning: "v. 查明，确定", cat: "学术/专业" },
    { word: "assess", phonetic: "/əˈses/", meaning: "v. 评估，评价", cat: "学术/专业" },
    { word: "assume", phonetic: "/əˈsjuːm/", meaning: "v. 假定，假设", cat: "学术/专业" },
    { word: "attribute", phonetic: "/əˈtrɪbjuːt/", meaning: "v. 把…归因于 n. 属性", cat: "学术/专业" },
    { word: "calculate", phonetic: "/ˈkælkjuleɪt/", meaning: "v. 计算；预测", cat: "学术/专业" },
    { word: "categorize", phonetic: "/ˈkætəɡəraɪz/", meaning: "v. 分类，归类", cat: "学术/专业" },
    { word: "clarify", phonetic: "/ˈklærəfaɪ/", meaning: "v. 澄清，阐明", cat: "学术/专业" },
    { word: "collaborate", phonetic: "/kəˈlæbəreɪt/", meaning: "v. 合作，协作", cat: "学术/专业" },
    { word: "commute", phonetic: "/kəˈmjuːt/", meaning: "v. 通勤；交换", cat: "学术/专业" },
    { word: "compile", phonetic: "/kəmˈpaɪl/", meaning: "v. 编译；编辑", cat: "学术/专业" },
    { word: "conceive", phonetic: "/kənˈsiːv/", meaning: "v. 构想，设想", cat: "学术/专业" },
    { word: "confirm", phonetic: "/kənˈfɜːm/", meaning: "v. 确认，证实", cat: "学术/专业" },
    { word: "construe", phonetic: "/kənˈstruː/", meaning: "v. 解释，阐释", cat: "学术/专业" },
    { word: "contend", phonetic: "/kənˈtend/", meaning: "v. 主张，认为；竞争", cat: "学术/专业" },
    { word: "correlate", phonetic: "/ˈkɒrəleɪt/", meaning: "v. 相互关联 n. 相关物", cat: "学术/专业" },
    { word: "deduce", phonetic: "/dɪˈdjuːs/", meaning: "v. 推论，推断", cat: "学术/专业" },
    { word: "define", phonetic: "/dɪˈfaɪn/", meaning: "v. 定义，解释；限定", cat: "学术/专业" },
    { word: "derive", phonetic: "/dɪˈraɪv/", meaning: "v. 源自，派生", cat: "学术/专业" },
    { word: "deviate", phonetic: "/ˈdiːvieɪt/", meaning: "v. 偏离，背离", cat: "学术/专业" },
    { word: "differentiate", phonetic: "/ˌdɪfəˈrenʃieɪt/", meaning: "v. 区分，辨别", cat: "学术/专业" },
    { word: "discriminate", phonetic: "/dɪˈskrɪmɪneɪt/", meaning: "v. 区分，辨别；歧视", cat: "学术/专业" },
    {
        word: "document", phonetic: "/ˈdɒkjumənt/", n.文件 v.记录", cat: "学术 / 专业" },
    { word: "therapeutic", phonetic: "/ˌθerəˈpjuːtɪk/", meaning: "adj. 治疗的，理疗的；有益的", cat: "学术/专业" },
    { word: "treatment", phonetic: "/ˈtriːtmənt/", meaning: "n. 治疗，疗法；处理", cat: "学术/专业" },
    { word: "cure", phonetic: "/kjʊə(r)/", meaning: "v./n. 治愈，治疗；疗法", cat: "学术/专业" },
    { word: "diagnose", phonetic: "/ˈdaɪəɡnəʊz/", meaning: "v. 诊断，判断", cat: "学术/专业" },
    { word: "detect", phonetic: "/dɪˈtekt/", meaning: "v. 检测，发现；探测", cat: "学术/专业" },
    { word: "test", phonetic: "/test/", meaning: "v./n. 检测，测试；试验", cat: "学术/专业" },

    // 短语 / 习语类
    { word: "in retrospect", phonetic: "/ɪn ˈretrəspekt/", meaning: "回顾，回想起来", cat: "短语/习语" },
    { word: "in vain", phonetic: "/ɪn veɪn/", meaning: "徒劳，白费", cat: "短语/习语" },
    { word: "in essence", phonetic: "/ɪn ˈesns/", meaning: "本质上，根本上", cat: "短语/习语" },
    { word: "at the mercy of", phonetic: "/æt ðə ˈmɜːsi ɒv/", meaning: "任由… 摆布，受… 支配", cat: "短语/习语" },
    { word: "count on", phonetic: "/kaʊnt ɒn/", meaning: "依靠，指望，依赖", cat: "短语/习语" },
    { word: "resort to", phonetic: "/rɪˈzɔːt tuː/", meaning: "诉诸，采取（某种手段）", cat: "短语/习语" },
    { word: "get even with", phonetic: "/ɡet ˈiːvn wɪð/", meaning: "报复，和… 算账", cat: "短语/习语" },
    { word: "lose one's head", phonetic: "/luːz wʌnz hed/", meaning: "惊慌失措，失去理智", cat: "短语/习语" },
    { word: "contend with", phonetic: "/kənˈtend wɪð/", meaning: "应对，处理；与… 竞争", cat: "短语/习语" },
    { word: "mess up", phonetic: "/mes ʌp/", meaning: "搞砸，弄乱；犯错", cat: "短语/习语" },
    { word: "fall short", phonetic: "/fɔːl ʃɔːt/", meaning: "未达到，不足；失败", cat: "短语/习语" },
    { word: "strings attached", phonetic: "/strɪŋz əˈtætʃt/", meaning: "附带条件，有前提", cat: "短语/习语" },
    { word: "on the lookout for", phonetic: "/ɒn ðə ˈlʊktaʊt fɔː(r)/", meaning: "寻找，留意，警惕", cat: "短语/习语" },
    { word: "get one's hands on", phonetic: "/ɡet wʌnz hændz ɒn/", meaning: "得到，获得，弄到手", cat: "短语/习语" },
    { word: "hook up to", phonetic: "/hʊk ʌp tuː/", meaning: "连接到，与… 相连", cat: "短语/习语" },
    { word: "a case in point", phonetic: "/ə keɪs ɪn pɔɪnt/", meaning: "恰当的例子，佐证", cat: "短语/习语" },
    { word: "a far cry from", phonetic: "/ə fɑː kraɪ frəm/", meaning: "与… 大相径庭", cat: "短语/习语" },
    { word: "account for", phonetic: "/əˈkaʊnt fɔː(r)/", meaning: "解释；占（比例）", cat: "短语/习语" },
    { word: "adapt to", phonetic: "/əˈdæpt tuː/", meaning: "适应", cat: "短语/习语" },
    { word: "all in all", phonetic: "/ɔːl ɪn ɔːl/", meaning: "总而言之，总的来说", cat: "短语/习语" },
    { word: "apart from", phonetic: "/əˈpɑːt frəm/", meaning: "除了… 之外；远离", cat: "短语/习语" },
    { word: "as a matter of fact", phonetic: "/æz ə ˈmætə(r) ɒv fækt/", meaning: "事实上，其实", cat: "短语/习语" },
    { word: "as a result", phonetic: "/æz ə rɪˈzʌlt/", meaning: "因此，结果", cat: "短语/习语" },
    { word: "as far as I'm concerned", phonetic: "/æz fɑː(r) æz aɪm kənˈsɜːnd/", meaning: "在我看来，就我而言", cat: "短语/习语" },
    { word: "as if", phonetic: "/æz ɪf/", meaning: "好像，仿佛", cat: "短语/习语" },
    { word: "as long as", phonetic: "/æz lɒŋ æz/", meaning: "只要", cat: "短语/习语" },
    { word: "as soon as", phonetic: "/æz suːn æz/", meaning: "一… 就…", cat: "短语/习语" },
    { word: "as though", phonetic: "/æz ðəʊ/", meaning: "好像，仿佛", cat: "短语/习语" },
    { word: "as well as", phonetic: "/æz wel æz/", meaning: "和，以及", cat: "短语/习语" },
    { word: "at all costs", phonetic: "/æt ɔːl kɒsts/", meaning: "不惜一切代价", cat: "短语/习语" },
    { word: "at any rate", phonetic: "/æt ˈeni reɪt/", meaning: "无论如何，至少", cat: "短语/习语" },
    { word: "at ease", phonetic: "/æt iːz/", meaning: "安逸，舒适；放松", cat: "短语/习语" },
    { word: "at first sight", phonetic: "/æt fɜːst saɪt/", meaning: "乍一看，第一眼", cat: "短语/习语" },
    { word: "at hand", phonetic: "/æt hænd/", meaning: "在手边；即将到来", cat: "短语/习语" },
    { word: "at intervals", phonetic: "/æt ˈɪntəvlz/", meaning: "不时，每隔一段时间", cat: "短语/习语" },
    { word: "at large", phonetic: "/æt lɑːdʒ/", meaning: "逍遥法外；总体上", cat: "短语/习语" },
    { word: "at last", phonetic: "/æt lɑːst/", meaning: "最后，终于", cat: "短语/习语" },
    { word: "at least", phonetic: "/æt liːst/", meaning: "至少，起码", cat: "短语/习语" },
    { word: "at length", phonetic: "/æt leŋθ/", meaning: "详细地；最终", cat: "短语/习语" },
    { word: "at most", phonetic: "/æt məʊst/", meaning: "至多，不超过", cat: "短语/习语" },
    { word: "at odds", phonetic: "/æt ɒdz/", meaning: "意见不合，有分歧", cat: "短语/习语" },
    { word: "at random", phonetic: "/æt ˈrændəm/", meaning: "随机地，随意地", cat: "短语/习语" },
    { word: "at stake", phonetic: "/æt steɪk/", meaning: "处于危险中，岌岌可危", cat: "短语/习语" },
    { word: "at the expense of", phonetic: "/æt ði ɪkˈspens ɒv/", meaning: "以… 为代价", cat: "短语/习语" },

    // 派生 / 变形词
    { word: "contribution", phonetic: "/ˌkɒntrɪˈbjuːʃn/", meaning: "n. 贡献；缴费", cat: "派生/变形" },
    { word: "implementation", phonetic: "/ˌɪmplɪmenˈteɪʃn/", meaning: "n. 实施，执行", cat: "派生/变形" },
    { word: "revelation", phonetic: "/ˌrevəˈleɪʃn/", meaning: "n. 揭示，透露；新发现", cat: "派生/变形" },
    { word: "confrontation", phonetic: "/ˌk0nfrʌnˈteɪʃn/", meaning: "n. 对抗，冲突", cat: "派生/变形" },
    { word: "eligible", phonetic: "/ˈelɪdʒəbl/", meaning: "adj. 有资格的，合格的", cat: "派生/变形" },
    { word: "negligible", phonetic: "/ˈneɡlɪdʒəbl/", meaning: "adj. 微不足道的", cat: "派生/变形" },
    { word: "feasible", phonetic: "/ˈfiːzəbl/", meaning: "adj. 可行的", cat: "派生/变形" },
    { word: "accessible", phonetic: "/əkˈsesəbl/", meaning: "adj. 可获得的；易接近的", cat: "派生/变形" },
    { word: "impulsive", phonetic: "/ɪmˈpʌlsɪv/", meaning: "adj. 冲动的", cat: "派生/变形" },
    { word: "inoperable", phonetic: "/ɪnˈɒpərəbl/", meaning: "adj. 无法使用的", cat: "派生/变形" },
    { word: "unfiltered", phonetic: "/ʌnˈfɪltəd/", meaning: "adj. 未经过丽的", cat: "派生/变形" },
    { word: "unpredictable", phonetic: "/ˌʌnprɪˈdɪktəbl/", meaning: "adj. 不可预测的", cat: "派生/变形" },
    { word: "enlist", phonetic: "/ɪnˈlɪst/", meaning: "v. 招募，参与；入伍", cat: "派生/变形" },
    { word: "embrace", phonetic: "/ɪmˈbreɪs/", meaning: "v. 拥抱，接纳；包含", cat: "派生/变形" },
    { word: "empower", phonetic: "/ɪmˈpaʊə(r)/", meaning: "v. 授权，使能够", cat: "派生/变形" },
    { word: "enrich", phonetic: "/ɪnˈrɪtʃ/", meaning: "v. 丰富，使充实", cat: "派生/变形" },
    { word: "accessibility", phonetic: "/əkˌsesəˈbɪləti/", meaning: "n. 可获得性；无障碍", cat: "派生/变形" },
    { word: "accomplishment", phonetic: "/əˈkʌmplɪʃmənt/", meaning: "n. 成就，完成；才艺", cat: "派生/变形" },
    { word: "adaptation", phonetic: "/ˌædæpˈteɪʃn/", meaning: "n. 适应；改编", cat: "派生/变形" },
    { word: "adjustment", phonetic: "/əˈdʒʌstmənt/", meaning: "n. 调整，调节；适应", cat: "派生/变形" },
    { word: "administration", phonetic: "/ədˌmɪnɪˈstreɪʃn/", meaning: "n. 管理，行政；部门", cat: "派生/变形" },
    { word: "advancement", phonetic: "/ədˈvɑːnsmənt/", meaning: "n. 推进，促进；晋升", cat: "派生/变形" },
    { word: "aggravation", phonetic: "/ˌæɡrəˈveɪʃn/", meaning: "n. 加重，加剧；恼怒", cat: "派生/变形" },
    { word: "alteration", phonetic: "/ˌɔːltəˈreɪʃn/", meaning: "n. 改变，更改", cat: "派生/变形" },
    { word: "ambiguity", phonetic: "/ˌæmbɪˈɡjuːəti/", meaning: "n. 模棱两可，含糊", cat: "派生/变形" },
    { word: "amplification", phonetic: "/ˌæmplɪfɪˈkeɪʃn/", meaning: "n. 放大，增强；阐述", cat: "派生/变形" },
    { word: "analysis", phonetic: "/əˈnæləsɪs/", meaning: "n. 分析，解析；分解", cat: "派生/变形" },
    { word: "anticipation", phonetic: "/ænˌtɪsɪˈpeɪʃn/", meaning: "n. 预期，期待；预感", cat: "派生/变形" },
    { word: "appreciation", phonetic: "/əˌpriːʃiˈeɪʃn/", meaning: "n. 欣赏；感激；增值", cat: "派生/变形" },
    { word: "approximation", phonetic: "/əˌprɒksɪˈmeɪʃn/", meaning: "n. 近似，接近；近似值", cat: "派生/变形" },
    { word: "argumentation", phonetic: "/ˌɑːɡjumənˈteɪʃn/", meaning: "n. 论证，辩论；推论", cat: "派生/变形" },
    { word: "attainment", phonetic: "/əˈteɪnmənt/", meaning: "n. 达到，实现；成就", cat: "派生/变形" },
    { word: "autonomy", phonetic: "/ɔːˈtɒnəmi/", meaning: "n. 自治，自主权；自由", cat: "派生/变形" },
    { word: "availability", phonetic: "/əˌveɪləˈbɪləti/", meaning: "n. 可获得性，可用性", cat: "派生/变形" },
    { word: "calculation", phonetic: "/ˌkælkjuˈleɪʃn/", meaning: "n. 计算；预测", cat: "派生/变形" },
    { word: "categorization", phonetic: "/ˌkætəɡəraɪˈzeɪʃn/", meaning: "n. 分类，归类", cat: "派生/变形" },
    { word: "clarification", phonetic: "/ˌklærɪfɪˈkeɪʃn/", meaning: "n. 澄清，阐明；说明", cat: "派生/变形" },
    { word: "collaboration", phonetic: "/kəˌlæbəˈreɪʃn/", meaning: "n. 合作，协作；勾结", cat: "派生/变形" },
    { word: "commemoration", phonetic: "/kəˌmeməˈreɪʃn/", meaning: "n. 纪念，纪念活动", cat: "派生/变形" },
    { word: "communication", phonetic: "/kəˌmjuːnɪˈkeɪʃn/", meaning: "n. 交流，沟通；信息", cat: "派生/变形" },
    { word: "comparison", phonetic: "/kəmˈpærɪsn/", meaning: "n. 比较，对照；相似性", cat: "派生/变形" },
    { word: "compensation", phonetic: "/ˌkɒmpenˈseɪʃn/", meaning: "n. 补偿，赔偿；报酬", cat: "派生/变形" },
    { word: "complication", phonetic: "/ˌkɒmplɪˈkeɪʃn/", meaning: "n. 并发症；复杂情况", cat: "派生/变形" },
    { word: "comprehension", phonetic: "/ˌkɒmprɪˈhenʃn/", meaning: "n. 理解，领悟；理解力", cat: "派生/变形" },
    { word: "concentration", phonetic: "/ˌkɒnsnˈtreɪʃn/", meaning: "n. 专注，专心；浓度", cat: "派生/变形" },
]

let progress = JSON.parse(localStorage.getItem("progress") || "{}")
let fav = JSON.parse(localStorage.getItem("fav") || "[]")

let flipped = false

// DOM Elements
const card = document.getElementById("card")
const rate = document.getElementById("rate")
const tapHint = document.getElementById("tapHint")
const wordInfo = document.getElementById("wordInfo")
const speakBtn = document.getElementById("speakBtn")
const favBtn = document.getElementById("favBtn")
const category = document.getElementById("category")
const today = document.getElementById("today")
const q = document.getElementById("q")
const result = document.getElementById("result")
const chart = document.getElementById("chart")
const statText = document.getElementById("statText")
const importText = document.getElementById("importText")


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
    tapHint.classList.remove("hidden")

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
    tapHint.classList.add("hidden")

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