let body = document.getElementById("pasti");
fetch('js/pastillas.json')
    .then(response => {
    
        return response.json()
    })
    .then(data => {
        data.forEach(e => {
        
            body.innerHTML +=
                `<div class="bar" style="--bar-value:${e.cant_mes}; content: '${e.cant_mes}';" data-name="${e.name} (${e.cant_mes})" title="${e.name}"></div>`});
    })

                    
