const CRIPTOGRAFIA = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

const DESCRIPTOGRAFIA = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u",
};

function criptografar() {
    const textoOriginal = document.getElementById('textoOriginal').value;
    const textoCriptografado = criptografarTexto(textoOriginal);
    document.getElementById('resultadoH6').innerText = textoCriptografado;
}

function criptografarTexto(texto) {
    const caracteres = texto.split('');
    const textoCriptografado = caracteres.map(char => CRIPTOGRAFIA[char] || char).join('');
    return textoCriptografado;
}

function descriptografar() {
    const textoCriptografado = document.getElementById('textoOriginal').value;
    const textoDescriptografado = descriptografarTexto(textoCriptografado);
    document.getElementById('resultadoH6').innerText = textoDescriptografado;
}

function descriptografarTexto(texto) {
    const regex = new RegExp(Object.keys(DESCRIPTOGRAFIA).join('|'), 'g');
    const textoDescriptografado = texto.replace(regex, match => DESCRIPTOGRAFIA[match] || match);
    return textoDescriptografado;
}