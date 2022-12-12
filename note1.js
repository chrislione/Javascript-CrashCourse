// //error handling in javascript 

// // try{
// //   console.log(player, player2)
// // }
// // catch(err){
// //   console.log("Error have been log in err")
// // }
// // console.log("Countiue to task ")

// //prototype
// // let text = "Hello world!";
// // let result = text.repeat(2);
// // console.log(result)


// // let textd = "Mr Blue has a blue house and a blue car and a white house";
// // let result = text.replace(/blue/g, "red");

// // console.log(result)

// let text = "The rain in SPAIN stays mainly in the plain";
// var res=text.match("ain");
// console.log("result",res)

// console.log("---------------------------------------------------")

// let txt = "The rain in SPAIN stays mainly in the plain";
// console.log(txt.match(/ain/gi));
// console.log(txt.match(/ain/g));
// console.log(txt.match(/ain/));


//   var result = null;
//   console.log(result);


//   try {
//     console.log('Hello');
//   } catch(err) {
//     console.log('Goodbye');
//   }

// var str = "Hello";
// var s= str.match("jello");
// console.log("str",s)

const products = [
  {
    id: 1,
    name: 'albany sofa',
    image:
      'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    price: 39.95,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 2,
    name: 'antertainment center',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
]  
// const list= products.map((listd)=> ({
//   id:listd.id, 
//   newname:listd.name,
//   price:listd.price
// }))
// console.log(list)  


// const newProducts = products.map((product) => ({
//     // const { id, name, image } = product does not work
//     Name:product.name
//     // return { id, name, image } does not work
//   }))
//   console.log(newProducts)
// const username = "albany sofa"
// const myusername=products.find((product)=>{
//    if (username==product.name)
//      console.log(({name:product.name}))
//   else{
//     console.log("not found")
//   }
// })
// const oneProduct= products.filter(myproduct=>{return myproduct.name=='entertainment center'})
// console.log(oneProduct)

const oneProduct= products.filter(myproduct=>{return myproduct.name.startsWith('b')})
// console.log(oneProduct)

// the fliter method will return an empty array or nothing when the boolean is false and will return the whole object in where it found a true Boolean 
// And a startWith method will return false where the parameter giving those not match the start of a string in the array but will return true when the parameter giving matches the start of something inside the array

// in our case the startsWith method has a parameter of 'b' which is a false because there is nothing in our array that starts with b, hence making the return method of filter false which will return an empty array.However had it been we passed in 'a' the startWith parameter(startWith('a')) that will first return a boolean and from how the method works will look for thing inside the array that starts with 'a'. Then the fliter, like as we previously mentioned will fliter and return a whole object where the array starts with 'a' 

const number= 1


var mylist=[{
  number:1,
  pbox: 77459,
  street:"sliber averge leane"
}]
const list=mylist.find((Tlist)=>number===Tlist.number)
// console.log("this is list",list)
  if(!list){
    console.log("not found")
  }

// console.log(list)



let name=["bob","smith"]
let lastname=['odum']
let fullname=name.concat(lastname)
// console.log(fullname)

// fullname.reverse()
fullname.unshift("luck")//adds to the array,unshift adds element at the first index of the list 
fullname.push("grey")  // adds to the array, push adds element at the last index of the list
// console.log(fullname)



// fullname.shift()//remove the element at first index the array
// fullname.pop() //remove the element at last index the array
// console.log(fullname)
elementName=['p','y','t','h','o','n']
console.log(elementName)

x=elementName.splice(1 ,3)
console.log(x)

console.log(elementName)
//Note orginal array will mutate

console.log("*********************************************************")


elementName=['p','y','t','h','o','n']
console.log(elementName)

x=elementName.slice(1 ,5)
console.log(x)

console.log(elementName)
//Note orginal array will NOT mutate

// expenditure
let gasPrice=[20, 50, 60, 70]
let food=[40,20, 10,10]
function calculateTotal(arr){
  let total=0;
  // console.log(`my total is ${total}`)
  for(let i=0; i < arr.length; i++){
    
    total=total + arr[i]
    // console.log(`${total} is my current total`)
    if(total > 100){
      // console.log(`${total} is too much spending`)
      return total
    }
    
  }
  // console.log(`${total} spending in check keep the good work`)
  return total
  
}

const gasTotal=calculateTotal(gasPrice)
console.log(gasTotal)
const FoodTotal=calculateTotal(food)

const expenditure={
  gasPrice: gasTotal,
  foodTotal: FoodTotal
  
};

console.log(expenditure, 'is your overall expenditure')


//Note when reference a value of a primitive data, any change you made to it will affect the orginal value
//but when you reference a value
//example
let book1="lord of the rings"
let book2=book1
book2="game of thrown"
//changing book2 will note affect the orginal book 1
console.log(book1)
console.log(book2)

//Non perimtive 
let person={
  name:"Alana",
  age: 76
  
}
let person2=person
person2.name="Andrew" // this will change the value of orginal name in person 1 although we're are referening to person 2

// console.log("this is person one",person);
// console.log("this is person two",person2);

//Ternary operator
const value=1<10;
value ? console.log("True"):console.log("flase")

//Gobal and local varible

function person77(){
  let name="chris"; //can only acess the local varible from inside the function, hence locally
  let age =90
  profile='This turned into a Global varible' // if the varible is not declared the local varible will be placed into gobal 
}
person77()
// console.log(name)// this will not be able to be access because your calling a local varible 
// console.log(profile) // for the above reason will return a varible because is considered global


//Higher order function inside another function

function greet(Name, callback){ // Highorder function is the one that accept the functions
  let newname="peterson"
  console.log(`Hi ${newname} my name is ${Name} `)
  callback("Sane")
  
}
function afternoon(name){ // call back function or helper function
  console.log(`See you this afternoon ${name}`)
}
greet("Lamer",afternoon)