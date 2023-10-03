// fill in javascript code here

// catch the form
let form = document.querySelector("form");
let tbody = document.querySelector("tbody")

form.addEventListener("submit",function(e){
    e.preventDefault();

    //catch the inputs :
let name_ = document.querySelector("#name").value;
let ID = document.querySelector("#employeeID").value;
let department = document.querySelector("#department").value;
let experience = document.querySelector("#exp").value;
let email = document.querySelector("#email").value;
let mobile = document.querySelector("#mbl").value;

let role = "";
if(experience > 5){
    role = "Senior";
}
else if(experience >= 2 && experience <= 5){
    role = "Junior";
}
else if(experience <= 1){
    role = "Fresher";
}

let data = [name_,ID,department,experience,email,mobile,role];
console.log(data)
let row = document.createElement("tr");
data.forEach((ele)=>{
    let td = document.createElement("td");
    td.innerText = ele;
    row.appendChild(td);
})

//create column and delete button :
let delete_td = document.createElement('td');
let delete_btn = document.createElement("button");
// delete button innerText 
delete_btn.innerText = "Delete";

delete_td.appendChild(delete_btn);

//add eventListener to delet button 
delete_btn.addEventListener('click',function(){
    tbody.removeChild(row);

})

row.appendChild(delete_td);
tbody.appendChild(row);




})

//form.addEventListener("submit",function(e){
//    e.preventDefault();
//
//    let task = [];
//    let obj = {
//        name : name_.value,
//        ID : ID.value,
//        department : department.value,
//        experience : experience.value,
//        email : email.value,
//        mobile : mobile.value,
//
//    }
//    task.push(obj);
//    console.log(task);
//
//    //creat element 
//    let tr = document.createElement("tr");
//    let td1 = document.createElement("td");
//    let td2 = document.createElement("td");
//    let td3 = document.createElement("td");
//    let td4 = document.createElement("td");
//    let td5 = document.createElement("td");
//    let td6 = document.createElement("td");
//
//    //fill innertext 
//    td1.innerText = obj.name;
//    td2.innerText = obj.ID;
//    td3.innerText = obj.department;
//    td4.innerText = obj.experience;
//    td5.innerText = obj.email;
//    td6.innerText = obj.mobile;
//
//    // display
//    tr.append(td1,td2,td3,td4,td5,td6);
//    tbody.append(tr);
//    
//})