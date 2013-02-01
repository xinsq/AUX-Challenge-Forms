(function () {

	function displayCardType() {
	// Get credit card value and strip all non-numerical characters
	var cardNumber = document.getElementById('cardNumber').value.replace(/\D/g,'');



	// MasterCard start with 51 through 55 and have 16 digits
	if (/^5[1-5]/.test(cardNumber)) {
		document.getElementById("mastercard").setAttribute("checked");
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';

	}

	// Visa card numbers start with a 4
	else if (/^4/.test(cardNumber)) {
		document.getElementById("visa").setAttribute("checked");
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
	}

	// American Express start with 34 or 37 and have 15 digits
	else if (/^3[47]/.test(cardNumber)) {
		document.getElementById("amex").setAttribute("checked");
		document.getElementById('securityImg').style.backgroundPosition='0 -331px';
	}

	// Discover start with 6011 or 65. All have 16 digits
	else if (/^6/.test(cardNumber)) {
		document.getElementById("discover").setAttribute("checked");
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
	}

	else {
		document.getElementById("amex").setAttribute("unchecked");
		document.getElementById("visa").setAttribute("unchecked");
		document.getElementById("mastercard").setAttribute("unchecked");
		document.getElementById("discover").setAttribute("unchecked");
		document.getElementById('securityImg').style.backgroundPosition='0 -80px';
	}
}

document.getElementById('cardNumber').addEventListener('keyup', displayCardType);

Modernizr.load({
	test: Modernizr.input.required,
	nope: 'parsley.min.js'
});

})();