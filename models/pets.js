import mongoose from 'mongoose';

const Schema = mongoose.Schema

const petSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
    },
    breed: String,
});

export default mongoose.model("Pet", petSchema)