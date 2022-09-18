crear un selector para id="lista de cursos",
ya que agregares un eventlistener para que
cuando se precione el boton agregar a carrito se vayan agregando los elentos

## criando as variáveis
    carrito = selecionamos el carrito;
    
    lista cursos = son todos los cursos;
    
    contenedor carrito = selecciona la tabla del carito espedificamete el tbody

    vaciar carrito = boton de vaciar carrito

**gerar HTML dinamicamente e adicioná-lo ao tbody**

## funciones

    cargar eventlistener = esta funcion registra todos los eventlistener

    agregar curso = cundo presiono en el boton agragar carrito se agregan los cursos
*prevent event bubling con e.target.classlist.contains(clase agregar-carrito)*
    
    leerDatosCurso = lee el contenido del HTML y extrae la informacion del curso adicionandola a un objeto de nobre info curso (seleccionando informacion a traves de queryselector).
    Agrega los elementos a la array 'articulos carrito' (objetos) con spray operator(...)

*creamos la variable articulos carrito, que es una array donde iremos agrenado los objetos que en este caso con los cursos que deseo comprar*

    carritoHTML = genera el html vazado en la variable ARTICULOSCARRITO,
        Limpia el HTML=limpia el html del contenedorCarrito para que no vuelva agregarse
    
    


**video 119 explica resumen del proyecto minuto 8:45**
