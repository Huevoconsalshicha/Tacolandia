let listProductHTML = document.querySelector('.listProduct');
let productosMain = document.querySelectorAll('.item');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let btnOtroCliente = document.getElementById('btnOtroCliente');
let products = [];
let cart = [];
let pedidoCliente = [];
let pedidoMesa = [];
let numeroPersona = document.getElementById('personas-en-mesa');

let totalPagar = document.querySelector('.total-pagar');





btnOtroCliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    //console.log(" arreglo cart: ", cart);
    numeroPersona.textContent = parseInt(numeroPersona.textContent)+1;
    if (cart.length>0){
        console.log(cart.length);
        cart.forEach(taco => {

            pedidoCliente.push({
                id: taco.product_id,
                nombre: taco.name,
                precio: taco.price,
                cantidad: taco.quantity,
                numeroPersona:numeroPersona.textContent
            });
        });
    
        agregarPedidoPersona();
        cart = [];
    
        addCartToHTML();
        addCartToMemory();

    }else{
        console.log(cart.length);
        Swal.fire({
            title: "No hay productos",
            text: "Escoger productos antes de agregar otra persona",
            icon: "error",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Aceptar
            `,
        });
    }
    

    // Aquí puedes hacer algo con el arreglo pedidoCliente, como enviarlo a un servidor o realizar cálculos adicionales
});




const agregarPedidoPersona = () => {
    const fragmento = document.createDocumentFragment();
    if(cart.length > 0) // HACERLO CON EL CART Y NO CON EL PEDIDO CLIENTEEEEEEEEEEE
    {
        const clienteElemento = document.createElement('div');
        let contenidoA = '';
        // Recorrer la lista de clientes y concatenar los detalles
        for (let i = 0; i < cart.length; i++) {
            const cliente = cart[i];
            //if (cliente.numeroPersona.textContent == numeroPersona.textContent){
            //    console.log(cliente.nombre, "      ", cliente.numeroPersona.textContent, "cliente                 ",numeroPersona.textContent, "NumeroPersona" );
                contenidoA += `
                <div class="el-producto">
                    <strong class="nombre-producto mb-1">${cliente.name}</strong>
                    <strong class="cantidad-producto mb-1">${cliente.quantity}</strong>
                    <strong class="precio-producto mb-1">$${cliente.price}</strong>
                </div>
            `;
            //}
            
        }
        clienteElemento.innerHTML = `
            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
                <div class="d-flex flex-column w-100 align-items-start">
                    <strong class="mb-1"> Persona No. ${numeroPersona.textContent}</strong>
                    ${contenidoA}
                    <strong class="mb-1"> Total total</strong>
                </div>
            </a>
        `;

        // Agregar el elemento cliente al fragmento
        fragmento.appendChild(clienteElemento);

        // Seleccionar el contenedor de pedidos
        const contenedorPedidos = document.querySelector('.pedidosPersona');

        // Agregar el fragmento al contenedor de pedidos
        contenedorPedidos.appendChild(fragmento);
        
    }
}

const addDataToHTML = () => {
    // remove datas default from HTML
    //console.log("data to html", products);
        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('productoCarro');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2 class="nombre">${product.nombre}</h2>
                <div class="price">$${product.precio}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let id_product = positionClick.parentElement.dataset.id;
        let productName = positionClick.parentElement.querySelector('.nombre').innerText;
        let productPrice = parseFloat(positionClick.parentElement.querySelector('.price').innerText.replace('$', ''));
        
        const totalActual = parseFloat(totalPagar.textContent.substring(1));
        const nuevoTotal = totalActual + productPrice;
        totalPagar.textContent = `$${nuevoTotal}`;
        addToCart(id_product, productName, productPrice);
    }
});

const addToCart = (product_id, productName, productPrice) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            name: productName,
            price: productPrice,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {

    //totalPagar.textContent = `$${newTotalPagar.toFixed(2)}`;
    
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        console.log("carrroooooooooooooooooooo          ", cart);
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
           
                <div class="name">
                ${item.name}
                </div>
                <div class="totalPrice">$${info.precio * item.quantity}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span class="cantidadTacos">
                        <input type="text" value="${item.quantity}"   style="width: 30px;" /> <h5 style="display: none;">${info.id}</h5>
                    </span>
                    
                    
                    <span class="plus">+</span>
                </div>
            `;
        })
    }
    //iconCartSpan.innerText = totalQuantity;
}




listCartHTML.addEventListener('click', (event) => {
    
    console.log("");
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})



// Agregar un event listener para el evento 'input'
listCartHTML.addEventListener('input', (event) => {
    // Obtener el valor del input
    let nuevoTotal=0;
    const valor = event.target.value;
    const padre = event.target.parentNode;
    const valorId = padre.querySelector('h5').innerText;
    const abuelo = padre.parentNode;
    const bisabuelo = abuelo.parentNode;
    let precio = bisabuelo.querySelector('.totalPrice');

    console.log(precio, "       precio");

    //console.log("Valooooor", valor)
    // Verificar si el valor es un número
    if (!isNaN(valor) && valor !== '' && valor !== ' ') {
        //let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);

        cart.forEach(item => {

            console.log(item)
            if (item.product_id == valorId){
                item.quantity = valor;
                let nuevoPrecio = item.quantity*item.price;
                console.log(nuevoPrecio, "          nuevo PReciooo");
                precio.textContent = `$${nuevoPrecio}`;
                
                console.log(item.product_id, 'exitoso');
            }else{
                console.log(item.product_id, "fallido");
            }
             nuevoTotal += (item.quantity*item.price);
            //let positionProduct = products.findIndex((value) => value.id == item.product_id);
            
        })
        totalPagar.textContent = `$${nuevoTotal}`;
        

        
    } else {
        // Si el valor no es un número, puedes borrar el contenido del input o manejarlo de otra manera
        event.target.value = '';
        console.log('Por favor, ingrese solo números');
    }
})



const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    console.log(" product_id:    ", product_id, "    type: ", type);
    const totalActual = parseFloat(totalPagar.textContent.substring(1));
    let nuevoTotal=0;
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        let positionProduct = products.findIndex((value) => value.id == info.product_id);
        let informacion = products[positionProduct];
        switch (type) {
            case 'plus':
                console.log("plus");
                nuevoTotal = totalActual + informacion.precio;
                totalPagar.textContent = `$${nuevoTotal}`;
                cart[positionItemInCart].quantity = parseInt(cart[positionItemInCart].quantity) + 1;
                break;
        
            default:
                let changeQuantity = parseInt(cart[positionItemInCart].quantity) - 1;
                console.log("minus");
                nuevoTotal = totalActual - informacion.precio;
                totalPagar.textContent = `$${nuevoTotal}`;

                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

    // Hacer una solicitud AJAX para obtener los datos de los productos
    
const initApp = () => {
    // get data product
    fetch('/productos/cosas/')
    .then(response => response.json())
    .then(data => {
        
        products = data.productos;
        console.log("entro al cosas", products);
        addDataToHTML();
    
        // Agregar los productos a la lista en la plantilla
       /* const listProduct = document.getElementById('list-productos');
        productos.forEach(producto => {
            console.log("entro a la lista productos", producto.nombre, producto.id_producto, producto.precio);
            const item = document.createElement('div');
            item.textContent = `Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
            console.log("antes del appendchild", item);
            listProduct.appendChild(item);
        });*/
    })
    .catch(error => console.error('Error al obtener los productos:', error));
}
initApp(); 