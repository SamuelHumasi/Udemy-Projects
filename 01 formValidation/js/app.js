//validacion de formularios
//variables
const btnEnviar = document.querySelector("#enviar");
const resetBtn = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');


//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


eventListener()
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

     //reset email
     resetBtn.addEventListener('click', resetForm);

    //enviar email
    formulario.addEventListener('submit', enviarEmail);

   
}

//functions
function iniciarApp() {
    btnEnviar.disabled = true
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//valida el formulario
function validarFormulario (e) {

    
    if (e.target.value.length > 0){
        //elimina mensaje de error
        const error = document.querySelector('p.error')
        if(error) {
            error.remove()
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
    
    if(e.target.type==='email'){
       
        //const resultado = e.target.value.indexOf("@")
        if(regexp.test( e.target.value )){
            const error = document.querySelector('p.error')
            if(error) {
                error.remove()
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
            //mostrarError('Email valido')
        }else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valido');
        }
    }

    if(regexp.test( email.value ) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }else{
        btnEnviar.disabled = true
        btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formulario.appendChild(mensajeError)
    } 
}

function enviarEmail (e) {
    e.preventDefault()
    //mostrar spinner
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex'
    //despues de 3 segundos oculta el spinner
    setTimeout( () => {
        spinner.style.display = 'none';
        //Mensaje de enviado
        const parrafo = document.createElement('p')
        parrafo.textContent = 'El mensaje fue enviado con exito'
        parrafo.classList.add('text-center', 'text-white', 'bg-green-500', 'p-2', 'my-10', 'font-bold')
        //Inserta el mensaje
        formulario.insertBefore(parrafo, spinner)

        setTimeout(() => {
            parrafo.remove()
            resetForm()
        }, 4000);

    },3000)
}

function resetForm(e) {
    e.preventDefault()
    formulario.reset();
    iniciarApp()
    
}

