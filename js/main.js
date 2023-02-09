//Variables:
//let resetButton = document.getElementById("resetButton");
//let nextButton = document.getElementById("nextButton");
let headerElement = document.getElementById('headerElement');
let headerElement2 = document.getElementById('headerElement2');
let headerElement3 = document.getElementById('headerElement3');
let headerElement4 = document.getElementById('headerElement4');
let headerElement5 = document.getElementById('headerElement5');
let headerElement6 = document.getElementById('headerElement6');
let paragraphTxt1 = document.getElementById('paragraphTxt1');
let paragraphTxt2 = document.getElementById('pargraphTxt2');
let paragraphTxt3 = document.getElementById('pargraphTxt2');
let paragraphTxt4 = document.getElementById('pargraphTxt2');
let paragraphTxt5 = document.getElementById('pargraphTxt2');
let paragraphTxt6 = document.getElementById('pargraphTxt2');
let paragraphTxt7 = document.getElementById('pargraphTxt2');
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '('];
//Objects:
let state = {
    currentPage: 0,
    pages:  [
        {
            headerElement: "I can read your mind",
            nextButton: "GO"
        },
        {
            headerElement2: "Pick a number between 01-99",
            paragraphTxt1: "When you have your number, click next",
            nextButtonText: "NEXT"
        },
        {
            headerElement3: "Add both digits together to get a new number",
            paragraphTxt2: "Ex: 14 is 1 + 4 = 5",
            paragraphTxt3: " click next to proceed",
            nextButtonText: "NEXT"
        },
        {
            headerElement4: "Subtract your new number from your original number",
            paragraphTxt4: "Ex: 14 - 5 = 9",
            parapraghTxt5: " click next to proceed",
            nextButtonText: "NEXT"
        },
        {
            headerElement5: "0-!, 1-@, 2-#, 3-$ ...",
            paragraphTxt6: "Find your new number.", 
            paragraphTxt7: "Note the symbol thats by the number.",
            nextButtonText: "REVEAL"
        },
        {
            headerElement6: create99Symbols(),
            paragraphText: "",
            nextButtonText: ""
        },
    ]
}


//Functions:

document.addEventListener("click", function reset() {
    return state.pages[0];
})

function create99Symbols() {
    let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '('];
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i + " " + symbols[i % 9]);        
    }
    return symbols;
}
