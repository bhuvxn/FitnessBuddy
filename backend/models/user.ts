import { Schema, model} from 'mongoose';

//creating interface for user (typescript specific

interface user {
    username: string;
    passwordHash: string;
}

const userSchema = new Schema<user>({
    username: {type:String, required: true, unique: true}, 
    passwordHash: {type:String, required: true},

});
//deleting returned passwordHash
userSchema.set('toJSON', {
    transform: (_document: any, returnedObject: any) => {
        delete returnedObject.passwordHash
    }
})


const User = model('User', userSchema);
export default User;
module.exports = User, userSchema;