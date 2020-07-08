function validar() {
    var nombre, apellidos, correo, usuario, clave, telefono, expresion;

    //- Obtenga los datos ingresados en el formulario y almacenarlos en variables (cada dato ingresado debe ir almacenado en una variable).    
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    correo = document.getElementById("correo");
    usuario = document.getElementById("usuario");
    clave = document.getElementById("pass");
    telefono = document.getElementById("telefono");
    expresion = /\w+@\w+\.+[a-z]/;

    //- Validar que los campos no esten vacios.    
    if (nombre.value.trim() === "" || apellidos.value.trim() === "" || correo.value === "" || usuario.value === "" || clave.value === "" || telefono.value === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    //- Validar que el campo nombre no supere los 30 caracteres
    else if (nombre.value.length > 30) {
        alert("El nombre no puede superar los 30 caracteres");
        return false;
    }

    //- Que sea del tipo "string" el dato ingresado.
    else if (parseInt(nombre.value)) {
        alert("El nombre ingresado no es válido, solo puede incluir letras");
        return false;
    }

    //- Validar que el campo apellidos no supere los 80 caracteres.
    else if (apellidos.value.length > 80) {
        alert("Los Apellidos no pueden superar los 80 caracteres");
        return false;
    }

    //- Que sea del tipo "string" el dato ingresado.
    else if (parseInt(apellidos.value)) {
        alert("Los apellidos ingresados no son válidos, solo pueden incluir letras");
        return false;
    }

    //- Que el campo correo requiera los signos necesarios ("@" ".")
    else if (!expresion.test(correo.value)) {
        alert("El correo ingresado no es válido");
        return false;
    }

    //- Validar que el campo correo no supere los 100 caracteres.
    else if (correo.value.length > 100) {
        alert("El correo no puede superar los 100 caracteres");
        return false;
    }

    //- Que el campo usuario no supere los 20 caracteres.    
    else if (usuario.value.length > 20) {
        alert("El nombre de usuario no puede superar los 20 caracteres");
        return false;
    }

    //- Que el campo clave no supere los 20 caracteres. 
    else if (clave.value.length > 20) {
        alert("La clave no puede superar los 20 caracteres");
        return false;
    }

    //- Que el campo teléfono no supere los 15 caracteres.
    else if (telefono.value.length > 15) {
        alert("El teléfono no puede superar los 15 dígitos");
        return false;
    }

    //- Que el campo teléfono acepte solo datos numéricos.
    else if (isNaN(telefono.value)) {
        alert("El teléfono ingresado no es válido, solo puede incluir números");
        return false;
    }

    //- Mostrar un mensaje con un saludo de bienvenida a quien acaba de registrarse. Mostrando su nombre completo, usuario y contraseña.
    else {
        alert("Gracias por registrarte " + nombre.value + " " + apellidos.value + "\n Te recordamos que tus datos de acceso son: " + "\n Usuario: " + usuario.value + "\n Contraseña: " + clave.value);
    }
}