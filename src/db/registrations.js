const mongoose=require("mongoose");

const UserSchema = new mongoose.Schema({
    registration_ID:
    {
        type: String,
        required:true
    },
    email:
    {
        type: String,
        required: true, 
        unique: true
    },
    password:
    {
        type: String,
        required:true    
    },
    registered:
    {
        type: String,
    }
});
const Register = new mongoose.model("Register",UserSchema);
module.exports = Register;