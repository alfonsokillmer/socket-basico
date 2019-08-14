var socket = io();

socket.on('connect', function(){

    console.log('Conectado al servidor');

})

// escuchar
socket.on('disconnect', function(){

    console.log('Perdimos la conexión con el servidor');

})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'PonchoelCrack',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('respuesta server', resp);
});

socket.on('enviarMensaje', function(mensaje){

    console.log('Servidor: ', mensaje);

})