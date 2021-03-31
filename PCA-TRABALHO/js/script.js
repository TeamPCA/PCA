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




// ANIMAÇÃO SCROLL

function animacaoScroll(){
const sections = document.querySelectorAll(".js-scroll");
const metadeTela = window.innerHeight * 0.6;
function scroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const visibleSection = (sectionTop - metadeTela) < 0
        if(visibleSection) {
            section.classList.add('ativo')
        }
    })
}
scroll()
sections.forEach((item) => {
    window.addEventListener('scroll', scroll)
})
}
animacaoScroll()

// ANIMAÇÃO SCROLL




