function arrayToList(arr){
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--){   //注意顺序
        list = {
            value: arr[i],
            rest: list     
        };
    }
    return list;
}

function listToArray(list){
    var arr = [];
    while(list != null){
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(a, list){
    list = {value: a, rest:list};
    return list;
}

// //normal
// function nth(list, n){
//     var m =0;
//     for(var i=0; i<=n; i++){
//         if (list == null){
//             return undefined;
//         }
//         m = list.value;
//         list = list.rest;
//     }
//     return m;
// }

//recursion
function nth(list, n){
    if (!list){
        return undefined;
    }
    else if (n == 0) {
        return list.value; 
    }
    return nth(list.rest, n-1)
}