const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
  console.log('Hello');

// Interpolated
  console.log('I am a %s', 'string'); // Not common

  var string = 'string'
  console.log(`I am a ${string}`); // More common
 
// Styled
  console.log('%c I am a great red text', 'font-size: 40px; color: red');

// warning!
  console.warn('This is a warning');

// Error :|
  console.error('This is an ERROR');

// Info
  console.info('Put some info here');

// Testing
  console.assert(1 === 1, 'Wrong!'); //Correct. Message won't display
  console.assert(1 === 2, 'Wrong!'); //Incorrect. Message will display

// clearing
  console.info('Use console.clear() to clear the console');
  //console.clear();

// Viewing DOM Elements
  const p = document.querySelector('p');
  console.dir(p);

// Grouping together
  dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.groupEnd(`${dog.name}`);
  })

// counting
  console.count('Word');
  console.count('Word');
  console.count('Word');
  console.count('Word');
  console.count('Word');

// timing
  console.time('fetching data');
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    });

//showing array in a table
  console.table(dogs);
