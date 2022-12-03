function checkEmailExist(){
    alert("Email Checked")
    // console.log("function called")
    // console.log($('#email').val())
    $.ajax({
        url:"email_check",
        type:"post",
        data: {
            'email':$('#email').val()
        },
        success:function(response){
            if(response.message){
                $('#emailError').html("Email Alredy Exist")
                $('#submit').prop('disabled',true)
                
            }
            else{
                $('#emailError').html(" ")
                $('#submit').prop('disabled',false)


            }
        }
    })
}
