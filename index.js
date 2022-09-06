//action = 23
const nameMovie = document.querySelector('.name')
async function tmdb(id){
    const url = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=ab310e62ef3273cfc74b4223844d3e79&language=pt-BR&with_genres=${id}`)
    .then((url) => url.json())
    nameMovie.innerText = url.results[0].title
    console.log(url)
}
tmdb()