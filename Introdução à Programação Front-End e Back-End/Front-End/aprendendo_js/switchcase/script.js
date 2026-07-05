function trocarIdioma()
{
    let idioma = document.getElementById("linguas").value;
    console.log(idioma)

    switch (idioma) {
        case "Portugues":
            saudacao = "Olá!"
            break;

        case "Ingles":
            saudacao = "Hello!"
            break;

        case "Espanhol":
            saudacao = "Hola!"
            break;

        case "Frances":
            saudacao = "Bounjor!"
            break;
    }

    let resposta = document.getElementById("saudacao").innerHTML = saudacao;
}