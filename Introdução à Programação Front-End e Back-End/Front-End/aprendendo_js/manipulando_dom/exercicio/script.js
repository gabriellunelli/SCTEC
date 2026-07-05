// function adicionarTarefa(){
//     let tarefas = document.getElementById("tarefa");

//     document.getElementById("adicionarTarefa").addEventListener("click", criarTarefa);
// }

// utilizei dicas de i.a

const listaDeTarefas = document.getElementById("listaDeTarefas");

function criarTarefa(){
    let tarefas = document.getElementById("tarefa").value;

    let tarefaTopico = document.createElement("li");
    tarefaTopico.innerHTML = tarefas;
    listaDeTarefas.appendChild(tarefaTopico);

    
}