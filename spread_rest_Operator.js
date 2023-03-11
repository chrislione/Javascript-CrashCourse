// .......................Spread Operator...............................

let array = ['orange', 'apple', 'sugarcane']
let city=['Aba', 'lagos','Houston']
let spread=[...array,...city] 
console.log(spread) // output [ 'orange', 'apple', 'sugarcane', 'Aba', 'lagos', 'Houston' ]
console.log(...spread) //output will be a string in you spread it one more time


let club=["Arsenal"]
let nickname=['Gunners',...club]
console.log(...club)

console.log(...nickname)

let string="ruth"
string=[...string]
console.log(string)

// max need to be unpacked before is applied eg max(1,2,3) will work but max([1,2,3]) wont that
// m=Math.max([2,3,4,5,6])
// console.log(m)

//.....correction
marray = [2,3,4,5,6]
console.log(Math.max(...marray))

// Note in python this does not need to be unpacked 
// m=max([2,3,4,5,6])
// print(m)




// .....................Array destructing....................
const fruit= ['orange','apple', 'banana','pineapple']
  
let [fruit1, fruit2,fruit3, fruit4]=fruit
console.log(fruit1)

const book = ['A Song of Ice and Fire','George R. R. Martin', 1996];
let[title, author, year] = book
console.log(year)
console.log(author)
console.log(title)
// .......let say you wanted only title and year........
let[Title, , Year]=book
console.log(Title, Year )



// Note [title, author, year] works as the declearation of varibles 


//-----------------Rest operator-------------------------------------
//rest operators are premeters and spread is an argument 
// turns your parameter into an array 

// const items = (a)=>{
//   console.log(a)
  
// }


const books = ['Market Wizards','Jack D. Schwager', 1989];
let [ my_title,...rests]=books
console.log(my_title, rests)

let [ ,the_author, ...rest]=books //Notice how it gives you the rest of items after the index and exclude everything before the index


console.log(the_author, rest)

//..........objects.........
const person= {name:"James",lastName:"Blake", job:"developer"}
function restParameter(name,...score){
  console.log(name,score)
}
restParameter(person.name, 70,80,90,40)

// output
//   James  [ 70, 80, 90, 40 ] 
// like I said before the ... inside a function will turn the 
// number to an array, and this is refered as the rest Operator