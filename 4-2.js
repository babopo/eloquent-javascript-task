function reverseArray(arr){
    var m = [];
    var l = arr.length
    for (var i=0; i<l; i++){   //不能用length比较，pop()会使length改变
        m.push(arr.pop());
    }
    return m;
}

function reverseArrayInPlace(arr){
    
}