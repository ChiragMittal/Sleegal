const express    = require('express');
const morgan     = require("morgan");
const app        = express();

const mysql = require('mysql')

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "x-auth");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,PATCH');
    next();
});

const connection = mysql.createConnection({
    host:'sql3.freesqldatabase.com',
    user:'sql3435788',
    password:'fwfhNq4ju6',
    database:'sql3435788',
    port:3306
})

const port =  9000;
app.use(morgan("dev"));

app.use(express.urlencoded({extended: false}));
app.use(express.json())



app.get("/",async (req, res) => {
    connection.query('SELECT * from todo', function(error, result){
        if(error) throw error
        res.status(200).send(result)
    })
    
  });

app.post("/complete",express.json(),async (req, res) => {
    console.log(req.body.body.id)

    connection.query(`update todo set complete = true where id=${req.body.body.id}`, function(error, result){
        if(error) throw error
        res.status(200).send(result)
    })
    
  })


app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});