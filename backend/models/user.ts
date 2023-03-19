import { Schema, model} from 'mongoose';
//creating interface for user (typescript specific)
interface user {
    username: string;
    name: string; 
    email: string; 
    passwordHash: string;
}

const userSchema = new Schema<user>({
    username: {type:String, required: true, unique: true}, 
    email: {type:String, required: true, unique:true},
    passwordHash: {type:String, required: true},
    //array of user meals

});

//deleting returned passwordHash
userSchema.set('toJSON', {
    transform: (_document: any, returnedObject: any) => {
        delete returnedObject.passwordHash
    }
})


const User = model('User', userSchema);
module.exports = User;