const formulario = document.getElementById('formulario-solicitud');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    if (nombre && correo && telefono) {
        // Enviar el formulario
        console.log('Formulario enviado:', nombre, correo, telefono);
    } else {
        // Mostrar un mensaje de error
        console.log('Por favor, completa todos los campos');
    }
});