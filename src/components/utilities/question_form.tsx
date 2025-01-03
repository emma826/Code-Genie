'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import { SendHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function QuestionInput({ className, ...props }: CardProps) {  
    const router = useRouter();
    const [question, setQuestion] = useState<string>("");

    const submitQuestion = async (e: React.FormEvent) => {
        e.preventDefault();

        const params = {
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({question}),
            method : "POST"
        }
        
        try {
            const response = await fetch("/api/question", params);
            const data = await response.json();

            if(data.ok) {                
                router.push(`/main/${data.message}`);
            }
            else{
                console.log(data.error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card className={`${cn("w-100", className)} mx-32 pt-4`} {...props}>
            <CardContent>
                <div>
                    <div className="flex w-full items-center space-x-2">
                        <Input
                            type="text"
                            name="question"
                            className="py-6"
                            placeholder="Ask Your Question"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}

                        />
                        <button
                            onClick={submitQuestion}
                            type="submit"
                            className="flex items-center justify-center p-3 bg-[#0f0c42] text-primary-light rounded-full"
                        >
                            <SendHorizontal />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
