var xhr=new XMLHttpRequest();
xhr.open("GET","http://tusharhero.github.io/tasks.txt");
xhr.onload=function(){
    console.log(xhr.responseText);
}
xhr.send();
const data = xhr.responseText
let header = document.querySelector("tasks");
header.innerText = data;
// or
header.innerHTML = data;