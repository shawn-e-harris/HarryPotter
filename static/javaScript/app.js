// console.log("working");

// Nav Bar Onclick Display
// Nav Bar Onclick Display
// Nav Bar Onclick Display

// About
let showNavBarA = () => {
    // when clicking "About", grab the list element by id
    var x = document.getElementById("seeNavBarA");
    // first click will result in block displaying per JS 17 because display default is none (automically moves to else)
    // if the block is not displayed (it won't be because display is none JS line 83)
    if (x.style.display === "block") {
        x.style.display = "none";
        
        //   otherwise if the block is displayed, onclick of "About", display none
    } else {
        x.style.display = "block";
        
    }
}

// Entertainment
let showNavBarE = () => {
    // when clicking "Entertainment", grab the list element by id
    var x = document.getElementById("seeNavBarE");
    // first click will result in block displaying per JS 33 because display default is none (automically moves to else)
    // if the block is not displayed (it won't be because display is none JS line 89)
    if (x.style.display === "block") {
        // then diplay block
        x.style.display = "none";
        //   otherwise if the block is displayed, onclick of "Entertainment", display none
    } else {
        x.style.display = "block";
    }
}

// Plan Your Trip
let showNavBarP = () => {
    // first click will result in block displaying per JS 47 because display default is none (automically moves to else)
    var x = document.getElementById("seeNavBarP");
    // if the block is not displayed (it won't be because display is none JS line 94)
    if (x.style.display === "block") {
        // then diplay block
        x.style.display = "none";
        //   otherwise if the block is displayed, onclick of "Plan Your Trip", display none
    } else {
        x.style.display = "block";
    }
}


// Tabs for each Theme Park
// Tabs for each Theme Park
// Tabs for each Theme Park

let openRidesThemePark = (evt, themePark) => {
    // Declare all variables
    var i;
    var tabContent;
    var ridesTab;
    // Get all elements with class "tabContent" and display none
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // Get all elements with class "ridesTab" and remove the class "active" if not active
    ridesTab = document.getElementsByClassName("ridesTab");
    for (i = 0; i < ridesTab.length; i++) {
        ridesTab[i].className = ridesTab[i].className.replace(" active", "");
    }
    // display as grid instead of block
    document.getElementById(themePark).style.display = "grid";
    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " active";

    // open Diagon Alley Tab on page open as default
}



// Generate random quote in footer
// put quotes in array
let quotes = [
    "'I hope you're pleased with yourselves. We could all have been killed — or worse, expelled.'",
    "'Yer a wizard Harry.'",
    "'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.'",
    "'Dobby is free!'",
    "'I solemnly swear I am up to no good.'",
    "'We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.'",
    "'After all this time?' 'Always,' said Snape.",
];

let quoteGenerator = () => {
    // displays a random quote based on the length of the array
    let quoteArray = Math.floor((Math.random() * quotes.length));
    // get the string from array quotes and replace in div id "quote box"
    document.getElementById("quotesDiv").innerHTML = quotes[quoteArray];
}


//call so quote appears when JS loads on page
quoteGenerator();



document.getElementById("defaultOpen").click()