console.log(DATA.length + " numbers of data found");
var now;
var err = ['499 Client Closed Request', '444 No Response', '405 Method Not Allowed', '412 Precondition Failed', '421 Misdirected Request', '424 Failed Dependency', '426 Upgrade Required', '431 Request Header Fields Too Large', '501  Not Implemented', '416 Range Not Satisfiable', '599 Network Connect Timeout Error', '530 Site is frozen', '498 Invalid Token', '419 Page Expired', '505 HTTP Version Not Supported', '504 Gateway Timeout', '503 Service Unavailable', '502 Bad Gateway', '500 Internal Server Error', '429 Too Many Requests', '428 Precondition Required', '421 Misdirected Request', '400 Bad Request', '424 Failed Dependency', '401 Unauthorized', '403 Forbidden', '404 Not Found', '511 Network Authentication Required', '417 Expectation Failed', '408 Request Timeout', '415 Unsupported Media Type'];
var a;
var big = 0;
var rnum;
var phide1 = 0;
var phide2 = 0;
var phide3 = 0;
var num = 12;
var fulls = 0;
var plays = 0;
var playls = 0;
var aaudio = 0;
var phone = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        phone=true;console.log("phone");
    }
hider();
cmobile();
var len = DATA.length; //getting total array
loader(DATA);

function loader(arr) { //image loader function
    var div = document.querySelector("body > div.images");
    var i = 0;
    for (; i < num; i++) {
        let img = document.createElement('img');
        rnum = Math.floor(Math.random() * (len - 0) + 0);
        img.src = arr[rnum].url;
        img.setAttribute("num", rnum);
        div.append(img);
    }
    jq();
}

window.onscroll = function (ev) { //new image with scroll
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 150)) {
        loader(DATA);
    }
}

function jq() {
    setTimeout(function () { //for every load its needed
        var $ = window.jQuery;
        $(".images img").click(function () {
            $("#full-image").attr("src", $(this).attr("src"));
            $("#full-image").attr("num", $(this).attr("num"));
            $('#image-viewer').show();
            $('body').addClass('stop-scrolling');
            big = 1;
    if(!phone){showFoo(2000);}
            now = parseInt(childnum(this));
            var tnum = parseInt($(this).attr("num"));
            var imglr = new Image();
            imglr.src = DATA[tnum + 1].url;
            var imgll = new Image();
            imgll.src = DATA[tnum - 1].url;
        });
        $("#full-image").dblclick(function () { //double click full screen
            if (big == 1 && !phone) {
                fullscreen();
            }
        });
        $("#image-viewer .close").unbind('click').bind('click', function () { //close
            if (plays == 1) {
                play();
            }
            if (playls == 1) {
                playl();
            }
            if (fulls == 1) {
                fullscreen();
            }
            $('body').removeClass('stop-scrolling');
            $('#image-viewer').fadeOut(200);
            big = 0;
        });
        $("#image-viewer .right").unbind('click').bind('click', function () { //right
            right();
        });
        $("#image-viewer .left").unbind('click').bind('click', function () { //left
            left();
        });
        $("#image-viewer .rightl").unbind('click').bind('click', function () { //right
            rightl();
        });
        $("#image-viewer .leftl").unbind('click').bind('click', function () { //left
            leftl();
        });
        if (!phone) {
            $("#image-viewer").unbind('click').bind('click', function (e) { //dark place click close
                if (e.target !== this) {
                    return;
                } else {
                    if (plays == 1) {
                        play();
                    }
                    if (playls == 1) {
                        playl();
                    }
                    if (fulls == 1) {
                        fullscreen();
                    }
                    $('body').removeClass('stop-scrolling')
                    $('#image-viewer').fadeOut(200);
                    big = 0;
                }
            });
        }

    }, 1000);
}

