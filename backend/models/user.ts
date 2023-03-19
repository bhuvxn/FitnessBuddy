import {Schema, model, connect} from mongoose 

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
    meals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meal'
        }
    ],
    biometric: 
        {
            type: Schema.Types.ObjectId,
            ref: 'Biometric'
        },
    dailyCalories:
        {
            type: Schema.Types.ObjectId,
            ref: 'DailyCalories'
        },

});

//deleting returned passwordHash
userSchema.set('toJSON', {
    transform: (document: any, returnedObject: any) => {
        delete returnedObject.passwordHash
    }
})


const User = model('User', userSchema);
module.exports = User;