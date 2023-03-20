//action = 23
const nameMovie = document.querySelector('.name'),
container = document.getElementById('container'),
imageDefault = "https://image.tmdb.org/t/p/w500",
modalContainer = document.querySelector('.start')

/*============== API TMDB ==============*/

function update(){

    let select = document.querySelector("select[name='genre'] option:checked").value

    async function tmdb(){
    const url = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=ab310e62ef3273cfc74b4223844d3e79&language=pt-BR&with_genres=${select}`)
    .then((url) => url.json())
    
    const names = url.results.forEach(function(urlname){
            const listName = document.createElement('div')
            listName.classList.add('movies-list')

            let color = ''
            if(urlname.vote_average >= 6){
                color = 'green'
            }
            else if(urlname.vote_average <= 4){
                color = 'red'
            }
            else{
                color = 'yellow'
            }
            
            container.appendChild(listName)
            listName.innerHTML = `<h1 class= "title-default">${urlname.title}</h1><img class="image" src="${imageDefault}${urlname.poster_path}" alt="poster-Image"><p  style="color:${color} ;">${urlname.vote_average}</p>`

            
            /*============== MODAL ==============*/

            const images = document.querySelectorAll('.image')
            const modal = images[images.length - 1]
               
              modal.addEventListener('click', () =>{
                modalContainer.classList.remove('close')
        
                modalContainer.innerHTML = `
                                  <div class="modal-container">
                                      <div class="modal">
                                          <div class="header">
                                            <h1>${urlname.title}</h1>
                                            <i class="fa-solid fa-xmark" onclick="closeModal()" ></i>
                                          </div>
                                          <div class="active-modal">
                                            <img src="${imageDefault}${urlname.backdrop_path}" alt="backdrop-img">
                                            <p>${urlname.overview}</p>
                                          </div>
                                        </div>
                                    </div>
                                      `
              })

    })
}
tmdb()
}

/*============== SCROLL ==============*/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

function closeModal(){
    modalContainer.classList.add('close')
}



