let tbodydisplay = document.querySelector("#tbodydisplay");
let response;
let data;
async function fetchToDo(){
    try {
        response = await fetch("https://jsonplaceholder.typicode.com/todos")
        data = await response.json();
        console.log(data);
        let output = "";
        data.forEach(element => {
            output += `<tr>
                        <td>${element.userId}</td>
                        <td> : ${element.id}</td>
                        <td>"${element.title}"</td>
                        <td>${element.completed}</td>
                      </tr>`;
            tbodydisplay.innerHTML = output;
        });
        
    } catch (error) {
        console.log(error)
        
    }
}
fetchToDo();