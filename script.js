// Função MAIOR_MENOR
function maiorMenor() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);
    const num5 = parseInt(document.getElementById('num5').value);

    const values = [num1, num2, num3, num4, num5];
    const maior = Math.max(...values);
    const menor = Math.min(...values);

    document.getElementById('maiorMenorResult').textContent = `Maior: ${maior}, Menor: ${menor}`;
}

// Função VOGAL
function vogal() {
    const char = document.getElementById('caractere').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = vowels.includes(char) ? 1 : 0;
    document.getElementById('vogalResult').textContent = `Resultado: ${result}`;
}

// Função LIMITES
function limites() {
    const li = parseInt(document.getElementById('li').value);
    const ls = parseInt(document.getElementById('ls').value);
    let pares = [];
    let somatorio = 0;

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            pares.push(i);
            somatorio += i;
        }
    }
    document.getElementById('limitesResult').textContent = `Números Pares: ${pares.join(', ')}, Somatório: ${somatorio}`;
}

// Função ORDEM
function ordem() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);

    const values = [a, b, c].sort((x, y) => x - y);
    document.getElementById('ordemResult').textContent = `Ordenados: ${values.join(', ')}`;
}

// Função POSITIVO_NEGATIVO
function positivoNegativo() {
    const x = parseInt(document.getElementById('valor').value);
    const result = x >= 0;
    document.getElementById('positivoNegativoResult').textContent = `É positivo? ${result}`;
}

// Função PAR_IMPAR
function parImpar() {
    const x = parseInt(document.getElementById('numero').value);
    const result = x % 2 === 0;
    document.getElementById('parImparResult').textContent = `É par? ${result}`;
}
