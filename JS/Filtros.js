let fechaBase
let eventos
const container = document.getElementById("container")
let arrayFiltro = []
let formulario = document.getElementById("form")
let stats = document.getElementById("statsDos")
let tarjetasEventos = document.getElementById("tarjetas")
var searchContainer = document.getElementById("search")
let checkedCheckboxes = []
let search = ""
var botonNavegacion = []

async function getData() {
  let datosApi
  await fetch("https://amd-amazingevents-api.onrender.com/api/eventos")
    .then(response => response.json())
    .then(json => datosApi = json)

  eventos = datosApi.eventos
  fechaBase = datosApi.fechaActual

  imprimir()
}

getData()


var buttonNav = document.getElementsByClassName("nav-item")
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
      let eventosFuturos = eventos.filter(evento => evento.date > fechaBase)
      document.getElementById("tituloEncabezado").innerHTML = "Eventos Futuros";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      arrayFiltro = eventosFuturos
      searchContainer.style.display = "flex"
      tarjetasEventos.style.display = "flex"
      formulario.style.display = "none"
      stats.style.display = "none"
      checkedCheckboxes = []
      display(eventosFuturos)
      eventsCategories(eventosFuturos)
      break;
    case "past":
      let eventosPasados = eventos.filter(evento => evento.date < fechaBase)
      document.getElementById("tituloEncabezado").innerHTML = "Eventos Pasados";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      arrayFiltro = eventosPasados
      searchContainer.style.display = "flex"
      tarjetasEventos.style.display = "flex"
      formulario.style.display = "none"
      stats.style.display = "none"
      checkedCheckboxes = []
      display(eventosPasados)
      eventsCategories(eventosPasados)
      break;
    case "contact":
      document.getElementById("tituloEncabezado").innerHTML = "Contacta con Nosotros";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      tarjetasEventos.style.display = "none"
      searchContainer.style.display = "none"
      stats.style.display = "none"
      formulario.style.display = "flex"
      formulario.innerHTML =`
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
      break;
    case "stats":
      document.getElementById("tituloEncabezado").innerHTML = "Estadísticas";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      tarjetasEventos.style.display = "none"
      searchContainer.style.display = "none"
      formulario.style.display = "none"
      stats.style.display = "flex"
      initStats()
      break;
    default:
      document.getElementById("tituloEncabezado").innerHTML = "Inicio";
      document.getElementById("navegacion-titulo").classList.add('nav_home');
      arrayFiltro = eventos
      checkedCheckboxes = []
      tarjetasEventos.style.display = "flex"
      searchContainer.style.display = "flex"
      stats.style.display = "none"
      formulario.style.display = "none"
      display(eventos)
      eventsCategories(eventos)

  }

}

function display(array) {
  var html = "";
  for (var i = 0; i < array.length; i++) {
    html +=
      `<div class="item">
            <img src="${array[i].image}" class="card-img-top zoomable" alt="${array[i].name}">
            <p class="titulo_dos">${array[i].name}</p>
            <div class="detalles">
              <p class="precio">Precio: $${array[i].price}</p>
            <p>
                    <button class="botones boton_d">
                    <a href="./Pages/Detalles.html?id=${array[i].id}">Ver Más</a>
                    </button>
            </p>
            </div>
          </div>
          `
  }
  tarjetasEventos.innerHTML = html
}

var time = location.search.split("?time=")
console.log(time);

switch (time[1]) {
  case "past":
    display("past")
    break;
  case "upcoming":
    display("upcoming")
    break;
  case "stats":
    display("stats")
    break;
  case "contact":
    display("contact")
    break;
  default:
    display("home")

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
