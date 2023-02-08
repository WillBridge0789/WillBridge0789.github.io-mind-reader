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