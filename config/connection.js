const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/shopping');
        console.log('Database connected to port 27017');

    }catch(err){
        console.log(err);

    }
}

module.exports = connectDB;
