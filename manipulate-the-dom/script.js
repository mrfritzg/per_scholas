let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitleID = document.querySelector('#main-title');
mainTitleID.textContent = "Hi! I'm DOM. Welcome to My Site";

  // Part 2
const bodyEl = document.querySelector('body');
this.body.style.backgroundColor = '#B8D667';
  // Part 3
const favoriteThingsID = document.getElementById('favorite-things');
favoriteThingsID.removeChild(favoriteThingsID.lastElementChild);

  // Part 4
const specialTitle = document.getElementsByClassName('special-title');

// for(let i = 0; i < specialTitle.length; i++){
//   specialTitle[i].style.fontSize = '2rem';
// }

for (let item of specialTitle) {
  item.style.fontSize = '2rem';
}
  // Part 5
const pastRacesList = document.getElementById('past-races').children;
// console.dir(pastRacesList);
for(let item of pastRacesList) {
 if (item.textContent === 'Chicago') {
  item.remove();
 }
}
  // Part 6
  const pastRaces = document.getElementById('past-races');
  newLi = document.createElement('li');
  newLi.textContent = 'UAE';
  console.log(newLi)
pastRaces.appendChild(newLi);

// Part 7
newDivEl = document.createElement('div');
newDivEl.classList.add('blog-post')
newDivEl.classList.add('purple')
newH1El = document.createElement('h1');
newH1El.textContent = 'UAE';
newPEl = document.createElement('p');
newPEl.textContent = 'lorem ipsum lorem ipsumlorem ipsumlorem ipsum';
const mainClass = document.querySelector('.main');
mainClass.appendChild(newDivEl);
newDivEl.appendChild(newH1El);
newDivEl.appendChild(newPEl);
  // Part 8
const quotetitleId = document.getElementById('quote-title');
quotetitleId.addEventListener('click',randomQuote);

  // Part 9
const blogPost = document.getElementsByClassName('blog-post');
console.log(blogPost)
for(let item of blogPost) {
item.addEventListener('mouseout', (event)=> {
  item.classList.toggle("purple");
});
item.addEventListener('mouseenter', (event)=> {
  item.classList.toggle("red");
});
}

});
