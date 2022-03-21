let text = `
03/21/22 Monday
1)Maths --> Circles
2)Science --> Biology
--> Heriditary and Evolution
+ Reproduction notes
+ Physics --> Electricity
3)Social --> Democratic Politics
--> Outcomes of Democracy
4)Hindi 
--> Advertisements
+ Spelling practice
5)English -->
Basically read every chapter :(
`;
console.log(text);
let header = document.querySelector("tasks");
header.innerText = text;
// or
header.innerHTML = text;