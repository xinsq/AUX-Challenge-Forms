// (function($,W,D)
// {
//     var JQUERY4U = {};

//     JQUERY4U.UTIL =
//     {
//         setupFormValidation: function()
//         {
//             //form validation rules
//             $("#signUp").validate({
//                 rules: {
//                     title: "required",
//                     address: "required",
//                     name: "required",
//                     email: {
//                         required: true,
//                         email: true
//                     },
//                     password: {
//                         required: true,
//                         minlength: 5
//                     },
//                     cardNumber: "required",
//                     security: "required",
//                     month: "required",
//                     year: "required"
//                 },
//                 messages: {
//                     title: "Give your portfolio a name",
//                     address: "Give a portfolio addres"
//                     name: "Please enter your name",
//                     email: "Please enter a valid email address",
//                     password: {
//                         required: "Please provide a password",
//                         minlength: "Your password must be at least 5 characters long"
//                     },
//                     cardNumber: "Please enter a credit card number",
//                     security: "Please enter your credit card's security code",
//                     month: "Select a month",
//                     year: "Select a year"
//                 },
//                 submitHandler: function(form) {
//                     form.submit();
//                 }
//             });
//         }
//     }

//     //when the dom has loaded setup form validation rules
//     $(D).ready(function($) {
//         JQUERY4U.UTIL.setupFormValidation();
//     });

// })(jQuery, window, document);