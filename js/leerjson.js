let body = document.getElementById("resto");



fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            body.innerHTML += 
                `<a id="${e.name}" class="restaurante">
        <article class="oferta">
            <div class="img">
                <img src="${e.avatar.src}">
                <span>${e.distance}</span>
            </div>
            <div class="desc">
                <h2>${e.name}</h2>
                
                <span>Hari ini pukul ${e.close}</span>
                <div class="stats">
                    <div class="estrellas">
                       ${`<span class="iconos verde f13">star</span>`.repeat(e.stars)}
                       ${`<span class="iconos f13">star</span>`.repeat(5-e.stars)}
                       <span>(${e.cant_review})</span>
                    </div>
                    <div class="valor">
                        ${`<span class="iconos verde f13">euro_symbol</span>`.repeat(e.price)}
                        ${`<span class="iconos f13">euro_symbol</span>`.repeat(3-e.price)}
                    </div>
                </div>
            </div>
            <div class="calificacion">${e.rating}</div>
        </article>
    </a>
    `


        });
    })
