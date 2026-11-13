
let testeCurto = null;
let testeDetalhado = null;

// Estimativa educativa de tokens de entrada
function estimarTokens(texto) {
    return Math.ceil(texto.trim().length / 4);
}

// Executa o teste curto
function executarCurto() {
    const prompt = document.getElementById("promptCurto").value;

    if (!prompt.trim()) {
        alert("Digite um prompt curto!");
        return;
    }

    const entrada = estimarTokens(prompt);

    // Valores ilustrativos de saída
    const saida = 45;

    const total = entrada + saida;

    testeCurto = { entrada, saida, total };

    document.getElementById("entradaCurta").textContent = entrada;
    document.getElementById("saidaCurta").textContent = saida;
    document.getElementById("totalCurto").textContent = total;

    compararResultados();
}

// Executa o teste detalhado
function executarDetalhado() {
    const prompt = document.getElementById("promptDetalhado").value;

    if (!prompt.trim()) {
        alert("Digite um prompt detalhado!");
        return;
    }

    const entrada = estimarTokens(prompt);

    // Valores ilustrativos de saída
    const saida = 180;

    const total = entrada + saida;

    testeDetalhado = { entrada, saida, total };

    document.getElementById("entradaDetalhada").textContent = entrada;
    document.getElementById("saidaDetalhada").textContent = saida;
    document.getElementById("totalDetalhado").textContent = total;

    compararResultados();
}

// Compara os dois testes
function compararResultados() {
    if (!testeCurto || !testeDetalhado) {
        document.getElementById("comparacao").textContent =
            "Execute os dois testes para comparar.";

        return;
    }

    const curto = testeCurto.total;
    const detalhado = testeDetalhado.total;

    const maior = Math.max(curto, detalhado);

    document.getElementById("barraCurta").style.width =
        (curto / maior * 100) + "%";

    document.getElementById("barraDetalhada").style.width =
        (detalhado / maior * 100) + "%";

    let resultado = "";

    if (curto > detalhado) {
        resultado = "O prompt curto consumiu mais tokens.";
    } else if (detalhado > curto) {
        resultado = "O prompt detalhado consumiu mais tokens.";
    } else {
        resultado = "Os dois prompts consumiram a mesma quantidade de tokens.";
    }

    document.getElementById("comparacao").textContent =
        resultado +
        " Curto: " + curto +
        " tokens. Detalhado: " + detalhado +
        " tokens.";
}

// Limpa os resultados
function limparResultados() {
    testeCurto = null;
    testeDetalhado = null;

    const campos = [
        "entradaCurta",
        "saidaCurta",
        "totalCurto",
        "entradaDetalhada",
        "saidaDetalhada",
        "totalDetalhado"
    ];

    campos.forEach(id => {
        document.getElementById(id).textContent = "0";
    });

    document.getElementById("barraCurta").style.width = "0%";
    document.getElementById("barraDetalhada").style.width = "0%";

    document.getElementById("comparacao").textContent =
        "Execute os dois testes para comparar.";
}
