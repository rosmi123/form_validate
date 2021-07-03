function validateForm(){

    var user = document.getElementById('user').value; 
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var pwd = document.getElementById('pwd').value;

// username

    if(user ==  ""){
        document.getElementById('username').innerHTML="*Please  fill the field*";
        return false;
    }
    if((user.length <=2) || (user.length > 20)){
        document.getElementById('username').innerHTML="*User lenth must be between 2 and 20*";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML="*Only characters are allowed*";
        return false;
    }


    
    // email

    if(email ==  ""){
        document.getElementById('emails').innerHTML="*Please  fill the field*";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('emails').innerHTML="*Invalid input*";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emails').innerHTML="*Invalid input*";
        return false;
    }
    



        // phone number

    if(mobile ==  ""){  
        document.getElementById('mobiles').innerHTML="*Please  fill the field*";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById('mobiles').innerHTML="*Only numbers are allowed*";
        return false;
    }
    if((mobile.length < 10)){
        document.getElementById('mobiles').innerHTML="*Length is less than 10";
        return false;

    }
  


// password

    if(pwd ==  ""){
        document.getElementById('pwds').innerHTML="*Please  fill the field*";
        return false;
    }
    if(pwd.length <8){
        document.getElementById('pwds').innerHTML="*password length must be minimum 8*";
        
        return false;
    }
}


