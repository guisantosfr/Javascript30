// start with strings, numbers and booleans
  let number1 = 10;
  let number2 = number1;
  console.log(number1, number2);
  number1 = 20;
  console.log(number1, number2);
//changing the first value will not update the second one

// Let's say we have an array
  const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
  const team = players;
  console.log(players, team);

// You might think we can just do something like this:
  team[3] = 'Lux';

// however what happens when we update that array?
  console.log(players, team);

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
  const team2 = players.slice();
  
// or create a new array and concat the old one in
  const team3 = [].concat(players);

// or use the new ES6 Spread
  const team4 = [...players];
  const team5 = Array.from(players);

// now when we update it, the original one isn't changed
  team2[3] = 'Player 4';
  team3[3] = 'Player 5';
  team4[3] = 'Player 6';
  team5[3] = 'Player 7';

  console.log(players, team2, team3, team4, team5);

// The same thing goes for objects, let's say we have a person object
// with Objects
  const person = {
    name: 'Wes Bos',
    age: 80
  };

// and think we make a copy:
  const captain = person;

  captain.name = 'Wesley';

  console.log(person, captain);

// how do we take a copy instead?
  const cap2 = Object.assign({}, person, {number: 99});
  console.log(person, cap2);

// We will hopefully soon see the object ...spread
  //const cap3 = [...person];
  //console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.