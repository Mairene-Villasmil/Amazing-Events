const fechaBase = datos.fechaActual
const eventos = datos.eventos


console.log(fechaBase);
console.log(eventos);

const eventosPasados = []
const eventosFuturos = []

for (var i = 0; i < eventos.length; i++) {

    if (eventos[i].date > fechaBase) {
        eventosFuturos.push(eventos[i])
    } else {
        eventosPasados.push(eventos[i])
    }
}


var buttonNav = document.getElementsByClassName("nav-item")
for (var i = 0; i < buttonNav.length; i++) {
    const element = buttonNav[i];
    element.addEventListener("click", function (e) {
        imprimir(e.target.id);
        
    })
}

function imprimir(id) {

    switch (id) {

        case "upcoming":
            document.getElementById("tituloEncabezado").innerHTML = "Eventos Futuros"
            document.getElementById("navegacion-titulo").classList.add('nav_home')
            display(eventosFuturos)
            container.innerHTML =""
            break;

        case "past":
            document.getElementById("tituloEncabezado").innerHTML = "Eventos Pasados"
            document.getElementById("navegacion-titulo").classList.add('nav_home')
            display(eventosPasados)
            container.innerHTML =""
            break;

        case "contact":
            document.getElementById("tituloEncabezado").innerHTML = "Contacta con Nosotros"
            document.getElementById("navegacion-titulo").classList.add('nav_home')
            container.innerHTML =`
            <section class="formulario">
                <form class="formu">
                    <div class="formulario_dos"> 
                        <label for="nombre"></label>   
                        <input type="text" name="nombre" placeholder="Nombre">
                        <label for="email"></label>
                        <input type="email" name="email" placeholder="E-mail">
                        <label for="text"></label>
                        <textarea name="message" placeholder="Mensaje"></textarea>
                        <button id="content" type="submit" >Enviar</button>
                    </div>
                </form>
            </section>
            `
            tarjetas.innerHTML="";
            break;

        default:
            document.getElementById("tituloEncabezado").innerHTML = "Inicio"
            document.getElementById("navegacion-titulo").classList.add('nav_home')
            display(eventos)
            container.innerHTML =""

    }

}

function display(array) {
    var html = "";
    for (var i = 0; i < array.length; i++) {
        html +=
            `<div class="item">
            <img src="./Imagenes/${array[i].image}" class="card-img-top zoomable" alt="${array[i].name}">
            <p class="titulo_dos">${array[i].name}</p>
            <div class="detalles">
              <p class="precio">Precio: $${array[i].price}</p>
            <p>
                    <button class="btn bt-xs primario botones boton_d"  data-toggle="modal" data-target="#Visualizar">
                    <a href="./Pages/Detalles.html?id=${array[i].id}">Detalles</a>
                    </button>
            </p>
            </div>
          </div>
          `

    }


    document.getElementById("tarjetas").innerHTML = html;

}

imprimir("home");

var time = location.search.split("?time=")
console.log(time);


switch (time[1]) {
    case "past":
        imprimir("past")
        break;

    case "upcoming":
        imprimir("upcoming")
        break;

    case "contact":
        imprimir("contact")
        
        break;

    default:
        imprimir("home")

}

