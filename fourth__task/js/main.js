
var a = +prompt('type the first number');
var b = +prompt('type the second number');
var c = +prompt('type the third number');

if(a > b && a < c || a < b && a > c) {
    alert('your middle number is ' + a);
} else if (b > a && b < c || b < a && b > c) {
    alert('your middle number is ' + b);
} else if(c > a && c < b || c < a && c > b) {
    alert('your middle number is ' + c);
} else if (a === b && a === c && b === a && b === c && c === a && c === b){
    alert(a)
}
else{
    alert('you have typed not a number');
}