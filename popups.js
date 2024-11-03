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

// Breeze Read text
function readText() {
    let text = document.getElementById("textArea").value;

    document.getElementById("input").style.display = 'none';
    document.getElementById("text-to-read-area").style.display = 'flex';


    let words = text.split(" ");

    printWords(words);
}

function printWords(words) {
    document.getElementById("the-text").innerHTML = `${words[0]}`;

    words.shift();

    if (words.length) {
        setTimeout(() => { printWords(words) }, 100);
    }
}
