function calcularGasto() {
    var kmPercorridos = parseFloat(document.getElementById("kmPercorridos").value);
    var valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);

    var gastoCombustivel = (kmPercorridos / 8) * valorCombustivel;
    
    document.getElementById("gastoCombustivel").innerHTML = "Gasto com combustível: R$ " + gastoCombustivel.toFixed(2);
}
