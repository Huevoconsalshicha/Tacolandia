

// Obtener referencia al botón/icono de carrito y al contenedor de productos del carrito
const btnCart = document.querySelector('.container-icon');
const contenedorPedidos = document.querySelector('.container-cart-products');
// Obtener todos los botones "Añadir al carrito"
const addToCartButtons = document.querySelectorAll('.addToCart');

// Agregar evento de clic al botón/icono de carrito
btnCart.addEventListener('click', (event) => {
    // Evitar que el evento se propague y cierre el contenedor de productos del carrito
    //event.stopPropagation();
    jalo=true;
    console.log("jalooo", jalo);

    // Cambiar el estado de visibilidad del contenedor de productos del carrito
    contenedorPedidos.classList.toggle('hidden-cart');
});

// Event listener para cerrar el contenedor del carrito cuando se haga clic fuera de él
document.addEventListener('click', (event) => {
    // Verificar si el clic ocurre fuera del contenedor de productos del carrito y del botón/icono de carrito
    if (!contenedorPedidos.contains(event.target) && !btnCart.contains(event.target) /*&& !addToCartButtons.contains(event.target)*/) {
        // Ocultar el contenedor de productos del carrito
        contenedorPedidos.classList.add('hidden-cart');
    }
       
    
});


// Evitar que el cuadro del carrito se cierre cuando se hace clic dentro de él
/*contenedorPedidos.addEventListener('click', (event) => {
    // Evitar que el evento se propague al contenedor del documento
    jalo=true;
    console.log("Esta entrando al eliminar");
    event.stopPropagation();
});
*/





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var quitarUno=0;
var jalo = true;
function agregarEventoEliminar() {
    
    const deleteButtons = document.querySelectorAll('.icon-close');

    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];

        button.addEventListener('click', () => {
            const productContainer = button.closest('.cart-product');
            const productName = productContainer.querySelector('.titulo-producto-carrito').textContent;
            const productPrice = parseFloat(productContainer.querySelector('.precio-producto-carrito').textContent.substring(1));

            let existingProduct = document.querySelector(`.cart-product[data-name="${productName}"]`);

            if (existingProduct  && jalo) {
                const cantidadProducto = existingProduct.querySelector('.cantidad-producto-carrito');
                const cantidad = parseInt(cantidadProducto.textContent) - 1;
                cantidadProducto.textContent = cantidad;
                

                const contadorProductos = document.getElementById('contador-productos');
                contadorProductos.textContent = parseInt(contadorProductos.textContent) -1;
                

                const precioProducto = existingProduct.querySelector('.precio-producto-carrito').textContent;
                const precioProductoNumber = parseFloat(precioProducto.substring(1));

                //console.log("precioProductoNumber", precioProductoNumber, " / ", cantidad, "    cantidadProducto");
                var precioIndividualProducto=precioProductoNumber/(cantidad+1);
                const newTotal = precioProductoNumber - precioIndividualProducto;

                
                //console.log("   ",precioProductoNumber, "  - ",  precioIndividualProducto, " = ", newTotal);
                existingProduct.querySelector('.precio-producto-carrito').textContent = `$${newTotal}`;

                const totalPagar = document.querySelector('.total-pagar');
                const currentTotal = parseFloat(totalPagar.textContent.substring(1));
                const newTotalPagar = currentTotal - precioIndividualProducto;
                totalPagar.textContent = `$${newTotalPagar.toFixed(2)}`;

                jalo = false; // Salir de la función después de procesar el evento de clic
                if (cantidad === 0) {
                    existingProduct.remove();
                }
                
                
            }
            
        });
        
    }
    
}




