//Form validation of contact us page.

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        return false
    }
    if(phone.length !== 11){
        phoneError.innerHTML = 'Phone no should be 11 digits';
        return false
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false
    }
    phoneError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true;

}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailError.innerHTML = 'Email invalid'
       return false;
    }
    
       emailError.innerHTML ='<i class="fas fa-check-circle"></i>';
       return true; 
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more character required';
        return false
    }

    messageError.innerHTML ='<i class="fas fa-check-circle"></i>';
       return true; 
           
}

function validateForm(){
    if(!validateName() || !validatePhone || !validateEmail() || !validateMessage()){
        submitError.innerHTML = 'please fill the form properly';
        return false;
    }
}

//toggle-menu by using j quarry

$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
   $("header li").toggleClass("active");
   $(".nav-placeholder").toggleClass("active");
});

