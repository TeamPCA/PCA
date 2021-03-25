function eventosTrabalho() {
const login = document.querySelector('.login-btn');
const logando = document.querySelector('.login');
const logando2 = document.querySelector('.container-login');
const fechar = document.querySelector('.login a');
function showLogin(event) {
    logando.classList.add('ativo');
    logando2.classList.add('ativo');
}
function closeAll() {
    logando.classList.remove('ativo');
    logando2.classList.remove('ativo');
}
login.addEventListener('click', showLogin);
fechar.addEventListener('click', closeAll);
}
eventosTrabalho();





