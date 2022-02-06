var fs = require('fs')
var path = process.cwd()
var files = []
var temp,tmp;
var fname='dir.js';
var mpath=path;
var i=0;
var jsonArg = new Object();
var pluginArrayArg = new Array();

//console.log("Holdup wait a minute");
var getFiles = function(path, files){
    fs.readdirSync(path).forEach(function(file){
        var subpath = path + '/' + file;
        if(fs.lstatSync(subpath).isDirectory()){
            getFiles(subpath, files);
        } else {
            temp=path + '/' + file;
            temp=temp.replace(mpath, "");
            tmp=temp.slice(temp.length - 5);
            tmp=tmp.toLowerCase();
            if(tmp.includes(".tiff")||tmp.includes(".gif")||tmp.includes(".jpeg")||tmp.includes(".png")||tmp.includes(".jpg")){
            files.push(/*__dirname+*/'.'+temp);
        }
        }
    });     
}
getFiles(path, files);
files.forEach(function (file) {
        jsonArg[i] = new Object();
        jsonArg[i].id = i;
        jsonArg[i].url = file;
        pluginArrayArg.push(jsonArg[i]);
        i++;
    });
    var jsonArray = JSON.stringify(pluginArrayArg);
    fs.writeFileSync(fname, "DATA="+jsonArray);
    //console.log(i+" number of files found and dir.js created");
    console.log('Done');
