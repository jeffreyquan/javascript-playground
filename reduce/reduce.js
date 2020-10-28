const movies = {
  "Angels & Demons": "Drama",
  "Lord of the Rings": "Fantasy",
  "Forrest Gump": "Drama",
  "Happy Gilmore": "Comedy",
  "X-Men": "Fantasy",
  "Iron man": "Fantasy",
  "21 Jump Street": "Comedy",
  "22 Jump Street": "Comedy",
  "Ace Ventura": "Comedy",
  "Scream": "Horror",
  "Terminator": "Action",
  "Mission Impossible": "Action",
  "Freddy vs Jason": "Horror"
};

const moviesByGenre = Object.keys(movies).reduce((map, movie) => {
  const genre = movies[movie];
  if (map[genre]) {
    map[genre].push(movie);
  } else {
    map[genre] = [movie];
  }
  return map;
}, {});

console.log(moviesByGenre);
// {
//   Drama: [ 'Angels & Demons', 'Forrest Gump' ],
//   Fantasy: [ 'Lord of the Rings', 'X-Men', 'Iron man' ],
//   Comedy: [
//     'Happy Gilmore',
//     '21 Jump Street',
//     '22 Jump Street',
//     'Ace Ventura'
//   ],
//   Horror: [ 'Scream', 'Freddy vs Jason' ],
//   Action: [ 'Terminator', 'Mission Impossible' ]
// }

const numbers = [1, 55, 2, 4, 23, 41, 33, -23, 14, 33]

const sum = numbers.reduce((total, number) => total + number, 0);

console.log(sum); // 183

const data = ['apple', 'apple', 'banana', 'banana', 'pear', 'strawberry', 'apple', 'blueberry', 'pear', 'strawberry', 'apple', 'blueberry', 'apple', 'banana' ];

const count = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(count); // { apple: 5, banana: 3, pear: 2, strawberry: 2, blueberry: 2 }