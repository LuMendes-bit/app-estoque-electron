var formProduto = document.getElementById("form-produto")
function cadastrarProduto(event) {
    event.preventDefaut()
    var produto = document.getElementById("nome-produto").value
    var quantidade = document.getElementById("quantidade-produto").value
    var imagem = document.getElementById("imagem-produto").value

    console.log(produto)
    console.log(quantidade)
    console.log(imagem)
}
formProduto.addEventListener("submit", cadastrarProduto)