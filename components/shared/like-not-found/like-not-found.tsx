'use client';

import {Heart} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


export const LikeNotFound = () => {
    const router = useRouter();

    return (
        <div className="text-center max-w-md flex flex-col gap-4 items-center mx-auto px-4">
            <div className="flex justify-center mb-6">
                <Heart size={100} className="text-primary" fill="#00093f"/>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                You have no likes
            </h2>
            <p className="text-primary">
                Currently, you have no liked items. You can like products while browsing them.
            </p>
            <Button
                onClick={() => router.push("/shops/news")}
                variant={"default"}
                className={"mt-10"}
            >
                View Products →
            </Button>
        </div>
    )
};

