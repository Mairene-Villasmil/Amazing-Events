const fechaBase = datos.fechaActual
const eventos = datos.eventos 

console.log(fechaBase);
console.log(eventos);

const eventosPasados = []
const eventosFuturos = [] 

for(var i = 0; i < eventos.length; i++){

    if(eventos[i].date > fechaBase){
        eventosFuturos.push(eventos[i])
    } else {
        eventosPasados.push(eventos[i])
    }
}


var buttonNav= document.getElementsByClassName("barra-nav")
for(var i=0; i < buttonNav.length; i++ ){
    const element= buttonNav[i];
    element.addEventListener("click", function(e){
        imprimir(e.target.id);
    })
}

function imprimir(id) {
    console.log(id);
    switch (id) {
        case "upcoming" :
            display(eventosFuturos)        
            break;
        case "past" :
            display(eventosPasados) 
       break;
    
        default:
            display(eventos)
        
    }
        
    }

    function display(array) {
        var html = "";
        for(var i=0; i < array.length; i++){
            html+= 
            `<div class="item">
            <img src="./Imagenes/${array[i].image}" alt="${array[i].name}">
            <p class="titulo_dos">${array[i].name}</p>
            <div class="detalles">
              <p class="precio">Precio: $${array[i].price}</p>
              <p class="boton_d"><a href="./Pages/Detalles.html?id=${array[i].id}">Detalles</a></p>
            </div>
          </div>
          `
                
    }
    console.log(html)
    document.getElementById("tarjetas").innerHTML= html;
}

imprimir("home")