var CONSOLE_DEBUG = false;

var  pubaddr;

var captchaSuccess;

var  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$(document).ready(function(){


});


$('#createWalletBtn').click(function(){

    CreateKeyPairs(); 
    $("#downloadlink").click();
    

    
     
});



$("#getxrk").click(function() {

  var name = $('#fullname').val();
  var email = $('#email').val();
  var xrkaddress = $('#xrkaddress').val();

  CONSOLE_DEBUG && console.log("lllllname", name);
  CONSOLE_DEBUG && console.log("email", email);
  CONSOLE_DEBUG && console.log("xrkaddress", xrkaddress);


    
          if (name == '' && email == '' && xrkaddress == '' && captchaSuccess == undefined) {
             $('#fullname').css('border', '1px solid red');
              $('#email').css('border', '1px solid red');
               $('#xrkaddress').css('border', '1px solid red');
                $('#html_element').css('border', '1px solid red');

           
          }
          if (name == '' && email == '' && xrkaddress != '' && captchaSuccess == undefined) {
             $('#fullname').css('border', '1px solid red');
              $('#email').css('border', '1px solid red');
               $('#xrkaddress').css('border', '1px solid green');
                $('#html_element').css('border', '1px solid red');

           
          }
           if (name == '' && email == '' && xrkaddress == '' && captchaSuccess != undefined) {
             $('#fullname').css('border', '1px solid red');
              $('#email').css('border', '1px solid red');
               $('#xrkaddress').css('border', '1px solid red');
                $('#html_element').css('border', '1px solid green');

           
          }


           else if (name != '' && email == '' && xrkaddress == '' && captchaSuccess == undefined){
             $('#fullname').css('border', '1px solid green');
              $('#email').css('border', '1px solid red');
               $('#xrkaddress').css('border', '1px solid red');
                $('#html_element').css('border', '1px solid red');

             
          }
           else if (name == '' && email != '' && xrkaddress == '' && captchaSuccess == undefined){

                  var value = $('#email').val();
                 

                  var validateEmail = function(elementValue) {
                      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                      return emailPattern.test(elementValue);
                  }

                   var valid = validateEmail(value);
                  

                  if (!valid) {


                       $('#fullname').css('border', '1px solid red');
                        $('#email').css('border', '1px solid red');
                         $('#xrkaddress').css('border', '1px solid red');
                          $('#html_element').css('border', '1px solid red');

                  } else {


                       $('#fullname').css('border', '1px solid red');
                        $('#email').css('border', '1px solid green');
                         $('#xrkaddress').css('border', '1px solid red');
                          $('#html_element').css('border', '1px solid red');

                  }
    
         }
          else if (name != '' && email == '' && xrkaddress != '' && captchaSuccess == undefined){

                  

                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid red');
                         $('#xrkaddress').css('border', '1px solid green');
                          $('#html_element').css('border', '1px solid red');

                 
    
         }
          else if (name != '' && email != '' && xrkaddress == '' && captchaSuccess != undefined){

                  

                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid green');
                         $('#xrkaddress').css('border', '1px solid red');
                          $('#html_element').css('border', '1px solid green');
                 
    
         }
          else if (name != '' && email != '' && xrkaddress == '' && captchaSuccess == undefined){

                  var value = $('#email').val();
                 

                  var validateEmail = function(elementValue) {
                      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                      return emailPattern.test(elementValue);
                  }

                   var valid = validateEmail(value);
                  

                  if (!valid) {


                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid red');
                         $('#xrkaddress').css('border', '1px solid red');
                          $('#html_element').css('border', '1px solid red');

                  } else {


                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid green');
                         $('#xrkaddress').css('border', '1px solid red');
                          $('#html_element').css('border', '1px solid red');

                  }
    
         }
         else if (name != '' && email != '' && xrkaddress != '' && captchaSuccess == undefined ){

                  var value = $('#email').val();
                 

                  var validateEmail = function(elementValue) {
                      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                      return emailPattern.test(elementValue);
                  }

                   var valid = validateEmail(value);
                  

                  if (!valid) {


                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid red');
                         $('#xrkaddress').css('border', '1px solid green');
                          $('#html_element').css('border', '1px solid red');

                  }
                  else{

                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid green');
                         $('#xrkaddress').css('border', '1px solid green');
                          $('#html_element').css('border', '1px solid red');
                  }
              

            
        }
        else if (name != '' && email != '' && xrkaddress != '' && captchaSuccess != undefined ){

                var value = $('#email').val();
                 

                  var validateEmail = function(elementValue) {
                      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                      return emailPattern.test(elementValue);
                  }

                   var valid = validateEmail(value);
                  

                  if (!valid) {


                       $('#fullname').css('border', '1px solid green');
                        $('#email').css('border', '1px solid red');
                         $('#xrkaddress').css('border', '1px solid green');
                          $('#html_element').css('border', '1px solid green');

                  }

                  else{
                         $('#fullname').css('border', '1px solid green');
                         $('#email').css('border', '1px solid green');
                         $('#xrkaddress').css('border', '1px solid green');
                         $('#html_element').css('border', '1px solid green');

                        
                        sendAirdropMail();


                        $("#fullname").val('');
                        $("#email").val('');
                        $("#xrkaddress").val('');

                  }
        }

});


