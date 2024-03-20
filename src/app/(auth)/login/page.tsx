import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { Logo } from "@/components/logo";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Login"
}

export default async function Login() {
    const session = await auth()

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center w-full gap-8">
                <Logo />
                <LoginForm />
                <div>
                    <span className="flex gap-2">
                        Don't have an account?
                        <Link href="/subscribe" className="text-primary hover:opacity-70">
                            Subscribe
                        </Link>
                    </span>
                </div>
            </div>
        )
    } else {
        redirect("/")
    }
}