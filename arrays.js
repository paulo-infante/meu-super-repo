let taskList = ["Tomar café", "Reunião", "Brincar com o cachorro"];

console.log(taskList.length);

let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);

let searchForLastTask = taskList[taskList.length -1];
console.log(searchForLastTask);

taskList.push("Fazer exercícios da Trybe.");
console.log(taskList);
taskList.unshift("Acordar!"); // add um novo arquivo no início da array 
console.log(taskList);
// taskList.pop(); // remove o última item da array
// console.log(taskList);
// taskList.shift(); // remove o primeiro item da array
// console.log(taskList);