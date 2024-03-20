import { Video } from "lucide-react";

export function Logo() {
    return (
        <span className="text-bold text-lg flex items-center gap-2">
            <Video size={32} strokeWidth={2} className="text-primary"/>
            Movies Reviews
        </span>
    )
}