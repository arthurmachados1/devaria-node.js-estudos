const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esee programa vai checar se voce é maior de 18 anos e tem habilitação para saber se voce pode entrar no kart');
console.log('Além das verificações, precisamos verificar se você está na lista de presença');

readLine.question('Qual o ano do seu nascimento?', ano => {

    if(ano > 2006){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce tem habilitacao? (Sim/Nao) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce nao tem habilitacao para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('bem vindo ao Kart Douglas');
                            break;
                        case 'Rafael':
                            console.log('bem vindo ao Kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                    }
                });
            }
        })
    }
})