aTag = document.querySelector(".phidem");
if (localStorage.getItem('hide') == '0') {
    aTag.style.opacity = '0';
} else {
    aTag.style.opacity = '1';
}
rTag = document.querySelector(".reload");
if (localStorage.getItem('hide') == '0') {
    rTag.setAttribute('style', "opacity: 0;zoom: .01;");
} else {
    rTag.setAttribute('style', "opacity: .6;zoom:.6;");
}

function cmobile() {
    if (phone) { //for small less image load
        if (localStorage.getItem('hide') === null) { //set hide if not set
            localStorage.setItem('hide', 0);
        }
        if (localStorage.getItem('hide') == '0') { // hide if hidden using local storage
            //$('.images').ready(function() { $("body > img").css("opacity",'0.2');});
            $('.images').hide();
            $('#image-viewer').hide();
            document.title = err[Date().charAt(8) + Date().charAt(9) - 1];
        }
        num = 6;

        $("#image-viewer").unbind('click').bind('click', function (e) {
            //if (e.target === $('.playl')){
            //  console.log('lol');
            //return;}
            //else{
            var pWidth = $(this).innerWidth();
            var pHeight = $(this).innerHeight(); //use .outerWidth() if you want borders
            var pOffset = $(this).offset();
            var x = e.pageX - pOffset.left;
            var y = e.pageY - pOffset.top;
            /*var ppp=($('#image-viewer').innerWidth())/2-($('#full-image').innerWidth())/2;
            var ppx=($('#image-viewer').innerWidth())/2+($('#full-image').innerWidth())/2;
             if(pHeight*0 < y && pHeight*.1 > y){
                 if(ppp*.5 > x){
                 console.log('leftkk');
                 playl();
             }
             if(ppp*.5 < x && ppp > x){
                 console.log('rightkk');
                 play();
             }
             if(ppx < x){
                 console.log('close');
             }
             }*/
            if (pHeight * .1 < y && pHeight * .6 > y) {
                if (pWidth * .4 > x) {
                    console.log('left');
                    left();
                }
                if (pWidth * .6 < x) {
                    console.log('right');
                    right();
                }
            }
            if (pHeight * .6 < y && pHeight * 1 > y) {
                if (pWidth * .4 > x) {
                    console.log('leftl');
                    leftl();
                }
                if (pWidth * .6 < x) {
                    console.log('rightl');
                    rightl();
                }
            }
            //}     
        });
    }
}
if(!phone){addEventListener("keydown", function (ev) {
    if(ev.keyCode === 99 || ev.keyCode === 34){
            rightl();
    } else if(ev.keyCode === 97 || ev.keyCode === 35){
            leftl();
    }else if(ev.keyCode === 98 || ev.keyCode === 40){
            playl();
    }else if(ev.keyCode === 12 || ev.keyCode === 101){
            play();
    } else if(ev.keyCode === 102){
            right();
    } else if(ev.keyCode === 100){
            left();
    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && ev.keyCode === 77) {
        audio.loop = true;
        audio.currentTime = Math.random() * (3700 - 0) + 0;
        audio.pause();
        if (audio.paused && localStorage.getItem('hide') == '1' && localStorage.getItem('hide1') == '1') {
            audio.play();
            aaudio = 1;
            snackbarb('Music on');
            snackbar('Music on');
        }

    } else if ( /*ev.ctrlKey && */ ev.shiftKey && ev.altKey && ev.keyCode === 188) {
        audio.volume = (audio.volume > .2) ? audio.volume - .1 : audio.volume;
        if (audio.volume < .15) {
            snackbar('Least Sound already');
        }


    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && ev.keyCode === 190) {
        audio.volume = (audio.volume < .9) ? audio.volume + .1 : audio.volume;
        if (audio.volume > .95) {
            snackbar('Highest Sound already');
        }


    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && (ev.keyCode === 186 || ev.keyCode === 222)) {
        unhide(ev.keyCode);


    } else if (ev.keyCode === 46) {
        //unhide(ev.keyCode);  
        if (big == 1 && localStorage.getItem('hide') == '1' && localStorage.getItem('hide1') == '1') {
            console.log('click');
            if (document.querySelector("#image-viewer > img.play.del") != null) {
                document.querySelector("#image-viewer > img.play.del").click();
            }
        }
    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && ev.keyCode === 81) {
        //unhide(ev.keyCode);  
        if (document.URL.includes(":16969")) {
            refresh();
        }
    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && ev.keyCode === 85) {
        //unhide(ev.keyCode);  
        if (document.URL.includes(":16969") && big == 1) {
            rotate();
        }
    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && ev.keyCode === 69) {
        //unhide(ev.keyCode);  
        if (document.URL.includes("localhost:16969") && big == 1) {
            edit();
        }
    } else if ( /*ev.ctrlKey &&*/ ev.shiftKey && ev.altKey && ev.keyCode === 191) {
        shortcut();
    } else if (ev.keyCode === 186 || ev.keyCode === 222) {
        hide(ev.keyCode);


    } else if (ev.keyCode === 77) {
        if(!(audio.paused)){
        audio.pause();
        aaudio = 0;
        snackbarb('Music Paused');
        snackbar('Music Paused');}

    } else if (ev.keyCode === 85) {
        if(big==1){
        var ssr=document.querySelector("#full-image").getAttribute("src");
        if(ssr.includes('?t=')){
        ssr=ssr.replace('?t=',':');
        ssr = /(.+):/.exec(ssr)[1];
        }
        var ttt="?t=" + new Date().getTime();
        DATA[document.querySelector("#full-image").getAttribute('num')].url=DATA[document.querySelector("#full-image").getAttribute('num')].url+ttt;
        document.querySelector("#full-image").src =ssr+ttt;console.log(ssr+ttt);
        snackbarb('Image Refrshed');}

    } else {
        console.log(ev.keyCode);
    }

    switch (ev.key.toUpperCase()) {

        case "ARROWRIGHT":
            right();
            break;
        case "ARROWLEFT":
            left();
            break;
        case "L":
        case "BACKSPACE":
        case "ESCAPE":
            $('#image-viewer').fadeOut(200);
            if (plays == 1) {
                play();
            }
            if (playls == 1) {
                playl();
            }
            $('body').removeClass('stop-scrolling')
            big = 0;
            break;
        case "F":
            if (big == 1) {
                fullscreen();
            }
            break;
        case "P":
            if (big == 1) {
                play();
            }
            break;
        case "O":
            if (big == 1) {
                playl();
            }
            break;
        case "[":
            if (big == 1) {
                if (plays == 1) {
                    play();
                }
                if (playls == 1) {
                    playl();
                }
            }
            break;
            /*case "ARROWUP":
                      document.body.scrollTop = 0;
                      document.documentElement.scrollTop = 0;
              break;*/
        case "A":
        case ",":
            leftl();
            break;
        case "D":
        case ".":
            rightl();
            break;
            /*case ";":
                  hide();
              break;
            case "'":
                  hide1();
              break;*/
        case "R":
            reload();
            break;
        case "C":
            if (big == 1) {
                var uu = document.querySelector("#full-image").src;
                var urr = document.URL;
                urr = urr.replace('/Pics/index.php', '');
                uu = uu.replace(urr, 'file:///D:/loi/Pics/');
                uu = uu.replace('Pics//Pics', 'Pics');
                console.log(uu);
                var aux = document.createElement("input");
                aux.setAttribute("value", uu);
                document.body.appendChild(aux);
                aux.select();
                document.execCommand("copy");
                document.body.removeChild(aux);
            }
            break;

        default:
            console.log(ev.key.toUpperCase());
            break;
    }
});
}

