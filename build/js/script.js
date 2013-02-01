(function () {

var cardHolder = {
  "mastercard": /^5[1-5]/, // MasterCard start with 51 through 55 and have 16 digits
  "visa": /^4/, // Visa card numbers start with a 4
  "amex": /^3[47]/, // American Express start with 34 or 37 and have 15 digits
  "discover": /^6/ // Discover start with 6011 or 65. All have 16 digits
}

function setCardType(event) {
  var cardNumber = event.target.value.replace(/\D/g,''); // Strip non-zero numbers from value

  function setCardStatus(card, checkedStatus) { // set checked status of an object
    document.getElementById(card).checked = checkedStatus;
  }

  for(var card in cardHolder) { // Loop through the properties of card Holder
    setCardStatus(card,false); // Set checked status to false initially
    if(cardHolder[card].test(cardNumber)) { setCardStatus(card,true); } // Test the value of the card number, set to true if there's a match
  }
}

document.getElementById('cardNumber').addEventListener('keyup', setCardType);
document.getElementById('cardNumber').addEventListener('blur', setCardType); // Focus correctly if numbers are pasted

Modernizr.load({ // Parsley javascript fallback if no HTML5 inputs
	test: Modernizr.input.required,
	nope: 'parsley-standalone.min.js'
});

})(); // End anonymous function

//  Validate to see if the credit card number is real
function validateNumber() {
  var cardNumber = document.getElementById("cardNumber").value.replace(/\D/g,'');

  function luhn(ccnumber) {
    var cc_sum = 0;
    var parsedCC;
    var cclen = ccnumber.length;
    for (i=cclen-1; i>=0; i--) {
            var charati = ccnumber[i] + '';
            parsedCC = parseInt(charati);
            var oddeven = cclen-1 - i;
            cc_sum += (oddeven%2 == 0) ? parsedCC :
                            (parsedCC > 4) ? parsedCC * 2 % 10 + 1 :
                                    parsedCC * 2;
    }
    var checkvalid = ((cc_sum % 10) == 0) ? true : false;
    return checkvalid;
  }

  if(luhn(cardNumber)==false) {
    document.getElementById('cardNumber').toggleClass(invalid);
    alert('Sorry, that was not a valid credit card number');
    return false;
  }

  alert('Success!');
  return true;

}