/*
*OBTENIENDO ELEMENTOS
*/

const btnMenu=document.getElementById("btn-menu")
const menu=document.getElementById("menu")

/*
*EVENTOS
*/

//Desplegar menu

btnMenu.addEventListener("click", desplegarMenu)


/*
*FUNCIONES
*/

//Desplegar menu
function desplegarMenu(){
    menu.classList.toggle("active-list")
}