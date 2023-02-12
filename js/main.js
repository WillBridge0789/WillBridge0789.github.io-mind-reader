//Variables:
let headerText = document.getElementById('headerText');
let midButton = document.getElementById('midButton');
let paragraph1 = document.getElementById('paragraph1');
let paragraph2 = document.getElementById('paragraph2');
let bttmButton = document.getElementById('bttmButton');

//Functions:
/* the function "create99symbols()" is SUPPOSE to iterate through our key:value pair of "pages"
and give us a symbol with every multiple of 9 on page 6 */
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '('];
let arr = [];
function create99Symbols() {
    for (let i = 0; i < 100; i++) {
        arr.push(i + " - " + symbols[i % 9]);        
    }
    return arr;
}

let state = {
    currentPage: 0,
    pages:  [
        {
            headerText: "I can read your mind",
            midButton: "",
            paragraph1: "",
            paragraph2: "",
            bttmButton: "GO"
        },
        {
            headerText: "Pick a number between 01-99",
            midButton: "NEXT",
            paragraph1: "When you have your number, click next",
            paragraph2: "",
            bttmButton: "RESET"
        },
        {
            headerText: "Add both digits together to get a new number",
            midButton: "NEXT",
            paragraph1: "Ex: 14 is 1 + 4 = 5",
            paragraph2: "click next to proceed",
            bttmButton: "RESET"
        },
        {
            headerText: "Subtract your new number from your original number",
            midButton: "NEXT",
            paragraph1: "Ex: 14 - 5 = 9",
            parapragh2: " click next to proceed",
            bttmButton: "RESET"
        },
        {
            headerText: create99Symbols(),
            midButton: "REVEAL",
            paragraph1: "Find your new number.", 
            paragraph2: "Note the symbol thats by the number.",
            bttmButton: "RESET"
        },
        {
            headerText: "!",
            midButton: "",
            paragraph1: "",
            paragraph2: "",
            bttmButton: "RESET"
        },
    ]
}

function init() {
    let page = state.pages[state.currentPage];
    headerText.innerText = page.headerText;
    bttmButton.innerText = page.bttmButton;
    midButton.innerText = page.midButton;

    if (page.midButton) {
        midButton.style.display = "block";
    } else {
        midButton.style.display = "none";
    } 

    if (page.paragraph1) {
        paragraph1.style.display = "block";
   } else {
        paragraph1.style.display = "none";
   }

   if (page.paragraph2) {
        paragraph2.style.display = "block";
   } else {
        paragraph2.style.display = "none";
   }
   
   if (page.bttmButton) {
        bttmButton.style.display = "block";
   } else {
        bttmButton.style.display = "none";
   }
   
}
//A Function to help the user to go to the next state page
function next() {
    if (state.currentPage < 5) {
        state.currentPage++;
    } else {
        state.currentPage = 0;
    }
    init();
    console.log(state.pages);
}
//A Function for one of the buttons to bring to user back to the main state page
function reset() {
    if (state.currentPage > 0) {
        state.currentPage = 0;
    } else {
        state.currentPage++;
    }
    init();
}

document.getElementById('midButton').addEventListener('click', next);
document.getElementById('bttmButton').addEventListener('click', reset)
init();