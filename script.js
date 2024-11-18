const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//let apiQuotes = [];


//Show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Show new 
function newQuote() {
    loading();
    //Pick a random quote from API array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //Check if author is null 
    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else  {
        authorText.textContent = quote.author;
     }
     //Check the quote length to determine style
     if (quote.text.length > 50){
        quoteText.classList.add('long-quote')
     }else{
        quoteText.classList.remove('long-quote')
     }

    
     quoteText.textContent = quote.text;
     complete();
    }


// Quotes API

// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         //Handle Error
//         //alert(error)
//     }
// }


//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


//Event listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
//On Load
//getQuotes();

newQuote();
