const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newBtn = document.getElementById('new-quote');
const fbBtn = document.getElementById('facebook');
const loader = document.getElementById('loader');

//Loader functions
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function completed() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

//New quote
function newQuote() {
    loading();
    const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];

    if(!quote.author){
        authorText.textContent = 'Undefined';
    } else{
        authorText.textContent = quote.author;
    }

    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
    completed();
}

//Facebook post

function postQuote() {
    const quote = encodeURIComponent(`${quoteText.textContent} - ${authorText.textContent}`);
    const pageUrl = encodeURIComponent(window.location.href);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${quote}`;
    window.open(facebookUrl, '_blank');
}

newBtn.addEventListener('click', newQuote);
fbBtn.addEventListener('click', postQuote);
newQuote();