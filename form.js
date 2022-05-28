const form = document.querySelector('form');
const usuario = document.getElementById('nombre');
const email = document.getElementById('email');
const celular = document.getElementById('celular');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');
const button = document.getElementById('button');


form.addEventListener( e => {
	e.preventDefault();	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const celularValue = celular.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	var contadora = 0

	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el campo vacío');
	} else {
		setSuccessFor(usuario);
		contadora = contadora + 1;
	}
	if(celularValue === '') {
		setErrorFor(celular, 'No puede dejar el campo vacío');
	} else {
		setSuccessFor(celular);
		contadora = contadora + 1;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el campo en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
		contadora = contadora + 1;
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Contraseña no debe ingresar vacía.');
	} else {
		setSuccessFor(password);
		contadora = contadora + 1;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Contraseña 2 no debe ingresar vacia');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
		contadora = contadora + 1;
	}
	if (contadora === 5) {
		var b = document.querySelector("button");
		b.setAttribute("onclick", "alertfunction()");
		b.click();		
	}

}

function alertfunction() {
	Swal.fire(
		'Buen Trabajo!',
		'Te has registrado correctamente!',
		'success'
	  )
}

function redirigir(){
	window.location.href = "ingresar.html";
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}