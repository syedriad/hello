
let div = document.getElementById('getdiv')
let search = document.getElementById('search')


let news = getnews = () =>{
    
    
    fetch(`https://newsapi.org/v2/everything?q=${search.value}&from=2023-11-13&sortBy=publishedAt&apiKey=6091194bbe6f41e19785e365d81334d9`)
    
    
        .then(data => data.json())
        .then((data) => {
            // console.log(data)
            for (let i = 0; i < data.articles.length; i++) {
                // console.log(data.articles[i])
    
                div.innerHTML += `
            <div class="card m-3" style="width: 18rem;">
      <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
            }
        })
        .catch(err => console.log(err))
}

getnews()