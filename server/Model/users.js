const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique:[true, "Email already exists"],
        required: [true, "Email is required"],
        lowercase:true,
        match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email']
    },
    password:{
        type: String,
        required:true,
        minlength:[5, "Passsword most be more than 5 chars"]
    },
    isVerified:{
        type: Boolean,
        default:false

    }
})

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model('User', UserSchema)
