import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { SubscribeForm } from "@/components/auth/subscribe-form";

export const metadata: Metadata = {
    title: "Subscribe"
}

export default async function Subscribe() {
    const session = await auth()

    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center w-full gap-8">
                <Logo />
                <SubscribeForm />
                <div>
                    <span className="flex gap-2">
                        Already have an account?
                        <Link href="/login" className="text-primary hover:opacity-70">
                            Log in
                        </Link>
                    </span>
                </div>
            </div>
        )
    } else {
        redirect("/")
    }
}