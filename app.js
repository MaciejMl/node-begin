const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = [
  'Maciej',
  'Wojtek',
  'Krzysiek',
  'Bartek',
  'Radek',
  'Piotrek',
  'Mateusz',
  'Andrzej',
  'Sebastian',
  'Łukasz',
];
const femaleNames = [
  'Emi',
  'Monika',
  'Ola',
  'Patrycja',
  'Matylda',
  'Maria',
  'Teresa',
  'Ewa',
  'Bianka',
  'Dagmara',
];
const lastNames = [
  'Nowak',
  'Bałdyga',
  'Korek',
  'Ogórek',
  'Żaba',
  'Bartkowiak',
  'Czerwik',
  'Baran',
  'Wilk',
  'Błotko',
];

randChoice = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  const chosen = arr[random];
  return chosen;
};

randNumber = () => Math.floor(Math.random() * 9);

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstChosenName =
    gender == 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  const surname = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * 91 + 10);
  const mail = `${firstChosenName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')}.${surname
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')}@gmail.com`;
  const tel = `+48 5${randNumber()}${randNumber()}-${randNumber()}${randNumber()}-${randNumber()}${randNumber()}`;

  person = {
    firstName: firstChosenName,
    lastName: surname,
    gender: gender,
    age: age,
    mail: mail,
    tel: tel,
  };

  people.push(person);
}

const data = JSON.stringify(people, null, 2);

fs.writeFile('people.json', data, (err) => {
  if (err) throw console.log('Something went wrong');
  console.log('The file has been successfully generated!');
});
