const myText=document.getElementById("myText");
const myadd=document.getElementById("myadd");
const myhide=document.getElementById("myhide");
const myshow=document.getElementById("myshow");
const tasklist=document.getElementById("tasklist");


class task{

constructor(name){
this.name=name;
this.complete=false;    
}

}

let tasks=[];

function addtask(){

    let name = myText.value;

if(name===""){
alert("Enter task");  
return;  
}


let newtask=new task(name);

tasks.push(newtask);

showtask();

}

myadd.addEventListener("click",function(){
addtask();
})

function showtask(){

tasklist.innerHTML="";    

tasks.forEach(function(task,i){
let hi=document.createElement("p");

tasklist.innerHTML=`
${task.name}
<button class="delete">delete</button>`

tasklist.appendChild(hi);
})


    let buttons = document.querySelectorAll(".delete");

  buttons.forEach(function(button,i){
    button.addEventListener("click",function(){
    tasks.splice(i, 1);
   showtask();
    })
  })
}

myhide.addEventListener("click", function() {
    tasklist.style.display = "none";
});


myshow.addEventListener("click", function() {
    tasklist.style.display = "block";
});