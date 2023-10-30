
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
    if (nombre != "" || correo != "" || contrasena != "" || repitPass != "" || telefono != "") {

        if (repitPass === contrasena) {
            // Guardar en LocalStorage

            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            console.log(usuario)
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
    } else {
        document.getElementById("mensaje").textContent = "Por favor rellene todo los campos.";
    }
});


//Codigo formulario de subscribirse ***********************************

document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let correo = document.getElementById("email-subscribe").value;
    console.log(correo)
    if(correo === "" ) {
        document.getElementById("mensaje").textContent = "Por favor debes ingresar un email.";
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Suscripción correcta',
            text: 'Gracias por subscribirse'
        });
    }
})

//Fin codigo formulario de subscribirse  ***********************************