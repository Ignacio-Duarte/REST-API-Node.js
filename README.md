Es una api rest hecha con Node.js, Express y MySql (Script en la carpeta DB) 

modifica una base de datos y en particular la tabla "employees" en un CRUD

para conectar a una base de datos deberan modificar el archivo database.js agregando un archivo .env o modificando las variables en el objeto de configuracion dentro de mySqlConection. 


Pasos: 
    1- npm init -y
    2- npm start
    3- Instalar dependencias del package.json
    4- Ejecutar los script en MySql Worckbench si quieren usar la base de datos de ejemplo que hice. (employeeAddOrEdit.sql es un Store Procedure)
    5- Pueden testear los metodos http con una aplicacion REST como Postman o Insomnia (En mi caso use Insomnia.)