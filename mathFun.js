var callback=require('./callback_practice');

var handleRsults=function(err,results,time){
    if(err){
        console.log("ERROR: "+err.message);
    }else{
        
        console.log("The results are: "+results+"("+time+"ms)");
    }
};
console.log("Time is:"+callback.maxTime);
callback.eventDoubler1(4,handleRsults);
console.log("---------------------------------------");
callback.eventDoubler1(3,handleRsults);
