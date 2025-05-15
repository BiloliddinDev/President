'use client';

import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

export default function ServerErrorPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
            <div
                className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-10 lg:gap-[100px] max-w-7xl w-full">
                <h1 className="font-inter font-normal text-[48px] leading-[60px] tracking-[-0.02em] text-[#0E1422]">
                    500 Error
                </h1>

                <div className="max-w-xl flex flex-col gap-4 text-left">
                    <p className="font-inter font-medium text-[20px] leading-[30px] tracking-normal text-[#0E1422]">
                        We are experiencing a temporary issue.
                    </p>

                    <p className="font-inter font-medium text-[18px] leading-[28px] tracking-normal text-[#0E1422]">
                        Something went wrong on our end. This may be due to high traffic, a server glitch, or
                        maintenance. Please try again shortly, or return to our home page to continue browsing.
                    </p>

                    <Button
                        onClick={() => router.push('/')}
                    >
                        Visit our Homepage
                    </Button>
                </div>
            </div>
        </div>
    );
}
