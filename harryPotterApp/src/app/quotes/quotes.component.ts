import { Component, OnInit } from '@angular/core';

// Generate random quote above footer
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

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.sass']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
