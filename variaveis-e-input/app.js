const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraCampo;
readLine.question('Informe sua idade:', input => {
    leituraCampo = input;
    console.log(`o usuario digitou: ${leituraCampo}`);
});
