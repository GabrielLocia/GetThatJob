const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const ProfessionalSchema= new Schema({
    name: { type: String,},
    email: { type: String, required:true },
    password: { type: String, required:true },
    phone: { type: String },
    profDescription: { type: String},
    profExperience: {type: String},
    linkednUrl: {type: String},
    githubUrl: {type: String}
})
ProfessionalSchema.methods.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10),
    hash = bcrypt.hash(password,salt);
    return hash;
};

ProfessionalSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("Professional", ProfessionalSchema);