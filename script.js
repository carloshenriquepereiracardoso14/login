const container = document.querySelector('.container');

const btnRegister = document.querySelector('.cadastro-btn');

const btnLogin = document.querySelector('.login-btn');

btnRegister.addEventListener('click', () => {
    container.classList.add('active')
});

btnLogin.addEventListener('click', () => {
    container.classList.remove('active')
});