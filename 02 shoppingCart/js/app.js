// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners ()
function cargarEventListeners () {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo
        limpiarHTML(); //elimina todo el HTML
    })
}


//Funciones
function agregarCurso(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

// elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHtml();
    }
}

//lee el contenido HTML al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso){
    const infoCurso = {
        imagem : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
        if(existe) {
            //actualizamos la cantidad
            const cursos = articulosCarrito.map(curso => {
                if( curso.id === infoCurso.id ) {
                    curso.cantidad++;
                    return curso; // retorna el objeto actualizado
                } else {
                    return curso; //retorna los objetos que no son los duplicados
                }
            });
            articulosCarrito = [...cursos];
        }else {
            //agrega elementos al arreglo de carrito
            articulosCarrito = [...articulosCarrito, infoCurso]
        }

    //agrega elementos al arreglo 
    //articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);

    carritoHtml();
}

//muestra el carrito de compras en el HTML
function carritoHtml() {

    //limpiar el HTML
    limpiarHTML()
    //recorre el carrito y genera el HTML

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagem}" width = "100">            
        </td>
        <td> ${curso.titulo} </td>
        <td> ${curso.precio} </td>
        <td> ${curso.cantidad} </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a>
        </td>
        `;
        //agrega el HTML del carrito  en el tbody
        contenedorCarrito.appendChild(row)
    })
}

function limpiarHTML() {
   // forma lenta
   // contenedorCarrito.innerHTML = '';
   
   // Melhor performance
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}
