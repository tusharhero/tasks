let text = `
03/25/22 Friday
1) English 
--> Modals
2) Social --> 
Nationalism in India
3) Maths 
--> Circles
4) Hindi -->
सूचनाओ
`;
console.log(text);
let header = document.querySelector("tasks");
header.innerText = text;
// or
header.innerHTML = text;