// Añadir evento de clic a cada botón "Añadir al carrito"
addToCartButtons.forEach(button => {

    button.addEventListener('click', () => {
        // Obtener información del producto asociado al botón
        const productContainer = button.closest('.item');
        console.log("este es el . item, al parecer es lo que saca del boton, ta raro: ", productContainer);
        const productName = productContainer.querySelector('h2').textContent;
        const productPrice = parseFloat(productContainer.querySelector('.price').textContent.substring()); // Obtener el precio del producto como número
        
        console.log(productPrice ,"     precio del producto");
        // Verificar si el producto ya está en el carrito
        let existingProduct = document.querySelector(`.cart-product[data-name="${productName}"]`);
        if (existingProduct) {
            // Si el producto ya está en el carrito, incrementar la cantidad y actualizar el total
            const cantidadProducto = existingProduct.querySelector('.cantidad-producto-carrito');
            const cantidad = parseInt(cantidadProducto.textContent) + 1;
            cantidadProducto.textContent = cantidad;

            const precioProducto = existingProduct.querySelector('.precio-producto-carrito').textContent;
            const precioProductoNumber = parseFloat(precioProducto.substring(1)); // Eliminar el signo de dólar y convertir a número
            const newTotal = precioProductoNumber + productPrice;
            existingProduct.querySelector('.precio-producto-carrito').textContent = `$${newTotal}`;
            console.log("precioProductoNumber ", precioProductoNumber,"*", cantidad, "cantidad");

            // Actualizar el total a pagar en el carrito
            const totalPagar = document.querySelector('.total-pagar');
            const currentTotal = parseFloat(totalPagar.textContent.substring(1)); // Obtener el total actual como número
            const newTotalPagar = currentTotal + productPrice;
            totalPagar.textContent = `$${newTotalPagar.toFixed(2)}`;
        } else {
            // Si el producto no está en el carrito, crear un nuevo elemento para representar el producto en el carrito
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart-product');
            cartProduct.setAttribute('data-name', productName); // Agregar un atributo para identificar el producto
            cartProduct.innerHTML = `
            <div class="info-cart-product" d-flex w-100 align-items-center justify-content-between>
                <p class="titulo-producto-carrito">${productName}</p>
            
                <div class="quantity">
                    <span class="minus">-</span>
                    <span class="cantidad-producto-carrito">1</span>
                    <span class="plus">+</span>
                </div>
            
                <span class="precio-producto-carrito">$${productPrice.toFixed(2)}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>
            `;

            // Agregar el nuevo producto al contenedor de productos del carrito
            const contenedorPedidos = document.querySelector('.container-cart-products');
            contenedorPedidos.appendChild(cartProduct);

            // Actualizar el total a pagar en el carrito
            const totalPagar = document.querySelector('.total-pagar');
            const currentTotal = parseFloat(totalPagar.textContent.substring(1)); // Obtener el total actual como número
            const newTotalPagar = currentTotal + productPrice;
            totalPagar.textContent = `$${newTotalPagar.toFixed(2)}`;
        }

        // Actualizar el contador de productos en el icono de carrito
        const contadorProductos = document.getElementById('contador-productos');
        contadorProductos.textContent = parseInt(contadorProductos.textContent) + 1;
        agregarEventoEliminar();
    });
});





// Obtener referencia al botón "Enviar Pedido"
const btnEnviarPedido = document.getElementById('btnEnviarPedido');

// Agregar evento de clic al botón "Enviar Pedido"
btnEnviarPedido.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    
    // Obtener los datos del carrito
    const cartProducts = document.querySelectorAll('.cart-product');
    
    // Convertir los datos del carrito en un formato adecuado (por ejemplo, objeto JSON)
    const cartData = [];
    cartProducts.forEach(product => {
        const productName = product.querySelector('.titulo-producto-carrito').textContent;
        const productPrice = parseFloat(product.querySelector('.precio-producto-carrito').textContent.substring(1));
        const productQuantity = parseInt(product.querySelector('.cantidad-producto-carrito').textContent);
        cartData.push({
            name: productName,
            price: productPrice,
            quantity: productQuantity
        });
    });

    // Realizar una solicitud POST al backend con los datos del carrito
    fetch('{% url "pedido" %}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Agregar cualquier otro encabezado necesario
        },
        body: JSON.stringify(cartData)
    })
    .then(response => {
        // Manejar la respuesta del backend si es necesario
        console.log('Solicitud enviada con éxito');
    })
    .catch(error => {
        // Manejar errores de la solicitud
        console.error('Error al enviar la solicitud:', error);
    });
});



