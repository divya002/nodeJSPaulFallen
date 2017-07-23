var EventEmitter = require('events').EventEmitter;
var util=require('util');

var getResource=function(c){
    
   var self=this;
    process.nextTick(function(){
        var count=0;
        self.emit('start')
        var t=setInterval(function(){
            self.emit('data',++count);
            if(count===c){
                self.emit('end',count);
                clearInterval(t);
            }
        },10);
    });;
};

util.inherits(getResource,EventEmitter);
module.exports=getResource;