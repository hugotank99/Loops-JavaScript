/*Informar todos os números de 1000 a 1999 que quando divididos por 11 obtemos resto = 5.*/

for (let nn=1000; nn<=1999; nn++){
    if ( nn%11==5 ){
       console.log (`${nn}`);
    }
}