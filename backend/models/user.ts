import {Schema, model, connect} from mongoose 

//creating interface for user (typescript specific)
interface user {
    name: string; 
    email: string; 
    password: string;
}

const userSchema = new Schema<user>({
    name: {type:String, required: true}, 
    email: {type:Stringm, required: true}
});

const User = model('User', userSchema);
module.exports = User;