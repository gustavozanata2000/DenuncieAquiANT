//caixas de login e registro
const loginBox = document.querySelector('.form-box.login');
const registerBox = document.querySelector('.form-box.register');

//links de troca
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

//botões de fechar
const closeButtons = document.querySelectorAll('.icon-close');

//trocar entre login e registro
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
});

//fechar as caixas ao clicar no ícone fechar
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Esconde ambas as caixas
        loginBox.style.display = 'none';
        registerBox.style.display = 'none';
    });
});