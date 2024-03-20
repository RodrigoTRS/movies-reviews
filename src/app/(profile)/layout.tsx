import type { Metadata } from "next";
import { Sidebar } from "../../components/sidebar";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Início",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  if (session) {
    return (
      <div className="flex px-5 py-5">
          <Sidebar />
          <div className="w-[calc(100vw-344px)] ml-[302px] flex flex-col">
            <div className="w-full max-w-[1120px] mx-auto">
              {children}
            </div>
          </div>
      </div>
    );
  } else {
    redirect("/login")
}
}
