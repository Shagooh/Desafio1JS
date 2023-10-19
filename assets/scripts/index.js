precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var total = document.querySelector(".valor-total");
var cantidad = document.querySelector(".cantidad");

function suma () {
    var numeroFormateado = parseInt(total.innerText)
    total.innerText = numeroFormateado + 400000
    var cantidadFormateado = parseInt(cantidad.innerText)
    cantidad.innerText = cantidadFormateado + 1
}

function resta () {
    var numeroFormateado = parseInt(total.innerText)
    if (numeroFormateado > 0){
        total.innerText = numeroFormateado - 400000
    }
    var cantidadFormateado = parseInt(cantidad.innerText)
    if (cantidadFormateado > 0){
        cantidad.innerText = cantidadFormateado - 1
    }    
}