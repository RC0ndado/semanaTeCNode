const express = require('express');
const path = require('path');

const app = express();
const fileUpload = require('express-fileupload');
const modeloIARoutes = require('./routes/modeloIA')
const ejemploDBRoutes = require('./routes/ejemploBD')
const sequelize = require('./utils/database')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.use(modeloIARoutes);
app.use('/usuario', ejemploDBRoutes);


app.get('/', (req, res) => {
    res.send('Servidor funcional')
})

sequelize.sync()
.then(resultado => {
    console.log("Conexión exitosa")
    app.listen(8081, () => {
        console.log("Servidor en línea")
    })
})
.catch(error=>console.log(error)) 

