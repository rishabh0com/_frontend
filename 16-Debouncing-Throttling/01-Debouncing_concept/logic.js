let url = "https://www.omdbapi.com/?apikey=3616281d&";
//catch the elements
const displayDiv = document.querySelector("#display");
// this function for fetch movie data from server
async function fetchApiData(query) {
  try {
    let response = await fetch(`${url}s=${query}`);
    let resData = await response.json();
    const movieData = resData.Search;
    console.log(movieData);
    document.querySelector("h2").style.display='block'
    document.querySelector("p").style.display = 'none'
    document.querySelector("#heading>h3").style.margin = '0px'
    displayDiv.innerHTML = ""
    //perform display task on DOM
    movieData.forEach((data)=>{
     
      const displayOutput = `
      <div class="movieBox">
      <div id="poster">
          <img src="${data.Poster}" alt="movie poster">
      </div>
      <div id="movieTitle">${data.Title}</div>
      <div id="movieYear">${data.Year}</div>
    `
    displayDiv.innerHTML += displayOutput

    })

  } catch (error) {
    console.log(error);
  }
}
//debouncing function take two argu first perform function second delay ttime
//this function for apply deBounce concept in search
function debouncing(func, delay) {
  let timer;
  return function (query) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(query);
      
    }, delay);
  };
}

let debounceSearch = debouncing(fetchApiData, 300);

// catch the search box and add addeventlistner on it
let searchInput = document.getElementById("inpData");
searchInput.addEventListener("input", () => {
  
    debounceSearch(searchInput.value);
});


function load(){
  location.reload()
}

