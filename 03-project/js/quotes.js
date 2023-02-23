const quotes = [
    {
        quote: "お前が世界のどこにいても、必ず会いに行くって。",
        meaning: "너가 이 세상 어디에 있든, 만나러 갈거야",
    },
    {
        quote: "違った、そうじゃなかった。世界は最初から狂っていたわけじゃない。僕たちが変えたんだ。",
        meaning: "틀렸어, 그게 아니었어. 세계는 처음부터 미쳐 있었던 게 아니야. 우리가 바꾼거야."
    },
    {
        quote: "「ヴァイオレット。君は生きて……自由になりなさい。心から……愛してる」",
        meaning: "바이올렛, 너는 살아서...자유를 찾아. 진심으로...사람해",
    },
    {
        quote: "「知りたいのです！　『あいしてる』を……知りたいのです」",
        meaning: "알고싶어요! '사랑한다'를...알고 싶단 말이에요",
    },
    {
        quote: "「忘れる……は難しいです……」",
        meaning: "잊는다....는 건 어렵네요...",
    },
]

const quote = document.querySelector("#quote span:first-child");
const meaning = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
meaning.innerText = todaysQuote.meaning;
