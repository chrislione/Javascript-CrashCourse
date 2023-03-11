// for in is mostly used for an array, while for of is used for objects 
//Array.from  
const friend=Array.of('john',2,true)
console.log(friend)
//Array is a b ulit in function 
function total(){
  console.log(arguments)//not an array
  console.log(Array.from(arguments)) // turns it into an array so that you'll be able to use map, reduce, fliter etc 
}
total(1,2,3,5)

