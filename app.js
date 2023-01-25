const characters = document.getElementById("password-characters");
const form = document.getElementById("container--form");
const containerPassword = document.getElementById("container-password");
const password = document.getElementById("password");
const btnPassword = document.getElementById("btn-password")

const charset = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let newPassword = "";


characters.addEventListener("input" , () => {
    form.querySelector("label").innerHTML = "Tamanho " + characters.value + " caracteres.";
})

btnPassword.addEventListener("click" , generatorPassword);


function generatorPassword (e) {
    e.preventDefault();
    let pass = "";
    
    for(let i = 0 , n = charset.length ; i < characters.value ; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    } 
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass
}

function copyPassword () {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(newPassword);
}
