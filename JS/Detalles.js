const eventos = datos.eventos;
console.log(location.search);
var id = location.search.split("?id=").filter(Number)
var selecId = id[0]
const eventoDetalles = [];
for (var i = 0; i < eventos.length; i++){
    if(eventos[i].id==selecId){
        eventoDetalles.push(eventos[i])
    }
}
console.log(eventoDetalles[0]);
var texto = document.getElementById("contenedor_detalles")//poner id en el container de detalles
texto.innerHTML=`nombre del evento : ${eventoDetalles[0].name}`
