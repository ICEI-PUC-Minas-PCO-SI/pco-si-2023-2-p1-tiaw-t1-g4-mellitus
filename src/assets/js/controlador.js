URL = 'http://localhost:3000/usuarios'

fetch(URL).then(res => res.json()).then(usuarios => {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios);
    }
})