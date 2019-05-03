var size = 8;
var matrix = "";
for (var x = 0; x < size; x++){
    for (var y = 0; y < size; y++){
        if ((x+y)%2 == 0){
            matrix += "#";
        }
        else {
            matrix += " ";
        }
    }
    matrix += "\n";
}
console.log(matrix);
