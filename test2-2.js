// for (var i = 1; i <= 100; i++ ){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     if (i % 3 == 0){
//         console.log("Fizz");
//     }
//     else if(i % 5 == 0){
//         console.log("Bizz");
//     }
//     else{
//         console.log(i);
//     }
// }
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }