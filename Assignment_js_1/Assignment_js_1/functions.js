console.log("====>Named Function<====");

function myfunction(a,b,c){
 
return a*b*c;

}
console.log(myfunction(1,6,7));


console.log("===>Function Expression<===");

var getRectArea = function(width, height) {

return width * height;


};

var res = getRectArea(9,7)

console.log(res);


console.log("===>IIFE<==="); 
function Greet()
{
 console.log("welcome to javaScript");

(function() {
console.log("welcome to java Script"); })();
console.log("hello world!");
}
console.log(Greet());

console.log("===>Arrow Function<===");
var printValue = (a) => {
 console.log("value =" ,a);
}

printValue(5)

console.log("----------------------------------------");
var a=[2,7,5]
var b=[23,65,10]
function printArray(arr){
console.log(arr);
}
var person={
 name : 'Priya',
 age : 19
}

printArray(person)