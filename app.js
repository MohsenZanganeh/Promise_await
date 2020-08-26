let express = require("express")
let app = express()

let promisA = Promise.resolve(50)
let promisB = 45;
let PromisC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("finish Timeout........")
    }, 1000)
})

Promise.all([promisA,promisB,PromisC]).then(velue=>{
    console.log(velue)
})

let p1=Promise.all(["Hello","Mohsen 1111"])
let p2=Promise.all(["Hello","Mohsen 2222"])
let p3=Promise.all(["Hello","Mohsen 3333"])

setTimeout(()=>{
   console.log(p1)
   console.log(p2)
   console.log(p3)
})

app.listen(3800, () => {
    console.log("Connect To Server........")
})