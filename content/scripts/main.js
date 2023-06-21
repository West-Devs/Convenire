let flValidado;

function init() {
    flValidado = localStorage.getItem('flValidado');

    if(flValidado == null) {
        flValidado = localStorage.setItem('flValidado', false);
    }

    checkUsuarioValidado(flValidado);
    
}

function checkUsuarioValidado(flValidado) {
    let header = document.getElementById("header");
    
    if(flValidado === true) {
        header.innerHTML = 
        `
        <h1>Convenire</h1>
        <div class="perfil-button-container">
            <button class="perfil-button">
                <div class="perfil-img-container">
                    <img class="perfil-img" src="./content/img/perfil-user.svg" alt="Foto de Perfil">
                </div>
                Fulano da Silva
            </button>
        </div>
        `;
    } else {
        header.innerHTML = 
        `
        <h1>Convenire</h1>
        <div class="header-btns">
            <button><a class="cadastrar" href="register.html">Cadastrar</a></button>
            <button><a class="entrar" href="profile.html">Entrar</a></button>
        </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init()
});