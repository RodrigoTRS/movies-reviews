"use client"

import clsx from "clsx";
import { LineChart, Search, User } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    { title: "Home", url: "/", Icon: LineChart },
    { title: "Explore", url: "/explore",  Icon: Search },
    { title: "Profile", url: "/profile", Icon: User },
]

export function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col gap-6 w-full">
            {links.map(({ title, url, Icon }, index) => {
                return (
                    <Link href={url} key={index} className={clsx("font-medium text-muted-foreground flex gap-4",
                    {
                        "text-white font-bold": pathname === url
                    })}>
                        <Icon />
                        {title}
                    </Link>
                )
            })}
        </nav>
    )
}