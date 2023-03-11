//---------------One parameter-------------------
const individuals= ()=>console.log("Good Individuals ")
individuals()
const individual= thisperson=>console.log("Good Individual ")
individual()

const value= valueitem =>valueitem * 2
sum=value(7)
console.log(sum)
//Note you have only one parameter, hence you don't need the bracket on parameter and
// curly bracket on the return 

//---------------Two parameter-------------------

const array=[1,2,3,4,5,10]
newArray=array.filter((arrayItems,index)=>{
  console.log(index)
  return arrayItems > 2
  
})
//Note if you have two parameter you must add the bracket on parameter and curly bracket with return to avoid error
console.log(`flitered array=${newArray}`)
// Returning an object

const person= () =>{name:"christian"}
console.log(person()) // this will give undefine without the bracket

//------correction
const user= () =>({name:"christian"})
console.log(user())
//Note calling object without a bracket will result to an undefine, you've been warned