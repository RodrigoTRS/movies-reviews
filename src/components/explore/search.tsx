import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Search() {
    return (
        <div className="flex gap-2 items-center">
            <Input placeholder="Search for a movie..." className="rounded-lg" />
            <Button size="default" variant="secondary" className="rounded-lg">
                Search
            </Button>
        </div>
    )
}