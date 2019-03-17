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
                        <a href="verify.php">Verify document</a>
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
<script src="js/verify.js" type="text/javascript"/></script>
<style type="text/css">
    html {
  height: 100%;
}
body {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>
    <!-- Page Content -->
    <div class="container">

        <!-- Portfolio Item Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Verify Certificates
                     <span class="headspan">Upload the file &amp; get the PoE link</span>
                </h1>
            </div>
        </div>
        <!-- /.row -->

        <!-- Portfolio Item Row -->
        <div class="row">
            <div class="col-md-8">
                <form id="upload_form" method="POST" enctype="multipart/form-data" action="api/v1/verify">

                  <div class="form-group">
                    <label for="poeFile">File to Verify Certificate</label>
                    <div id="filedrag" style="display: none;" class="dropbox">
          Click here or drag and drop your document in the box.
          <br /> The file will NOT be uploaded. The cryptographic proof is calculated client-side.
        </div>
        <div id="explain"></div>
        <div class="progress">
          <div class="progress-bar progress-bar-success progress-bar-striped"></div>
        </div>
        <fieldset>
            <input id='file' type="file" name="d" required/>
        </fieldset>
                 </fieldset>
                    <!--<input type="file" id="poeFile">-->
                  </div>
                <input type="hidden" id="signature" value="">
                  <button type="submit" class="btn btn-primary">Verify Certificate Now</button>
                </form>
                
            </div>

            <div class="col-md-4">
     
                
            </div>

        </div>
        <!-- /.row -->
