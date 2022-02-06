<?php
if (!file_exists('dir.js'))
//echo exec("node app");
  $cd=1;
include "func.php";
  ?>
<meta name="viewport" content=" maximum-scale=1.0, user-scalable=0">
<title>loading</title>
<link rel="stylesheet" href="./index/styles.css">
<body style="background-color: #000000;">
  <span style="display: none;font-size: 1200%;color: azure;">stop this you are destroying life</span>
<div class="images">

</div>
<img class="phide phidem"  style="opacity: .1;width:1px;" src="./index/hide.bmp" onclick="phide()">
<img class="phide phideb reload" style="opacity: .1;width:1px;" src="./index/reload.bmp" onclick="reload()">
<div id="snackbar"></div>
<div id="image-viewer" style="display: none;">
<span class="right arrow">▶</span><span class="rightl arrow">▶</span>
  <span class="left arrow">◀</span><span class="leftl arrow">◀</span>
  
  <span class="close">+</span>
  <img src='./index/full.bmp' class="fullscreen" onclick="fullscreen();" style="color:blue;">
  <img src='./index/play.bmp' class="play" onclick="play();" style="color:blue;">
  <img src='./index/play.bmp' class="playl play" onclick="playl();" style="color:blue;">
  <img class="modal-content" id="full-image" loading="lazy">
  <div id="snackbarb"></div>
  <img src="./index/hide.bmp" class="phide phideb" onclick="phide()">
  <span style="left: 0px;" class="bar">-</span>
  <span style="right: 0px;" class="bar">-</span>
</div>
<script src="./index/pages.js" ></script>
<script src="dir.js" ></script>
<script src='./index/jquery-3.1.0.min.js' type="text/javascript"></script>
<script src='./index/jquery-ui.min.js' type="text/javascript"></script>
<script src='./index/main.js' type="text/javascript"></script>
</body>
<style></style>

<script>
$('#image-viewer').ready(function() {
var kar=document.querySelector("#image-viewer");
let amain =document.createElement('img');
amain.src='./index/del.bmp';
amain.onclick=Delete;
amain.className='play del';
kar.append(amain);

        });
function Delete() {
  if (confirm("Are you sure")) {
    console.log('y');
     var ssr=document.querySelector("#full-image").getAttribute("src");
console.log(ssr);
if(ssr.includes('?t='))
{
    ssr=ssr.replace('?t=',':');
ssr = /(.+):/.exec(ssr)[1];
}
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
     //document.querySelector("body > script:nth-child(13)").innerHTML = this.responseText;
     snackbarb(this.responseText);
     if(this.responseText=="Deleted"){
      var anum=parseInt(document.querySelector("#full-image").getAttribute("num"));
      DATA.splice(anum, 1);
      document.querySelector("#full-image").src=DATA[anum].url;
      //rightl();
     }
    }
    else
    {
       //snackbarb('error');
    }
  };

  xhttp.open("POST", "func.php", true);
 
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("ddir="+ssr);

  }
  else {
    console.log('n');
  }
   }
function rotate() {
     var ssr=document.querySelector("#full-image").getAttribute("src");
console.log(ssr);
if(ssr.includes('?t='))
{
    ssr=ssr.replace('?t=',':');
ssr = /(.+):/.exec(ssr)[1];
}
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
     snackbarb(this.responseText);
     console.log(this.responseText);
     if(this.responseText=="Rotated"){
      var ttt="?t=" + new Date().getTime();
    DATA[document.querySelector("#full-image").getAttribute('num')].url=DATA[document.querySelector("#full-image").getAttribute('num')].url+ttt;
      document.querySelector("#full-image").src =ssr+ttt;
      //document.querySelector("#full-image").src =ssr;
     }
    }
    else
    {
       //snackbarb('error');
    }
  };
  xhttp.open("POST", "func.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("rdir="+ssr);
   }


function edit() {
     var ssr=document.querySelector("#full-image").getAttribute("src");
console.log(ssr);
if(ssr.includes('?t='))
{
    ssr=ssr.replace('?t=',':');
ssr = /(.+):/.exec(ssr)[1];
}
while(ssr.includes('/')){
ssr=ssr.replace('/','\\');}
while(ssr.includes('%20')){
ssr=ssr.replace('%20',' ');}
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
     //snackbarb(this.responseText);
     
    }
    else
    {
       //snackbarb('error');
    }
  };
  xhttp.open("POST", "func.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("edit="+ssr);
   }

function refresh(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
     console.log(this.responseText);
     snackbarb('Refreshed');
     snackbar('Refreshed');
{
      
     }
    }
  };
  xhttp.open("POST", "func.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("refresh=90");
}
</script>

