'use client';
import {Button} from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function NotFound() {
      const router = useRouter();
    return (
       <div className="flex flex-col justify-center items-center h-screen text-center ">
      <div className=" flex gap-[500px] ">
        <h1 className="font-inter font-normal text-[48px] leading-[60px] tracking-[-0.02em] text-[#0E1422]">404 Error</h1>
       <div className='w-[550px] flex flex-col gap-4 '>
         <p className="font-inter font-medium text-[20px] leading-[30px] tracking-normal text-[#0E1422]">
         Sorry, we couldn't find the page you were looking for.
        </p>
         <p className="font-inter font-medium text-[18px] leading-[28px] tracking-normal text-[#0E1422]">
It may have been removed, changed or is temporarily unavailable. Please return to our home page to continue browsing our site or discover the products selected for you.
        </p>
        <Button onClick={() => router.push('/')} className="mt-4 bg-[#00093F]">
          Visit our Homepage
        </Button>
       </div>
      </div>
    </div>
    );
}
