const btsQuote = document.querySelector(".quote"),
sourceName = document.querySelector(".source .name"),
newQuote = document.querySelector("button"),
copybutton = document.querySelector(".copy"),
twitter = document.querySelector(".twitter");

let quotesData;
let index;

fetch("/data/bts_quotes.json")
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        quotesData = data;
        //btsQuote.innerText = data[4].quotes;
        //sourceName.innerText = data[4].source;
    }).catch(error => console.log(error));

function randomBTSQuote(){
    if(quotesData){
        index = Math.floor(Math.random() * quotesData.length);
        const randomQuote = quotesData[index].Quotes;
        const rqSource = quotesData[index].Source;
        btsQuote.textContent = randomQuote;
        sourceName.textContent = rqSource;
    }
};

newQuote.addEventListener("click", randomBTSQuote);

twitter.addEventListener("click", () => {
    let tweetURL = `https://twitter.com/intent/tweet?url=${quotesData[index].Quotes}`;
    window.open(tweetURL, "_blank");
});

copybutton.addEventListener("click", () => {
    navigator.clipboard.writeText(quotesData[index].Quotes);
});