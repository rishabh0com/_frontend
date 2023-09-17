// fill in javascript code here

// add event and display the row in tbody

// catch the tag;
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

form.addEventListener("submit",function(e){
    e.preventDefault();

    //catch the input elements :
    let name_ = document.querySelector("#name").value;
    let ID = document.querySelector("#docID").value;
    let department = document.querySelector("#dept").value;
    let experience = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mobile = document.getElementById("mbl").value;
    
    
    
    

    
    //create element :
    let row = document.createElement("tr");
    let role = "";
    if(experience > 5){
        role = "Senior";
    }
    else if(experience >= 2 && experience <= 5){
        role = "Junior";
    }
    else if(experience <= 1){
        role = "Trainee";
    }
    

    let data = [name_,ID,department,experience,email,mobile,role];
    console.log(data);

    // submit data in tbody;

    data.forEach((ele) =>{
        let col = document.createElement("td");
        col.innerText = ele;
        row.appendChild(col);
    })

    // create delete column for delet button
    let delete_col = document.createElement("td");
    let delete_btn = document.createElement('button');
    delete_btn.innerText = 'Delete';

    //append colomn in row and buttun in column
    delete_col.appendChild(delete_btn);
    row.appendChild(delete_col);

    // add event on delete button
    delete_btn.addEventListener('click',function(){
        tbody.removeChild(row);
    })
    tbody.appendChild(row);
})


