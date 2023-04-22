const express = require("express");
const routes = require("./routes");
const cors = require('cors');
const app = express();

//informações guardadas em um json, é melhor utilizar uma db
//mas como o projeto é simples, assim vai servir
app.use(express.json());
app.use(cors());
app.use(routes);


/* const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }*/

 

app.get('/', (req, res) =>{
    res.send("hello");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});