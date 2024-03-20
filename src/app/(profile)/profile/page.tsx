import { User } from "lucide-react";
import { auth } from "../../../../auth";
import { getUserByID } from "@/app/lib/actions/get-user-by-id";
import { Card } from "@/components/ui/card";
import { fetchReviewsByUserID } from "@/app/lib/actions/fetch-reviews-by-user-id";
import { ReviewCard } from "@/components/profile/review-card";

export default async function Profile() {
    const session = await auth()
    const user = await getUserByID({ id: session?.user?.id! })
    const reviews = await fetchReviewsByUserID({ userId: user?.id! })

    return (
        <div className="flex flex-col py-12 gap-12">
    
            <header className="flex gap-4 items-center">
                <User className="text-primary" size={32} />
                <h1 className="text-2xl">Profile</h1>
            </header>
            <Card className="flex flex-col p-8 bg-card">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <h2 className="text-sm text-muted-foreground">ID</h2>
                        <span>{user?.id}</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-sm text-muted-foreground">Username</h2>
                        <span>{user?.username}</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-sm text-muted-foreground">E-mail</h2>
                        <span>{user?.email}</span>
                    </div>
                </div>
            </Card>
            <div className="flex flex-col gap-8">
                <h2 className="text-lg font-bold">My reviews</h2>
                <div className="grid grid-cols-2 gap-2">
                    {reviews.map((review, index) => {
                        return <ReviewCard review={review} key={index} />
                    })}
                </div>
            </div>
        </div>
    )

}