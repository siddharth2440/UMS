const mongoose = require('mongoose');

const dbConn = async () =>{
    mongoose
        .connect(process.env.DBConnectionString)
        .then(()=>{
            console.log('DataBase is connected')
        })
        .catch((error)=>console.log(error.message));
}


module.exports = dbConn;