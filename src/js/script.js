function toggleMenu() {
    var menu = document.querySelector('ul');
    if(menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
 }
 
 var hamburgerButton = document.querySelector('.menu-hamburguer');
 hamburgerButton.addEventListener('click', toggleMenu);
 
 
 window.addEventListener('scroll', function(){
     let header = document.querySelector('#header')
     header.classList.toggle('rolagem', window.scrollY > 0)
 })






 document.getElementById('fecharCarrinho').addEventListener('click', function() {
    document.getElementById('carrinho').classList.add('carrinho-fechado');
    document.getElementById('carrinho').classList.remove('carrinho-aberto');
});

// Exemplo de função para adicionar produtos (você deve adaptar conforme sua lógica de adicionar produtos)
function adicionarProduto(produto, preco) {
    // Implementação para adicionar produto ao carrinho
    // Atualize a soma dos produtos e o total de compra
}

// Exemplo de função para calcular o total da compra
function calcularTotalCompra() {
    // Implementação para calcular o total da compra
}

// Exemplo de função para finalizar o pedido
document.getElementById('finalizarPedido').addEventListener('click', function() {
    // Implementação para finalizar o pedido
});
