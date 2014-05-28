var putsubmit = function(text) {
	var submit = document.getElementById('submit');
	submit.innerHTML = text;
}

/*
var check = function (){
	var print = true;

	var firstName = document.getElementById('first');
	var lastName = document.getElementById('last');
	var password = document.getElementById(('password'));

	if (firstName.value.lenght < 3) {
		print = false;
	} else if (lastName.value.lenght < 3){
		print = false;
	}
	var checkPwd = function(pwd) {
		if( pwd.value.lenght < 6)
			return false;

		var uppercase = false,
		lowercase = false,
		digit = false;
		for (var i = pwd.length - 1; i >= 0; i--) {
			var character = pwd[i];
			if (character.toLowerCase() === character)
				lowercase = true;
			else if (character.toUpperCase() === character)
				uppercase = true;
			else if(!character.isNaN())
				digit = true;
		}
		return (uppercase && lowercase && digit);
	};

	if(check(password))
		print = true;

	return print;
};
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
*/
putsubmit(text.submit);
