
// codigo Registrar ***********************************

document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;
    let repitPass = document.getElementById("repitPass").value;
   
    let usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        repitPass: repitPass,
        
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (nombre != "" || correo != "" || contrasena != "" || repitPass != "" ) {

        

        if (repitPass === contrasena) {

            let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (regexEmail.test(correo)) {
                
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
                window.location.href = "login.html";

            } else {
                document.getElementById("mensaje").textContent = "Por favor ingrese un email valido.";
            }
        } else {
            document.getElementById("mensaje").textContent = "las contraseñas no coinciden.";
        }
    } else {
        document.getElementById("mensaje").textContent = "Por favor rellene todo los campos.";
    }
});



//Formulario de subscripcion




//Fin Formulario de subscripcion
