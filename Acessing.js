let myname="name" // the string have to match the key in the dictonary 

const profile={
  name: "christian",
  ranks: 5,
  
  login:{
    'username':"god of fifa",
    password:"gameislive@709"
  
  }
}
//--------------using dot property accessor--------------
console.log(profile.login.username)
console.log(profile.name)
//--------------using square bracket property accessor--------------
console.log(profile['login']) 
console.log(profile[myname]) 
//NOTE: if you decide to use this, remember the square brackets only take a string to be able to excess the properties


//-------------for loop in dictonary and array-----------------------
array =[10,4,88,9,67,33,4878]
let fruits = {'apple':'red', 'pear':'green', 'banana':'yellow', 'plum':'purple'}
for( x in fruits){
  console.log(x) // this will give you the key
  console.log(fruits[x]) // this will give you the value
  
  
}
// ---------------Different between "for in" at javascript and python------------------------ 
// javascript returns the index while python return the actual value 
for (y in array){
  console.log(y) // returns 0,1,2,3,4,5,6
  console.log(array[y])
  
}

// ------------------python-------------------
// array =[10,4,88,9,67,33,4878]
// for y in array:
//   print(y)
// -----output-------
// 10,4,88,9,67,33,4878