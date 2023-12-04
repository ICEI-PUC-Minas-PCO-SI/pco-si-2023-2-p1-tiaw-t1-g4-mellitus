const URL = 'http://localhost:3000/'

function getUsuarios() {
    fetch(`${URL}usuarios?_sort=id&_order=asc`).then(res => res.json()).then(usuarios => {
        return usuarios;
    })
}

function getUsuario(idBusca) {
    let response = {
        resultado: false,
        mensagem: "",
        dados: ""
    };

    return fetch(`${URL}usuarios/${idBusca}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`O usuario não foi encontrado.`);
            }
            return res.json();
        })
        .then(usuario => {
            response.resultado = true;
            response.mensagem = "Usuario encontrado com sucesso.";
            response.dados = usuario;
            return response;
        })
        .catch(error => {
            response.mensagem = error.message;
            return response;
        });
}

function setUsuario(newNome, newLogin, newSenha) {

    let lastId;

    fetch(`${URL}usuarios?_sort=id&_order=desc&_limit=1`).then(res => res.json()).then(usuarios => {
        console.log(usuarios);
        lastId = usuarios[0].id + 1;
        console.log(lastId);

        let newUser = JSON.stringify({
            id: lastId,
            nome: newNome,
            login: newLogin,
            senha: newSenha
        });

        console.log(newUser);

        fetch(`${URL}usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newUser
        }).then(res => res.json())
    })

}

function updateUsuario(idBusca, updateNome, updateLogin, updateSenha) {

    let updateUser = JSON.stringify({
        id: idBusca,
        nome: updateNome,
        login: updateLogin,
        senha: updateSenha
    });

    fetch(`${URL}usuarios/${idBusca}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: updateUser
    }).then(res => res.json())
}

function deletaUsuario(idBusca) {

    fetch(`${URL}usuarios/${idBusca}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
}