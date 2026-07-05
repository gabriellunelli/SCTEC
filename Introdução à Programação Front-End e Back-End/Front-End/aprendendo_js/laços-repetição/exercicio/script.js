// Não consegui realizar este exercício, e é importante ressaltarque em alguns códigos (acho que apenas neste mas pode ser que tenha ocorrido em outro também) utilizei i.a para me dar dicas, mas neste não consegui e nem dei continuidade
const carros = ["Uno", "Fusion", "Argo", "Audi"];
const conteudo = document.getElementById("conteudo");
const continuar = document.getElementById("continuar");
const parar = document.getElementById("parar");

var dados;
var i;

function criaSecao (titulo, dadosF)
{
    let secao = document.createElement("div");
    secao.innerHTML = "<h2>"+titulo+"</h2>"+dadosF;
    conteudo.appendChild(secao);
}

dados = "";
i = 0;
do {
    dados += "<p>"+carros[i]+"</p>";
    if (continuar)
    {
        i++;
    }
    else{
        break;
    }
} while(i < carros.length)
criaSecao("Loop while invertido", dados)