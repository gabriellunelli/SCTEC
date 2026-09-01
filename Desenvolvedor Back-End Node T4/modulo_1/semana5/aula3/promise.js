// Assíncronidade é basicamente como um garçom que, ao invés de receber um pedido e esperar até a cozinha terminar o prato para ele entregar, ele já vai pegando os outros pedidos e levando para a cozinha, e quando o prato estiver pronto, ele leve até a mesa.

const cafe = new Promise((resolve, reject) => {
    setTimeout(() => {
      const temLeite = false;
   
      if (temLeite) resolve("Café pronto");
      else reject("Acabou o leite");
    }, 2000);
  });

console.log(cafe)  // É síncrono então retorna "pending"

// O valor de "resolve()" chega como parâmetro para o ".then()", já o valor de reject para o catch
cafe.then((msg) => {
    console.log(msg)
}).catch((msgErro) => {
    console.log(msgErro)
}).finally(() => {
    console.log('Processo concluído')
})