// app/[lang]/500/page.tsx

'use client';


import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ServerErrorPage() {
  const router = useRouter();

  
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center ">
      <div className=" flex gap-[500px] ">
        <h1 className="font-inter font-normal text-[48px] leading-[60px] tracking-[-0.02em] text-[#0E1422]">500 Error</h1>
       <div className='w-[500px] flex flex-col gap-4'>
         <p className="font-inter font-medium text-[20px] leading-[30px] tracking-normal text-[#0E1422]">
         We're experiencing a temporary issue.
        </p>
         <p className="font-inter font-medium text-[18px] leading-[28px] tracking-normal text-[#0E1422]">
        Something went wrong on our end. This may be due to high traffic, a server glitch, or maintenance. Please try again shortly, or return to our home page to continue browsing.
        </p>
        <Button onClick={() => router.push('/')} className="mt-4 bg-[#00093F]">
          Visit our Homepage
        </Button>
       </div>
      </div>
    </div>
  );
}
