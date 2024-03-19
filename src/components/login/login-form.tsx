"use client"

import { authenticate } from "@/app/lib/actions/authenticate";
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

    const { register, handleSubmit, reset } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    async function handleLogin(data: LoginFormData) {
        await authenticate({ credentials: data })
        reset()
    }

    return (
        <form className="w-full max-w-[360px]" onSubmit={handleSubmit(handleLogin)}>
            <Card className="flex flex-col p-8 gap-2 bg-card">
                <Input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                    className="bg-slate-900"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="bg-slate-900"
                />
                <Button>
                    Login
                </Button>
            </Card>
        </form>
    )
}