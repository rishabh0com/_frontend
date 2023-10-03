let data;
let output = "";
let display = document.getElementById("display");
let btn = document.getElementById("btn").addEventListener("click",()=>{
    fetch(`https://reqres.in/api/users`)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        data = response.data;
        console.log(data)

        //id , email , first_name , last_name , avatar
        data.forEach(ele => {
            
        output += `
        <div class="flex">
               <div class="flex">
                <h1>${ele.id}</h1>
                 <img src="${ele.avatar}" alt="images">
               </div>
               <div >
                 <h2>${ele.first_name}  ${ele.last_name}</h2>
                 <p>${ele.email}</p>
               </div>
        </div>`
         display.innerHTML = output;
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})