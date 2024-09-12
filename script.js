/*
*OBTENIENDO ELEMENTOS
*/

const btnMenu=document.getElementById("btn-menu")
const menu=document.getElementById("menu")
const btnNight=document.querySelector("#btn-night-mode")
const body=document.querySelector("#body")

/*
*EVENTOS
*/

//Desplegar menu

btnMenu.addEventListener("click", desplegarMenu)
//Modo noche

btnNight.addEventListener("click", nightMode)

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