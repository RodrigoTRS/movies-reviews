import Link from "next/link";
import { LogIn, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { auth, signOut } from "../../auth";
import { NavLink } from "./nav-link";



const allNavLInks = [
    { title: "Home", url: "/", authRoute: false},
    { title: "Explore", url: "/explore", authRoute: false },
    { title: "Profile", url: "/profile",authRoute: true },
]

export async function Sidebar() {
    const session = await auth()

    const links = session ? allNavLInks : allNavLInks.filter((item) => !item.authRoute)

    return (
        <aside className="fixed w-[240px] h-[calc(100vh-40px)] rounded-2xl flex flex-col items-center justify-between px-12 py-8 bg-slate-800">
            <div className="flex flex-col w-full gap-16">
                <span className="text-bold text-lg">Movies Reviews</span>
                <div className="">
                {links.map((link, index) => {
                    return (
                        <NavLink
                            text={link.title}
                            url={link.url}
                            key={index}
                        />
                    )
                })}
                </div>
            </div>

            {session ? (
                <form action={async () => {
                    "use server"
                    await signOut()
                }}>
                    <Button
                        variant="link"
                        className="flex gap-4 decoration-transparent hover:opacity-50"
                    >
                            <span className="text-foreground text-lg">Logout</span>
                            <LogOut className="text-primary" />
                    </Button>
                </form>
            ) : (

                <Link href="/login" className="flex gap-4">
                    <span className="text-foreground text-lg">Login</span>
                    <LogIn className="text-primary"/>
                </Link>
            )}
        </aside>
    )
}