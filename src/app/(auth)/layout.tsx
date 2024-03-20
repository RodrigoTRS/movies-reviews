

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-[100vh]">
        <div className="bg-primary w-[calc(100vw-480px)]">
        </div>
        <div className="w-[480px] flex flex-col items-center justify-center">
            {children}
        </div>
    </div>
  );
}
