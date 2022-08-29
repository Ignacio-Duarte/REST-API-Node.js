const express = require("express")
const router = require("./routes/empleados")
const mysqlConnection = require("./database")
const app = express()

// Configuraciones
app.set("PORT", process.env.PORT || 3000)

// Middleware
app.use(express.json())


// Rutas (URL)

app.use(require("./routes/empleados"))


// Empezando el servidor. 
app.listen(app.get("PORT"), ()=> {
    console.log("Server listering on PORT: ", app.get("PORT"))
})