"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { nextApi } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const subscribeFormSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirm_password: z.string()
})

type SubscribeFormData = z.infer<typeof subscribeFormSchema>


export function SubscribeForm() {
    const router = useRouter()

    const { register, handleSubmit, reset } = useForm<SubscribeFormData>({
        resolver: zodResolver(subscribeFormSchema)
    })

    async function handleSubscribe(data: SubscribeFormData) {
        if (data.password !== data.confirm_password) {
            throw new Error("Password doesn't match.")
        }

        try {
            await nextApi.post("/user/create", {
                data: {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            })
            router.push("/login")
        } catch (err) {
            console.error(err)
            throw new Error("Failed to create user.")
        } finally {
            reset()

        }


    }

    return (
        <form className="w-full max-w-[360px]" onSubmit={handleSubmit(handleSubscribe)}>
            <Card className="flex flex-col p-8 gap-2 bg-card">
                <Input
                    type="text"
                    placeholder="Username"
                    className="bg-slate-900"
                    {...register("username")}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    className="bg-slate-900"
                    {...register("email")}

                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="bg-slate-900"
                    {...register("password")}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-slate-900"
                    {...register("confirm_password")}
                />
                <Button type="submit">
                    Subscribe
                </Button>
            </Card>
        </form>
    )
}