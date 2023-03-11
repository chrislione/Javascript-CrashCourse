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