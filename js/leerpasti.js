let body = document.getElementById("body");

fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            if (e.name == localStorage.getItem("titulo")) {
                body.innerHTML += 
                    ` <header class="restaurante">
<section class="portada">
    <a href="index.html" class="iconos">
        arrow_back
    </a>
     <img src="${e.avatar.src}">
    <a href="https://www.youtube.com/watch?v=2TSaAysdHhk&pp=ygUMc3Bpbm5pbmcgcmF0" class="iconos">
       edit
    </a>
    
</section>
<section class="informacion">
    <div><br>
        <h2>${e.name}</h2>
        <p>${e.desc} </p>
    </div>
    <div class="valor">
   
    </div>
</section>
</header>
<main class="index">
<section class="datos">
    <div class="icon">
        <span class="iconos f25 amarillo">
            schedule
        </span>
        <p>
        ${e.close}
        </p>
    </div>
    <div class="icon">
        <span class="iconos f25 naranja">
            calendar_month
        </span>
        <p>
        ${e.distance}
        </p>
    </div>
    
</section>

</main>
`}
    });
    })
    fetch('js/restos.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
            if (e.name == localStorage.getItem("titulo")) {
                
                e.menu.forEach((el)=>{
                    body.innerHTML += 
                    `<a href="#" class="platillo">
                    <div class="horario">
                    <div class="img">
                      <span class="titulo">HARI INI PUKUL ${el.hour} </span>
                    </div>
                    <div class="desc">
                    
                      <p>${el.description} Kapsul ${e.name} </p>
                    </div></a></div>
                  `
                })
                
            }
        });
    })
