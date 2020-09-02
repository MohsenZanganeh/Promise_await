let express = require("express");
const { json } = require("express");
let app = express()
let i = 0;
async function login(res) {
    let a = new Promise((resolve, reject) => {
        resolve("5")
    })
 
}

app.get("/",  (req, res) => {
    Promise.all([Promise.reject(1), Promise.resolve(2)])
    .catch((err) => {
      console.log('err', err);
    });
    // err 1
    // Differences between Promise.all() and Promise.allSettled() in JS?
  Promise.allSettled([Promise.reject(1), Promise.resolve(2)])
    .then(console.log);
    // [
    //     { status: 'rejected', reason: 1 },
    //     { status: 'fulfilled', value: 2 }
    // ]

})

function error(res, err) {
    res.send(err)
}
app.listen(3800, () => {
    console.log("Connect To Server........")
})