try{
    const listaDeProdutosDisponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
    
    const  listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto não está disponivel: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponivel: ${produto}`));
}catch(e){
    console.log('Não foi possivel executar o pedido de compra');
}


