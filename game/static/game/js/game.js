const categoryLabels = {
    "burnable": "燃やすごみ",
    "non-burnable": "金属・陶器・ガラスごみ",
    "recyclable": "資源"
};


const questionData = [

    // ========================================
    // EASY：30問
    // ========================================

    // 燃やすごみ：10問
    ["えんぴつ", "✏️", "burnable", "easy"],
    ["落ち葉", "🍂", "burnable", "easy"],
    ["草花", "🌿", "burnable", "easy"],
    ["靴", "👟", "burnable", "easy"],
    ["小さいクッション", "🛋️", "burnable", "easy"],
    ["クレヨン", "🖍️", "burnable", "easy"],
    ["消しゴム", "⬜", "burnable", "easy"],
    ["財布", "👛", "burnable", "easy"],
    ["シーツ", "🛏️", "burnable", "easy"],
    [
        "汚物を取り除いたおむつ",
        "🧷",
        "burnable",
        "easy",
        "おむつは、汚物を取り除いてから「燃やすごみ」に出します。"
    ],

    // 金属・陶器・ガラス：10問
    [
        "30cm以下のアイロン",
        "♨️",
        "non-burnable",
        "easy",
        "30cm以下のアイロンは「金属・陶器・ガラスごみ」です。"
    ],
    ["圧力鍋", "🍲", "non-burnable", "easy"],
    ["安全ピン", "🧷", "non-burnable", "easy"],
    [
        "束ねた延長コード",
        "🔌",
        "non-burnable",
        "easy",
        "延長コードは、束ねて「金属・陶器・ガラスごみ」に出します。"
    ],
    [
        "30cm以下の鏡",
        "🪞",
        "non-burnable",
        "easy",
        "30cm以下の鏡は「金属・陶器・ガラスごみ」です。割れた場合は包んで危険表示をします。"
    ],
    ["傘", "☂️", "non-burnable", "easy"],
    [
        "カッター",
        "🔪",
        "non-burnable",
        "easy",
        "カッターは刃を安全に包み、危険表示をして出します。"
    ],
    ["カメラ", "📷", "non-burnable", "easy"],
    ["爪切り", "✂️", "non-burnable", "easy"],
    ["電気ケトル", "🫖", "non-burnable", "easy"],

    // 資源：10問
    [
        "汚れのない飲料用アルミ缶",
        "🥫",
        "recyclable",
        "easy",
        "汚れのない飲料用アルミ缶は「資源」です。"
    ],
    [
        "汚れのない飲料用ガラスびん",
        "🍾",
        "recyclable",
        "easy",
        "汚れのない飲料用ガラスびんは「資源」です。"
    ],
    [
        "汚れのない飲料用スチール缶",
        "🥫",
        "recyclable",
        "easy",
        "汚れのない飲料用スチール缶は「資源」です。"
    ],
    ["ビールびん", "🍺", "recyclable", "easy"],
    ["ペットボトル", "🧴", "recyclable", "easy"],
    ["ダンボール", "📦", "recyclable", "easy"],
    ["チラシ", "📄", "recyclable", "easy"],
    ["ノート", "📓", "recyclable", "easy"],
    ["紙袋", "🛍️", "recyclable", "easy"],
    ["コピー用紙", "📄", "recyclable", "easy"],


    // ========================================
    // NORMAL：40問
    // ========================================

    // 燃やすごみ：14問
    [
        "金属部分を外したアルバム",
        "📔",
        "burnable",
        "normal",
        "アルバムは金属部分を外して「燃やすごみ」に出します。"
    ],
    ["ウィンドブレーカー", "🧥", "burnable", "normal"],
    [
        "50cm以下の剪定枝",
        "🌿",
        "burnable",
        "normal",
        "50cm以下にした剪定枝は「燃やすごみ」です。"
    ],
    [
        "使い切ったプラスチック製の絵の具チューブ",
        "🎨",
        "burnable",
        "normal",
        "中身を使い切ったプラスチック製の絵の具チューブは「燃やすごみ」です。"
    ],
    ["携帯用えんぴつ削り", "✏️", "burnable", "normal"],
    ["使用済みのお手拭き", "🧻", "burnable", "normal"],
    ["カーテン", "🪟", "burnable", "normal"],
    ["カセットテープ", "📼", "burnable", "normal"],
    ["布製のかばん", "👜", "burnable", "normal"],
    ["紙コップ", "🥤", "burnable", "normal"],
    ["ガムテープ", "🟫", "burnable", "normal"],
    ["家庭用の薬", "💊", "burnable", "normal"],
    ["CD本体", "💿", "burnable", "normal"],
    ["DVD本体", "📀", "burnable", "normal"],

    // 金属・陶器・ガラス：13問
    [
        "アイスピック",
        "⛏️",
        "non-burnable",
        "normal",
        "アイスピックは厚紙などで包み、危険表示をして出します。"
    ],
    [
        "油の付着したびん",
        "🫙",
        "non-burnable",
        "normal",
        "油の付着したびんは、資源ではなく「金属・陶器・ガラスごみ」です。"
    ],
    ["一斗缶", "🪣", "non-burnable", "normal"],
    [
        "使い切った金属製の絵の具チューブ",
        "🎨",
        "non-burnable",
        "normal",
        "中身を使い切った金属製の絵の具チューブは「金属・陶器・ガラスごみ」です。"
    ],
    ["MDプレイヤー", "🎧", "non-burnable", "normal"],
    ["電動えんぴつ削り", "⚙️", "non-burnable", "normal"],
    [
        "30cm以下のオーブントースター",
        "🍞",
        "non-burnable",
        "normal",
        "30cm以下のオーブントースターは「金属・陶器・ガラスごみ」です。"
    ],
    ["温度計", "🌡️", "non-burnable", "normal"],
    ["電池を外した懐中電灯", "🔦", "non-burnable", "normal"],
    ["パソコン用キーボード", "⌨️", "non-burnable", "normal"],
    [
        "果物ナイフ",
        "🔪",
        "non-burnable",
        "normal",
        "果物ナイフは厚紙などで包み、危険表示をして出します。"
    ],
    ["携帯ゲーム機", "🎮", "non-burnable", "normal"],
    ["デジタルカメラ", "📸", "non-burnable", "normal"],

    // 資源：13問
    [
        "汚れのない一升瓶",
        "🍾",
        "recyclable",
        "normal",
        "汚れのない一升瓶は「資源」です。"
    ],
    ["飲み薬のびん", "🧪", "recyclable", "normal"],
    [
        "汚れのないプラスチック製お菓子袋",
        "🍬",
        "recyclable",
        "normal",
        "汚れが取れるプラスチック製のお菓子袋は「資源」です。"
    ],
    ["プラスチック製キャップ", "🔵", "recyclable", "normal"],
    [
        "汚れのないプラスチック製カップ麺容器",
        "🍜",
        "recyclable",
        "normal",
        "汚れが取れるプラスチック製カップ麺容器は「資源」です。"
    ],
    [
        "汚れのない歯磨き粉チューブ",
        "🪥",
        "recyclable",
        "normal",
        "汚れが取れる歯磨き粉のチューブは「資源」です。"
    ],
    ["白色トレイ", "⬜", "recyclable", "normal"],
    ["プラスチック製たまごパック", "🥚", "recyclable", "normal"],
    [
        "汚れのない発泡スチロール",
        "⬜",
        "recyclable",
        "normal",
        "汚れが取れる発泡スチロールは「資源」です。"
    ],
    ["ビニール袋", "🛍️", "recyclable", "normal"],
    [
        "ビニール部分を外したティッシュ箱",
        "🤧",
        "recyclable",
        "normal",
        "ビニール部分を外したティッシュ箱は古紙として回収されます。"
    ],
    [
        "紙だけの封筒",
        "✉️",
        "recyclable",
        "normal",
        "紙だけでできた封筒は古紙として回収されます。"
    ],
    ["包装紙", "🎁", "recyclable", "normal"],


    // ========================================
    // HARD：30問
    // ========================================

    // 燃やすごみ：10問
    [
        "凝固剤で固めた食用油",
        "🛢️",
        "burnable",
        "hard",
        "凝固剤で固めた食用油は「燃やすごみ」です。"
    ],
    ["MOディスク", "💾", "burnable", "hard"],
    ["MD本体", "💽", "burnable", "hard"],
    ["貝殻", "🐚", "burnable", "hard"],
    ["乾燥剤", "⬜", "burnable", "hard"],
    ["口紅", "💄", "burnable", "hard"],
    ["ゴーグル", "🥽", "burnable", "hard"],
    ["コルク", "🟤", "burnable", "hard"],
    ["ゴルフボール", "⚪", "burnable", "hard"],
    ["コンタクトレンズ", "👁️", "burnable", "hard"],

    // 金属・陶器・ガラス：10問
    ["アルミホイル", "🩶", "non-burnable", "hard"],
    [
        "一升瓶の金属付きふた",
        "🔘",
        "non-burnable",
        "hard",
        "一升瓶本体は資源ですが、金属付きのふたは「金属・陶器・ガラスごみ」です。"
    ],
    [
        "30cm以下のオーディオ機器",
        "📻",
        "non-burnable",
        "hard",
        "30cm以下のオーディオ機器は「金属・陶器・ガラスごみ」です。"
    ],
    ["使い捨てカイロ", "🔥", "non-burnable", "hard"],
    [
        "割れたガラスびん",
        "🍾",
        "non-burnable",
        "hard",
        "割れたガラスびんは資源ではありません。安全に包んで出します。"
    ],
    ["銀紙", "🩶", "non-burnable", "hard"],
    ["釘", "📌", "non-burnable", "hard"],
    [
        "蛍光灯",
        "💡",
        "non-burnable",
        "hard",
        "蛍光灯は紙ケースなどに入れて「金属・陶器・ガラスごみ」に出します。"
    ],
    ["毛抜き", "🤏", "non-burnable", "hard"],
    [
        "30cm以下の体重計",
        "⚖️",
        "non-burnable",
        "hard",
        "30cm以下の体重計は「金属・陶器・ガラスごみ」です。"
    ],

    // 資源：10問
    [
        "MDケース",
        "💿",
        "recyclable",
        "hard",
        "MD本体は燃やすごみですが、MDケースは「資源」です。"
    ],
    [
        "CDケース",
        "💿",
        "recyclable",
        "hard",
        "CD本体は燃やすごみですが、CDケースは「資源」です。"
    ],
    [
        "歯ブラシ",
        "🪥",
        "recyclable",
        "hard",
        "このゲームが参考にする新宿区のルールでは、歯ブラシは資源プラスチックです。"
    ],
    ["ペットボトルのふた", "🔵", "recyclable", "hard"],
    [
        "汚れのない紙製のお菓子箱",
        "🍪",
        "recyclable",
        "hard",
        "汚れのない紙製のお菓子箱は古紙として回収されます。"
    ],
    ["雑がみ", "📄", "recyclable", "hard"],
    ["電話帳", "📖", "recyclable", "hard"],
    [
        "アルミ加工のない紙パック",
        "🥛",
        "recyclable",
        "hard",
        "アルミ加工のない紙パックは「資源」です。"
    ],
    [
        "カセットボンベ",
        "🧯",
        "recyclable",
        "hard",
        "カセットボンベは専用区分で回収されます。このゲームでは「資源」にまとめています。"
    ],
    [
        "絶縁した乾電池",
        "🔋",
        "recyclable",
        "hard",
        "乾電池は専用区分で回収されます。このゲームでは「資源」にまとめています。"
    ]
];


