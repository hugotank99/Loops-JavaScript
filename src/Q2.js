// Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)

const prompt = require('prompt-sync')();

console.log ('Contador de números pares e impares')

let par = 0
let impar = 0

for ( let i = 0; i < 10; i++ ) {
    
    let numero = parseInt (prompt('Digite um valor: '));

    if (numero % 2 == 0) {
        par ++
    } else {
        impar ++
    }
}

console.log (`Foram inseridos ${par} números pares`);
console.log (`Foram inseridos ${impar} números impares`);