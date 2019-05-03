function countBs(str){
    var Bs = 0;
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == "B"){
            Bs += 1;
        }
    }
    return Bs;
}

console.log(countBs("BBC"));