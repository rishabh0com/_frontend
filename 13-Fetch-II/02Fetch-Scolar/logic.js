const fetchbtn = document.querySelector("#fetchbtn");
let displayContainer = document.querySelector("#container");
let catageroy = document.querySelectorAll("option")
catageroy[0] = null;
catageroy.forEach((ele,index)=>{
    console.log(ele.value)
})

let response,data;
async function retreveData(){
    try {
         response = await fetch("https://fakestoreapi.com/products");
         data = await response.json();
        console.log(data);
        fetchbtn.addEventListener("click",displayData);
        
    } catch (error) {
        console.log(error)
    }
}
retreveData();

function displayData(){
    let output = "";
    data.forEach(product =>{
        output += `<div id="display">
        <div id="id-title">
         <div id="id">${product.id}</div>
         <div id="title">${product.title}</div>
        </div>
        <div id="image"><img src="${product.image}" alt=""></div>
        <div class="price-rating"><p>Prize : ${product.price}</p></div>
        <div class="price-rating"><p>Rating : ${product.rating.rate}</p></div>
     </div>`
     displayContainer.innerHTML = output;
     console.log(product.category)

    })
}
