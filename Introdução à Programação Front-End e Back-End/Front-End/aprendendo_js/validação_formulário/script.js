function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;   

    if (name === "" || email === "" || message === "")
    {
        alert("Preencha todos os campos.");
        return false;
    }

    if (name.length <= 3 || name.length >= 50)
    {
        alert("O nome deve ter entre 3 e 50 caracteres.");
        return false;
    }

    if (email.length <= 5 || email.length >= 50)
    {
        alert("O email deve ter entre 5 e 50 caracteres.");
        return false;
    }

    if (message.length <= 0)
    {
        alert("Digite alguma mensagem.");
        return false;
    }

    // expressão regular pega na i.a

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email))
    {
        alert("Digite um email válido.");
        return false;
    }    

    return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    if (validateForm())
    {
        alert("Formulário validado!");
    }
})