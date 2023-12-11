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

const login = async (credentials) => {
  console.log("teste");
  const getUserByCredentials =
    routes.getUserByCredentials(getUserByCredentials);
  const foundUser = await getUserByCredentials(credentials);

  if (!foundUser)
    return alert(
      "Email ou senha estão incorretos, verifique e tente novamente."
    );
  else {
    setCookie("user", JSON.stringify(foundUser), 1);
    handleAppBar(true);
    window.location.href = "/src/pages/index.html";
  }
  return foundUser;
};

const logout = () => {
  deleteCookie("user");
  handleAppBar(false);
  window.location.href = "/src/pages/index.html";
};

const handleAppBar = (authed) => {
  const appBar = document.querySelector("headeder > nav");
  console.log(appBar, authed);
};

const authenticate = () => {
  console.log("rodei");
  const isAuthed = !!getCookie("user");
  if (isAuthed) {
    handleAppBar(true);
  } else {
    logout();
  }
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const deleteCookie = (cname) => {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

setTimeout(authenticate, 60 * 60 * 1000);
