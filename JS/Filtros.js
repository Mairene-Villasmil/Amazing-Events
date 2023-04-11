const fechaBase = datos.fechaActual
const eventos = datos.eventos


console.log(fechaBase);
console.log(eventos);

const eventosPasados = []
const eventosFuturos = []

console.log(eventosFuturos);
console.log(eventosFuturos);

for (var i = 0; i < eventos.length; i++) {

    if (eventos[i].date > fechaBase) {
        eventosFuturos.push(eventos[i])
    } else {
        eventosPasados.push(eventos[i])
    }
}


// var buttonNavegar = []
var buttonNav = document.getElementsByClassName("nav-item")
for (var i = 0; i < buttonNav.length; i++) {
    const element = buttonNav[i];
    // buttonNavegar.push(buttonNav[i].innerText)
    element.addEventListener("click", function (e) {
        imprimir(e.target.id);

    })
}

// console.log(buttonNavegar)

function imprimir(id) {

    switch (id) {

        case "upcoming":
            document.getElementById("tituloEncabezado").innerHTML = "Eventos Futuros";
            document.getElementById("navegacion-titulo").classList.add('nav_home');
            display(eventosFuturos);
            break;

        case "past":
            document.getElementById("tituloEncabezado").innerHTML = "Eventos Pasados";
            document.getElementById("navegacion-titulo").classList.add('nav_home');
            display(eventosPasados);
            break;

        case "contact":
            document.getElementById("tituloEncabezado").innerHTML = "Contacta con Nosotros";
            document.getElementById("navegacion-titulo").classList.add('nav_home');
            tarjetas.innerHTML = `
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
            break;

        case "stats":
            document.getElementById("tituloEncabezado").innerHTML = "Estadísticas";
            document.getElementById("navegacion-titulo").classList.add('nav_home');
            tarjetas.innerHTML = `
            <table>
            <tr class="color">
              <th colspan="3">Estadísticas de Eventos</th>
            </tr>
            <tr class="titulo">
              <th>Eventos con Mayor Porcentaje de Asistencia</th>
              <th>Eventos con Menor Porcentaje de Asistencia</th>
              <th>Eventos de Mayor Capacidad</th>
            </tr>
            <tr>
              <td>Metallica en Concierto</td>
              <td>Fiesta de Disfraces</td>
              <td>Metallica en Concierto</td>
            </tr>
            <tr>
              <td>Feria del libro Escolar</td>
              <td>Avengers</td>
              <td>Feria del libro Escolar</td>
            </tr>
            <tr class="color">
              <th colspan="3">Estadisticas de Eventos Próximos por Catgoría</th>
            </tr>
            <tr class="titulo">
              <th>Categorías</th>
              <th>Ingresos</th>
              <th>Porcentaje de Estimación</th>
            </tr>
            <tr>
              <td>Metallica en Concierto</td>
              <td>Concierto de Música</td>
              <td>138.000</td>
            </tr>
            <tr>
              <td>Noche de Halloween</td>
              <td>Fiesta de Disfraces</td>
              <td>9.000</td>
            </tr>
            <tr>
              <td>Avengers</td>
              <td>Vamos al Cine</td>
              <td>9.000</td>
            </tr>
            <tr class="color">
              <th colspan="3">Estadisticas de Eventos Pasados por Catgoría</th>
            </tr>
            <tr class="titulo">
              <th>Categorías</th>
              <th>Ingresos</th>
              <th>Porcentaje de Asistencia</th>
            </tr>
            <tr>
              <td>10K por la vida</td>
              <td>Carrera</td>
              <td>25.698</td>
            </tr>
            <tr>
              <td>Feria del libro Escolar</td>
              <td>Intercambio de Libros</td>
              <td>123.286</td>
            </tr>
            <tr>
              <td>Parque Jurásico</td>
              <td>Salida al Museo</td>
              <td>65.892</td>
            </tr>
            <tr>
              <td>Fiesta de las Colectividades</td>
              <td>Feria de Comida</td>
              <td>42.756</td>
            </tr>
          </table>
            `
            break;

        default:
            document.getElementById("tituloEncabezado").innerHTML = "Inicio";
            document.getElementById("navegacion-titulo").classList.add('nav_home');
            display(eventos);

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

    case "stats":
        imprimir("stats")
        break;

    default:
        imprimir("home")

}


const arrowD = document.getElementById("flechaDerecha");
arrowD.addEventListener("click", function (e) {
    flechas(e.target.pag)
})
const arrowI = document.getElementById("flechaIzquierda");
arrowI.addEventListener("click", function (e) {
    flechas(e.target.pag)
    console.log(e);
})

function flechas(pag) {
    if (time[1] == "upcoming") {
        arrowD.href = "/index.html?time=past"
        arrowI.href = "/index.html"
    } else
        if (time[1] == "past") {
            arrowD.href = "/index.html?time=contact"
            arrowI.href = "/index.html?time=upcoming"
        } else
            if (time[1] == "contact") {
                arrowD.href = "/index.html?time=stats"
                arrowI.href = "/index.html?time=past"
            } else
                if (time[1] == "stats") {
                    arrowD.href = "/index.html"
                    arrowI.href = "/index.html?time=contact"
                } else {
                    arrowD.href = "/index.html?time=upcoming"
                    arrowI.href = "/index.html?time=stats"
                }
}
