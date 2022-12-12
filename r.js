// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body

//   const person = people.find((person) => person.id === Number(id))

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({ success: true, data: newPeople })
// })

// app.put('/api/people/:Id',(req, res)=>{
//   const { id }= req.params 
//   const { name }= req.body
//   const person=people.find((person)=>person.id===Number(id))
 
//   if(!person){
//     return res.
//     status(404)
//     .json({ success: false, msg:`id ${id} was not found`})
//   }
//   const newpeople=people.map((person)=>{
//     if (person.id===Number(id)){
//       person.name=name
//      }
//     return person
//   })
//   res.status(200).json({sucess:true, data:newpeople})

// })

