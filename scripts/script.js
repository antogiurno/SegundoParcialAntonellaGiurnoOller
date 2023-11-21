var usuarios = [
    { nombre: 'Antonela', apellido: 'Giurno', usuario: 'agiurno@gmail.com', tipoUsuario: 'cliente', contraseña: 'cli123' },
    { nombre: 'Cobo', apellido: 'Sanchez', usuario: 'csanchez@gmail.com', tipoUsuario: 'administrador', contraseña: 'adm123' },
    { nombre: 'Gema', apellido: 'Lopez', usuario: 'glopez@gmail.com', tipoUsuario: 'profesional', contraseña: 'pro123' }
];



document.getElementById('sign-in-btn').addEventListener('click', function () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var usuario = validarUsuario(email, password);
    if (usuario) {
        redireccionarUsuario(usuario.tipoUsuario);
    } else {
        alert('Credenciales incorrectas');
    }
});

function validarUsuario(email, password) {
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === email && usuarios[i].contraseña === password) {
            return usuarios[i];
        }
    }
    return null;
}

function redireccionarUsuario(tipoUsuario) {
    switch (tipoUsuario) {
        case 'cliente':
            window.location.href = 'clientes.html';
            break;
        case 'profesional':
            window.location.href = 'profesionales.html';
            break;
        case 'administrador':
            window.location.href = 'administradores.html';
            break;
        default:
            alert('Tipo de usuario no reconocido');
            break;
    }
}