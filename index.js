
/* 
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
   
}*/
/* //funcion eliminar item
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
      const carritoCantidad = cestaDetalles.querySelector('.cantidadProducto')
      
      const carritoPrecio = Number(cestaDetallesprecio.textContent.replace('CLP',''));
      const cantidadItem = Number(carritoCantidad.value); 
     
      console.log(total)
      total = total + carritoPrecio * cantidadItem;
      console.log(total)
    })
    precioTotal.innerHTML =`${total}CLP`
}


 */




























