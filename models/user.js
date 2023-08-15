import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    image:{
        type:String,
    }
});

//we are just making a check if the User model is already there, else we make the new model, we are doing this because this route is getting called everytime and the connection is established everytime so we make sure that thhe models that we are creating are getting reused properly
const User = models.User || model('User',userSchema);

export default User;

