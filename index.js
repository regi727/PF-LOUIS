

//Script cesta-info
let cestaIcono = document.querySelector("#icono-cesta");
let cesta = document.querySelector(".contenedorCesta");
let cerrarCarrito = document.querySelector("#cerrarCarrito");

cestaIcono.onclick = () => {
    cesta.classList.add("active");
}
cerrarCarrito.onclick = () => {
    cesta.classList.remove("active");
}
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}  
//Fin Script cesta-info

function ready() {
    //Eliminar producto en el carrito de compra
    let borrarProducto = document.getElementsByClassName('fa-trash')
   
    for (let i = 0; i < borrarProducto.length; i++) {
        let boton = borrarProducto[i]
        boton.addEventListener("click", eliminarProd);
    }
   
}
//funcion eliminar item
function eliminarProd(e) {
    let click = e.target
    click.parentElement.remove();
    actualizarTotal();
}




const agregarCarrito = document.querySelectorAll('.add-carrito')
//console.log(agregarCarrito);

agregarCarrito.forEach(buttonAgregar => {
    buttonAgregar.addEventListener('click', addToCart);
})

const contenedorCesta = document.querySelector('.contenedorCesta');

function addToCart(e) {
   const btn = e.target;
   // console.log(btn)
   const producto = btn.closest('.productos')
   //console.log(producto)
   const titulo = producto.querySelector('.titulo-prod').textContent;
   const precio = producto.querySelector('.precio-p').textContent;
   const imgProd = producto.querySelector('.img-prod').src;
  
  agregarAlcesta(titulo,precio,imgProd)
}

function  agregarAlcesta(titulo,precio,imgProd) {
    const agregarFila = document.createElement('div');

    let contenedorCaja = `
    <div class="cestaDetalle">
    
        <div class="caja-cesta">
            <img src=${imgProd} class="cart-img" alt="">
            <div class="detalle-box">
                <div class="productoTitulo">${titulo}</div>
                <div class="productoPrecio">${precio}</div>
                <input type="number" value="1" min="1" class="cantidadProducto">
            </div>
            <i class="fa-solid fa-trash"></i>
            <!--Total-->
            <div class="total">
                <div class="tituloTotal">Total :</div>
                <div class="precioTotal">0</div>
            </div>
            <button class="btn-comprar" name="submit">Comprar ahora</button>
            <i class="fa-solid fa-x" id="cerrarCarrito"></i>
        </div>
    </div> `;

    agregarFila.innerHTML = contenedorCaja;
    contenedorCesta.append(agregarFila);   

    actualizarTotal();
}
function actualizarTotal() {
    let total = 0;
    const precioTotal = document.querySelector('.precioTotal');
    
    const cestaDetalle = document.querySelectorAll('.cestaDetalle')
   
    cestaDetalle.forEach((cestaDetalles) => {
       const cestaDetallesprecio = cestaDetalles.querySelector('.productoPrecio');
       const carritoPrecio = Number(cestaDetallesprecio.textContent.replace('CLP',''));
       console.log(cestaDetallesprecio );
    
       
       
    })
}


// codigo Registrar ***********************************

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    let telefono = document.getElementById("telefono").value;

    let usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        telefono: telefono
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);

    // Guardar en LocalStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("userForm").reset();
    Swal.fire({
        icon: 'success',
        title: 'Registro correcto',
        text: 'Gracias por registrarte' 
    });
});

//Fin codigo Reginstrar ***********************************
































/**

//funcion cambiar cantidad de item
function cambiarCant(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    actualizarTotal();
    console.log(input)
}
//Actualizar total
function actualizarTotal() {
    let cestaDetalle = document.getElementsByClassName("cesta-detalle")[0];
    let cajaCesta = cestaDetalle.getElementsByClassName("caja-cesta");

    let total = 0;
    for (let i = 0; i < cajaCesta.length; i++) {
        let caja = cajaCesta[i]
        let precioProd = caja.getElementsByClassName("productoPrecio")[0];
        let cantidadProd = caja.getElementsByClassName("cantidadProducto")[0];
        
        let precio = parseFloat(precioProd.innerText.replace("CLP", ""));
        let cantidadP = cantidadProd.value;
        total = total + (precio * cantidadP);
        
       
        //En caso el precio es un numero decimal
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("precioTotal")[0].innerText = "CLP" + total;
    }
}





function agregarProd(e) {
    let buttonAgregar = e.target;
    let contenedorProd = buttonAgregar.parentElement;

    let titulo = contenedorProd.getElementsByClassName("titulo-prod").textContent
    let precio = contenedorProd.getElementsByClassName("precio-p").textContent
    let prodImg = contenedorProd.getElementsByClassName("img-prod").src;
    //console.log(titulo,precio,prodImg);
    agregarAlCarrito(titulo, precio, prodImg);
    actualizarTotal();
}

//Fin Eliminar producto en el carrito de compra

//Actualizar total
function actualizarTotal() {
    let cestaDetalle = document.getElementsByClassName('cesta-detalle')[0];
    let cajaCesta = cestaDetalle.getElementsByClassName('caja-cesta')

    let total = 0;

    for (let i = 0; i < cajaCesta.length; i++) {
        let caja = cajaCesta[i]
        let precioProd = caja.getElementsByClassName('productoPrecio')[0];
        let cantidadProd = caja.getElementsByClassName('cantidadProducto')[0];

        let precio = parseFloat(precioProd.innerText.replace("CLP", ""));
        let cantidadP = cantidadProd.value
        total = total + (precio * cantidadP);
        //En caso el precio es un numero decimal
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('precioTotal')[0].innerText = "CLP" + total;

    }
} 
  */
 
