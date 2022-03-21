let text = `
03/20/22 Sunday
1)Maths --> Circles
2)Science --> Biology
--> Heriditary and Evolution
+ Reproduction notes
3)Social --> Democratic Politics
--> Outcomes of Democracy
4)Hindi 
--> Advertisements
+ Spelling practice
`;
console.log(text);
let header = document.querySelector("tasks");
header.innerText = text;
// or
header.innerHTML = text;