function checkNameFilled(){
    if ( name = "") {
        
        $('#fullname').css('border', '1px solid green');

    }
    else{
         $('#fullname').css('border', '1px solid green');
         // $("#sendpopup").attr("data-toggle", "modal");
       
    }
}


var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

$('#email').change(function() {

    var value = $(this).val();
    var valid = validateEmail(value);

    if (!valid) {


        $(this).css('border','1px solid red');

    } else {


        $(this).css('border','1px solid green');

    }



});



function checkAddressFilled() {
 
    if (xrkaddress = "") {
        
        $('#xrkaddress').css('border', '1px solid green');

    }
    else{
         $('#xrkaddress').css('border', '1px solid green');
         // $("#sendpopup").attr("data-toggle", "modal");
       
    }
}

// CreateKeyPairs function here that makes a post request to sendwithdata.php
//params : NULL
// get_address
function CreateKeyPairs() {
   
    $.ajax({
    type: "POST",
    url: 'src/createkeypairs.php',
    data:{},
    success:function(Response) {
                                var x = Response;
                                x = JSON.parse(x);
                                var y = x.error;
                                if(y != null){
                                    swal({
                                            title:'Something went wrong! <br> Please try again!!!',
                                            type: 'error',
                                            confirmButtonClass: "btn-danger",
                                            confirmButtonText: "OK!",
                                            timer: 15000
                                    });
                                }
                                else{
                                 jsondata = x.result[0];
                                CONSOLE_DEBUG && console.log('result in json format keys:', jsondata);

                                pubaddr = x.result[0].address;       //public address here 
                                privkey1 = x.result[0].privkey;     // privkey here
                                pubkey1 = x.result[0].pubkey;      // get public key here

                                CONSOLE_DEBUG && console.log('privkey', privkey1);  
                                CONSOLE_DEBUG && console.log('result address :', pubaddr);

                                localStorage.setItem("pubaddr", pubaddr);

                                CONSOLE_DEBUG && console.log('result key :', pubkey1);
                                localStorage.setItem("pubaddr", pubaddr);
                                document.getElementById('xrkaddress').value = pubaddr;
                                document.getElementById('modalshowaddress').innerHTML = 'Public Address : '+ pubaddr;
                                document.getElementById('modalshowkey').innerHTML = 'Private Key : ' + privkey1;
                                

        
        
                                ///////////////
                                 var dataStr = "data:text/json;charset=utf-8," + ('{'+'"xrk_address"'+":"+'"'+pubaddr+'"'+","+'"xrk_private_key"'+":"+'"'+privkey1+'"''}');
                                  var dlAnchorElem = document.getElementById('downloadlink');
                                  dlAnchorElem.setAttribute("href",     dataStr     );
                                  dlAnchorElem.setAttribute("download", "Recordskeeper-wallet.json");
                                  dlAnchorElem.click();


                              (function () {
                                  var textFile = null,
                                    makeTextFile = function (text) {
                                      var data = new Blob([text], {type: 'application/json'});

                                      // If we are replacing a previously generated file we need to
                                      // manually revoke the object URL to avoid memory leaks.
                                      if (textFile !== null) {
                                        window.URL.revokeObjectURL(textFile);
                                      }

                                      textFile = window.URL.createObjectURL(data);

                                      return textFile;
                                    };

                       
                                      var create = document.getElementById('create'),
                                      textbox = document.getElementById(privkey1);


                                      var link = document.getElementById('downloadlink');
                                      link.href = makeTextFile('{'+'"xrk_address"'+":"+'"'+pubaddr+'"'+","+'"xrk_private_key"'+":"+'"'+privkey1+'"''}');
                                      link.style.display = 'block';

                       
                              });
        
        ////////////// self - invoking function  

     }
    }

    }); 
}


