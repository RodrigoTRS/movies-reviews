"use client"

import { authenticate } from "@/app/lib/actions/authenticate";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";

export function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <form className="w-full max-w-[360px]" action={dispatch}>
            {errorMessage && <p>{errorMessage}</p>}
            <Card className="flex flex-col p-8 gap-2 bg-card">
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    className="bg-slate-900"
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="bg-slate-900"
                />
                <LoginButton />
            </Card>
        </form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
        <Button disabled={pending}>
            Login
        </Button>
    );
}