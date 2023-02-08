# Mind-Reader
### Questions
 * Is page the same as state?
 * How do we transition pages with only Javascript? - we make a nextPage or setPage function to update our state object. 
 * Can I reuse the go button and change the 
   click event on it to serve both purposes?

### Objectives
* All multiples of 9 will get the same symbol to get the mind reader portion to work
* Only one single html element
* Manage the state with JS
* On a reload of the screen we should start at page 1

### Variables
* Reset Button (**resetButton**)
* Current View (**currentView**):  which page we’re on in the application
* **symbols**: Which could be an array
    * array [‘!’, ‘@’, ‘#’, ‘$’. ‘%’, ‘^’, ‘&’, ‘*’, ‘(‘] (length of 9)
    * we could write a **function()** that randomizes them (this is a little stretch goal)
    * expands to 99 total (**for loop**) pages
    * Array of objects
    * Use the **index** of the **array** to pick the object in the array to match the page we’re on
    * headerText - text content
    * nextButton - visibility / text
    * paragraphText - visibility / text

### Functions
* **setPage()**
    * Could be used on page 1 as GO Button
    * Then used on Pages 2-5 on the next/reveal button
    * When a button is clicked we update the currentPage in the state object to reflect the intended. 
        * Click on next button will increment the currentPage in state by 1
        * Click on the reset button will set the currentPage back to 1

* **reset()**
* **create99Symbols()**
    * let **symbols** = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
    * let **arr** = []
    * **for** (let **i** = 0; **i** < 100; **i**++) {<br>
    		--> **arr**.push(i + " " + **symbols**[i % 9]);<br>
}

### Procedures
1. On page 1: 
    * Have user click to get started
2. On page 2:
    * GET a user to THINK of a NUMBER between 01-99. Once they have a number though up, have the user **CLICK** *NEXT* button to move to next page.
3. On page 3:
    * Have the user **ADD** the 2 digits in their number together to get a new number.Once the user has the *SUM* of the digits, have them click *NEXT* to go to the next page.
4. On page 4:
    * Have the user **SUBTRACT** their new number from their original number. After getting the difference from those numbers, have the user click *NEXT* to go to the next page.
5. On page 5:
    * Have the user find their new number through the symbols corresponding with the number. (i.e. **0-!, 1-@, 2-#**, etc.). If the user has found their number corresponding to their symbol, have user click *REVEAL* to move to the next page to show the symbol that the user may have chosen.
6. On page 6:
    * Reveal symbol that corresponds to the number they have chosen. **IF** they want to play again, the user can then click the "circle arrow" button to *RESET* the game.
