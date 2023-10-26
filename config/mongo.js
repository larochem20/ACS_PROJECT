require('dotenv').config()

const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    console.log(DB_URI);
    const DB_URIST= String(DB_URI); 
    console.log(DB_URIST);
    mongoose.connect(DB_URIST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('CONEXION A LA BD CORRECTA');
    }).catch((error) => {
        console.log('ERROR AL CONECTAR CON LA BD:', error.message);
    });
};

module.exports = dbConnect;