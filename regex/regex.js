const stringA = "Horror/Thriller/Action";
const stringB = "Comedy - Other";
const stringC = "Drama: Other";
const stringD = "Fantasy & Horror";

pattern = / - | & |\/|: /g;

const modStringA = stringA.replace(pattern, "_").toLowerCase();
console.log(modStringA); // horror_thriller_action

const modStringB = stringB.replace(pattern, "_").toLowerCase();
console.log(modStringB); // comedy_other

const modStringC = stringC.replace(pattern, "_").toLowerCase();
console.log(modStringC); // drama_other

const modStringD = stringD.replace(pattern, "_").toLowerCase();
console.log(modStringD); // fantasy_horror
