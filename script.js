function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade Grau II";
    } else if (imc >= 40) {
        classificacao = "Obesidade Grau III (mórbida)";
    }

    
    document.getElementById("resultado").innerHTML = `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}
