window.onload = () => { 
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then((resp) => {
         console.log(resp)
         for (let i = 0; i < resp.length; i++) {
            const row = document.querySelector('.row')
            let book = document.createElement("div")
                 book.classList.add("card")
                 book.style.cssText = "width: 18rem;"
                 book.innerHTML= `
                 
                 <div class="card" style="width: 18rem;">
                 <img class="card-img-top" src="${resp[i].img}" alt="Card image cap">
                 <div class="card-body">
                 <h5 class="card-title">${resp[i].title}</h5>
                 <p class="card-text"></p>
                 </div>
                 <ul class="list-group list-group-flush">
                 <li class="list-group-item">${resp[i].category}</li>
                 <li class="list-group-item">${resp[i].price}</li>
                 
                 </ul>
                 <div class="card-body">
                 <button type="button" class="btn btn-primary" onclick = "addToCart(event)" >Add to cart</button>
                 <button type="button" class="btn btn-primary" onclick = "skip(event)" >Skip</button>
                 </div>
                 </div>
                 </div>`
                 row.appendChild(book)
               
            
        }
        
        
 
})
}

const skip = event => event.target.closest('.card').remove()


const addToCart = (e) => {
     
     const cart = document.querySelector(".cart")
     const newbook = document.createElement("li")                              
     newbook.innerHTML =e.target.closest(".card").querySelector("h5").innerText
     cart.appendChild(newbook)

}
