let myform = document.querySelector("form");
let name_ = document.getElementById("name");
let age = document.getElementById("age");

myform.addEventListener("submit",(event)=>{
    event.preventDefault();
    localStorage.setItem("Name",name_.value);
    localStorage.setItem("Age",age.value);

})
let Locbtn = document.querySelector("#fetchLoc")

Locbtn.addEventListener("click",()=>{
    let locName = localStorage.getItem("Name");
    let locage = localStorage.getItem("Age");

    let displayLoc = document.querySelector("tbody>tr");
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    td1.textContent = locName
    td2.textContent = locage

    displayLoc.append(td1,td2)
})












