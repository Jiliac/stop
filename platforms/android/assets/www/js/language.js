var text = {
	signup : "Sign Up",
	signin : "Sign In",
	firstName : "First Name",
	lastName : "Last Name",
	password : "Password",
	submit : 'Sign In'
};

var lang = navigator.language.split("-");
var current_lang = (lang[0]);

if (current_lang === 'fr') {
	text.signup = 'Inscription';
	text.signin = 'Connexion';
	text.firstName = 'Prénom';
	text.lastName = 'Nom'
	text.password = 'Mot de Passe';
	text.submit = 'Créer un Compte';
}
