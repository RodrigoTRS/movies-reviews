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
        <Link href={url} className={clsx("font-medium text-muted-foreground flex gap-4",
        {
            "text-white font-bold": pathname === url
        })}>
            {text}
        </Link>
    )
}