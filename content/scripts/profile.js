let dados = [];

function init() {
    localStorage.setItem('flValidado', false);

    document.getElementById("btn-cadastrar").addEventListener("click", () => {
        validaCadastro(dados)
    });
}

function validaCadastro(dados) {
    let flValidado = true;
    
    var btnCadastrar = document.getElementById("btn-cadastrar");
    btnCadastrar.innerHTML = 
    `
    <svg class="loader" xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
    `; 

    document.querySelectorAll("#form-cadastro input").forEach(d => {
        flValidado = true;
        let element = document.getElementById(d.id)

        let existingSpan = element.nextElementSibling;
        
        let spanError = document.createElement("span");
        spanError.innerText = "Campo obrigatório";
        spanError.classList.add("error");

        if (existingSpan && existingSpan.tagName === "SPAN") {
            existingSpan.remove();
        }

        if(d.value == null || d.value == "") {
            flValidado = false;
            element.classList.add("input-error");

            element.insertAdjacentElement("afterend", spanError);

        } else {
            let existingSpan = element.nextElementSibling;

            if (existingSpan && existingSpan.tagName === "SPAN") {
                existingSpan.remove();
            }

            element.classList.remove("input-error");
        }

        if(d.id == "email" && !d.value.includes("@") && !d.value.includes(".com")) {
            flValidado = false;
            
            element.classList.add("input-error");
            spanError.innerText = "Por favor, digite um E-mail válido"
            element.insertAdjacentElement("afterend", spanError);
        }
    });
    
    if(flValidado) {
        localStorage.setItem('flValidado', flValidado);

        setTimeout(function() {
        btnCadastrar.innerHTML = 
        `
        <h4>Cadastro concluído!<h4/>
        `; 
        btnCadastrar.classList.add("shake-element")
            //window.location.href = "index.html";
        }, 2000);

        setTimeout(function() {
            window.location.href = "index.html";
        }, 4500);

    } else {
        btnCadastrar.innerHTML = 
        `
        Cadastrar
        `; 
    }

    var minhaFlag = localStorage.getItem('flValidado');

    console.log(minhaFlag);
}

document.addEventListener('DOMContentLoaded', () => {
    init()
});