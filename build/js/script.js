// $(document).ready(function(){

// var type = "none";

// function displayCardType() {

// 	// Get credit card value and strip all non-numerical characters
// 	var cardNumber = $('#cardNumber').val().replace(/\D/g,'');

// 	$('#creditCardImg').css({'background-position':'0 -122px'});
// 	// Visa card numbers start with a 4
// 	// MasterCard start with 51 through 55 and have 16 digits
// 	// American Express start with 34 or 37 and have 15 digits
// 	// Discover start with 6011 or 65. All have 16 digits

// 	if (/^5[1-5]/.test(cardNumber)) {
// 		type = "mastercard";
// 		$('#creditCardImg').css({'background-position':'0 -290px'});
// 	}
// 	else if (/^4/.test(cardNumber)) {
// 		type = "visa";
// 		$('#creditCardImg').css({'background-position':'0 -206px'});
// 	}
// 	else if (/^3[47]/.test(cardNumber)) {
// 		type = "americanexpress";
// 		$('#creditCardImg').css({'background-position':'0 -164px'});
// 		$('#securityImg').css({'background':'url("../images/sprite.png") no-repeat 0 -331px'})
// 	}
// 	else if (/^6/.test(cardNumber)) {
// 		type = "discover";
// 		$('#creditCardImg').css({'background-position':'0 -248px'});
// 	}

// 	else {
// 		return;
// 	}
// }

// //background: url('../images/sprite.png') no-repeat 0 -331px;

// $('#cardNumber').bind('keyup', displayCardType);
// $('#card')

// });