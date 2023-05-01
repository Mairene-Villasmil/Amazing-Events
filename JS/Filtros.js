const fechaBase = datos.fechaActual
const eventos = datos.eventos
const container = document.getElementById("container")
const eventosPasados = []
const eventosFuturos = []
let arrayFiltro = []
let tarjetasEventos = document.getElementById("tarjetas")
var searchContainer = document.getElementById("search")
let checkedCheckboxes = []
let search


for (var i = 0; i < eventos.length; i++) {
  if (eventos[i].date > fechaBase) {
    eventosFuturos.push(eventos[i])
  } else {
    eventosPasados.push(eventos[i])
  }
}

var botonNavegacion = [];

var buttonNav = document.getElementsByClassName("nav-item")
console.log(buttonNav);
for (var i = 0; i < buttonNav.length; i++) {
  const element = buttonNav[i];
  botonNavegacion.push(buttonNav[i].innerText)
  element.addEventListener("click", function (e) {
    imprimir(e.target.id);

  })
}

function imprimir(id) {
  switch (id) {
    case "upcoming":
      document.getElementById("tituloEncabezado").innerHTML = "Eventos Futuros";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      arrayFiltro = eventosFuturos
      display(eventosFuturos)
      eventsCategories(eventosFuturos)
      searchContainer.style.display = "flex"
      break;
    case "past":
      document.getElementById("tituloEncabezado").innerHTML = "Eventos Pasados";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      arrayFiltro = eventosPasados
      display(eventosPasados)
      eventsCategories(eventosPasados)
      searchContainer.style.display = "flex"
      break;
    case "contact":
      document.getElementById("tituloEncabezado").innerHTML = "Contacta con Nosotros";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      searchContainer.style.display = "none"
      imprimirForm()
      break;
    case "stats":
      document.getElementById("tituloEncabezado").innerHTML = "Estadísticas";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      searchContainer.style.display = "none"
      imprimirStats()
      break;
    default:
      document.getElementById("tituloEncabezado").innerHTML = "Inicio";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      arrayFiltro = eventos
      display(eventos)
      eventsCategories(eventos)
      searchContainer.style.display = "flex"
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
                    <a href="./Pages/Detalles.html?id=${array[i].id}">Ver Más</a>
                    </button>
            </p>
            </div>
          </div>
          `
  }
  tarjetasEventos.innerHTML = html
}

function imprimirForm() {
  document.getElementById("tarjetas").innerHTML =
    `
        <section class="formulario">
                <div class="imagenForm">
                  <img src="../Imagenes/formu.png" alt="">
                </div>
            <form class="formu">
                <div class="formulario_dos">
                  <label for="nombre"></label>   
                  <input type="text" name="nombre" placeholder="Nombre" required>
                </div>
                <div class="formulario_dos">
                  <label for="email"></label>
                  <input type="email" name="email" placeholder="E-mail" required>
                </div>
                <div class="formulario_dos">
                  <label for="text"></label>
                  <textarea name="message" placeholder="Mensaje"></textarea>
                </div>
                <div class="formulario_dos butSend">
                  <button type="submit" value="Enviar"><a href="#">Enviar<a/></button>
                </div>
            </form>
        </section>
  `
}

function imprimirStats() {
  document.getElementById("tarjetas").innerHTML = `
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
}

var time = location.search.split("?time=")
switch (time[1]) {
  case "upcoming":
    imprimir("upcoming")
    break;

  case "past":
    imprimir("past")
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
    case 0:
      imprimir("home")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
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
    default:
      imprimir("stats")
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
    case 0:
      imprimir("home")
      document.getElementById("tituloEncabezado").innerHTML = botonNavegacion[i]
      break;
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
    default:
      imprimir("stats")
  }
}


var inputSearch = document.getElementById("Search")
inputSearch.addEventListener("keyup", function (evento) {
  var datoInput = evento.target.value
  search = datoInput.trim().toLowerCase()
  filtrosCombinados()
})

function eventsCategories(array) {
  let categories = array.map(evento => evento.category)
  let unica = new Set(categories)
  let lastCategories = [...unica]
  let categoriasEventos = ""
  lastCategories.map(category =>
    categoriasEventos +=
    `
    <label><input type="checkbox" value="${category}"> ${category}</label>
    `
  )
  document.getElementById("container").innerHTML = categoriasEventos
  checkboxListener()
}

function checkboxListener() {
  var checkboxs = document.querySelectorAll('input[type=checkbox]')
  for (i = 0; i < checkboxs.length; i++) {
    checkboxs[i].addEventListener("change", function () {
      checkedCheckboxes = []
      for (i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) {
          checkedCheckboxes.push(checkboxs[i].value)
        }
      }
      filtrosCombinados()
    })
  }
}

function filtrosCombinados() {
  var filtrado = []
  if (search !== "" && checkedCheckboxes.length > 0) {
    checkedCheckboxes.map(category => filtrado.push(...arrayFiltro.filter(evento =>
      evento.name.toLowerCase().includes(search) && evento.category === category)
    ))
  }
  else if (search !== "" && checkedCheckboxes.length == 0) {
    filtrado = arrayFiltro.filter(evento => evento.name.toLowerCase().includes(search))
  }
  else if (search === "" && checkedCheckboxes.length > 0) {
    checkedCheckboxes.map(category =>
      filtrado.push(...arrayFiltro.filter(evento => evento.category === category))
    )
  }
  else {
    filtrado = arrayFiltro
  }
  filtrado.length > 0 ?
    display(filtrado) :
    tarjetasEventos.innerHTML = `
    <div class="ceroResultado">
    <h1 class="sinEventos" >No se encontraron eventos para tu busqueda...</h1>
    </div>
    `
}
