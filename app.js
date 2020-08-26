let express = require("express")
let app = express()
let i=0;
   function login(){
      return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               try{
                     resolve(`Finish Timeout .....${i++}`)
               }
               catch(err){
                     reject(`Exeption ............ ${err} `)
               }              
           })
       })
   }

   app.get("/",async (req,res)=>{
       res.send(await login())
   })
app.listen(3800, () => {
    console.log("Connect To Server........")
})