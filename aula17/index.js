const express = require ("express")
const connectToDatabase = require("./database/database")
const authService = require("./service/auth.service")

connectToDatabase()

const app = express()

const port = 5000

app.use(express.json())


app.get("/", (req, res) => {
    res.send("hello world")
});

app.post("/login", async (req,res) => {
   const {email, senha} = req.body;
    const user = await authService.loginService(email)

    if(!user){
    return   res.status(400).send({message: "usuario não encontrado"})
    }
    if(senha != user.senha){
        return res.status(400).send({message: "senha invalida"})
    }
    res.send(user)
} )

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})