function calcularTotalVenda() {
    var valorProduto1 = parseFloat(document.getElementById("productValue1").value);
    var quantidadeProduto1 = parseInt(document.getElementById("productQuantity1").value);

    // Repetir para os outros dois produtos

    var totalVenda = (valorProduto1 * quantidadeProduto1);
    
    document.getElementById("totalVenda").innerHTML = "Total da venda: R$ " + totalVenda.toFixed(2);
}
