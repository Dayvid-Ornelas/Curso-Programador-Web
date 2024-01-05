function register(element){
    const username = element.children.username.value
    const passaword = element.children.passaword.value
    const passawordConfirmation = element.children.passawordConfirmation.value

    /*console.log({username, passaword, passawordConfirmation})*/

    if(passaword === passawordConfirmation){
        alert("Usuário" + username + "registrado!")
    } else{
        alert("As senhas não conferem!")
    }
}