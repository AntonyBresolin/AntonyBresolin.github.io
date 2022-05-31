//loading para processos

function showLoading() {
    const div = document.createElement("div");
    div.classList.add("loading");

    const textLoading = document.createElement("h2");
    textLoading.innerText = "Carregando...";

    div.appendChild(textLoading);

    document.body.appendChild(div);
    
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();
    }
}