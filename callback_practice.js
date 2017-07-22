var maxTime = 1000;

var eventDoubler = function(v,callback){
    var waitTime=Math.floor(Math.random()*(maxTime+1));
    if(v%2){
        setTimeout(function(){
            callback(new Error("odd output"));
        },waitTime);
    }else{
         setTimeout(function(){
            callback(null,v*2,waitTime);
        },waitTime);
    }
};

var handleRsults=function(err,results,time){
    if(err){
        console.log("ERROR: "+err.message);
    }else{
        
        console.log("The results are: "+results+"("+time+"ms)");
    }
};

eventDoubler(2,handleRsults);
console.log(".......................................................................");
eventDoubler(3,handleRsults);