const API_BASE_URL = "https://api-mellitus-server.vercel.app/";

const isAuthedPage = (pageUrl = "") => pageUrl.includes("MeuGuia");

const createUser = async (userDto) => {
  const res = await fetch(API_BASE_URL + "user", {
    method: "POST",
    body: JSON.stringify(userDto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const userAlreadyExists = async (email) => {
  const users = await fetch(API_BASE_URL + "user").then((res) => res.json());
  const user = users.some((user) => {
    return user.email === email;
  });
  return user ?? null;
};

const getUserByCredentials = async (credentials) => {
  const users = await fetch(API_BASE_URL + "user").then((res) => res.json());
  const user = users.find(
    (user) =>
      user.email === credentials.email && user.password === credentials.password
  );
  return user ?? null;
};

const register = async (dto) => {
  const alreadyExists = await userAlreadyExists(dto.email);
  console.log(alreadyExists);
  if (alreadyExists) {
    return alert("Já existe um usuário associado a este email.");
  } else await createUser(dto);
  await login({ email: dto.email, password: dto.password });
};

const login = async (credentials) => {
  const foundUser = await getUserByCredentials(credentials);
  console.log(foundUser);
  if (!foundUser)
    return alert(
      "Email ou senha estão incorretos, verifique e tente novamente."
    );
  else {
    setCookie("user", JSON.stringify(foundUser), 1);
    handleAppBar(true);
    document.location.href = "/";
  }
  return foundUser;
};

const logout = () => {
  deleteCookie("user");
  handleAppBar(false);
  document.location.href = "/";
};

const handleAppBar = (authed) => {
  const appBar = document.querySelector("header");
  const currentPage = document.location.href.slice(
    document.location.href.lastIndexOf("/") + 1
  );
  console.log(currentPage);

  if (!appBar) return;

  if (authed) {
    appBar.innerHTML = `<nav class="navbar fixed-top navbar-expand-md">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img height="48" width="48" src="/src/assets/images/logo.png"
                alt="Logo do Mellitus" /></a>
        <button class="navbar-toggler custom rounded-3" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
            id="menuButton">
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="offcanvas w-50 offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <span class="offcanvas-title" id="offcanvasNavbarLabel">
                    Mellitus
                </span>
                <button class="btn-close custom" type="button" data-bs-dismiss="offcanvas"
                    aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link ${
                          currentPage === "/" || currentPage === "index.html"
                            ? active
                            : ""
                        }" href="/"><i class="fa-solid fa-house"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${
                          currentPage === "/" ||
                          currentPage === "CalculoGlicemia.html"
                            ? active
                            : ""
                        }" aria-current="page" href="/src/pages/CalculoGlicemia.html"><i
                                class="fa-solid fa-calculator"></i>Cálculo de
                            Glicemia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${
                          currentPage === "/" ||
                          currentPage === "Alimentacao.html"
                            ? active
                            : ""
                        }" href="/src/pages/Alimentacao.html"><i class="fa-solid fa-bowl-food"></i>Alimentação</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${
                          currentPage === "/" || currentPage === "MeuGuia.html"
                            ? active
                            : ""
                        }" href="/src/pages/MeuGuia.html"><i class="fa-solid fa-book-open-reader"></i>Meu
                            Guia</a>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <!--Aqui coloquei o símbolo do usuário-->
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-regular fa-circle-user fa-2xl"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>`;
  } else {
    appBar.innerHTML = ` <nav class="navbar fixed-top navbar-expand-md">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img height="48" width="48" src="/src/assets/images/logo.png"
                alt="Logo do Mellitus" /></a>
        <button class="navbar-toggler custom rounded-3" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
            id="menuButton">
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="offcanvas w-75 offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <span class="offcanvas-title" id="offcanvasNavbarLabel">
                    Mellitus
                </span>
                <button class="btn-close custom" type="button" data-bs-dismiss="offcanvas"
                    aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link ${
                          currentPage === "/" || currentPage === "index.html"
                            ? active
                            : ""
                        }" href="/"><i class="fa-solid fa-house"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  ${
                          currentPage === "/" ||
                          currentPage === "CalculoGlicemia.html"
                            ? active
                            : ""
                        }" aria-current="page" href="/src/pages/CalculoGlicemia.html"><i
                                class="fa-solid fa-calculator"></i>Cálculo de
                            Glicemia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  ${
                          currentPage === "/" ||
                          currentPage === "Alimentacao.html"
                            ? active
                            : ""
                        }" href="/src/pages/Alimentacao.html"><i class="fa-solid fa-bowl-food"></i>Alimentação</a>
                    </li>
                </ul>
                <ul class="navbar-nav auth-items">
                    <li class="nav-item">
                        <a class="nav-link" href="/src/pages/login.html"><i
                                class="fa-solid fa-arrow-right-to-bracket"></i>Logar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/src/pages/register.html"><i class="fa-solid fa-pen-to-square"></i>Cadastrar</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>`;
  }
};

const authenticate = () => {
  console.log("rodei");
  const isAuthed = !!getCookie("user");
  if (isAuthed) {
    handleAppBar(true);
  } else if (!isAuthedPage(window.location.href)) {
    handleAppBar(false);
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

const loginForm = document.getElementById("login-form");
if (loginForm)
  loginForm.onsubmit = (ev) => {
    ev.preventDefault();
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

    login({
      email: email.value,
      password: password.value,
    });
  };

const registerForm = document.getElementById("register-form");
if (registerForm)
  registerForm.onsubmit = (ev) => {
    ev.preventDefault();
    const email = document.getElementById("register-email");
    const password = document.getElementById("register-password");
    const age = document.getElementById("register-age");
    const genre = document.getElementById("register-genre");
    const name = document.getElementById("register-name");

    register({
      email: email.value,
      password: password.value,
      age: age.value,
      genre: genre.value,
      name: name.value,
    });
  };

window.onload = authenticate;

setTimeout(authenticate, 60 * 60 * 1000);
