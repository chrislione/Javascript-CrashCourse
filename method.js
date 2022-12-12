//----------------------------------Map--------------------------------------------------------------------
const people = [
    { name: 'bob', age: 20, position: 'developer' },
    { name: 'peter', age: 25, position: 'designer' },
    { name: 'susy', age: 30, position: 'the boss' },
    { name: 'anna', age: 35, position: 'the boss' },
  ];
  
  const ages = people.map(function (person) {
    return person.age + 20;
  });
  const newPeople = people.map(function (person) {
    return {
      firstName: person.name.toUpperCase(),
      oldAge: person.age + 20,
    };
  });
  console.log(newPeople)

  const names=people.map(function(persons){
    return(`<h1>${persons.name}</h1>`)

  })
  // document.body.innerHTML=names.join("")
console.log("--------------------------------------------------------------------")




const storeItem=[
  {id:1, 
   category:"eletronics",
   ranks: 10
  },
  {id:2, 
   category:"cloths",
   ranks: 16
  },
  
  {id:3, 
     category:"books",
     ranks: 30
    }
]
//----------------------------------------------forEach-------------------------------------------------------

storeItem.forEach(storeitems) // forEach is expect a callback function and inside it lies item, value and array in that order
// // A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.Performs the specified action for each element in an array.

function storeitems(itemsz, indexz,arrayz){ 
  
  console.log("Specific item on forEach:", itemsz.category)

  console.log("forEach item, index, and array",itemsz,indexz,arrayz)
}
console.log("--------------------------------------------------------------------")

//----------------------------------------------fliter-------------------------------------------------------


//Note filter will return an array so accessing it on console log will be be different 
// Also filter will go through the list and get all possible solution
let result=storeItem.filter(function(items){
  if (items.category==="eletronics"){
    return items.category
  }
    // console.log(res)
  // console.log(array)

}) 
console.log("this fliter:",result)
console.log("specific item on filter:", result[0].category)

// storeModified= storeItem.filter(function(items){
//   return({
//     id:items.id,
//     ranks:items.ranks + 2
//   })
// })
// console.log("result",res)
// console.log('modifiedStore',storeModified)


// function logger(storeItem){
//   return storeItem.id
// }
// x=logger(storeItem)
// console.log(x[0)
//------------------------------------------------------------------------------------------------------------

                                    //Differennce between fliter and find 

//major difference between the filter and find is that find will only find first index of the solution if there is more object or element that has the same match it wont find it. Also find will return an Object while fliter and array
console.log("--------------------------------------------------------------------")
const storeFront=[
  {id:1, 
   category:"eletronics",
   ranks: 10
  },
  {id:2, 
   category:"cloths",
   ranks: 16
  },
  
  {id:3, 
     category:"books",
     ranks: 30
    },
  
  {id:4, 
     category:"books",
     ranks: 30
    }
  
]

let store=storeFront.filter(function(items){
  if (items.category==="books"){
    return items.category
  }
    // console.log(res)
  // console.log(array)

}) 
console.log("This is filter:",store)
console.log("specific item on filter:", store[0].category) //accesed differently 

console.log("--------------------------------------------------------------------")

let Findstore=storeFront.find(function(items){
  if (items.category==="books"){
    return items.category
  }
    // console.log(res)
  // console.log(array)

}) 
console.log("This is find:",Findstore)
console.log("Specific item on find:", Findstore.category)

console.log("--------------------------------------------------------------------")

//----------------------------------------------reduce------------------------------------------------------

// reduce method will sum everything in the array or object
// reduce( accumulative, arrayItems) starting number of the accumulative 

// example with array
const Array=[1,2,3,5,90] // sum up everything using reduce
reduceArray=Array.reduce(function( acc,items){
  return acc= acc + items
},0)

//acc=0  items=1 => 0 + 1 = 1
//acc=1  items=2 => 1 + 2 = 3
//acc=3  items=3 => 3 + 3 = 6
//acc=6  items=5 => 6 + 5 =11
//acc=11 items=90 => 11 + 90 = 101
console.log("reduceArray:",reduceArray)

let reduceStore=storeFront.reduce(function(acc, items){
  acc=acc + items.ranks
  return acc
},0)

console.log ("reducedRanks", reduceStore)