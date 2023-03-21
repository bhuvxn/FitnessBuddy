import { Schema, model, Types} from 'mongoose';
interface Meal {
    food: string;
    calories: number;
    date: Date;
    protein: number;
    carbs: number;
    fat: number;
    user:Types.ObjectId | Record<string, unknown> 
}
const mealSchema = new Schema<Meal>({
    food: {type:String, required: true},
    calories: {type:Number, required: true},
    date: {type:Date, required: true},
    protein: {type:Number, required: true},
    carbs: {type:Number, required: true},
    fat: {type:Number, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}

});

const Meal = model('Meal', mealSchema);
module.exports = Meal;