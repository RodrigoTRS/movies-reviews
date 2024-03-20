"use client"

import { LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function RedirectToLoginButton() {
    const router = useRouter()

    return (
        <Button variant="default" className="text-md flex gap-4" onClick={() => router.push("/login") }>
            Login <LogIn size={20}/>
        </Button>
    )
}