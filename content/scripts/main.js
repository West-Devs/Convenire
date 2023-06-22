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
    
    if(flValidado == "true") {
        header.innerHTML = 
        `
        <h1>Convenire</h1>
        <div class="perfil-button-container">
            <button id="openModal" class="perfil-button">
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
            <button id="openModal">Abrir Modal</button>
        </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await init().then(function() {
            var modal = document.getElementById("modal");
            var openModalButton = document.getElementById("openModal");
            var closeButton = document.getElementsByClassName("close")[0];
            openModalButton.onclick = function() {
            modal.style.display = "block";
            }
            closeButton.onclick = function() {
            modal.style.display = "none";
            }

            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
});