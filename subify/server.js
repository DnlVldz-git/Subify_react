const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:9595"
};



app.use(cors(corsOptions))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
  
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  
    next();
  
  });
  
  app.use(express.json());
  
  app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) =>{
    res.json({message: "Bienvenido a la aplicación nodejs, express, sequelize, postgresql"});
});

const db = require("./models");
db.sequelize.sync({force:true}).then(() => {
    console.log("Eliminar y sincronizar db");
});

require("./routes/usuario.routes.js")(app);


const PORT = process.env.PORT || 9595;
app.listen(PORT, () =>{
    console.log(`Server está ejecutándose en puerto ${PORT}.`);    
});
