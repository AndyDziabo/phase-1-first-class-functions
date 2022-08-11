function receivesAFunction(cb){
    cb();
}
function returnsANamedFunction(){
    function pass(){
        console.log("passed");
    }
    return pass;
}
function returnsAnAnonymousFunction(){
    return (function(){console.log("x");});
}