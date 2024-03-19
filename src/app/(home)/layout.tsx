import type { Metadata } from "next";
import { Sidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "Início | Ignite Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex px-5 py-5">
        <Sidebar />
        <div className="w-[calc(100vw-344px)] ml-[274px] flex flex-col">
          <div className="w-full max-w-[1120px] mx-auto">
            {children}
          </div>
        </div>
    </div>
  );
}
