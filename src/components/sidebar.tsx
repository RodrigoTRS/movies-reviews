import Link from "next/link";
import { NavLinks } from "./nav-links";
import { LogIn } from "lucide-react";


export function Sidebar() {
    return (
        <aside className="fixed w-[240px] h-[calc(100vh-40px)] rounded-2xl flex flex-col items-center justify-between px-12 py-8 bg-slate-800">
            <div className="flex flex-col w-full gap-16">
                <span className="text-bold text-lg">Movies Reviews</span>
                <NavLinks />
            </div>
            <Link href="/login" className="flex gap-4">
                Login
                <LogIn className="text-primary"/>
            </Link>
        </aside>
    )
}