const questions = questionData.map((item, index) => {

    const [
        name,
        icon,
        category,
        difficulty,
        customExplanation
    ] = item;

    return {
        id: index + 1,
        name: name,
        icon: icon,
        category: category,
        difficulty: difficulty,

        explanation:
            customExplanation ??
            `${name}は「${categoryLabels[category]}」です。`
    };
});


let currentQuestionIndex = 0;
let answered = false;

let score = 0;

let combo = 0;
let correctCount = 0;
let maxCombo = 0;
let gameQuestions = [];

const comboDisplay = document.getElementById("combo");


const scoreDisplay = document.getElementById("score");

const garbageIcon = document.getElementById("garbage-icon");
const garbageName = document.getElementById("garbage-name");

const choiceButtons = document.querySelectorAll(".choice-button");

const answerMessage = document.querySelector(".answer-message");
const answerExplanation = document.querySelector(".answer-explanation");

const nextButton = document.getElementById("next-button");
const questionNumber = document.getElementById("question-number");

const questionArea = document.getElementById("question-area");
const choices = document.getElementById("choices");

const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const startButton = document.getElementById("start-button");

const resultScreen = document.getElementById("result-screen");

const resultCorrect = document.getElementById("result-correct");
const resultScore = document.getElementById("result-score");
const resultMaxCombo = document.getElementById("result-max-combo");
const resultRank = document.getElementById("result-rank");
const resultMessage = document.getElementById("result-message");

