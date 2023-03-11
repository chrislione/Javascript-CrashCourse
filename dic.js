const game = {
  title: 'Call fo duty',
  platform: 'playstation',
  year: 2022
};

//-------------using the dot method----------------------------------
let Title = game.title;
console.log(Title);

// using key value
// let platform=game[platform] // your  key have to be in a string format to work. hence this will give you an error

//------------correction--------------
let Platform = game['platform'];
console.log(Platform);

// Destructor
let { title } = game
console.log(title)

// //Random

array = [1, 2, 4, 3]
// // console.log(array.length)
// console.log(Math.floor(Math.random() * array.length)) // random will never reach the given number in this case 4
//                                           // it can get to 3.99999 but never 4



function rand() {
  Math.floor(Math.random() * ((array.length)))

}
function display() {
  let random = rand()
  console.log(random)

}

x = display()
console.log(x)


const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
   
  },
  ]
  function person(){
    return review=reviews[0].job
    
  }

function display(){
  let persons=person()
  console.log(persons)
}

p=display()
console.log(p)