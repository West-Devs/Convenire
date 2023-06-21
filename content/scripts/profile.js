let dados = [];

function init() {
    localStorage.setItem('flValidado', false);

    document.getElementById("btn-cadastrar").addEventListener("click", () => {
        validaCadastro(dados)
    });
}

function validaCadastro(dados) {
    let flValidado = true;

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
    }

    var minhaFlag = localStorage.getItem('flValidado');

    console.log(minhaFlag);
}

document.addEventListener('DOMContentLoaded', () => {
    init()
});