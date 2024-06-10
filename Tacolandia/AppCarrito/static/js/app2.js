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




btnOtroCliente.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    //console.log(" arreglo cart: ", cart);
    numeroPersona.textContent = parseInt(numeroPersona.textContent)+1;

    cart.forEach(taco => {
        pedidoCliente.push({
            id: taco.product_id,
            nombre: taco.name,
            precio: taco.price,
            cantidad: taco.quantity,
            numeroPersona:numeroPersona.textContent
        });

        pedidoMesa.push({
            id: taco.product_id,
            nombre: taco.name,
            precio: taco.price,
            cantidad: taco.quantity,
            numeroPersona:numeroPersona.textContent
        });

        

    });


    console.log(pedidoCliente);
    agregarPedidoPersona();
    cart = [];

    
    addCartToHTML();
    addCartToMemory();

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
                //console.log("hay mas de 0 productos");
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id_producto;
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
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            //console.log("entro en el for cart: ", item, "       carrrrrrrrrrroooooo",cart);
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            //console.log("positionProduct    ", positionProduct, "   item.id_producto", item.product_id,"       ", item);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
           
                <div class="name">
                ${info.nombre}
                </div>
                <div class="totalPrice">$${info.precio * item.quantity}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span class="cantidadTacos">
                        <input type="text" value="${item.quantity}"   style="width: 30px;" />
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
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    console.log(" product_id:    ", product_id, "    type: ", type);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                console.log("plus");
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                console.log("minus");
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
    console.log("initAPpp");
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