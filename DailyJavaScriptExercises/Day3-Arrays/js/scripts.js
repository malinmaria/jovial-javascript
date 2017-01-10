const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    //filter loops over every item in the array and keeps what you specify in your function
const fifteen = inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600)

console.table(fifteen);

// Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    //map modifies every item in array however specified, then returns them all
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

// Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
const birthOrder = inventors.sort((a,b) => a.year > b.year ? 1 : -1);

// Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    //reduce function takes a list of numbers and reduces it down to one numbers
    //simpler than using for loop
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
// subtract year and passed from each inventor and sort that number from highest to lowest
const oldest = inventors.sort(function(a,b){
  inventorOne = a.passed - a.year;
  inventorTwo = b.passed - b.year;
  return inventorOne > inventorTwo ? -1 : 1;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const blvds = Array.from(document.querySelectorAll('.mw-category a'));

//converting list of a links to list of text content inside each link
// const dem = blvds
//               .map(link => link.textContent);
//               .filter(blvdName => blvdName.includes('de'));

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item){
  //setting initial obj to 0, then if they exist, they will be incremented
  if(!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {})
