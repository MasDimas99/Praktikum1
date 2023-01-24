const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/tampil", (req,res) => {

    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    
    res.json(response)
})
app.listen(8000, () => {
    console.log("Berhasil");
})
app.post("/bujur_sangkar", (req,res) => {
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    res.json(response)
})
app.post("/KTP", (req,res) => {
    let nama = req.body.nama
    let alamat = req.body.alamat
    let umur = Number(req.body.umur)
    let jk = req.body.jk
    let ttl = req.body.ttl

    let response = {
        nama : nama,
        alamat : alamat,
        umur : umur,
        jk : jk,
        ttl : ttl,
    }
    res.json(response)
})
app
