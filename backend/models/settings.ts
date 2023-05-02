import {Schema, model, Types} from 'mongoose';

interface Settings {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    user:Types.ObjectId | Record<string, unknown> 
}

const settingsSchema = new Schema<Settings>({
    calories: {type:Number, required: true},
    protein: {type:Number, required: true},
    carbs: {type:Number, required: true},
    fat: {type:Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}


});


const Settings = model('Settings', settingsSchema);
module.exports = Settings;