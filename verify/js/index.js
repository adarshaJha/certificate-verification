
'use strict';
var CONSOLE_DEBUG = true ;
var translate = function(x) {
  return x;
};
var show_message = function(message, type) {
  if (!type) {
    type = 'success';
  }
  $('.top-right').notify({
    'type': type,
    message: {
      'text': message
    },
    fadeOut: {
      enabled: true,
      delay: 5000
    }
  }).show();
};

$(document).ready(function() {
  var bar = $('.progress-bar');
  var upload_submit = $('#upload_submit');
  var upload_form = $('#upload_form');
  var recently_published = $('#recently_published');
  var recently_verified = $('#recently_verified');
  var explain = $('#explain');
  var dropbox = $('.dropbox');
  

  $('#description_container').addClass('table-responsive');

            if(net == "TestNetwork"){
                net = "TestNetwork";
                localStorage.setItem("network", "TestNetwork");
                jQuery('#navigationbar').css('background', '#54b2ce');
                jQuery('#navigationbar').css('border', 'none');
                jQuery('#togglecontlabel').text('This demo is working on Test Network');
                jQuery('button').css('background', '#54b2ce');
                jQuery('button').css('border', 'none');
                jQuery('nav#nav').css('background', 'rgb(84, 178, 206)');
                jQuery('div#bs-example-navbar-collapse-1').css('background', 'rgb(84, 178, 206)');
                jQuery('div#bs-example-navbar-collapse-1').css('border', 'none');
                console.log(localStorage.getItem("network"));
                tx_url  = 'https://test-explorer.recordskeeper.co/RecordsKeeper%20Testnet/tx/';
           }
           else{
               net == "MainNetwork";
               localStorage.setItem("network", "MainNetwork");
                jQuery('#togglecontlabel').text('Main Network');
                jQuery('#cb1').prop('checked', true);
                 jQuery('#navigationbar').css('background', '#22283a');
                  jQuery('#navigationbar').css('color', '#ffffff');
                   jQuery('div#bs-example-navbar-collapse-1').css('background', '#22283a');
                                 
                tx_url  = 'https://explorer.recordskeeper.co/RecordsKeeper%20Mainnet/tx/';

               

               
           }

 networkToggle();

  // uncomment this to try non-HTML support:
  //window.File = window.FileReader = window.FileList = window.Blob = null;

  var html5 = window.File && window.FileReader && window.FileList && window.Blob;
  $('#wait').hide();

  var handleFileSelect = function(f) {
    if (!html5) {
      return;
    }
    explain.html(translate('Loading document...'));
    var output = '';
    output = translate('Preparing to hash ') + escape(f.name) + ' (' + (f.type || translate('n/a')) + ') - ' + f.size + translate(' bytes, last modified: ') + (f.lastModifiedDate ? f.lastModifiedDate
      .toLocaleDateString() : translate('n/a')) + '';

    var reader = new FileReader();
    reader.onload = function(e) {
      var data = e.target.result;
      bar.width(0 + '%');
      bar.addClass('bar-success');
      explain.html(translate('Now hashing... ') + translate('Initializing'));
      setTimeout(function() {
        CryptoJS.SHA256(data, crypto_callback, crypto_finish);
      }, 200);

    };
    reader.onprogress = function(evt) {
      if (evt.lengthComputable) {
        var w = (((evt.loaded / evt.total) * 100).toFixed(2));
        bar.width(w + '%');
      }
    };
    reader.readAsBinaryString(f);
    //show_message(output, 'info');
  };
  if (!html5) {
    explain.html(translate('disclaimer'));
    upload_form.show();
  } else {
    dropbox.show();
    dropbox.filedrop({
      callback: handleFileSelect
    });
    dropbox.click(function() {
      $('#file').click();
    });
  }


  $(document).ready(function() {
  //alert( "Handler for .onload() called." );
  //event.preventDefault();
  

 
  $.ajax({
   type: "POST",
   url: 'cvapi/api/latest.php',
   data:{ count: 5 },
   success:function(Response) {   
           
            var x = Response;
            x = JSON.parse(x);
            console.log("publish response here", x);

            var result = x.result;
            var data = result.reverse();

            $('#recently_published').append('<table class="table table-striped table-hover"><tr><th>&nbsp;</th><th style="min-width: 204px;"> Document Digest</th><th> Timestamp </th></tr></table>');            
            console.log("result:", data);

            var table_data = data;
            

            for(var i=0; i<5; i++)
              {     

                    var badge = '';
                    
                    if (table_data[i].confirmations > 0) {
                    badge = '<span class="label label-success">✔</span>';
                    
                    }
                    
                    var signature = table_data[i].keys;
                    //console.log("signature is: ", signature);
                    var confirmations = table_data[i].confirmations;

                    var timestamp = table_data[i].blocktime;

                    var date = new Date(timestamp*1000);

                    var year = date.getUTCFullYear();
                    var month = date.getUTCMonth() + 1;
                    var day = date.getUTCDate();
                    var hours = date.getUTCHours();
                    var minutes = date.getUTCMinutes();
                    var seconds = date.getUTCSeconds();

                      $('#recently_published').append('<table class="table table-striped table-hover"><tr><td>' + badge + '</td><td><a href="./details.php?signature=' + signature + '" target="_blank">' + signature +
                        '</a></td><td> ' +year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds+ "  " + 
                        "(UTC Time)" +  '</td></tr></table>');
                                                              }
                          }
                      });
                      
});

  var crypto_callback = function(p) {
    var w = ((p * 100).toFixed(0));
    bar.width(w + '%');
    explain.html(translate('Now hashing... ') + (w) + '%');
  };

  var crypto_finish = function(hash) {
    bar.width(100 + '%');
    explain.html(translate('Document hash: ') + hash);
    $('#signature').val(hash);
    console.log("hash loaded: "+hash);
    //$.post('./api/v1/register/' + hash, onRegisterSuccess);
  };

 $( "#upload_form" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );

  event.preventDefault();
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  var signature = $('#signature').val();
  //console.log(name,email,message,signature);

  var dataArray = {name : name, email : email, message : message, signature : signature};
  var str = JSON.stringify(dataArray);
  var dataHex = toHex(str);

  //console.log("data hex is:", dataHex);

 
  $.ajax({
   type: "POST",
   url: 'cvapi/api/publish.php',
   data:{name: name, email : email , message: message, signature : signature, dataHex: dataHex},
   success:function(Response) {   
           
            var x = Response;
            x = JSON.parse(x);
            //console.log("publish response here", x);

            var tx_id = x.result;

            $('#wait').remove();
            $('#description_container').append("<h2 class='publishTable'>Success</h2>");

            var longUrl = "/proof-of-existence/details.php?signature=" + signature;
            

            //var items = [];
            $('#description_container').append(
            '<table class="table table-striped table-hover publishTable" ><thead><tr><th> Data </th><th> Value</th></tr></thead></table>');

            //console.log("long url is: ", longUrl);

            transaction_id = tx_id;
            //console.log("Transaction id:",transaction_id);

            $.ajax({
            type: "POST",
            url: 'cvapi/api/listwallettransactions.php',
            data:{ tx_id : transaction_id, net: net },
            success:function(Response) {   
           
                    //console.log("list: ", transaction_id);
                    var y = Response;
                    y = JSON.parse(y);

                    

                    var result = y.result;
                    //console.log("result:", result);

                    var confirmations = result.confirmations;


                    if (confirmations == 0)
                      {
                      var blocktime = "pending";
                      var blockhash = "pending";

                      }

                    else
                      {

                          var blocktime = result.blocktime;
                          var blockhash = result.blockhash;

                      }

                    var tx_id = result.txid;
                    var timestamp = result.time;

                    var date = new Date(timestamp*1000);

                    var year = date.getUTCFullYear();
                    var month = date.getUTCMonth() + 1;
                    var day = date.getUTCDate();
                    var hours = date.getUTCHours();
                    var minutes = date.getUTCMinutes();
                    var seconds = date.getUTCSeconds();

                  
                    tx_url ;
                  
                    
                    $('#description_container').append("<table class='table table-striped table-hover publishTable'><tr><td> Name  </td> <td  >"+   name   +"</td></tr><tr><td>Email  </td> <td  >"+   email   +"</td></tr><tr><td> Message  </td> <td  >"+   message  +"</td></tr><tr><td> Signature  </td> <td  >"+   signature   +"</td></tr><tr><td> Url  </td> <td><a href= "+ longUrl +' target="_blank">' + longUrl + "</a></td></tr><tr><td>Blocktime (Unix)  </td> <td  >"+   blocktime   +"</td></tr><tr><td> Blockhash </td><td>"+   blockhash   +"</td></tr><tr><td>  Confirmations   </td  ><td>"+   confirmations   +"</td></tr><tr><td> Transaction Id    </td  ><td><a href='"+ tx_url + "" + tx_id + "' target='_blank'>" + tx_id + "</a></td></tr><tr><td> Time </td><td>"+year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds+ " " + "(UTC TIME)"+ "</td></tr></table>");
                    // grecaptcha.reset();
                }
            });
            


         }
      });
 

  


 $( "#upload_form" ).trigger('reset');
 explain.html(translate(''));
 bar.width('0%');

 $('#description').remove();
 $('#description_container').append('<div id="wait"><h2> Generating PoE... Please wait...</h2><br/><img src="img/gears.gif"/></div>');
  
});
 
  document.getElementById('file').addEventListener('change', function(evt) {
    if($('.publishTable').length) {
        $('.publishTable').remove();
    }
    var f = evt.target.files[0];
    handleFileSelect(f);
  }, false);

  // upload form (for non-html5 clients)
  upload_submit.click(function() {
    upload_form.ajaxForm({
      dataType: 'json',
      beforeSubmit: function() {
        var percentVal = '0%';
        bar.removeClass('bar-danger');
        bar.removeClass('bar-warning');
        bar.removeClass('bar-success');
        bar.addClass('bar-info');
        bar.width(percentVal);
      },
      uploadProgress: function(event, position, total, percentComplete) {
        var percentVal = percentComplete + '%';
        bar.width(percentVal);
      },
      success: onRegisterSuccess
    });

    

  });


  // toHex() function here that converts any string toHex
