/*Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de 21 anos. 
Total de pessoas com mais de 50 anos. O programa termina quando idade for =-99. */

const prompt = require('prompt-sync')();

let idad = 0;
let jovem = 0;
let velho = 0 ;

while (idad >= 0){

    idad = parseInt (prompt('Digite sua idade: '));

    if (idad < 21) {
        jovem ++
    } else if (idad>50) {
        velho ++
    }

}

console.log(`Foram inseridos ${jovem} jovens`)
console.log(`Foram inseridos ${velho} idosos`)