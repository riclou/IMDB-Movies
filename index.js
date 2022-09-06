//action = 23
const nameMovie = document.querySelector('.name'),
teste = document.getElementById('teste'),
imageDefault = "https://image.tmdb.org/t/p/w500"
async function tmdb(id){
    const url = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=ab310e62ef3273cfc74b4223844d3e79&language=pt-BR&with_genres=${id}`)
    .then((url) => url.json())

    const names = url.results.forEach(function(urlname){
        const listName = document.createElement('div')
        teste.appendChild(listName)
        listName.innerHTML = `<h1>${urlname.title}</h1> <img src="${imageDefault}${urlname.poster_path}"><p>${urlname.vote_average}`
        console.log(urlname)
    })
}
tmdb(16)