import { SendHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import Link from "next/link"

import {
    Card,
    CardContent,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function QuestionInput({ className, ...props }: CardProps) {
    return (
        <Card className={`${cn("w-100", className)} mx-32 pt-4`} {...props}>
            <CardContent>
                <div className="flex w-full items-center space-x-2">
                    <Input type="text" className={`py-6`} placeholder="Ask Your Question" />
                    <Link href="#" className="flex items-center justify-center p-3 bg-[#0f0c42] text-primary-light rounded-full">
                        <SendHorizontal />
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
