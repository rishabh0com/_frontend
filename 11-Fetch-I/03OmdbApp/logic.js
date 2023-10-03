//catch elements for seacrches
let searchName = document.getElementById("searchName")
let searchbtn = document.getElementById("searchbtn")
// displayblock
let displaydata = document.getElementById("displayDataOnGrid")
let displaybox = document.querySelector("#displaymovieDetail")
displaybox.style.display = 'none'

let url = `https://www.omdbapi.com/?apikey=3616281d&`
let data
let movieTitle
async function fetchMovieData(){
    try {
        let response = await fetch(`${url}s=${searchName.value}`)
        data = await response.json()
        //console.log(data)
        let movieArray = data.Search
        document.querySelector("#heading").style.display='none'
        let output1 = "";
        movieArray.forEach(ele=>{
            output1 += `
            
                <div class="displaydata">
                    <div id="displaymovieImage"><img src="${ele.Poster}" alt=""></div>
                    <div class="displaymovieName">${ele.Title}</div>
                    <div id="displaymovieName">${ele.Year}</div>
                </div>
            
            `
            // output += `
            // <a href="./moviedetail.html" target="_blank">
            //     <div class="displaydata">
            //         <div id="displaymovieImage"><img src="${ele.Poster}" alt=""></div>
            //         <div class="displaymovieName">${ele.Title}</div>
            //         <div id="displaymovieName">${ele.Year}</div>
            //     </div>
            // </a>
            // `

            
            displaydata.innerHTML = output1
            
        })
        // this is value provied to click movies name
        // document.querySelectorAll(".displaydata").forEach(ele=>{
        //     console.log(a++,ele)
        //     ele.addEventListener("click",()=>{
        //         console.log(ele)
        //     })
        // })
        let clickbox = document.querySelectorAll(".displaydata")
        let clickTitle = document.querySelectorAll(".displaymovieName")
        for(let i = 0; i < clickTitle.length; i++){
            clickbox[i].addEventListener("click",()=>{
                // console.log(clickTitle[i])
                // console.log(clickbox[i])
                movieTitle = clickTitle[i].innerText
                // console.log(movieTitle)
                async function mDetail(){
                    try {
                        let res = await fetch(`${url}t=${movieTitle}`)
                        let moviedata = await res.json()
                        console.log(moviedata)
                        displaybox.style.display = 'block'
                        document.querySelector("body").style.backgroundColor='white'
                        
                        let output2 = ""
                        output2 = `
                        <div id="displaymovieDetail">
                            <button id="cutbutton">X</button>
                            <div id="moviePoster">
                              <img src="${moviedata.Poster}" alt="">
                            </div>
                            <div id="detail">
                                <p class="parameter">Title : <span class="flex">${moviedata.Title}</span></p>
                                <p class="parameter">Year : <span class="flex">${moviedata.Year}</span></p>
                                <p class="parameter">Actor : <span class="flex">${moviedata.Actors}</span></p>
                                <p class="parameter">Country : <span class="flex">${moviedata.Country}</span></p>
                                <p class="parameter">Director : <span class="flex">${moviedata.Director}</span></p>
                                <p class="parameter">Genre : <span class="flex">${moviedata.Genre}</span></p>
                                <p class="parameter">Lanuage : <span class="flex">${moviedata.Language}</span></p>
                                <p class="parameter">Released Date : <span class="flex">${moviedata.Released}</span></p>
                                <p class="parameter">Type : <span class="flex">${moviedata.Type}</span></p>
                                <p class="parameter">Writer : <span class="flex">${moviedata.Writer}</span></p>
                                <p class="parameter">Imdb Id : <span class="flex">${moviedata.imdbID}</span></p>
                                <p class="parameter">Imdb Rating : <span class="flex">${moviedata.imdbRating}</span></p>
                                <p class="parameter">Imdb Vote : <span class="flex">${moviedata.imdbVotes} Votes</span></p>
                            </div>
                        </div>
                        `
                        displaybox.innerHTML = output2
                        let cutbutton = document.querySelector("#cutbutton")
                        cutbutton.addEventListener("click",()=>{
                            displaybox.style.display = 'none'
                            document.querySelector("body").style.backgroundColor='rgb(58, 58, 58)'
                            
                        })

                    } catch (error) {
                        console.error(error)
                    }
                }
                mDetail()
            })
        }
        
        
        
        

    } catch (error) {
        
    }
}
searchbtn.addEventListener("click",fetchMovieData)

//Title: 'Iron Man', 
//Year: '2008', 
//imdbID: 'tt0371746', Type: 'movie', 
//Poster: