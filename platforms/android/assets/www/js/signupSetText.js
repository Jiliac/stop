/*
var lang = navigator.language.split("-");
var current_lang = (lang[0]);

if (current_lang === "fr") {
	document.getElementById('first').setAttribute('placeholder', 'Prénom');
	document.getElementById('last').setAttribute('placeholder', 'Nom');
	document.getElementById('pwd').setAttribute('placeholder', 'Mot de Passe');
	document.getElementById('title').innerHTML = 'Inscription';

} else if (current_lang === 'en') {
	document.getElementById('first').setAttribute('placeholder', 'First Name');
	document.getElementById('last').setAttribute('placeholder', 'Last Name');
	document.getElementById('pwd').setAttribute('placeholder', 'Mot de Passe');
	document.getElementById('title').innerHTML = 'Sign In';
}
*/

document.getElementById('first').setAttribute('placeholder', text.firstName);
document.getElementById('last').setAttribute('placeholder', text.lastName);
document.getElementById('pwd').setAttribute('placeholder', text.password);
document.getElementById('title').innerHTML = text.signup;
