var EventEmitter = require('events').EventEmitter;

var getResource=function(c){
    var e=new EventEmitter();
    process.nextTick(function(){
        var count=0;
        e.emit('start')
        var t=setInterval(function(){
            e.emit('data',++count);
            if(count===c){
                e.emit('end',count);
                clearInterval(t);
            }
        },10);
    });;
    return(e);
};

var r=getResource(6);
r.on('start',function(){
    console.log("I have been started");
});
r.on('data',function(c){
    console.log("I have data->"+c);
});
r.on('end',function(c){
    console.log("Total event counts as :"+c);
});


