// -----------behavior of this keyword in Regular and Es6 function OOP-----------------

const person={
  //local varible 
  firstName:"christian",
  lastName: "BirdNest",
  //method 
  sayName: function(){
  console.log(`my name is ${this.firstName} ${this.lastName}`)
  }
}
person.sayName()
//Note that the method sayName is getting,and will always get its attribute from the local varible 


const individual={
  //local varible 
  firstName:"christian",
  lastName: "BirdNest",
  //method 
  sayName: ()=>{
  console.log(`my name is ${this.firstName} ${this.lastName}`)
  }
}
individual.sayName()
//Note that the method sayName is getting its attribute from the global varible hence the reason why your answer will be undefined. This is because at global varible there is no firstName and lastName

