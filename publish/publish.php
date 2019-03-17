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

<style type="text/css">
    #footer {
    z-index: 1;
    padding: 0 0 0 20px;
    bottom: -50px;
    font-size: 10px;
    margin-top: 25px;
    margin-bottom: 0px;
}
</style>
<script src="js/index.js" type="text/javascript"/></script>
    <!-- Page Content -->
    <div class="container">
<div style="margin-top:48px;" class="notifications top-right"></div>
        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Publish Certificate to Blockchain
                    <span class="headspan">Upload the file &amp; get the link</span>
                </h1>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Item Row -->
        <div class="row">
        
            <div class="col-md-8">
            <div id="form_container">
                <form id="upload_form" method="POST" enctype="multipart/form-data" action="publish.php">
                  <div class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required>
                  </div>
                  <div class="form-group">
                    <label for="email">Email: </label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Your Email ID" required>
                  </div>
                  <div class="form-group">
                    <label for="message">Message: </label>
                    <textarea class="form-control" rows="3" maxlength="100" id="message" name="message" placeholder="(Optional) I am the original creator of this file & this Blockchain-based PoE is the proof."></textarea>
                  </div>

                  
                  <div class="form-group">
                    <label for="poeFile">File to Upload</label>
                    <div id="filedrag" style="display: none;" class="dropbox">
                    </br>
                          Click here or drag and drop your document in the box.
                          
                        </div>
                        <div id="explain"></div>
                        <div class="progress">
                          <div class="progress-bar progress-bar-success progress-bar-striped"></div>
                        </div>
                        <fieldset>
                            <input id='file' type="file" name="d" required/>
                           
                          </fieldset>
                                    <!--<input type="file" id="poeFile">-->
                                  </div>

                                <input type="hidden" id="signature" name="signature" value="">
                                <div id="html_element" required></div>
                                  <button type="submit" name="submit" class="btn btn-primary">Generate PoE Now</button>
                </form>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>


            </div>
            </div>

           

        </div>
        <!-- /.row -->
     