const retryButton = document.getElementById("retry-button");
const backTitleButton = document.getElementById("back-title-button");

const bestScoreDisplay =
    document.getElementById("best-score");

const resultFinalScore =
    document.getElementById("result-final-score");

choiceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (answered) {
            return;
        }

        answered = true;

        const selectedCategory = button.dataset.category;
        const question =
            gameQuestions[currentQuestionIndex];

        if (selectedCategory === question.category) {

            score += 100;
            combo++;
            correctCount++;

            maxCombo = Math.max(maxCombo, combo);

            answerMessage.textContent = "✅ 正解！";

        } else {

            combo = 0;

            answerMessage.textContent = "❌ ざんねん！";

        }

        resultScore.textContent =
            score.toLocaleString("ja-JP");
        comboDisplay.textContent = combo;

        answerExplanation.textContent = question.explanation;

        nextButton.hidden = false;

    });

});


function showQuestion() {
    const question =
        gameQuestions[currentQuestionIndex];

    garbageIcon.textContent = question.icon;
    garbageName.textContent = question.name;

    questionNumber.textContent =
        `${currentQuestionIndex + 1} / ${gameQuestions.length}`;
}

choiceButtons.forEach((button) => {
    // 判定処理
});

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;
    answered = false;

    if (currentQuestionIndex < gameQuestions.length) {

        answerMessage.textContent = "3つから選んでください";

        answerExplanation.textContent =
            "正解すると、ここに分別の解説が表示されます。";

        nextButton.hidden = true;

        showQuestion();

    } else {

        const finalScore =
            score + (maxCombo * 20);

        saveBestScore(finalScore);

        const rankResult =
            calculateRank(finalScore);

        resultCorrect.textContent =
            `${correctCount} / ${gameQuestions.length}`;

        // 通常のSCORE
        resultScore.textContent =
            score;

        // SCOREとMAX COMBOから計算した最終スコア
        resultFinalScore.textContent =
            finalScore;

        resultMaxCombo.textContent =
            maxCombo;

        resultRank.textContent =
            rankResult.rank;

        resultMessage.textContent =
            rankResult.message;

        gameScreen.hidden = true;
        resultScreen.hidden = false;
    }

});

