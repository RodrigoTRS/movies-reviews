import { LoginForm } from "@/components/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login"
}

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[100vh]">
            <LoginForm />
        </div>
    )
}