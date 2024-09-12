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
               
            </div>
            <div class="desc">
                <h2>${e.name}</h2>
                <span>Hari ini pukul ${e.close}</span>
                <div class="stats">
                </div>
            </div>
        </article>
    </a>`});
    })