// 


///////   GOOGLE RECAPTCHA CLIENT SIDE AND SERVER SIDE VERIFICATION   /////////////

            //----------------------------------------------------/
           // onloadCallback()
          // this 
         //----------------------------------------------------/




var onloadCallback = function() {
        grecaptcha.render('html_element', {    // oncallback render a div with id html_element
          'sitekey' : '6LfcOEcUAAAAAAia1cMp60bnm1PMaFrmJ808il_D', // sitekey for the  captcha 
          'theme' : 'light',           // change the theme for light and dark
          'widgetId': 'widgetId',      // add widget id attribute which is optional
          callback(){
            CONSOLE_DEBUG && console.log( 'another callback function here');
            var response = grecaptcha.getResponse();    // get the value of response when user submits recaptcha
            CONSOLE_DEBUG && console.log('response from google : ', response);
          
            // send post method to captcha php that is usin curl post request for cross domain
             $.post("src/captcha.php",
                    {
                      googleResponse: response     // pass the google response
                     
                    },
                      function(response, status){   // pass two parameters respnse  and status 
                        CONSOLE_DEBUG && console.log("response after ssv : ", response, status); 

                           if ( status == 'success'){
                             captchaSuccess = status;
                             CONSOLE_DEBUG && console.log("captchaSuccess :", captchaSuccess);
                            

                           }
                           // alert response and the status here after verification from google 
                      });
            }
        });
    };
////////   GOOGLE RECAPTCHA CLIENT SIDE AND SERVER SIDE VERIFICATION   /////////////


function sendAirdropMail() {

  var name = $('#fullname').val();
  var email = $('#email').val();
  var xrkaddress = $('#xrkaddress').val();

    // watch address 
    jQuery.post("../../src/importAddress.php", { "address": xrkaddress})
        .done(function(data) {
          console.log(data.message);
        });

    jQuery.ajax({
        type: 'POST',
        url: '../../src/airdrop.php', 
        data: { "name": name, "email": email, "address": xrkaddress},
        dataType: 'json',
        beforeSend: function() {
            $("#getxrk").hide();
            $("#request-spinner").show();
        },
        complete: function() {
            grecaptcha.reset();
            captchaSuccess = undefined;
            $("#request-spinner").hide();
            $("#getxrk").show();
        },
        success: function(data) {
            if (data.error == 0) {
                swal({
                    title:'Mail sent',
                    html: data.message,
                    type: 'success',
                    showConfirmButton: true,
                    timer: 15000
                });
            }
            else {
                swal({
                    type: 'error',
                    title: "Error!",
                    html: data.message,
                    showConfirmButton: true,
                    timer: 15000
                });
            }
        },
        error: function(data, status) {
            swal({
                type: 'error',
                title: "Error!",
                html: data.message,
                showConfirmButton: true,
                timer: 15000
            });
        }
    });
            
}


function claimXRKTokens(claimId) {
  
      jQuery.ajax({
          type: 'POST',
          url: '../../src/airdrop.php', 
          data: { "claim_id": claimId},
          dataType: 'json',
          beforeSend: function() {
            // nothing
          },
          complete: function() {
            $("#claim-spinner").hide();
            $("#airdrop-home").show();
          },
          success: function(data) {
              if (data.error == 0) {
                  swal({
                      title:'Congratulations!',
                      html: data.message + ' XRK tokens sent. <br/><b>Check Transaction status here:</b> <a target="_blank" href="'+expUrl+data.txnID+'">'+data.txnID+'</a>',
                      type: 'success',
                      showConfirmButton: true,
                      timer: 150000
                  });
                  $("#claim-msg").text("Your request is processed!");
              }
              else {
                $("#claim-msg").text("You may try again if tokens were not received.");
                  swal({
                      type: 'error',
                      title: "Error!",
                      html: data.message,
                      showConfirmButton: true,
                      timer: 15000
                  });
              }
          },
          error: function(data, status) { 
              $("#claim-msg").text("You may try again if tokens were not received.");
              swal({
                type: 'error',
                title: "Error!",
                html: data.message,
                showConfirmButton: true,
                timer: 15000
            });
          }
      });
              
  }

