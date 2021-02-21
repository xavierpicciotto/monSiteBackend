const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require('mongoose')
const router = require("./routes/route");

//CORS policy
app.use(cors())

//Connection MongoDB Atlas
mongoose.connect('mongodb+srv://XavAdmin:azer7894@cluster0.4z6rm.mongodb.net/ProjetTest?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussi !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


//Parse la requete en JSON.
app.use(bodyParser.json());

//Parse les requetes des contenus / x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: true }));

//Route de vérifiquation de réponse.
app.get("/test", (req, res) => {
  res.json({ message: "APP en fonctionement" });
});
//Routes de fonctionement 
app.use('/',router);

module.exports = app;