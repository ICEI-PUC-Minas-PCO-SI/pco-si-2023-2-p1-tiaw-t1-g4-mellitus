const URL = 'https://api-mellitus-server.vercel.app/'

/*
    User
*/

// Pega todos os usuarios
const getUsuarios = async () => {
    try {
        const res = await fetch(`${URL}user?_sort=id&_order=asc`);
        const usuarios = await res.json();
        return usuarios;
    } catch {
        alert('Erro ao obter usuários!');
    }
};

// Cria um novo usuario com base no formato que esta no json
const createUser = async (user) => {
    try {
        const res = await fetch(`${URL}user`, { method: "POST", body: JSON.stringify(user) })
        return res.json()
    } catch {
        alert('Erro na criação do usuário!')
    }
}

// Pega um usuario especifico com base no seu id
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

// Atualiza um usuario
const updateUsuario = async (idBusca, updateNome, updateAge, updateGender, updateGoal, updateEmail, updateLogin, updatePassword) => {
    try {
        const updateUser = {
            id: idBusca,
            Nome: updateNome,
            Age: updateAge,
            Gender: updateGender,
            Goal: updateGoal,
            Email: updateEmail,
            Login: updateLogin,
            Password: updatePassword
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

// Delete um usuario com base no seu id
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


/*
    Meals
*/

// Pega comidas com base na sessão que for passada
const getMeals = async (section) => {
    try {
        const res = await fetch(`${URL}meals/?section=${section}`);
        const meals = await res.json();
        return meals;
    } catch {
        alert('Erro ao recupearar a sessão');
    }
}

// Pega uma refeição especifica
const getMealDetails = async (mealId) => {
    try {
        const res = await fetch(`${URL}/meals/${mealId}`);
        const mealDetails = await res.json();
        return mealDetails;
    } catch (error) {
        throw alert(error.mensagem);
    }
};

// Função para criar uma nova refeição
const createMeal = async (section, name, measure, amount, carbs, calories) => {
    try {
        const res = await fetch(`${URL}/meals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                section,
                name,
                measure,
                amount,
                carbs,
                calories,
            }),
        });

        const newMeal = await res.json();
        return newMeal;
    } catch (error) {
        console.error('Erro ao criar a refeição', error);
        throw error;
    }
};

// Função para atualizar os detalhes de uma refeição existente
const updateMeal = async (mealId, updatedMealData) => {
    try {
        const res = await fetch(`${URL}/meals/${mealId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedMealData),
        });

        const updatedMeal = await res.json();
        return updatedMeal;
    } catch (error) {
        console.error('Erro ao atualizar a refeição', error);
        throw error;
    }
};

// Função para excluir uma refeição existente
const deleteMeal = async (mealId) => {
    try {
        const res = await fetch(`${URL}/meals/${mealId}`, {
            method: 'DELETE',
        });

        const deletedMeal = await res.json();
        return deletedMeal;
    } catch (error) {
        console.error('Erro ao excluir a refeição', error);
        throw error;
    }
};
/*
    Article
*/

// Pega todos os artigos
const getArticles = async () => {
    try {
        const res = await fetch(`${URL}article`);
        const articles = await res.json();
        return articles;
    } catch {
        alert('Erro ao recuperar os artigos.');
    }
}