"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface ServerErrorProps {
  dictionary: {
    notFound: {
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[150px] font-bold text-primary mb-6">
          {dictionary.notFound.title}
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-4">
          {dictionary.notFound.subtitle}
        </p>

        <p className="sm:text-lg text-muted-foreground mb-8 px-2 sm:px-0">
          {dictionary.notFound.desc}
        </p>

        <Button onClick={() => router.push("/")} variant="default">
          {dictionary.notFound.home}
        </Button>
      </div>
    </div>
  );
}