// Params : str 
// return : hex 
function toHex(str) {
    var arr = [];
  for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex.length > 1 && hex || "0" + hex);
  }
  return arr.join('');

}



});


    function ToggleNetwork(){
        if($('#cb1').is(':checked'))
            {
             net = "test";
               localStorage.setItem("network", "TestNetwork");
                $('#navigationbar').css('background', '#54b2ce');
                 $('#navigationbar').css('border', 'none');
                 $('#togglecontlabel').text('Test Network');
                
                  jQuery('button').css('background', '#54b2ce');
                  jQuery('button').css('border', 'none');
                  $('nav#nav').css('background', 'rgb(84, 178, 206)');

                  tx_url  = 'https://test-explorer.recordskeeper.co/RecordsKeeper%20Testnet/tx/';

                  window.location.href = "./";
        
              
            }
            else
            
            {
                net = "main";
               localStorage.setItem("network","MainNetwork");

             
                  
                jQuery('button').css('background', '#22283a');
                jQuery('button').css('border', 'none');
                 $('#navigationbar').css('background', '#22283a');
                  $('#navigationbar').css('color', '#ffffff');
                   $('nav#nav').css('background', '#22283a');
              
                   $('#togglecontlabel').text('Main Network');

                   tx_url  = 'https://explorer.recordskeeper.co/RecordsKeeper%20Mainnet/tx/';
                                     

                 
            }
    }

