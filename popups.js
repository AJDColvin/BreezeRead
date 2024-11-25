let running = false;

//POPUP FUNCTIONS
// Function to open a popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

// Function to close a popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close the popup if the user clicks outside the popup content
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

//BREEZE READ FUNCTIONS
// Breeze Read text
function readText() {
    if (!running){
        running = true;
    }
    else {
        running = false;
    }
    
    let text = document.getElementById("textArea").value;
    let wpm = document.getElementById("wpm").value;

    if (!text) {
        return
    }

    document.getElementById("input").style.display = 'none';
    document.getElementById("text-to-read-area").style.display = 'flex';


    let words = text.split(/(\[.*?\]|\s+)/).filter(part => part.trim() !== '');
    console.log(words);

    
    printWords(words, wpm);
}

function printWords(words, wpm) {
    
    if (!running) {
        return
    }

    let interval = (60/wpm)*1000;

    varyWpm = document.getElementById("vary-wpm").checked
    puncDelay = document.getElementById("punc-delay").checked

    const shortPunc = /[,;-]/;
    const longPunc = /[.:!?]/;

    if (varyWpm) {
        interval = (words[0].length/4.7)*interval;
    }

    if (puncDelay) {
        if (shortPunc.test(words[0])) {
            interval = interval + (interval/3);
        }
        else if (longPunc.test(words[0])) {
            interval = interval + (interval);
        }
    }
    
    document.getElementById("the-text").innerHTML = `<span style="color: rgb(82, 82, 82);">${words[0]}</span>`;


    words.shift(); //deletes first element of words
    

    if (words.length) {
        setTimeout(() => { printWords(words, wpm) }, `${interval}`);
    }
}

function refreshPage() {
    running = false;
    document.getElementById("input").style.display = 'flex';
    document.getElementById("text-to-read-area").style.display = 'none';
}
