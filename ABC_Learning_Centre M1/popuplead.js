// this script page is for the add and edit page functionality



document.querySelector(".lead_creation").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
})
document.querySelector(".popup .close-btn").addEventListener("click",function(){
 document.querySelector(".popup").classList.remove("active");
})


//edit and add lead form validation

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var courseError = document.getElementById('course-error');
var messagesError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('full_name').value;

    if(name.length==0){
        nameError.innerHTML='Name is required';
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('email').value;

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
function validatePhone(){
    var phone = document.getElementById('phone').value;

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


function validateCourse(){
    var course = document.getElementById('inputer').value;
    if(course ==''){
        courseError.innerHTML = 'please select your course';
        return false
    }
    courseError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}



function validateMessage(){
    var message = document.getElementById('about_him').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more character required';
        return false
    }

    messageError.innerHTML ='<i class="fas fa-check-circle"></i>';
       return true; 
           
}

function validateForms(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validateCourse()){
        submitError.innerHTML = 'please fill the form properly';
        return false;
    }
   
}


//collection leads information in local storage


function onRegisterPress(){

    let full_name,email,phone,age,input,about_him;
    
         full_name = document.getElementById("full_name").value;
         email = document.getElementById("email").value;
         phone = document.getElementById("phone").value;
         input = document.getElementById("inputer").value;
         about_him = document.getElementById("about_him").value;
    
        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    
        //data  verification 
        
        if(user_records.some((v)=>{return v.email==email}))
        {
            emailError.innerHTML='invalid Email or Already registered';
        }
        if(user_records.some((v)=>{return v.full_name==full_name}))
        {
            nameError.innerHTML=' invalid Name or Already registered';
        }
        if(user_records.some((v)=>{return v.phone==phone}))
        {
            phoneError.innerHTML=' invalid phone or Already registered';
        }
        if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validateCourse()){
            submitError.innerHTML = 'please fill the form properly';
            return false;
        }
        else
        {
           
                user_records.push({
                "full_name":full_name,
                "email":email,
                "phone":phone,
                "age":age,
                "input":input,
                "about_him":about_him,
        
        })

            localStorage.setItem("users",JSON.stringify(user_records));
        }
        
            showData();
        } 


   