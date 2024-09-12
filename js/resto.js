setTimeout(() => {
    const tarjetas = document.querySelectorAll(".restaurante");
    tarjetas.forEach(function (tarjeta) {
        tarjeta.addEventListener('click', function () {
            const url = tarjeta.getAttribute('id');
            localStorage.setItem("titulo", url);
            window.location.href = "restaurante.html";
        });
    });
}, 500);
