const express = require ('express')
const app = express()
app.use(express.json())
app.use (routes)
app.listen (3000, () =>{
    console.info('servidor rodando na porta 3000')
})