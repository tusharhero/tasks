let text = `
03/23/22 Wednesday
1) IT --> RDMS
2) Social --> 
Outcomes Of Democracy
3) Science
--> Periodic
 Classification of elements
4) Maths 
--> Circles
5) Hindi -->
DO SOMETHING ATLEAST`;
console.log(text);
let header = document.querySelector("tasks");
header.innerText = text;
// or
header.innerHTML = text;