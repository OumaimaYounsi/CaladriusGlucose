const mongoose= require("mongoose")
const { Schema } = mongoose;

const EmergencySchema= new Schema({
  id: Number,
  typeOfEmergency: String,
  DateOfSent: Date,
  location: {
    langetude: String,
    latitude: String
  },
  state: String,
  userId: {type:mongoose.Types.ObjectId,ref:"user"}
});

const emergency = mongoose.model("emergency", EmergencySchema)
module.exports= emergency;