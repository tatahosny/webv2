
function encryptText() {
    const text = document.getElementById('inputText').value;
    const type = document.getElementById('encryptionType').value;
    const key = document.getElementById('encryptionKey').value;
    const errorMessage = document.getElementById('errorMessage');
    const outputText = document.getElementById('outputText');

    // Reset output
    outputText.innerText = "";
    errorMessage.innerText = "";

    if (!text) {
        errorMessage.innerText = "Please enter some text to encrypt.";
        return;
    }

    let encryptedText = '';

    if (type === 'caesar') {
        if (!/^\d+$/.test(key)) {
            errorMessage.innerText = "Invalid key for Caesar Cipher. Please enter a numeric value.";
            return;
        }
        encryptedText = caesarCipher(text, parseInt(key));
    } else if (type === 'vigenere') {
        if (/[^A-Za-z]/.test(key)) {
            errorMessage.innerText = "Invalid key for Vigenère Cipher. Please enter alphabetic characters only.";
            return;
        }
        encryptedText = vigenereCipher(text, key);
    } else if (type === 'transposition') {
        encryptedText = transpositionCipher(text);
    } else if (type === 'playfair') {
        if (/[^A-Za-z]/.test(key)) {
            errorMessage.innerText = "Invalid key for Playfair Cipher. Please enter alphabetic characters only.";
            return;
        }
        encryptedText = playfairCipher(text, key);
    }

    outputText.innerText = encryptedText;
}
function encryptText() {
    const text = document.getElementById('inputText').value;
    const type = document.getElementById('encryptionType').value;
    const key = document.getElementById('encryptionKey').value;
    const errorMessage = document.getElementById('errorMessage');
    const outputText = document.getElementById('outputText');

    // Reset output
    outputText.innerText = "";
    errorMessage.innerText = "";

    if (!text) {
        errorMessage.innerText = "Please enter some text to encrypt.";
        return;
    }

    let encryptedText = '';

    if (type === 'caesar') {
        if (!/^\d+$/.test(key)) {
            errorMessage.innerText = "Invalid key for Caesar Cipher. Please enter a numeric value.";
            return;
        }
        encryptedText = caesarCipher(text, parseInt(key));
    } else if (type === 'vigenere') {
        if (/[^A-Za-z]/.test(key)) {
            errorMessage.innerText = "Invalid key for Vigenère Cipher. Please enter alphabetic characters only.";
            return;
        }
        encryptedText = vigenereCipher(text, key);
    } else if (type === 'transposition') {
        encryptedText = transpositionCipher(text);
    } else if (type === 'playfair') {
        if (/[^A-Za-z]/.test(key)) {
            errorMessage.innerText = "Invalid key for Playfair Cipher. Please enter alphabetic characters only.";
            return;
        }
        encryptedText = playfairCipher(text, key);
    }

    outputText.innerText = encryptedText;
}
