import { NextRequest } from 'next/server';
import mongoose from 'mongoose';
import question_model from "../../../model/question_model";

mongoose.connect("mongodb://localhost:27017/ai_assistant")

export async function POST(req: NextRequest) {
    const { question } = await req.json();

    if(!question) {
        return new Response(JSON.stringify({ error: "Question is required" }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Save the question to the database
    try {
        const insert_question = await question_model.create({ question });

        return new Response(JSON.stringify({ ok: true, message : insert_question._id }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Failed to save question" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

}

export async function GET() {
    const questions = await question_model.find({}).sort({ date: -1 });

    const formattedQuestions = questions.map(q => ({
        url: `/main/${q._id}`,
        name: q.question
    }));

    return new Response(JSON.stringify({questions : formattedQuestions.reverse()}), { status: 200, headers: { 'Content-Type': 'application/json' } });
}