import { Suspense } from "react";

export default function QuestionId() {
    return(
        <Suspense fallback={`loading`}>
            <h1 className={`text-center`}>Ask Your Question</h1>
        </Suspense>
    )
}