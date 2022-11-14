function validation(){
    var first_name=document.getElementById("nam").value
    var gender_male=document.getElementById("g_male")
    var gender_female=document.getElementById("g_female")
    var mobile_no=document.getElementById("ph").value
    var age=document.getElementById("ag").value
    var email=document.getElementById("em").value
    var user_name=document.getElementById("usr").value
    var password=document.getElementById("pass").value
    var name_error=document.getElementById("name_error")
    var mobile_error=document.getElementById("mobile_error")
    var age_error=document.getElementById("age_error")
    var email_error=document.getElementById("email_error")
    var user_error=document.getElementById("user_error")
    var pass_error=document.getElementById("pass_error")
    var radio_error=document.getElementById("radio_error")
    var email_pattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var number_pattern=/^[789]\d{9}$/
    var username_pattern=/^[a-zA-Z\-]+$/
    
    if(first_name==""){
        // alert("Field should not be empty")
         name_error.style.color="red"
         name_error.innerHTML="Field Should not be empty"
        return false
    }
    if(mobile_no==""){
    mobile_error.style.color="red"
    mobile_error.innerHTML="Field Should not be empty"
    return false
    }
    if(mobile_no.match(number_pattern)==null){
        mobile_error.style.color="red"
        mobile_error.innerHTML="Not a Valid Number"
        return false
    }
    if(age==""){
    age_error.style.color="red"
    age_error.innerHTML="Field Should not be empty"
    return false
    }
    if(email==""){
    email_error.style.color="red"
    email_error.innerHTML="Field Should not be empty"
    return false
    }

    if(email.match(email_pattern)==null){
        alert("Email Is Invalid")
        return  false
    }

    if(user_name==""){
        // alert("Field should not be empty")
         user_error.style.color="red"
         user_error.innerHTML="Field Should not be empty"
        return false
    }
    if(user_name.match(username_pattern)==null){
        user_error.style.color="red"
        user_error.innerHTML="Not a Valid Username"
       return false
    }
    if(password==""){
        // alert("Field should not be empty")
         pass_error.style.color="red"
         pass_error.innerHTML="Field Should not be empty"
        return false
    }

}