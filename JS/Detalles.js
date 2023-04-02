const eventos = datos.eventos;
console.log(location.search);

var id = location.search.split("?id=").filter(Number)
var selectId = id[0]
const eventoDetalles = [];

for (var i = 0; i < eventos.length; i++) {
  if (eventos[i].id == selectId) {
    eventoDetalles.push(eventos[i])
  }
}
console.log(eventoDetalles[0]);
var detalleVista = //poner id en el container de detalles
detalleVista = ` 
<div class="contenedor">
    <div class="titulo_tarjeta">
        <p class="titulo_uno">${eventoDetalles[0].name}</p>
    </div>
    <div class="general">
        <div class="fotos_detalles">
            <img src="../Imagenes/${eventoDetalles[0].image}" alt="${eventoDetalles[0].name}">
        </div>
        <div class="info_detalles">
            <p class="detalle">Descripción: ${eventoDetalles[0].description}</p>
            <div class="detalles_abajo">
                <div class="detalles_uno">
                    <p class="detalle">Lugar: ${eventoDetalles[0].place}</p>
                    <p class="detalle">Fecha: ${eventoDetalles[0].date}</p>
                </div>
                <div class="detalles_dos">
                    <p class=" detalle">Categoria: ${eventoDetalles[0].category}</p>
                    <p class="detalle">Capacidad: ${eventoDetalles[0].capacity}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="precio">
        <p class="detalle">Precio: $${eventoDetalles[0].price}</p>
    </div>
</div>
        `
        console.log(detalleVista);
        document.getElementById("contenedor_detalles").innerHTML=detalleVista


        