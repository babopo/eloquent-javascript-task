function range(start, end, step){
    var r = [];
    for (var i=start; i<=end; i++){
        r.push(i);
    }
    return r;
}

function sum(arr){
    var num = 0;
    for(var i=0; i<arr.length; i++){
        num += arr[i];
    }
    return num;
}

console.log(sum(range(1, 10)));