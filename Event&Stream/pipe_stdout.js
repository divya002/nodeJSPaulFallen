var request=require('request');
var fs=require('fs');  
var zlib=require('zlib');
//  var s=request("http://www.pluralsight.com/");

//  s.pipe(process.stdout);
//We can write same this way also..
//request('http://www.pluralsight.com/').pipe(process.stdout);
//writing content in file
request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));
//zipping the content in file
request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));