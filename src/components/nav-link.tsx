"use client"

import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";

interface NavLinkProps {
    url: string;
    text: string;
}

export function NavLink({ url, text }: NavLinkProps) {
    const pathname = usePathname();

    return (
        <Link href={url} className={clsx("font-medium text-muted-foreground flex gap-4 bg-slate-900 py-2 px-4 rounded-lg",
        {
            "text-white font-bold border-l-2 pl-3.5 border-blue-600": pathname === url
        })}>
            {text}
        </Link>
    )
}