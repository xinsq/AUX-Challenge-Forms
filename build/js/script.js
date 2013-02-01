(function () {

	function displayCardType() {
	// Get credit card value and strip all non-numerical characters
	var cardNumber = document.getElementById('cardNumber').value.replace(/\D/g,'');

	// Reset position values
	document.getElementById('amexLabel').style.backgroundPosition='0 -206px';
	document.getElementById('visaLabel').style.backgroundPosition='-48px -164px';
	document.getElementById('discoverLabel').style.backgroundPosition='-96px -164px';
	document.getElementById('mastercardLabel').style.backgroundPosition='-144px -164px';
	document.getElementById('securityImg').style.backgroundPosition='0 -80px';

	// MasterCard start with 51 through 55 and have 16 digits
	if (/^5[1-5]/.test(cardNumber)) {
		document.getElementById('mastercardLabel').style.backgroundPosition='-144px -122px';
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';

	}

	// Visa card numbers start with a 4
	else if (/^4/.test(cardNumber)) {
		document.getElementById('visaLabel').style.backgroundPosition='-48px -122px';
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
	}

	// American Express start with 34 or 37 and have 15 digits
	else if (/^3[47]/.test(cardNumber)) {
		document.getElementById('amexLabel').style.backgroundPosition='0 -122px';
		document.getElementById('securityImg').style.backgroundPosition='0 -331px';
	}

	// Discover start with 6011 or 65. All have 16 digits
	else if (/^6/.test(cardNumber)) {
		document.getElementById('discoverLabel').style.backgroundPosition='-96px -122px';
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
	}
}

document.getElementById('cardNumber').addEventListener('keyup', displayCardType);

Modernizr.load({
	test: Modernizr.input.required,
	nope: 'parsley.min.js'
});

})();