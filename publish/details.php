<?php
include_once 'include/header.php';


?>

    <!-- Navigation --> 
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="navigationbar">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul class="nav navbar-nav">

                    <li>
                        <a href="verify.php">Verify Certificate</a>
                    </li>
                </ul>
                <nav id="nav" style="background: rgb(34, 40, 58);">
                    <ul>
                        
                        <!-- <div id="togglecont">
                            <input class="tgl tgl-light" id="cb1" type="checkbox">
                            <label class="tgl-btn" for="cb1"></label>
                        </div> -->
                    
                   </ul>
               </nav>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
<script src="js/index.js" type="text/javascript"/></script>

    <!-- Page Content -->
    <div class="container">
<div style="margin-top:48px;" class="notifications top-right"></div>
        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Details of Published Certificate
                    <small><?php echo $_GET['signature']; ?></small>
                </h1>

                <h3 class="page-header">Arranged in chronological order (Most recent first).
                </h1>
            </div>
        </div>
        <!-- /.row -->
<script>
    var signature = "<?php echo $_GET['signature']; ?>";
            
            //console.log("Signature is:", signature);

  $.ajax({
   type: "POST",
   url: 'cvapi/api/verify.php',
   data:{ signature : signature, net: net },
   success:function(Response) {   
           
            var x = Response;
            x = JSON.parse(x);
            //console.log("publish response here", x);

            var result = x.result;
            var data = result.reverse();

            sign = signature;
            table_data = data;
            //console.log("result2:", table_data);


            Object.keys(table_data).forEach(function (k){

                    var signature = sign;



                    var confirmations = table_data[k].confirmations;
                    var tx_id = table_data[k].txid;
                    
                    
                    var dataHex = table_data[k].data;
                    var converted_data = hex2a(dataHex);
                    var final_output = JSON.parse(converted_data);

                    var name = final_output.name;
                    var message = final_output.message;
                    var email = final_output.email;

                    if (confirmations == 0) {


                        var blocktime = "pending";
                        var timestamp = "pending";
                      

                        var time = "pending";
  
                  
                    }

                    else {

                        var blocktime = table_data[k].blocktime;
                        var timestamp = table_data[k].blocktime;
                        var date = new Date(timestamp*1000);

                        var year = date.getUTCFullYear();
                        var month = date.getUTCMonth() + 1;
                        var day = date.getUTCDate();
                        var hours = date.getUTCHours();
                        var minutes = date.getUTCMinutes();
                        var seconds = date.getUTCSeconds();

                        var time = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds+ " " + "(UTC TIME)";

                    }



                   $('#received_data').append(
                    '<table class="table table-striped table-hover"><thead><tr><th> Data </th><th> Value</th></tr></thead></table>');

                    
                    tx_url;
                    
                    $('#received_data').append("<table class='table table-striped table-hover'><tr><td> Signature  </td> <td  >"+   signature   +"</td></tr><tr><td> Transaction_id  </td> <td><a href='"+ tx_url + "" + tx_id + "' target='_blank'>" + tx_id + "</a></td></tr><tr><td> Blocktime(Unix) </td><td>"+   blocktime   +"</td></tr><tr><td>  Confirmations   </td  ><td>"+   confirmations   +"</td></tr><tr><td>  Name   </td  ><td>"+   name   +"</td></tr><tr><td>  Email   </td  ><td>"+   email   +"</td></tr><tr><td>  Message   </td  ><td>"+   message   +"</td></tr><tr><td> Time </td><td>" + time + "</td></tr></table>");

      
            
                });


                }    
  
            });
            

            // recordData() function here that converts any string toHex
            // Params : null 
            // return : none
              function hex2a(hexx) {
                    var hex = hexx.toString();//force conversion
                    var str = '';
                    for (var i = 0; i < hex.length; i += 2)
                        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                    return str;
                  } 

            
            //Global variables
            var table_data;
            var sign;
            var tx_url;

             </script>   
        <!-- Portfolio Item Row -->
        <div class="row">
        
            <div class="col-md-12">
            <div id="received_data"></div>
             

                </div>

        </div>
        <!-- /.row -->

   