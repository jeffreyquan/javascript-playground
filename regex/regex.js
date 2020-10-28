const stringA = "Horror/Thriller/Action";
const stringB = "Comedy - Other";
const stringC = "Drama: Other";
const stringD = "Fantasy & Horror";
const stringE = "Animated Series"

pattern = / - | & |\/|: | /g;

const modStringA = stringA.replace(pattern, "_").toLowerCase();
console.log(modStringA); // horror_thriller_action

const modStringB = stringB.replace(pattern, "_").toLowerCase();
console.log(modStringB); // comedy_other

const modStringC = stringC.replace(pattern, "_").toLowerCase();
console.log(modStringC); // drama_other

const modStringD = stringD.replace(pattern, "_").toLowerCase();
console.log(modStringD); // fantasy_horror

const modStringE = stringE.replace(pattern, "_").toLowerCase();
console.log(modStringE); // animated_series