function networkToggle(){
  $('.tgl-btn').click(function(){
        ToggleNetwork();
    });
}

// ///////   GOOGLE RECAPTCHA CLIENT SIDE AND SERVER SIDE VERIFICATION   /////////////

//             //----------------------------------------------------/
//            // onloadCallback()
//           // this 
//          //----------------------------------------------------/




// var onloadCallback = function() {
//         grecaptcha.render('html_element', {    // oncallback render a div with id html_element
//           'sitekey' : '6LfcOEcUAAAAAAia1cMp60bnm1PMaFrmJ808il_D', // sitekey for the  captcha 
//           'theme' : 'light',           // change the theme for light and dark
//           'widgetId': 'widgetId',      // add widget id attribute which is optional
//           callback(){
//             CONSOLE_DEBUG && console.log( 'another callback function here');
//             var response = grecaptcha.getResponse();    // get the value of response when user submits recaptcha
//             CONSOLE_DEBUG && console.log('response from google : ', response);
          
//             // send post method to captcha php that is usin curl post request for cross domain
//              $.post("poe-api/api/captcha.php",
//                     {
//                       googleResponse: response     // pass the google response

                     
//                     },
//                       function(response, status){   // pass two parameters respnse  and status 
//                         CONSOLE_DEBUG && console.log("response after ssv : ", response, status); 

//                            if ( status == 'success'){
//                              captchaSuccess = status;
//                              $('#html_element').css("border", "none");
//                              CONSOLE_DEBUG && console.log("captchaSuccess :", captchaSuccess);
                            

//                            }
//                            // alert response and the status here after verification from google 
//                       });
//             }
//         });
//     };
// ////////   GOOGLE RECAPTCHA CLIENT SIDE AND SERVER SIDE VERIFICATION   /////////////

var net = localStorage.getItem("network");

//Global variables
var captchaSuccess;
var transaction_id;
var table_data;
var tx_url;

