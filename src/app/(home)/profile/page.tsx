import { User } from "lucide-react";

export default function Profile() {
    return (
        <div className="flex flex-col py-12 gap-12">
    
            <header className="flex gap-4 items-center">
              <User className="text-primary" size={32} />
              <h1 className="text-2xl">Profile</h1>
            </header>
    
        </div>
    )
}