var elem = document.querySelector("#image-viewer"); //FULL screen
function fullscreen() {
    if (fulls == 0) {
        document.querySelector("#image-viewer > img.fullscreen").src = "./index/short.bmp";
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        snackbarb('Fullscreen On');
        fulls = 1;
    } else {
        document.querySelector("#image-viewer > img.fullscreen").src = "./index/full.bmp";
        document.exitFullscreen();
        snackbarb('Fullscreen Off');
        fulls = 0;
    }
}

function play() {
    if (plays == 0) {
        if (playls == 1) {
            playl();
        }
        //snackbarb('Play Slideshow');
        document.querySelector("#image-viewer > img.play").src = "./index/pause.bmp";
        plays = 1;
        timer = setInterval(() => {
            right();
        }, 3000);

    } else {
        //snackbarb('Pause Slideshow');
        document.querySelector("#image-viewer > img.play").src = "./index/play.bmp";
        clearInterval(timer);
        plays = 0;
    }
}

function playl() {
    if (playls == 0) {
        if (plays == 1) {
            play();
        }
        //snackbarb('Play Slideshow');
        document.querySelector("#image-viewer > img.playl").src = "./index/pause.bmp";
        playls = 1;
        timer = setInterval(() => {
            rightl();
        }, 3000);

    } else {
        //snackbarb('Pause Slideshow');
        document.querySelector("#image-viewer > img.playl").src = "./index/play.bmp";
        clearInterval(timer);
        playls = 0;
    }
}

