const mailInput = document.getElementById("EmailInput");
const PasswordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l' API pour vérifier les credentials en BDD
    
    if(mailInput.value =="test@mail.com" && PasswordInput.value == "123"){


        //Il faudra récupérer le vrai token
        const token = "lkfzfafafaf457898fafaf";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        PasswordInput.classList.add("is-invalid");
    }
}