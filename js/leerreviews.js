let body = document.getElementById("menu");

fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            if (e.name == localStorage.getItem("titulo")) {
                e.reviews.forEach((el)=>{
                    body.innerHTML += 
                    `<article href="comida.html" class="platillo">
                    <div class="img">
                      <img src="${el.usr_img} " />
                      <span> ${el.stars} <i class="iconos">star</i></span>
                    </div>
                    <div class="desc">
                      <h2>${el.name} </h2>
                     
                      <p>${el.description} </p>
                    </div>
                  </article>`
                })
                
            }
        });
    })
