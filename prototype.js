// function Account(name){
//   this.username=name
//   this.currentBalance = 0
//   this.deposit=function(deposit){
//     this.currentBalance=this.currentBalance + deposit
//     console.log(`your ${this.username} balance is ${this.currentBalance}`)
//   }
  
// }
// let john= new Account("chase")

// john.deposit(200)


function Account(name){
  this.username=name
  this.currentBalance = 0

}

Account.prototype.deposit=function(deposit){
    this.currentBalance += deposit
    console.log(`your ${this.username} balance is ${this.currentBalance}`)
  }

let john= new Account("chase")
// console.log(john.deposit(200))
// john.deposit(200)
john.deposit(200)

console.log(john.currentBalance)


