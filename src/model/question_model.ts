import { Schema, models, model } from 'mongoose';

const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    body: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const question_model = models.Question || model('Question', QuestionSchema);

export default question_model;