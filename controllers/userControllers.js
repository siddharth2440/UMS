const { default: mongoose } = require('mongoose');
const userModel = require('../models/Customer');
const validator = require('email-validator');
const home = async (req,res) =>{

    const limitPerPage = 10
    // const users = await userModel.find({}).limit(limitPerPage);
    const users = await userModel.aggregate([{$sort:{firstName:1}}]).limit(limitPerPage);
    const countTheUsers = await userModel.find({}).count();
    const match = await userModel.aggregate([{$match:{firstName:'September'}}]);
    res.render('index',{users});
}


const addNewUserPage = (req,res)=>{
    res.render('users/add');
}

const addUser = async (req,res) =>{


    const User = new userModel({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        tel:req.body.telephone,
        email:req.body.userEmail,
        details:req.body.details
    }) 
    if(validator.validate(req.body.userEmail)){
        const insertUserDetails = await User.save();
        // const insertUserDetails = await userModel.create(User);

        res.redirect('/')
    }else{
        res.send("Unable to create the USER");
    }
}

const view = async (req,res) =>{
    const userId = req.params.id;
    const user = await userModel.find({_id:userId});
    // const user = await userModel.aggregate([{$match:{_id:new mongoose.Types.ObjectId(userId)}},{$project:{_id:1}}]);  //aggregations
    // console.log(user);
    res.render('users/view',{user});
}

const edit = async (req,res) =>{
    const id = req.params.id;
    const User = await userModel.aggregate([{$match:{_id:new mongoose.Types.ObjectId(id)}}]);
    res.render('users/edit',{user:User});
    // const User = await userModel.find({_id:id});
    // res.send('edit');
}

const updateUser = async  (req,res) =>{
    const enteredId = req.params.id;
    const matchwithId = await userModel.aggregate([{$match:{_id:new mongoose.Types.ObjectId(enteredId)}},{$project:{_id:1,firstName:1,lastName:1}}])
    console.log(matchwithId);
    if(validator.validate(req.body.userEmail)){
        const updateUser = await userModel.updateOne({_id:enteredId},
            {
                $set:{
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    tel:req.body.telephone,
                    email:req.body.userEmail,
                    details:req.body.details
                }
            }
        )

        res.redirect(`/view/${enteredId}`);
    }else{
        res.redirect(`/edit/${enteredId}`);
    }
}

const deleteUser = async (req,res)=>{
    const deleteUserId = req.params.id;
    const deleteOne =  await userModel.deleteOne({_id:deleteUserId});
    deleteOne?res.send('User Deleted Successfully'):res.redirect('/');
}
module.exports = {
    home,
    addNewUserPage,
    addUser,
    view,
    edit,
    updateUser,
    deleteUser  
}