if(!phone){var audio = new Audio('./index/aaa.mp3');
audio.volume = .1;

$(window).blur(function () { // windows change
    audio.pause();
});
$(window).focus(function () {
    if (aaudio == 1) {
        if (audio.paused && $('.images').is(":visible")) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});
}
/* audio */
function right() {
    if (big == 1) {
        now++;
        if (document.querySelector("body > div.images > img:nth-child(" + ((now + 3)) + ")") == null) { //if next element null load it
            loader(DATA);
        }
        document.querySelector("#image-viewer > span.right.arrow").style.right = 37;
        setTimeout(function () {
            document.querySelector("#image-viewer > span.right.arrow").style.right = 45;
        }, 300);
        document.querySelector("#full-image").src = document.querySelector("body > div.images > img:nth-child(" + (now) + ")").src;
        document.querySelector("#full-image").setAttribute("num", document.querySelector("body > div.images > img:nth-child(" + (now) + ")").getAttribute("num"));
        var tnum = parseInt(document.querySelector("#full-image").getAttribute("num"));
        var imgrr = new Image();
        imgrr.src = DATA[tnum + 1].url;
        var imgrl = new Image();
        imgrl.src = DATA[tnum - 1].url;
    }
}

function left() {
    if (big == 1 && now > 1) {
        now--;
        document.querySelector("#image-viewer > span.left.arrow").style.left = 37;
        setTimeout(function () {
            document.querySelector("#image-viewer > span.left.arrow").style.left = 45;
        }, 300);
        document.querySelector("#full-image").src = document.querySelector("body > div.images > img:nth-child(" + (now) + ")").src;
        document.querySelector("#full-image").setAttribute("num", document.querySelector("body > div.images > img:nth-child(" + (now) + ")").getAttribute("num"));
        var tnum = parseInt(document.querySelector("#full-image").getAttribute("num"));
        var imglr = new Image();
        imglr.src = DATA[tnum + 1].url;
        var imgll = new Image();
        imgll.src = DATA[tnum - 1].url;
    }
}

function rightl() {
    /*var size=$(".rightl").css("font-size");
var sizel=(parseInt(size.replace("px", ""))*1.3)+'px';
    $(".rightl").css("font-size",sizel);
    setTimeout(function(){$(".rightl").css("font-size",size);}, 300);*/
    var tnumr = parseInt(document.querySelector("#full-image").getAttribute("num")); //console.log('previous: '+tnumr);console.log('new: '+(tnumr+1));
    if (big == 1) {
        if(tnumr==DATA.length-1){tnumr=-1;}
        document.querySelector("#full-image").src = DATA[tnumr + 1].url;
        document.querySelector("#full-image").setAttribute("num", tnumr + 1);
        loadimg([DATA[tnumr + 2].url, DATA[tnumr + 3].url, DATA[tnumr + 4].url]);
        //var img =new Image(); img.src=DATA[tnumr+2].url;
        //var img1 =new Image(); img1.src=DATA[tnumr+3].url;
        //var img2 =new Image(); img2.src=DATA[tnumr+4].url;
    }
}

function leftl() {
    /*var size=$(".leftl").css("font-size");
var sizel=(parseInt(size.replace("px", ""))*1.3)+'px';
    $(".leftl").css("font-size",sizel);
    setTimeout(function(){$(".leftl").css("font-size",size);}, 300);*/
    var tnuml = parseInt(document.querySelector("#full-image").getAttribute("num")); //console.log('previous: '+tnuml);console.log('new: '+(tnuml-1));
    if (big == 1) {
        if(tnuml==0){tnuml=DATA.length;}
        document.querySelector("#full-image").src = DATA[tnuml - 1].url;
        document.querySelector("#full-image").setAttribute("num", tnuml - 1);
        loadimg([DATA[tnuml - 2].url, DATA[tnuml - 3].url, DATA[tnuml - 4].url]);
        //var img =new Image(); img.src=DATA[tnuml-2].url;
        //var img1 =new Image(); img1.src=DATA[tnuml-3].url;
        //var img2 =new Image(); img2.src=DATA[tnuml-4].url;
    }
}
function shortcut(){
    if (document.querySelector("#help")==null && localStorage.getItem('hide1') != '0' && localStorage.getItem('hide') != '0') {
(eHelp = document.createElement("DIV")).id = "iks_help";
        eHelp.innerHTML = `<style>
#iks_help{position:fixed;z-index:999999999;left:0;top:0;right:0;bottom:0;background:rgb(0,0,0,0.5);cursor:pointer}
#help{position:fixed;right:.5em;bottom:.5em;border:2px solid #000;border-radius:.5em;padding:.5em;background:#fff;font-size:12pt;line-height:normal}
#iks_title{margin-bottom:.5em;font-size:14pt;font-weight:bold;line-height:normal}
#iks_list tr:nth-child(2n+1){background:#eee}
#iks_list td{padding:.05em .3em;vertical-align:middle;font-size:12pt;font-weight:normal;line-height:normal}
#iks_list div{padding-right: 5px;padding-left: 5px;display:inline-block;border:1px solid #000;border-radius:.3em;min-width:1.6em;background:#fff;text-align:center;font-weight:bold;line-height:1.4em}
</style>
<div id="help">
  <div id="iks_title">Keyboard Shortcuts List</div>
  <table id="iks_list">
    <tr><td><div>left/right</div></td><td>Right/Left Image.</td></tr>
    <tr><td><div>A|<|n1 / D|>|n3</div></td><td>Right/Left Image(same folder).</td></tr>
    <tr><td><div>L|Bsp|Esc</div></td><td>Close Viewer.</td></tr>
    <tr><td><div>F</div></td><td>Viewer Fullscreen.</td></tr>
    <tr><td><div>P|n5 / O|n2</div></td><td>Play Media(by web/by folder)</td></tr>
    <tr><td><div>[</div></td><td>Stop Media Player.</td></tr>
    <tr><td><div>R</div></td><td>Reload Images.</td></tr>
    <tr><td><div>Del</div></td><td>Delete Image.</td></tr>
    <tr><td><div>Sh+Alt+U</div></td><td>Rotate Image.</td></tr>
    <tr><td><div>Sh+Alt+E</div></td><td>Edit Image.</td></tr>
    <tr><td><div>Sh+Alt+Q</div></td><td>Refresh Image Collection.</td></tr>
    <tr><td><div>C</div></td><td>Copy Location.</td></tr>
    <tr><td><div>Sh+Alt+M</div></td><td>Play Audio.</td></tr>
    <tr><td><div>M</div></td><td>Stop Audio.</td></tr>
    <tr><td><div>Sh+Alt+<></div></td><td>Increase/Decrease Vol.</td></tr>
    <tr><td><div>?</div></td><td>Display this list.</td></tr>
  </table>
</div>`;
        eHelp.onclick = () => eHelp.remove();
      }
      if (eHelp.parentNode) {
        eHelp.remove();
      } else document.documentElement.appendChild(eHelp);
}
/* ---------------------------Hide------------------------ */
function hider() {
     if(!phone) {
        if (localStorage.getItem('hide1') != '0' && localStorage.getItem('hide') != '0') {
            document.title = 'Gallery';
            $('img.reload').ready(function () {
                $('img.reload').css('display', 'block');
            });
        }
        if (localStorage.getItem('hide1') === null) { //set hide if not set
            localStorage.setItem('hide1', 1);
        }
        if (localStorage.getItem('hide1') == '0') {
            $('.images').hide();
            $('#image-viewer').hide();
            var iframe = document.createElement('iframe');
            document.title = 'Home | AIUB';
            iframe.style = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
            iframe.src = 'https://www.aiub.edu/';
            document.body.appendChild(iframe);
        }
        if (localStorage.getItem('hide') === null) { //set hide if not set
            localStorage.setItem('hide', 0);
        }
        if (localStorage.getItem('hide') == '0') { // hide if hidden using local storage
            $('.images').hide();
            $('#image-viewer').hide();
            $('.reload').hide();
            document.title = err[Date().charAt(8) + Date().charAt(9) - 1];
        }
    }
}


function hide(key) {
    if (document.querySelector("#help")!=null){document.querySelector("#iks_help").remove();}
    if (key == 186) {
        if (!($('.images').is(":visible") == $('.images').is(":hidden"))) {
            if (localStorage.getItem('hide') == '1') {
                if (document.querySelector("body > iframe") == null) {
                    $('.images').hide();
                    $('.reload').hide();
                    document.title = 'Home | AIUB';
                    var iframe = document.createElement('iframe');
                    iframe.style = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
                    iframe.src = 'https://www.aiub.edu/';
                    document.body.appendChild(iframe);
                    localStorage.setItem('hide1', 0);
                }
            } else {
                document.title = err[Date().charAt(8) + Date().charAt(9) - 1];
                $('.images').hide();
                $('.reload').hide();
                if (big == 1) {
                    $('#image-viewer').hide();
                }
            }
            if (aaudio == 1) {
                audio.pause();
            }
        }
    } else if (key == 222) {
        if (!($('.images').is(":hidden"))) {
            if (localStorage.getItem('hide1') == '1') {
                localStorage.setItem('hide', 0);
                document.title = err[Date().charAt(8) + Date().charAt(9) - 1];
                $('.images').hide();
                $('.reload').hide();
                if (big == 1) {
                    $('#image-viewer').hide();
                }
            } else {
                if (document.querySelector("body > iframe") == null) {
                    $('.images').hide();
                    $('.reload').hide();
                    var iframe = document.createElement('iframe');
                    document.title = 'Home | AIUB';
                    iframe.style = "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"
                    iframe.src = 'https://www.aiub.edu/';
                    document.body.appendChild(iframe);
                }
            }
            if (aaudio == 1) {
                audio.pause();
            }
        }

    }
}

function unhide(key) {
    if (key == 186) {
        if (document.querySelector("body > iframe") != null) {
            document.querySelector("body > iframe").remove();
            localStorage.setItem('hide1', 1);
            jq();
            document.title = 'Gallery';
            $('.images').show();
            $('.reload').show();
            if (big == 1) {
                $('#image-viewer').show();
            }
            if (aaudio == 1) {
                audio.play();
            }
        }
    } else if (key == 222) {
        if ($('.images').is(":hidden") && document.querySelector("body > iframe") == null) {
            localStorage.setItem('hide', 1);
            document.title = 'Gallery';
            $('.images').show();
            $('.reload').show();
            if (big == 1) {
                $('#image-viewer').show();

            }
            if (aaudio == 1) {
                audio.play();
            }
        }
    }


}

function phide() {
    rTag = document.querySelector("body > img.phide.phideb.reload");
    if ($('.images').is(":hidden")) {
        if (phide1 == 0) {
            phide1 = 1;
        } else {
            if (phide2 == 0) {
                phide2 = 1;
            } else {
                if (phide3 == 0) {
                    phide3 = 1;
                } else {
                    $(".phide").css("opacity", '');
                    document.title = 'Gallery';
                    $('.images').show();
                    rTag.setAttribute('style', "opacity: .6;zoom:.6;");
                    if (big == 1) {
                        $('#image-viewer').show();

                    }
                    localStorage.setItem('hide', 1);
                }
            }
        }
    } else {
        document.title = err[Date().charAt(8) + Date().charAt(9) - 1];
        $('.images').hide(); //$('.phideb').hide();
        if (big == 1) {
            $('#image-viewer').hide();
        }
        $(".phide").css("opacity", '0');
        localStorage.setItem('hide', 0);
        phide1 = 0;
        phide2 = 0;
        phide3 = 0;
    }
}
/* ---------------------------Hide------------------------ */
function reload() {
    if (localStorage.getItem('hide') == 1) {
        console.log('Reloaded');
        while (document.querySelector("body > div.images > img:nth-child(1)") != null) {
            $('#image-viewer').hide();
            if (plays == 1) {
                play();
            }
            if (playls == 1) {
                playl();
            }
            $('body').removeClass('stop-scrolling')
            big = 0;
            document.querySelector("body > div.images > img:nth-child(1)").remove();
        }
        loader(DATA);
        loader(DATA);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        snackbar('Reloaded Images');
    }
}

function loadimg(images) {
    if (!images.length) {
        return;
    }

    var img = new Image(),
        url = images.shift();
    console.log('done');

    img.onload = function () {
        loadimg(images);
    };
    img.src = url;
}
/* idle timer */
let idleTimer = null;
let idleState = false;

function showFoo(time) {//cursor hide
  clearTimeout(idleTimer);
  if (idleState == true) {
    document.querySelector("#full-image").style.cursor = 'auto';
    if(!phone){$(".rightl,.leftl,.playl").css("opacity", "0.5");}
  }
  idleState = false;
  idleTimer = setTimeout(function() {
    document.querySelector("#full-image").style.cursor = 'none';
    if(!phone){$(".rightl,.leftl,.playl").css("opacity", "0.1");}
    idleState = true;
  }, time);
}

showFoo(2000);

$('#full-image').mousemove(function(){
    showFoo(2000);
});
 /* idle timer */

function snackbar(text) {
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function snackbarb(text) {
    var x = document.getElementById("snackbarb");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function childnum(elm) {
    if (elm.tagName === "BODY") return "BODY";
    const names = [];
    while (elm.parentElement && elm.tagName !== "BODY") {
        if (elm.id) {
            names.unshift("#" + elm.getAttribute("id")); // getAttribute, because `elm.id` could also return a child element with name "id"
            break; // Because ID should be unique, no more is needed. Remove the break, if you always want a full path.
        } else {
            let c = 1,
                e = elm;
            for (; e.previousElementSibling; e = e.previousElementSibling, c++);
            names.unshift(elm.tagName + ":nth-child(" + c + ")");
        }
        elm = elm.parentElement;
    }
    var k = names[1];
    k = k.replace("IMG:nth-child(", "");
    k = k.replace(")", "");
    return k; //return child num when clicked in jquery click
}
