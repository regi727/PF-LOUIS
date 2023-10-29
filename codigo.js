/* 
let contenedor = document.querySelector('.contenedor-productos');
let compraProd = document.querySelector('.cestaDetalle');
let compra =[];

//Creamos funciones
loadEventListener();
function loadEventListener() {
    contenedor.addEventListener('click', agregarProducto);

}
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('.btn-add1')) {
        const cargarProducto = e.target.parentElement;
        leerContenido(cargarProducto);

        console.log(cargarProducto)
    }
}

function leerContenido(producto) { //A modficar
    const infoProducto = {
        img: producto.querySelector('.img-prod').src,
        titulo: producto.querySelector('.titulo-prod').textContent,
        precio: producto.querySelector('.precio-p').textContent,
        id: producto.querySelector('button').getAttribute('id'),
        cantidad: 1
    }
    compra = [...compra,infoProducto]
    cargarHTML();
    console.log(infoProducto);
}
function cargarHTML(){
    limpiarHtml();
    compra.forEach(producto =>{
        const {img,titulo,precio,id,cantidad} = producto;
        const fila = document.createElement('div')
        fila.classList.add('productos')
        fila.innerHTML = `
            <img src="${img}" class="cart-img" alt="">
            <div class="detalle-box">
                <div class="${titulo}">Lapto lenovo</div>
                <div class="${precio}">CLP 100</div>
                <h5>Cantidad: ${cantidad}</h5>
                <input type="number" value="1" min="1" class="cantidadProducto">
            </div>
            <i class="fa-solid fa-trash" id="${id}"></i>
        `;
        compraProd.appendChil(fila)

    });  
}
function limpiarHtml() {
    compraProd.innerHTML = "";
}

*/









//Script cerrar y abrir carrito
document.addEventListener("DOMContentLoaded", function () {
    let cestaIcono = document.querySelector("#icono-cesta");
    let cesta = document.querySelector(".contenedorCesta");
    let cerrarCarrito = document.querySelector("#cerrarCarrito");

    cerrarCarrito.addEventListener("click", function () {
        cesta.classList.remove("active");
    });
    cestaIcono.addEventListener("click", function () {
        cesta.classList.add("active");
    });
});
//Fin Script  cerrar y abrir carrito

//Eliminar producto en el carrito de compra
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}
function ready() {
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
    //actualizarTotal();
} 




const agregarCarrito = document.querySelectorAll('.add-carrito')
//console.log(agregarCarrito);

agregarCarrito.forEach(buttonAgregar => {
    buttonAgregar.addEventListener('click', addToCart);
})

const contenedorCesta = document.querySelector('.add-product');

function addToCart(e) {
    const btn = e.target;
    //console.log(btn)
    const producto = btn.closest('.productos')
    //console.log(producto)
    const titulo = producto.querySelector('.titulo-prod').textContent;
    const precio = producto.querySelector('.precio-p').textContent;
    const imgProd = producto.querySelector('.img-prod').src;

    agregarAlcesta(titulo, precio, imgProd)
}

function agregarAlcesta(titulo, precio, imgProd) {
    const agregarFila = document.createElement('div');

    let contenedorCaja = `
        <div class="add-product">
                <div class="cestaDetalle ">
                    <div class="caja-cesta">
                        <img src="${imgProd}" class="cart-img" alt="">
                            <div class="detalle-box">
                                <div class="${titulo}">Lapto lenovo</div>
                                <div class="${precio}">CLP 100</div>
                                <input type="number" value="1" min="1" id="cantidadProducto">
                            </div>
                            <i class="fa-solid fa-trash" id="borrarProd"></i>

                        </div>
                        <!--Total-->
                        <div class="total">
                            <div class="tituloTotal">Total :</div>
                            <div class="precioTotal"> 0</div>
                        </div>
                        <a href="comprar.html"><button class="btn-comprar" name="submit">Comprar ahora</button></a>
                        <i class="fa-solid fa-x" id="cerrarCarrito"></i>
                    </div>  
                </div> 
        </div>`;

    agregarFila.innerHTML = contenedorCaja;
    contenedorCesta.append(agregarFila);
}
/* function eliminarProducto(e) {
    if (e.target.classList.contains('fa-solid')) {
        const borrar = e.target.getAtribute('cerrarCarrito');
        contenedorCesta.filter(producto => producto.id !== borrar);
    }
    agregarCarrito();

}
 */










