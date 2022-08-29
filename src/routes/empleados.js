const express = require("express")
const mysqlConnection = require("../database")

const router = express.Router()


// Consulta a todos los empleados. 

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM employees", (err, rows, fields) => {
        if(!err){
            res.json(rows)
        }else{
            console.log(err)
        }
    })
})

// Consulta a empleado especifico diferenciado por ID

router.get("/:id", (req, res) => {
    const { id } = req.params
    mysqlConnection.query("SELECT * FROM employees WHERE id = ?", [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err)
        }
    } )

})


// Agregar Empleado. 

router.post("/", (req, res) => {
    const {id, name, salary} = req.body;
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @salary = ?;
        CALL employeeAddOrEdit(@id, @name, @salary)
    `
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) =>{
        if(!err){
            res.json({Status: "Empleado Agregado"})
        }else{
            console.log(err)
        }
    })
})


// Editar empleado indentificado por ID

router.put("/:id", (req, res) =>{
    const {name, salary} = req.body;
    const {id} = req.params;
    const query = `
        SET @id = ?;
        SET @name = ?;
        SET @salary = ?;
        CALL employeeAddOrEdit(@id, @name, @salary)
    `
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err){
            res.json({Status: "Empleado Actualizado"})
        }else{
            console.log(err)
        }
    })

} )

// Eliminar Empleado identificado por ID

router.delete("/:id", (req, res) => {
    const {id} = req.params

    mysqlConnection.query("DELETE FROM employees WHERE id = ? ", [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: "Empleado Eliminado"})
        }else{
            console.log(err)
        }
    })


})





module.exports = router;