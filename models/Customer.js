const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"FirstName is required"]
    },
    lastName:{
        type:String,
        required:[true,"LastName is required"]
    },
    tel:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"E-Mail is required"],
        unique:true
    },
    details:{
        type:String,
        required:[true,'details is required']
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    upDatedAt:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true});


const customers = mongoose.model('customer',CustomerSchema);
module.exports =  customers;