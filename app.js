let express = require("express")
let app = express()

let prA=new Promise(resolve=>{
    resolve("prA")
})
let prB =prA.then(result=>{
       return `PromisA:${result}`
})
prB.then(result=>{
    console.log(`promis A ${result}`)
})
app.listen(3800, () => {
    console.log("Connect To Server........")
})