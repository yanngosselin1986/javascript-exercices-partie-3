//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {

  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  
  let res = sentence.replace('e', ' ');

  return res;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  var str1 = firstSentence;
  var str2 = secondSentence;
  var res = str1.concat(str2);
  
  return res;

}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let res = sentence.charAt(4);
  return res;
}

//Exercice 5 : Afficher les 9 premiers caractère. 
let displayFirstNineCharacters = function (sentence) {
  let res = sentence.substring(0,9);
  return res;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let res = sentence.toUpperCase();
  return res;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let res = sentence.toLowerCase();
  return res;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let res = sentence.trim();
  return res;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  let res=(typeof sentence)=='string';
  return res;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
let res = fileName.split('.').pop();
  return res;
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  let res = sentence.split(' ').length -1;
  return res;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  let res = sentence.split('').reverse().join('');
  return res;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  let res = sentence.includes("La Manu") ;
  return res
}
//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
 return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  
  const res = [];

for (const element of numbersArray) {
 
   res.push(Math.abs(element)); 
} 
  return res;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.ceil(Math.PI*Math.pow(radius,2));
   }

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return  Math.floor(Math.hypot(a, b));
}
