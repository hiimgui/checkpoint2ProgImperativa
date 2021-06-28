
let menu = {
    1 : {nome : "pipoca", duracao: 10 } ,
    2 : {nome: "macarrao", duracao: 8},
    3 : {nome: "carne", duracao: 15},
    4 : {nome: "feijao", duracao: 12},
    5 : {nome: "brigadeiro", duracao:8},
    duracaoArray : [8,10,12,15]
}

//calcular tempo total, levando em conta input cliente

function microondas (prato, operacaoCliente, numeroDigitadoCliente) {
    let tempoAposInputCliente;
    //calcular tempo total
    if(operacaoCliente === "+") {
        tempoAposInputCliente = prato + numeroDigitadoCliente;
    } else if (operacaoCliente === "-" ) {
        tempoAposInputCliente = prato - numeroDigitadoCliente;
    } 
    //primeiro IF que valida o menu, ou ainda, o tempo padrao dos menus
    if (prato === 8 || prato === 10 || prato === 12 || prato === 15){
        if(tempoAposInputCliente < prato) {
            console.log("tempo insuficiente");
        } else if(tempoAposInputCliente >= prato * 3 ) {
            console.log("KABUMMM");
        } else if(tempoAposInputCliente > prato * 2 && tempoAposInputCliente < prato*3){
            console.log("Comida Queimou");
        } else {
            console.log("Prato pronto, Bom Apetite")
        }
    } else {
        console.log("Prato inexistente")
    }    
}

microondas(12, "+", 13);
microondas(menu[1].duracao)
microondas(menu[3].duracao, "+", 50)
microondas(5)
microondas(menu[2].duracao, "-", 30)


