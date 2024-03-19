interface BackdropProps {
    url: string
}

export function Backdrop({ url }: BackdropProps) {
    return (
        <div className="absolute z-[-1] mt-16 mx-auto">
            <div className="absolute w-[calc(100vw-344px)] max-w-[1120px] flex bg-cover bg-center rounded-3xl"
                style={{ 
                    backgroundImage: `url(${url})`,
                    opacity: 0.2, 
                }}
            ><span className="w-full h-[400px] opacity-0">.</span>

            </div>
                <div className="absolute w-[calc(100vw-344px)] flex bg-cover bg-center z-0 rounded-3xl"
                style={{ 
                    background: "linear-gradient(180deg, rgba(255,255,255,0), rgba(2,8,23,1)",
                }}
                ><span className="w-full h-[400px] opacity-0">.</span>
            </div>
        </div>
    )
}