/*
*OBTENIENDO ELEMENTOS
*/

const btnMenu=document.getElementById("btn-menu")
const menu=document.getElementById("menu")
const btnNight=document.querySelector("#btn-night-mode")
const body=document.querySelector("#body")
const items=document.querySelectorAll(".item")

/*
*EVENTOS
*/

//Desplegar menu

btnMenu.addEventListener("click", desplegarMenu)
//Modo noche

btnNight.addEventListener("click", nightMode)
//Ocultar Menú
items.forEach(item=>{
    item.addEventListener("click", ocultarMenú)
})

/*
*FUNCIONES
*/

//Desplegar menu
function desplegarMenu(){
    menu.classList.toggle("active-list")
}

function nightMode(){
    body.classList.toggle("night-mode")
}

function ocultarMenú(){
    menu.classList.remove("active-list")
}