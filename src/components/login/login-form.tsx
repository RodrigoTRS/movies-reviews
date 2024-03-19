"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {

    const { register, handleSubmit } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    

    return (
        <form className="w-full max-w-[360px]">
            <Card className="flex flex-col p-8 gap-2">
                <Input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
                <Button>
                    Login
                </Button>
            </Card>
        </form>
    )
}