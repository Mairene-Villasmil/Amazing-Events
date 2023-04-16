const fechaBase = datos.fechaActual
const eventos = datos.eventos
const container = document.getElementById("container")

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


var botonNavegacion = [];
var buttonNav = document.getElementsByClassName("nav-item")
for (var i = 0; i < buttonNav.length; i++) {
  const element = buttonNav[i];
  botonNavegacion.push(buttonNav[i].innerText)
  element.addEventListener("click", function (e) {
    imprimir(e.target.id);

  })
}

console.log(botonNavegacion);

let arrayFiltro = []
let tarjetasEventos = document.getElementById("tarjetas")

function imprimir(id) {

  switch (id) {

    case "upcoming":
      document.getElementById("tituloEncabezado").innerHTML = "Eventos Futuros";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      var searchContainer = document.getElementById("search")
      searchContainer.innerHTML =
        `<div class="category">
            <ul>
              <li><input type="checkbox">Vamos al Cine</li>
              <li><input type="checkbox">Feria de Comida</li>
              <li><input type="checkbox">Concierto de Musica</li>
              <li><input type="checkbox">Intercambio de Libros</li>
              <li><input type="checkbox">Salida al Museo</li>
              <li><input type="checkbox">Noche de Halloween</li>
              <li><input type="checkbox">Carrera</li>
              <li><input type="checkbox">Fútbol</li>
            </ul>
          </div>
          <div class="busqueda">
            <div class="form">
              <input type="search" placeholder="Busca tu evento">
            </div>
          </div> `
      arrayFiltro = eventosFuturos
      display(eventosFuturos);
      break;

    case "past":
      document.getElementById("tituloEncabezado").innerHTML = "Eventos Pasados";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      var searchContainer = document.getElementById("search")
      searchContainer.innerHTML =
        `<div class="category">
            <ul>
              <li><input type="checkbox">Vamos al Cine</li>
              <li><input type="checkbox">Feria de Comida</li>
              <li><input type="checkbox">Concierto de Musica</li>
              <li><input type="checkbox">Intercambio de Libros</li>
              <li><input type="checkbox">Salida al Museo</li>
              <li><input type="checkbox">Noche de Halloween</li>
              <li><input type="checkbox">Carrera</li>
              <li><input type="checkbox">Fútbol</li>
            </ul>
          </div>
          <div class="busqueda">
            <div class="form">
              <input type="search" placeholder="Busca tu evento">
            </div>
          </div> `
      arrayFiltro = eventosPasados
      display(eventosPasados);
      break;

    case "contact":
      document.getElementById("tituloEncabezado").innerHTML = "Contacta con Nosotros";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      var searchContainer = document.getElementById("search")
      searchContainer.innerHTML = ""
      tarjetasEventos.innerHTML = `
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
      var searchContainer = document.getElementById("search")
      searchContainer.innerHTML = ""
      tarjetasEventos.innerHTML = `
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
      var searchContainer = document.getElementById("search")
      searchContainer.innerHTML =
        `<div class="category">
            <ul>
              <li><input type="checkbox">Vamos al Cine</li>
              <li><input type="checkbox">Feria de Comida</li>
              <li><input type="checkbox">Concierto de Musica</li>
              <li><input type="checkbox">Intercambio de Libros</li>
              <li><input type="checkbox">Salida al Museo</li>
              <li><input type="checkbox">Noche de Halloween</li>
              <li><input type="checkbox">Carrera</li>
              <li><input type="checkbox">Fútbol</li>
            </ul>
          </div>
          <div class="busqueda">
            <div class="form">
              <input type="search" placeholder="Busca tu evento">
            </div>
          </div> `
      arrayFiltro = eventos
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

  tarjetasEventos.innerHTML = html
  // document.getElementById("tarjetas").innerHTML = html;

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

var buttonD = document.getElementById("flechaDerecha")
buttonD.addEventListener("click", function (e) {
  var pagina = document.getElementById("tituloEncabezado").innerText
  if (botonNavegacion.indexOf(pagina) < 4) {
    nextPage(botonNavegacion.indexOf(pagina) + 1);
  } else {
    nextPage(0)
  }
})

function nextPage(i) {
  switch (i) {
    case 1:
      imprimir("upcoming")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    case 2:
      imprimir("past")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    case 3:
      imprimir("contact")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    case 4:
      imprimir("stats")

      break;
    default:
      imprimir("home")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
  }
}


var buttonI = document.getElementById("flechaIzquierda")
buttonI.addEventListener("click", function (e) {
  var paginaI = document.getElementById("tituloEncabezado").innerText
  if (botonNavegacion.indexOf(paginaI) <= 4) {
    antPage(botonNavegacion.indexOf(paginaI) - 1);
  } else {
    antPage(0)
  }
})

function antPage(i) {
  switch (i) {
    case 1:
      imprimir("upcoming")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    case 2:
      imprimir("past")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    case 3:
      imprimir("contact")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    case 4:
      imprimir("stats")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
    default:
      imprimir("stats")
  }
}

var Search = document.getElementById("search")

Search.addEventListener("keyup", function (evento) { capturaEvento(evento) })

function capturaEvento(evento) {
  var datoInput = evento.target.value
  var datoSinEspacio = datoInput.trim().toLowerCase()

  var filtrado = arrayFiltro.filter(evento => evento.name.toLowerCase().includes(datoSinEspacio))
  if(filtrado.length === 0){
    tarjetasEventos.innerHTML = `
    <div class="ceroResultado">
      <h1 class="sinEventos">No se encontraron eventos para tu busqueda...</h1>
    </div>
    `
  }else{
    display(filtrado);
  }

}
