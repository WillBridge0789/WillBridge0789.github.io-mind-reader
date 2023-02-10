//Variables:
/* Due to me using a bootstrap "carousel", 
I had to make a variable for each <p> and <h1> element */
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
let currentPage = 0;
//Objects:
/* Starting with the "state" object which has the key: "currentPage" at value 0, 
and also the key: "pages" with an array value */
let state = {
    //
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
            headerElement6: "",
            paragraphText: "",
            nextButtonText: ""
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
create99Symbols(state.pages[headerElement6]);

function stateChange() {

}

function init() {
    currentPage = 0;
    let firstPage = state.pages[state.currentPage];
    headerElement.innerText = firstPage.headerElement;
    console.log(currentPage);
    //let secondPage = state.pages[currentPage];
    headerElement2.innerText = state.pages[currentPage].headerElement2;
}
carouselExample.addEventListener('slide.bs.carousel', event => {
    currentPage++;
})
//init();