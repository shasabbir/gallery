//importing necessary modules
var glob = require('glob');
const fs = require('fs');
var i=-1;
var fname='dir.js';
var jsonArg = new Object();
var pluginArrayArg = new Array();
//Some options
options = {
    cwd: '' //Folder path
},

//glob it.

console.log("Holdup wait a minute");
glob('**/*.+(jpg|jpeg|gif|png|tiff)', options, function (err, files) {
    if (err) {    	
        console.log(err);
    } 

    files.forEach(function (file) {
        i++;
        jsonArg[i] = new Object();
        jsonArg[i].id = i;
        jsonArg[i].name = "D:/loi/Pics/"+file;
        pluginArrayArg.push(jsonArg[i]);
        //TODO: Do whatever you want to do with the file
        //console.log(file); 
    });	 
    //console.log(pluginArrayArg);
    var jsonArray = JSON.stringify(pluginArrayArg);
    fs.writeFileSync(fname, "DATA="+jsonArray);
    console.log((i+1)+" number of files found");
});
