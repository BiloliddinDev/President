'use client';

import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

export default function ServerErrorPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-bold text-primary mb-6">
                    404
                </h1>

                <p className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-4">
                    Sorry, we couldn’t find the page you were looking for.
                </p>

                <p className="sm:text-lg text-muted-foreground mb-8 px-2 sm:px-0">
                    It may have been removed, changed, or is temporarily unavailable.
                    Please return to our homepage to continue browsing or discover other content.
                </p>

                <Button
                    onClick={() => router.push('/')}
                    variant="default"
                    
                >
                    Visit our Homepage
                </Button>
            </div>
        </div>
    );
}
