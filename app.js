let express = require("express");
const { json } = require("express");
let app = express()
let i = 0;
async function login(res) {
    let a = new Promise((resolve, reject) => {
        resolve("5")
    })
    return await a.then(result => {
            return result + "10"
        }).then(result => {
            return result + "10"
        }).then(result => {
            return d + "--55"
        }).catch(err => {
            if (err) {
                console.log("err:", err)
                return err
            }
        })
}

app.get("/", async (req, res) => {
    const rr = await login(res).then((result) => {
        res.send(result)
    })

    return `${rr} mohsen`

})

function error(res, err) {
    res.send(err)
}
app.listen(3800, () => {
    console.log("Connect To Server........")
})