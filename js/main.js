//Variables:
let headerText = document.getElementById('headerText');
let midButton = document.getElementById('midButton');
let paragraph1 = document.getElementById('paragraph1');
let paragraph2 = document.getElementById('paragraph2');
let bttmButton = document.getElementById('bttmButton');
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '('];

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
            bttmButton: ""
        },
        {
            headerText: "Add both digits together to get a new number",
            midButton: "NEXT",
            paragraph1: "Ex: 14 is 1 + 4 = 5",
            paragraph2: "click next to proceed",
            bttmButton: ""
        },
        {
            headerText: "Subtract your new number from your original number",
            midButton: "NEXT",
            paragraph1: "Ex: 14 - 5 = 9",
            parapragh2: " click next to proceed",
            bttmButton: ""
        },
        {
            headerText: "0-!, 1-@, 2-#, 3-$ ...",
            midButton: "REVEAL",
            paragraph1: "Find your new number.", 
            paragraph2: "Note the symbol thats by the number.",
            bttmButton: ""
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


//Functions:
/* the function "create99symbols()" is SUPPOSE to iterate through our key:value pair of "pages"
and give us a symbol with every multiple of 9 on page 6 */
function create99Symbols() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i + " " + symbols[i % 9]);        
    }
}
create99Symbols();

function init() {
    currentPage = 0;
    let firstPage = state.pages[state.currentPage];
    headerText.innerText = firstPage.headerText;
    console.log(state);
    if (currentPage.midButton) {
        midButton.style.display = "block";
    } else {
        midButton.style.display = "none";
    }
   
    if (currentPage.paragraph1) {
        paragraph1.style.display = "block";
   } else {
        paragraph1.style.display = "none";
   }

   if (currentPage.paragraph2) {
        paragraph2.style.display = "block";
   } else {
        paragraph2.style.display = "none";
   }

   bttmButton.innerText = currentPage.bttmButton;
   midButton.innerText = currentPage.midButton;
}
init();

function next() {
    if (state.pages < 6) {
        state.pages++;
    } else {
        state.pages = 0;
    }
    init()
}

document.getElementById('midButton').addEventListener('click', next);