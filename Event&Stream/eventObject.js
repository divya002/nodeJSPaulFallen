var resource=require('./resource');

var r=new resource(6);
//var r=resource.getResource(6);
r.on('start',function(){
    console.log("I have been started");
});
r.on('data',function(c){
    console.log("I have data->"+c);
});
r.on('end',function(c){
    console.log("Total event counts as :"+c);
});