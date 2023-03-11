// const profile={
//   firstName: "christian",
//   lastName:"mamah",
//   fullName: function(){
//     console.log(`my fullname is ${firstName}`) // with the this keyword you will get an error cos techically the firstName does not exist 
//   }
// }
// profile.fullName()
//--------------correction-----------------

const profile={
  firstName: "Christian",
  lastName:"Wondersand",
  fullName: function(){
    console.log(`My fullname is ${this.firstName} ${this.lastName}`) 
    //NOTE with the this keyword you will get an error cos techically the firstName does not exist. if you decarled first and last name in the local veriable than this keyword is not needed
  }
}
// console.log(profile.firstName)
profile.fullName()

//-------------------------constructor------------------------------------
function individual(){ //notice we start with function and close with return
  return{
    firstName: "Sultan",
    lastName:" Mehmed II",
    fullname:function(){
      console.log(`Individual full name ${this.firstName} ${this.lastName}`)
      
    }
  }
}
// individual.fullname() this is wrong because it doesn't exist yet
//-----correction-----
const player1=individual(); // now we've created a new object
player1.fullname()
  
//--------------------------constructor-----------------------------
//Notice how we needed new  
function Employee(first, last){
  
    this.firstName = first,
    this.lastName = last,
    this.fullname=function(){
      console.log(`Individual full name ${this.firstName} ${this.lastName}`)
    }
}
// Employee("mike",'Amos') //another mistake without creating an object it wont work
//-----correction-----
const info=new Employee("mike",'Amos'); //creating object with new
info.fullname()