// Obtener referencia al botón "Enviar Pedido"
const btnOtroCliente = document.getElementById('btnOtroCliente');

// Agregar evento de clic al botón "Enviar Pedido"
btnOtroCliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    var contadorPersonas = document.getElementById('personas-en-mesa');

    const pedidoCliente = [];
    
    // Obtener los datos del carrito   (los tacos de 1 persona)
    const tacosCliente = document.querySelectorAll('.cart-product');        //creo que de aqui puedes sacer

    //const contenedorCliente = button.closest('.item');
    //const clienteName = contenedorCliente.querySelector('h2').textContent;
    //const totalCliente = parseFloat(contenedorCliente.querySelector('.price').textContent.substring()); // Obtener el precio del producto como número

    // Convertir los datos del carrito en un formato adecuado (por ejemplo, objeto JSON)
    var total=0;
    tacosCliente.forEach(product => {
        const productName = product.querySelector('.titulo-producto-carrito').textContent;
        const productPrice = parseFloat(product.querySelector('.precio-producto-carrito').textContent.substring(1));
        const productQuantity = parseInt(product.querySelector('.cantidad-producto-carrito').textContent);
        pedidoCliente.push({
            name: productName,
            price: productPrice,
            quantity: productQuantity
        });
        total += productPrice;
    });

// Crear un fragmento de documento
const fragmento = document.createDocumentFragment();

// Crear el elemento <a> fuera del bucle
const clienteElemento = document.createElement('div');
clienteElemento.classList.add('cliente-pedido');

// Iniciar el contenido del elemento <a>
let contenidoA = '';

// Recorrer la lista de clientes y concatenar los detalles
for (let i = 0; i < pedidoCliente.length; i++) {
    const cliente = pedidoCliente[i];
    contenidoA += `
        <div>
            <strong class="mb-1">${cliente.name}</strong>
            <small class="text-muted">${cliente.price}</small><br>
            
        </div>
    `;
}

// Finalizar el contenido del elemento <a>
contenidoA += `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>
`;

// Establecer el contenido del elemento <a>
clienteElemento.innerHTML = `
    <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">

        <div class="d-flex flex-column w-100 align-items-start">
            <strong class="mb-1"> Persona No. ${contadorPersonas.textContent}</strong>
            ${contenidoA}
            <strong class="mb-1"> Total ${total}</strong>
        </div>
    </a>
`;
console.log("contador personas: ", contadorPersonas);
contadorPersonas.textContent = parseInt(contadorPersonas.textContent)+1;

// Agregar el elemento cliente al fragmento
fragmento.appendChild(clienteElemento);

// Seleccionar el contenedor de pedidos
const contenedorPedidos = document.querySelector('.pedidosPersona');

// Agregar el fragmento al contenedor de pedidos
contenedorPedidos.appendChild(fragmento);

console.log(tacosCliente, "     tacosClienteeeeeeeeeeeeeeeeeeeeeeeeee", pedidoCliente)

tacosCliente.forEach(taco => {
    taco.remove(); // Eliminar completamente el elemento
});








const cartProducts = document.querySelectorAll('.container-cart-products');

cartProducts.forEach(cartProduct => {
    cartProduct.addEventListener('click', function(event) {
        console.log("Entro al listener");
        if (event.target.classList.contains('minus') || event.target.classList.contains('plus')) {
            console.log("Se hizo clic en el botón de cantidad:", event.target);
            let positionClick = event.target;
            let product_id = positionClick.parentElement.parentElement.dataset.id;
            let type = 'minus';
            if (positionClick.classList.contains('plus')) {
                type = 'plus';
            }
            console.log("type:", type, ", product_id:", product_id);
            changeQuantityCart(product_id, type);
        }
    });
});

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    //addCartToHTML();
    //addCartToMemory();
}
});