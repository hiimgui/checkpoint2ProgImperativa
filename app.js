let menu = {
    1 : {nome : "pipoca", duracao: 10 } ,
    2 : {nome: "macarrao", duracao: 8},
    3 : {nome: "carne", duracao: 15},
    4 : {nome: "feijao", duracao: 12},
    5 : {nome: "brigadeiro", duracao:8}
}

// levando em conta input cliente

function microondas (numMenu, numeroDigitadoCliente) {
    let duracao;
    switch (numMenu) {
        case 1:
            duracao = 10;
            break;
        case 2:
            duracao = 8;
            break;
        case 3:
            duracao = 15;
            break;
        case 4:
            duracao = 12;
            break;
        case 5:
            duracao = 8;
            break;

        default: 
            console.log("Prato Inexistente");
            break;
    }
        if(numeroDigitadoCliente < duracao) {
            console.log("tempo insuficiente");
        } else if(numeroDigitadoCliente >= duracao * 3 ) {
            console.log("KABUMMM");
        } else if(numeroDigitadoCliente > duracao * 2 && numeroDigitadoCliente < duracao*3){
            console.log("Comida Queimou");
        } else if (numeroDigitadoCliente == duracao) {
            console.log("Prato pronto, Bom Apetite")
        }  
}

microondas(2, 8)
microondas(1, 80)
microondas(8, 80)
microondas(2, 21)
