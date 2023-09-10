//catch the elements of input :
let task = document.querySelector("#task");
let priority = document.querySelector("#priority");

let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
// console.log(tbody,form)
form.addEventListener("submit",function displayTask(e){
    e.preventDefault();
    let allTask = [];
    let obj = {
        tasks : task.value,
        priority_ : priority.value
    };
    allTask.push(obj);
    
    //creat element 
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = obj.tasks;
    td2.innerText = obj.priority_;
    tr.append(td1,td2);
    tbody.append(tr); 

    if(obj.priority_ == "High" ){
        tr.style.backgroundColor = "red";
    }else{
        tr.style.backgroundColor = "green";
    }
})
//demo
//form.addEventListener("submit",displayTask(e));
//
//function displayTask(e){
//    e.preventDefault();
//    let allTask = [];
//    let obj = {
//        tasks : task.value,
//        priority_ : priority.value
//    };
//    allTask.push(obj);
//    
//    //creat element 
//    let tr = document.createElement("tr");
//    let td1 = document.createElement("td");
//    let td2 = document.createElement("td");
//    td1.innerText = obj.tasks;
//    td2.innerText = obj.priority_;
//    tr.append(td1,td2);
//    tbody.append(tr); 
//}