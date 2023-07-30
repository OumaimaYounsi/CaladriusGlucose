import mongoose from 'mongoose';
const { Schema } = mongoose;

const Device= new Schema({
  id: Number,
  name: String,
  DateOfCreation: Date,
  userId: {type:mongoose.Types.ObjectId,ref:"user"}
});