//Fin Actualizar total







/* 

//script de registro
let user = document.getElementById("nombre");
let correo = document.getElementById("email");
let password1 = document.getElementById("password");
let password2 = document.getElementById("repitPass");
let cellphone = document.getElementById("telefono");

document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    registroUsuarios();
});

let baseDatos = [];
let registro = { user, correo, password1, password2, cellphone };

function registroUsuarios() {
    user = document.getElementById("nombre").value;
    correo = document.getElementById("email").value;
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("repitPass").value;
    cellphone = document.getElementById("telefono").value;


    // let correoPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (user != "" || correo != "" || password1 != "" || password2 != "" || cellphone != "") {
        baseDatos.push(registro);

        if (password1 != password2) {
            alert("las contrasenas no coinciden")
        } else {
            baseDatos.push(registro)
            alert("Gracias por registrarse")//Aca se va un sweetAlert
            console.log(baseDatos);
        }

        user = document.getElementById("nombre").value = '';
        correo = document.getElementById("email").value = '';
        password1 = document.getElementById("password").value = '';
        password2 = document.getElementById("repitPass").value = '';
        cellphone = document.getElementById("telefono").value = '';
    } else {
        alert("Por favor rellene todos los campos");
    }
} */

/* 






// Agregar al carrito con local estorage
function agregaAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("nombre_item"));
    console.log(memoria);
    if (memoria) {
        const nuevoProducto = getNuevoProducto(producto);
        localStorage.setItem('nombreItem', JSON.stringify([nuevoProducto]));
    } else {
        const indiceProducto = memoria.findIndex(nombreProducto => nombreProducto.id)
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProducto(producto))
        } else {
            nuevaMemoria[indiceProducto].cantidad++;
        }
        localStorage.setItem("nombreProducto", JSON.stringify(nuevaMemoria));
    }
}
//Toma un producto y agregar la cantidad 1
function getNuevoProducto(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuntaCarrito = document.getElementById("Id-numeroCarrito");
function actualizarCarrito() {
    const memoria = JSON.parse(localStorage.getItem("nombreItem"));
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0);
    cuntaCarrito.innerText = cuenta;
}
actualizarCarrito(); */











/* 
/**Ocultar productos
const vermas = ()=>{
    let element = document.getElementById("masproducto");
    element.className = "visible";
    let link = document.getElementById("link");
    link.className = "oculto"
    let ocultar = document.getElementById("ocultar");
    ocultar.className ="visible"

}
const ocultar = ()=>{
    document.getElementById("link").className = "visible";
    document.getElementById("ocultar").className = "oculto";
    document.getElementById("masproducto").className = "oculto";
}
/**Fin Ocultar productos**/


/**JS Ocultar productos
let inputName = document.getElementById('inputName');
let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');
let inputConfPass = document.getElementById('inputConfPass');
let selectCountry = document.getElementById('selectCountry');

let inputCorreo = document.getElementById('inputCorreo');
let inputContrasena = document.getElementById('inputContrasena');

let userForm = document.getElementById('userForm');
userForm.addEventListener('submit', registrar);
let userLogin = document.getElementById('userLogin');
userLogin.addEventListener('submit', login);

let registroUsuarios =[];


function registrar(e) {
    e.preventDefault();


    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user has been registed',
        showConfirmButton: false,
        timer: 1500
    })

}

function iniciarSesion(e) {
    e.preventDefault();

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 1500
    })
}
/** Fin JS Ocultar productos**/

/**JS contenedor-productos
let contenedorprod = document.querySelector('.contenedor-productos');


/**JS contenedor-productos */