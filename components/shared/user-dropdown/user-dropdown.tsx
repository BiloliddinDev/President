"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

interface NavbarProps {
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found: string;
      unavailable: string;
      show_more: string;
    };
    search: {
      placeholder: string;
      product_suggestion: string;
      no_products: string;
      product_types: string;
      close: string;
    };
    userDropdown: {
      guest: {
        title: string;
        signUp: string;
        logIn: string;
      };
      profile: {
        profileBtn: string;
        logoutBtn: string;
      };
    };
  };
}

export default function UserDropdown({ dictionary }: NavbarProps) {
  const router = useRouter();
  const { data: session } = useSession();

  // Clientda ekanligimizni bilish uchun
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const getInitial = (full?: boolean) => {
    if (!session?.user) return "";
    const name =
      session.user.authType === "custom"
        ? session.user.serverData?.full_name
        : session.user.name;

    if (!name) return "";
    return full ? name : name.charAt(0).toUpperCase();
  };

  // Hydration mismatch bo‘lmasligi uchun SSR vaqtida placeholder qaytaramiz
  if (!isClient) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <User className="text-primary cursor-pointer" />
        </PopoverTrigger>
      </Popover>
    );
  }

  if (!session) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <User className="text-primary cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="z-[100] mt-6 w-full p-6 rounded-[4px] bg-white space-y-5"
        >
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-wide">
            {dictionary.userDropdown.guest.title}
          </div>
          <div className="flex gap-2">
            <Button
              variant={"default"}
              onClick={() => router.push("/auth/sign-up")}
            >
              {dictionary.userDropdown.guest.signUp}
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => router.push("/auth/sign-in")}
            >
              {dictionary.userDropdown.guest.logIn}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {getInitial(true) ? (
          <div className="flex flex-col gap-2 justify-center">
            <p className="transition-all !outline-0 text-[17px] font-normal font-description flex flex-row-reverse items-center gap-2 group">
              {getInitial(true)}
            </p>
          </div>
        ) : (
          <User className="text-primary cursor-pointer" />
        )}
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="z-[100] mt-6 w-full p-6 rounded-[6px] bg-white space-y-5 shadow-xl"
      >
        <div className="space-y-1">
          <p className="text-base font-semibold text-gray-900">
            {getInitial(true)}
          </p>
          <p className="text-sm text-gray-500">
            {session?.user?.authType === "custom"
              ? session?.user.serverData?.email
              : session?.user?.email}
          </p>
        </div>
        <div className="flex gap-2 flex-row">
          <Button
            variant="default"
            className={"w-[200px]"}
            onClick={() => router.push("/account")}
          >
            <User className="w-4 h-4 mr-2" />
            {dictionary.userDropdown.profile.profileBtn}
          </Button>
          <Button
            variant="secondary"
            className="flex-1 w-[200px] border-red-500 text-red-600 hover:bg-red-50"
            onClick={() => signOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            {dictionary.userDropdown.profile.logoutBtn}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