function startGame() {
    gameQuestions = createGameQuestions();

    // ゲーム状態を初期化
    currentQuestionIndex = 0;
    score = 0;
    combo = 0;
    correctCount = 0;
    maxCombo = 0;
    answered = false;

    // 表示を初期化
    scoreDisplay.textContent =
        score.toLocaleString("ja-JP");
    comboDisplay.textContent = combo;

    answerMessage.textContent = "3つから選んでください";
    answerExplanation.textContent =
        "正解すると、ここに分別の解説が表示されます。";

    nextButton.hidden = true;

    // 1問目を表示
    showQuestion();

    // タイトル → ゲーム
    titleScreen.hidden = true;
    gameScreen.hidden = false;
}


startButton.addEventListener("click", startGame);

retryButton.addEventListener("click", () => {

    resultScreen.hidden = true;

    startGame();

});

backTitleButton.addEventListener("click", () => {

    resultScreen.hidden = true;
    gameScreen.hidden = true;
    titleScreen.hidden = false;

});


function calculateRank(finalScore) {

    if (finalScore >= 1150) {
        return {
            rank: "S+",
            message: "分別マスター！完璧です！"
        };
    }

    if (finalScore >= 1050) {
        return {
            rank: "S",
            message: "すごい！かなりの分別上手！"
        };
    }

    if (finalScore >= 900) {
        return {
            rank: "A",
            message: "よく分別できています！"
        };
    }

    if (finalScore >= 700) {
        return {
            rank: "B",
            message: "いい感じ！あと少し！"
        };
    }

    if (finalScore >= 500) {
        return {
            rank: "C",
            message: "まだまだ伸びしろあり！"
        };
    }

    return {
        rank: "D",
        message: "もう一度、分別に挑戦してみよう！"
    };
}

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function createGameQuestions() {

    const easyQuestions = questions.filter(
        question => question.difficulty === "easy"
    );

    const normalQuestions = questions.filter(
        question => question.difficulty === "normal"
    );

    const hardQuestions = questions.filter(
        question => question.difficulty === "hard"
    );


    const selectedEasy =
        shuffleArray(easyQuestions).slice(0, 3);

    const selectedNormal =
        shuffleArray(normalQuestions).slice(0, 4);

    const selectedHard =
        shuffleArray(hardQuestions).slice(0, 3);


    return [
        ...selectedEasy,
        ...selectedNormal,
        ...selectedHard
    ];
}

// =========================
// BEST SCORE
// =========================

function getBestScore() {

    const savedScore =
        localStorage.getItem(
            "garbageSortBestScore"
        );

    if (savedScore === null) {
        return 0;
    }

    return Number(savedScore);
}


function updateBestScoreDisplay() {

    const bestScore =
        getBestScore();

    if (bestScore === 0) {

        bestScoreDisplay.textContent =
            "🏆 ---";

        return;
    }

    bestScoreDisplay.textContent =
        `🏆 ${bestScore.toLocaleString("ja-JP")}`;
}


function saveBestScore(finalScore) {

    const bestScore =
        getBestScore();

    if (finalScore > bestScore) {

        localStorage.setItem(
            "garbageSortBestScore",
            String(finalScore)
        );

        updateBestScoreDisplay();
    }
}

updateBestScoreDisplay();