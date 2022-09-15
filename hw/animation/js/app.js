// pull 'page-wrapper' from HTML using ClassName
let pageItems = document.getElementsByClassName("page-wrapper");

// begin for loop to loop through pageItems
for(let i =0; i < pageItems.length; i++) {
    // greensock animation that moves the elements onto the page
    TweenMax.from(pageItems[i], { duration: 2, opacity: 0, x: 50});

    // pull the id 'rectOne' from HTML under the variable 'rect'
    let rect = document.getElementById("rectOne");

    // rect loops through the array of pageItems 
    rect = pageItems[i];
    
    // when the mouse is over an element it will create a blue highlight
    rect.onmouseover = function() {
        TweenLite.to(event.target, { boxShadow: "0 0 5px 5px blue"});
    }

    // when the mouse is off the element, it returns to normal
    rect.onmouseout = function() {
        TweenLite.to(event.target, { boxShadow: "0 0 0px 0px"});
    }

    // when an element is clicked, the element goes away
    rect.onclick = function() {
        TweenLite.to(event.target, { duration: 1, x: -50, alpha: 0});
    }
}