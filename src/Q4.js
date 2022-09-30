/*Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. 
Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções
(1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). 
Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre */

const prompt = require ('prompt-sync')();

let quantidade = 0
let sex = 0
let masc = 0
let fem = 0
let outro = 0
let temp = 0
let calmo = 0
let nerv = 0
let agress = 0
let MulherNerv
let HomemNerv = 0
let OutroCalmo = 0
let idosoNerv = 0
let JovemCalmo = 0

while (quantidade <= 3) {
    console.log('\n***Pesquisa Social***\n');

    let idad = parseInt (prompt('Digite sua idade: '));

    console.log('Comando \nSexo')
    console.log('1\tmasculino\n2\tFeminino\n3\tOutro')

    sex = parseInt(prompt('Comando: '))

    switch (sex) {
        case 1:
            masc=masc++
            break;
        case 2:
            fem=fem++
            break;
        case 3: 
            outro=outro++
            break;
        
            default:
                console.log('ERROR! Programa encerrado');
                console.exit();
            break;
    }
    console.log('\nComando \tTemperamento');
    console.log('1\tCalmo(a)\n2\tNervoso(a)\n3\tAgressivo(a)');

    temp = parseInt(prompt('comando: '));

    switch (temp) {
        case 1:
            calmo=calmo++
            break;
        case 2:
            nerv=nerv++
            break;
        case 3:
            agress=agress++
            break;
        default:
            console.log('Erro! Progama encerrado');
            console.exit();
            break;
    }
    if (sex == 2 && temp == 2) {
        MulherNerv++
    }
    if (sex == 1 && temp == 3) {
        HomemNerv
    }
    if (sex == 3 && temp ==1) {
        OutroCalmo++
    }
    if (idad > 40 && temp == 2) {
        idosoNerv++
    }
    if (idad < 18 && temp == 1) {
        JovemCalmo++
    }
    console.clear()
    quantidade++
}
console.log(`numero de pessoas calmas: ${calmo}`)
console.log(`numero de mulheres nervosas: ${MulherNerv}`)
console.log(`numero de calmos: ${OutroCalmo}`)
console.log(`numero de pessoas acima de 40 anos: ${idosoNerv}`)
console.log(`numero de pessoas com menos de 18 anos: ${JovemCalmo}`)