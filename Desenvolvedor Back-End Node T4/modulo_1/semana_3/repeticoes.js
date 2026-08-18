// FOR

// for(inicioContagem; condicao; incremento){

// }

for(let volta = 1; volta <= 3; volta++){
    console.log(`Correndo a volta número ${volta}`)
}

console.log('Acabou de correr!')

energia = 10
for(let i = 1; i <= 5 && energia > 0; i++){
    console.log(`Energia atual: ${energia}`)
    energia -= 1;
    console.log(`Repetição: ${i}. Energia restante: ${energia}\n`);
}

// WHILE
// while(condicao){

// }

let i = 1
while(i <= 10){
    console.log(i)
    i++;
}

// DO WHILE
console.log('do while')
do{
    console.log(i)
    i--;
}
while(i >= 5);

// EXERCÍCIO
let temperatura = 30;

while(true){
    console.log(`Temperatura ${temperatura}`)
    temperatura += 5

    if (temperatura === 50){
        console.log('ALERTA!')
        break
    }
}