/*
Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida 
com seus respectivos tempos pré-definidos. 

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
 Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou. OK

- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; OK

- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"; OK

- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”; OK

- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". OK
*/

let comida;
let tempo;
var tempoPadrao; //o motivo de escolher var nesse caso é porque eu quero utilizar sua propriedade como variavel de escopo global 
                 //e por ser um código pequeno, desde que não seja atribuido um valor diferente entre o bloco de switch e
                 //o bloco if else não deveria haver problema
console.log("Escolha o prato e por quanto deseja aquecê-lo, em seguida segue uma lista das opções e seu tempo standard");


console.log("1 - Pipoca – 10 segundos");
console.log("2 - Macarrão – 8 segundos");
console.log("3 - Carne – 15 segundos");
console.log("4 - Feijão – 12 segundos");
console.log("5 - Brigadeiro – 8 segundos");
//embora o exercicio não peça isso achei q seria mais intuitivo 

comida = "Pipoca";
tempo = 44;

switch (comida) {

    case "Pipoca":
        tempoPadrao = 10;
        break;

    case "Macarrão":
        tempoPadrao = 8;
        break;

    case "Carne":
        tempoPadrao = 15;
        break;

    case "Feijão":
        tempoPadrao = 12;
        break;

    case "Brigadeiro":
        tempoPadrao = 8;
        break;

    default:
        console.log("Prato inexistente");

}


if (tempo < tempoPadrao) {
    console.log("Tempo insuficiente.");

} else if (tempo >= tempoPadrao && tempo <= 2 * tempoPadrao) {
    console.log("Prato pronto, bom apetite!!!");

} else if (tempo > 2 * tempoPadrao && tempo <= 3 * tempoPadrao) {
    console.log("IIIh... A comida queimou. Mais sorte da próxima vez, quem sabe usar o tempo standard é melhor... Só uma dica mesmo.");

} else {
    console.log("kabumm");

}

