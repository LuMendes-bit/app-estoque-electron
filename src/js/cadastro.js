var formProduto = document.getElementById("form-produto")
    
var listaProdutos = []

formProduto.addEventListener("submit", function(event) {
    event.preventDefault()
    var produto = document.getElementById("nome-produto").value
    var quantidade = document.getElementById("quantidade-produto").value
    var imagem = document.getElementById("imagem-produto").value

    console.log(produto)
    console.log(quantidade)
    console.log(imagem)

    var objetoProduto = {
        nome: produto,
        quantidade: quantidade,
        imagem: imagem
    }

    listaProdutos.push(objetoProduto)
})