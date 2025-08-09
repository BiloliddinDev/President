"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface ServerErrorProps {
  dictionary: {
    servererror: {
      title: string;
      subtitle: string;
      desc: string;
      home: string;
    };
  };
}

export default function ServerErrorPage({
  dictionary,
}: ServerErrorProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-10 lg:gap-[100px] max-w-7xl w-full">
        <h1 className="font-inter font-normal text-[48px] leading-[60px] tracking-[-0.02em] text-[#0E1422]">
          {dictionary.servererror.title}
        </h1>

        <div className="max-w-xl flex flex-col gap-4 text-left">
          <p className="font-inter font-medium text-[20px] leading-[30px] tracking-normal text-[#0E1422]">
            {dictionary.servererror.subtitle}
          </p>

          <p className="font-inter font-medium text-[18px] leading-[28px] tracking-normal text-[#0E1422]">
            {dictionary.servererror.desc}
          </p>

          <Button onClick={() => router.push("/")}>
            {dictionary.servererror.home}
          </Button>
        </div>
      </div>
    </div>
  );
}
