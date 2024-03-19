import { LoginForm } from "@/components/login/login-form";
import { Metadata } from "next";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Login"
}

export default async function Login() {
    const session = await auth()

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-[100vh]">
                <LoginForm />
            </div>
        )
    } else {
        redirect("/")
    }
}