<?php
include_once 'include/header.php';


?>
<style type="text/css">
    #footer {
    z-index: 1;
    padding: 0 0 0 20px;
    bottom: -50px;
    font-size: 10px;
    margin-top: 25px;
    margin-bottom: 0px;
}
.logincontainer{
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
}
.logincontainer button, input{
    margin : 10px;
}
#loginbtn{
    width:300px;
}
.aaccountdiv{
    border: 1px dotted gainsboro;
    border-radius: 4px;
    margin: 10px;
    padding: 15px;
    font-weight: 600;
    font-size: 13px;
    text-align: -webkit-center;
    text-align: center;
    display: none;
}
</style>
    <!-- Navigation --> 
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="navigationbar">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                <ul class="nav navbar-nav">

                    <li>
                        <a href="verify.php">Publish Certificate</a>
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

    <div class="logincontainer">
        <button class="btn btn-success " id="createAccount">create Account </button>
        <div class="aaccountdiv">
            <p> Public Address : <span  id="pubAddress">asdfasdfasdfasdf</span>
            <p> Public Key : <span  id="pubKey">asdfasdfasdfasdf</span>
            <p> Priv  Key : <span  id="privKey">asdfasdfasdfasdf</span>
        </div>
        <p>If you already have an account, please enter your public address in
        the input box below or create a new account
        </p>
        <!-- <form id="loginform" method="post" action="">     -->
        <div id="loginform">
                <input type = "text" id="publicAddress" value="" placeholder="Enter your public Address :" required>
                <button id="loginbtn">LOGIN </button>
        </div>
        <!-- </form> -->
    </div>


<!-- <script src="js/index.js" type="text/javascript"/></script> -->
 <script>
    
    $("#createAccount").click(function(){
        // var publicAddress = $("#publicAddress").val();
        // console.log(publicAddress);
        jQuery.ajax({
            type: "POST",
            url: 'cvapi/api/createkeypairs.php',
            // async: false,
            success: function(Response) {
                var response = Response;
                var parsejson = JSON.parse(response);
                console.log(parsejson, "createkeypair response here");
                var publicAddress = parsejson.result[0].address;
                var publicKey = parsejson.result[0].pubkey;
                var privKey = parsejson.result[0].privkey;
                $("#pubKey").text(publicKey) 
                console.log(publicKey);
                console.log(publicAddress, "createkeypair response here");
                jQuery.ajax({
                    type: "POST",
                    url: 'cvapi/api/importaddress.php',
                    data:{
                        publicAddress : publicAddress
                    },
                    // async: false,
                    success: function(Response) {
                        var response = Response;
                        var parsejson = JSON.parse(response);
                        console.log(parsejson, "importaddress response here");
                       
                    }
                });
            }
        });

        
    })

 </script>
     