const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const RecreuiterSchema= new Schema({
    name: { type: String, required:true},
    logo: { type: String},
    webSie: { type: String},
    email: { type: String, required:true },
    password: { type: String, required:true },
    description: { type: String }
})
RecreuiterSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10),
    hash = bcrypt.hash(password,salt);
    return hash;
};

RecreuiterSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("Recreuiter", RecreuiterSchema);