const API_BASE_URL = "https://api-mellitus-server.vercel.app/";

const createUser = async (userDto) => {
  const res = await fetch(API_BASE_URL + "user", {
    method: "POST",
    body: JSON.stringify(userDto),
  });
  return res.json();
};

const getUserByCredentials = async (credentials) => {
  const users = await fetch(API_BASE_URL + "user").then((res) => res.json());
  const user = new Array(users).find(
    (user) =>
      user.email === credentials.email && user.password === credentials.password
  );
  return user ?? null;
};

const register = async (dto) => {
  const alreadyExists = await routes.getUserByCredentials({
    email: dto.email,
    password: dto.password,
  });
  if (alreadyExists) {
    return alert("Já existe um usuário associado a este email.");
  } else
    await routes.createUser({
      name: "João Vieira",
      age: 21,
      gender: "male",
      goal: "enhance health",
      email: "joaopedro.castrovieira@gmail.com",
      password: "123",
      recentMeals: [],
    });
};
