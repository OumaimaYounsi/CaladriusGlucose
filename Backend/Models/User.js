const mongoose= require("mongoose")
const {isEmail}= require("validator")
const bcrypt= require("bcrypt")



const UserSchema= new mongoose.Schema({
  id: {
   type: Number,
   require: true,
   unique: true
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    require :[true, 'Please inter an email' ] ,
    unique: true,
    validate: [isEmail, 'please inter a valid email']
    },
  password: {
    type: String,
    require:[true,'please enter a valid passowrd'],
    unique: true,
    minlength: [8, 'minlengnth is 8']
  },
  phoneNumber: String,
  birthDate: Date,
  gender: String,
  longitude: Number,
  latitude: Number,
  bloodSugarLevel: Number,
  role: String,
  status: String
});
// hashing password before save function
UserSchema.pre('save', async function (next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt)
  next();
});
// static metode login
UserSchema.statics.loginUser =async function (email, passowrd){
  const user = await this.findOne({email});

  if (user){
    const auth = await bcrypt.compare(passowrd, user.password);
    if (auth) {
      return user
    }throw Error (" password false")
  }throw Error("user doesn't existe")
}

const User = mongoose.model('user', UserSchema)
module.exports= User;
