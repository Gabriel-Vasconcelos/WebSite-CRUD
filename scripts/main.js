var email = document.querySelector(".register input[type = email]"),
	errorEmail = document.querySelector(".register span#errorEmail"),
	error = 0;


function validatesPass(){
	let password = document.querySelector(".register input[name = password"),
		confirm_password = document.querySelector(".register input[name = confirm_password"),
		errorPass = document.querySelector(".register span#errorPass");

	if (password.value != confirm_password.value) {
		errorPass.innerHTML = "Senhas Distintas";

		password.style.borderColor = "red";
		confirm_password.style.borderColor = "red";

		error++;
	}

	else{
		errorPass.innerHTML = "";

		password.style.borderColor = null;
		confirm_password.style.borderColor = null;

		error--;
	}

}

function validatesEmail(){
	
	if (!email.checkValidity()){
		errorEmail.innerHTML = "Email Inválido";

		typeError[0] = "Email Inválido";

		error++;

	}
}

function msgError(){
	if(errorEmail.innerHTML == "Email Inválido"){
		errorEmail.innerHTML = "";

		error--;

	}
}

function validateForm(){

	if(error > 0){
		return false;
	}


}

