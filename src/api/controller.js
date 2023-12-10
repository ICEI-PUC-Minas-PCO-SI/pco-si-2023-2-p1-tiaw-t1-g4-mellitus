const URL = 'http://localhost:3000/'

const createUser = async (user) => {
    try {
        const res = await fetch(`${URL}user`, { method: "POST", body: JSON.stringify(user) })
        return res.json()
    } catch {
        alert('Erro na criação do usuário!')
    }
}

const getUsuarios = async () => {
    try {
        const res = await fetch(`${URL}user?_sort=id&_order=asc`);
        const usuarios = await res.json();
        return usuarios;
    } catch {
        alert('Erro ao obter usuários!');
    }
};

const getUsuario = async (idBusca) => {
    let response = {
        resultado: false,
        mensagem: "",
        dados: ""
    };

    try {
        const res = await fetch(`${URL}user/${idBusca}`);

        if (!res.ok) {
            throw new Error(`O usuário não foi encontrado.`);
        }

        const usuario = await res.json();
        response.resultado = true;
        response.mensagem = "Usuário encontrado com sucesso.";
        response.dados = usuario;
    } catch (error) {
        response.mensagem = error.message;
    }

    return response;
};

const setUsuario = async (newNome, newLogin, newSenha) => {
    try {
        const usuariosResponse = await fetch(`${URL}user?_sort=id&_order=desc&_limit=1`);
        const usuarios = await usuariosResponse.json();

        const lastId = usuarios.length > 0 ? usuarios[0].id + 1 : 1;

        const newUser = {
            id: lastId,
            nome: newNome,
            login: newLogin,
            senha: newSenha
        };

        const newUserResponse = await fetch(`${URL}usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!newUserResponse.ok) {
            throw new Error('Erro ao criar usuário');
        }

        const newUserResult = await newUserResponse.json();
        return newUserResponse;
    } catch (error) {
        alert(error.message);
    }
};

const updateUsuario = async (idBusca, updateNome, updateLogin, updateSenha) => {
    try {
        const updateUser = {
            id: idBusca,
            nome: updateNome,
            login: updateLogin,
            senha: updateSenha
        };

        const updateUserResponse = await fetch(`${URL}user/${idBusca}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        });

        if (!updateUserResponse.ok) {
            throw new Error('Erro ao atualizar usuário');
        }

        const updateUserResult = await updateUserResponse.json();
        return updateUserResult;
    } catch (error) {
        alert(error.message);
    }
};

const deletaUsuario = async (idBusca) => {
    try {
        const deleteUserResponse = await fetch(`${URL}user/${idBusca}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!deleteUserResponse.ok) {
            throw new Error('Erro ao excluir usuário');
        }

        const deleteUserResult = await deleteUserResponse.json();
        return deleteUserResult;
    } catch (error) {
        alert(error.message);
    }
};
