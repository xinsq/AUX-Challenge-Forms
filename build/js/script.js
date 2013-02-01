(function () {

function getCardType(accountNumber) {
  var result = "unknown";

  if (/^5[1-5]/.test(accountNumber)) // MasterCard start with 51 through 55 and have 16 digits
  { result = "mastercard";}

  else if (/^4/.test(accountNumber)) // Visa card numbers start with a 4
  { result = "visa";}

  else if (/^3[47]/.test(accountNumber)) // American Express start with 34 or 37 and have 15 digits
  { result = "amex";}

  else if (/^6/.test(accountNumber)) // Discover start with 6011 or 65. All have 16 digits
  { result = "discover";}

  return result;
}

function setCardType(event) {
	var value = event.target.value,
		type = getCardType(value);

	switch (type)
	{
		case "mastercard":
		document.getElementById("mastercard").checked="true";
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
        break;

    	case "visa":
		document.getElementById("visa").checked="true";
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
        break;

    	case "discover":
        document.getElementById("discover").checked="true";
		document.getElementById('securityImg').style.backgroundPosition='0 -374px';
        break;

        case "amex":
        document.getElementById("amex").checked="true";
		document.getElementById('securityImg').style.backgroundPosition='0 -331px';
        break;

   		default:
   		document.getElementById("mastercard").checked="false";
   		document.getElementById("visa").checked="false";
   		document.getElementById("discover").checked="false";
   		document.getElementById("amex").checked="false";
   		document.getElementById('securityImg').style.backgroundPosition='0 -80px';
	}
}

document.getElementById('cardNumber').addEventListener('keyup', setCardType);
document.getElementById('cardNumber').addEventListener('blur', setCardType);

Modernizr.load({
	test: Modernizr.input.required,
	nope: 'parsley-standalone.min.js'
});

})();
