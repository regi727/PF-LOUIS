
// codigo Registrar ***********************************

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    let repitPass = document.getElementById("repitPass").value;
    let telefono = document.getElementById("telefono").value;

    let usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        repitPass: repitPass,
        telefono: telefono
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (repitPass === contrasena) {
        // Guardar en LocalStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("userForm").reset();
       
        Swal.fire({
            icon: 'success',
            title: 'Registro correcto',
            text: 'Gracias por registrarte'
        });
        document.getElementById("mensaje").style.display = 'none';

    } else {
        document.getElementById("mensaje").textContent = "las contraseñas no coinciden.";
    }
    ValidarCorreo(correo);
    usuarios.push(usuario);
    
});

/* 
//Validar correo

function ValidarCorreo(correo1) {
    let validarEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let correop = validarEmail.test(correo1);
    
    if (correop === true) {
        document.getElementById("mensaje").style.display = 'none';
       
    } else {
        document.getElementById("mensaje").textContent = "Ingrese un email valido";
    }
}
 */

//Fin codigo Reginstrar ***********************************


// codigo formulario de contacto  ***********************************
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let mensaje = document.getElementById("text-mesage").value;

    let mensajes = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        
    };
    let mensajesEnv = JSON.parse(localStorage.getItem("mensajesEnv ")) || [];
   
    
    if (name != "" || email != "" || mensaje != "") {
       
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado con exito',
            text: 'Gracias por contactarnos'
        });
       
    }else{
        localStorage.setItem("mensajesEnv ", JSON.stringify(mensajesEnv ));
        document.getElementById("mensaje").textContent = "Por favor, rellene todos los campos.";
    }
    mensajesEnv.push(mensajes);

})

//Fin codigo formulario de contacto ***********************************