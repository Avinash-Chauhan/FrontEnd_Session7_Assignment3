//function counter when calling this function each time value will be incremented by 1
//declaring variable count and assigned value as 0
/*var count=0;
function counter()
{
  //incrementing value when calling this function each time	
  count++;
  //printing the result in console
  console.log(count);
}
counter();
counter();
counter();
counter(); */
//closure function 
var counter = (function () {
	//declaring variable count and assigned value as 0
    var n = 0;

    return function () {
    	//incrementing value when calling this function each time	
        n += 1;
        
        return n;
    }
}());
 //calling function & printing the result in console
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
