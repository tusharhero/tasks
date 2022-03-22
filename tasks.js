let text = `
03/22/22 Tuesday
1) IT --> Complete syllabus
2) English 
--> Complete Determiners
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