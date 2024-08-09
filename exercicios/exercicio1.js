//Task
//Create a method all which takes two params:

//a sequence
//a function (function pointer in C)
//and returns true if the function in the params returns true for every element in the sequence.
//Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

//Example
//all((1, 2, 3, 4, 5), greater_than_9) -> false
//all((1, 2, 3, 4, 5), less_than_9)    -> True

export function all( arr, fun ){
  return arr.length === 0 ? true : arr.every(fun);
}

//Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

//You need to consider the following ratings:

///Terrible: tip 0%
//Poor: tip 5%
///Good: tip 10%
///Great: tip 15%
///Excellent: tip 20%
///The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

///"Rating not recognised" in Javascript, Python and Ruby...
///...or null in Java
///...or -1 in C#
///Because you're a nice person, you always round up the tip, regardless of the service.
export function calculateTip(amount, rating) {
    let tip = {
    terrible : 0,
    poor     : .05,
    good     : .1,
    great    : .15,
    excellent: .2,
  }[rating.toLowerCase()];

  return typeof tip === 'undefined'
    ? 'Rating not recognised'
    : Math.ceil(amount * tip);
}
//An AI has infected a text with a character!!

//This text is now fully mutated to this character.

//If the text or the character are empty, return an empty string.
//There will never be a case when both are empty as nothing is going on!!

//Note: The character is a string of length 1 or an empty string.

//Example
//text before = "abc"
//character   = "z"
//text after  = "zzz"
export function contamination(text, char){
  // Repete o caractere 'char' pelo comprimento da string 'text'
  return text === '' || char === ''? '' : char.repeat(text.length);
}

//Fix the Bugs (Syntax) - My First Kata
//Overview
//Hello, this is my first Kata so forgive me if it is of poor quality.

//In this Kata you should fix/create a program that returns the following values:

//false/False if either a or b (or both) are not numbers
//a % b plus b % a if both arguments are numbers
//You may assume the following:

//If a and b are both numbers, neither of a or b will be 0.
export function myFirstKata(a, b) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number'){
    return false;
  } else {
    return (a % b) + (b % a);
  }
}



export function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!"? true : false
};

export function shortenToDate(longDate) {
 // Split the string at the comma
  const parts = longDate.split(',');

  // Return the first part (date) and trim any extra whitespace
  return parts[0].trim();
}
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

export function sayHello( name, city, state ) {
  const together = name.join(' ');

  return`Hello, ${together}! Welcome to ${city}, ${state}!`;
}

export function checkAlive (health) {
  return health > 0 ? true : false;

}
export function friend(friends){
  return friends.filter(a => a.length  ===  4);
}
export function orderFood(list) {
  // Inicializa o objeto que armazenará a contagem de opções de comida
  const foodCount = {};

  // Itera sobre cada objeto na lista
  list.forEach(item => {
    // Obtém o tipo de refeição
    const meal = item.meal;

    // Atualiza a contagem para o tipo de refeição
    foodCount[meal] = (foodCount[meal] || 0) + 1;
  });

  return foodCount;
}

export function getCount(str) {
   // Definimos uma função para verificar se um caractere é uma vogal
  const isVowel = char => 'aeiouAEIOU'.includes(char);

  // Usamos reduce para contar as vogais
  return str.split('').reduce((count, char) => isVowel(char) ? count + 1 : count, 0);
}
export function boredom(staff) {
  // Mapeamento dos departamentos para os escores de tédio
  const departmentScores = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25
  };

  // Calcula a soma dos escores dos departamentos
  const sum = Object.values(staff)
    .map(department => departmentScores[department] || 0)  // Converte o departamento para o escore
    .reduce((acc, score) => acc + score, 0);  // Soma os escores

  // Retorna a mensagem baseada no total dos escores
  return sum <= 80 ? 'kill me now' :
         sum < 100 ? 'i can handle this' :
         'party time!!';
}

   // 1. Obtém todos os valores dos departamentos a partir do objeto 'staff'
  // Object.values(staff) retorna um array com os valores dos departamentos dos funcionários
  // Exemplo: se staff = { Alice: 'canteen', Bob: 'finance' }
  // então Object.values(staff) retorna ['canteen', 'finance']
 // const departments = Object.values(staff);

  // 2. Converte cada departamento para seu escore usando o mapeamento 'departmentScores'
  // .map(department => departmentScores[department] || 0)
  // Para cada valor no array 'departments':
  // - departmentScores[department] acessa o escore associado ao departamento
  // - Se o departamento não estiver no mapeamento (retornando undefined), || 0 garante que 0 seja usado
  // Exemplo: para ['canteen', 'finance'] isso se tornará [10, 2]
 //.reduce((acc, score) => acc + score, 0);
export function conjugate(verb){
   const dic = { 'ar':['o','as','a','amos', 'áis','an'],
                'er':['o','es','e','emos', 'éis','en'],
                'ir':['o','es','e','imos', 'ís', 'en']};

  // Primeiro, vamos pegar os dois últimos caracteres do verbo para descobrir seu tipo
const suffix = verb.slice(-2); // Por exemplo, se o verbo for 'comer', suffix será 'er'

// Agora, removemos os dois últimos caracteres do verbo para obter a parte principal do verbo (radical)
const root = verb.slice(0, -2); // Se o verbo for 'comer', root será 'com'

// Usamos o sufixo que pegamos para encontrar a lista de sufixos pessoais corretos
const personalSuffixes = dic[suffix]; // Se suffix for 'er', personalSuffixes será ['o', 'es', 'e', 'emos', 'éis', 'en']

// Para cada sufixo pessoal na lista, juntamos o radical com o sufixo para criar a forma do verbo
const conjugatedForms = personalSuffixes.map(suffix => root + suffix);
// Se personalSuffixes for ['o', 'es', 'e', 'emos', 'éis', 'en'],
// conjugatedForms será ['como', 'comes', 'come', 'comemos', 'coméis', 'comen']

// Finalmente, criamos um objeto onde a chave é o verbo original e o valor é a lista das formas conjugadas
return {
  [verb]: conjugatedForms
};
}
