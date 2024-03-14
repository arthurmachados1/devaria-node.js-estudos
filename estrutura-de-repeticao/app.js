const listaArgumentos = process.argv.slice(2);

console.log('-------------------------- Executando um FOR --------------------------');
for(let controladorFOR = 0; controladorFOR < listaArgumentos.length; controladorFOR++){
    console.log(`Posicao ${controladorFOR} valor lido = ${listaArgumentos[controladorFOR]}`);
}

console.log('-------------------------- Executando um WHILE --------------------------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('-------------------------- Executando um DO WHILE --------------------------');
let controladorDoWhile = 0;
do{
    console.log(`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length);

console.log('-------------------------- Executando um FOR OF --------------------------');
const controladorForOf = 0;
for (const argumento of listaArgumentos){
    console.log(`Posicao ${controladorForOf} Valor lido = ${argumento}`);
}
