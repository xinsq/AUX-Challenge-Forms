$(document).ready(function(){

function returnCardType() {

	// Get credit card value and strip all non-numerical characters
	var cardNumber = $('#cardNumber').val().replace(/\D/g,'');
	var type = "none";

	console.log(cardNumber);

	// Use regular expressions to figure out card type
	if (/^5[1-5]/.test(cardNumber)) {
		type = "mastercard";
	}
	else if (/^4/.test(cardNumber)) {
		type = "visa";
	}
	else if (/^3[47]/.test(cardNumber)) {
		type = "americanexpress";
	}
	else if (/^6/.test(cardNumber)) {
		type = "discover";
	}
	console.log(type);

}

// if (type == "mastercard") {

$('#cardNumberLi::after').css('background', 'url("../images/sprite.png") no-repeat 0 -100px;');

// 	// #cardNumberLi::after {
// 	// background: url('../images/sprite.png') no-repeat 0 -122px;
// 	// }

// Visa card numbers start with a 4
// MasterCard start with 51 through 55 and have 16 digits
// American Express start with 34 or 37 and have 15 digits
// Discover start with 6011 or 65. All have 16 digits

//$('#cardNumber').bind('keyup', returnCardType);

});