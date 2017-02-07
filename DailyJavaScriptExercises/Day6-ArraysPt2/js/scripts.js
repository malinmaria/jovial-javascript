const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    //Some checks against all item in array to find at least one true item to return true
    const isAdult = people.some(person => {
      const currentYear = (new Date()).getFullYear();
      return currentYear - person.year >= 19;
    });
    console.log({isAdult});

    // Array.prototype.every() // is everyone 19 or older?
    //Every checks all items, they all must be true to return true
    const allAdults = people.every(person => {
      const currentYear = (new Date()).getFullYear();
      return currentYear - person.year >= 19;
    });
    console.log({allAdults});
