const URL = 'http://localhost:3000/'

function getUsuarios(){
    fetch(`${URL}usuarios`).then(res => res.json()).then(usuarios => {
        return usuarios;
    })
}

function getUsuario(idBusca = null, nomeBusca = null){

    let response = {
        resultado: false,
        mensagem: "",
        dados: ""
    };

    if(idBusca !== null || nomeBusca !== null){
        fetch(`${URL}usuarios`).then(res => res.json()).then(usuarios => {
            for (let i = 0; i < usuarios.length; i++) {
                let usuario = usuarios[i];
                if(idBusca === null){
                    if(usuario.nome == nomeBusca){
                        response.resultado = true;
                        response.mensagem = "Usuario encontrado.";
                        response.dados = usuario;
                        return response;
                    }
                }

                if(nomeBusca === null){
                    if(usuario.id == usuario.id){
                        response.resultado = true;
                        response.mensagem = "Usuario encontrado.";
                        response.dados = usuario;
                        return response;
                    }
                }
            }
        })
    }else{
        response.mensagem = "Nenhum identificador foi informado.";
    }

    return response;
}
