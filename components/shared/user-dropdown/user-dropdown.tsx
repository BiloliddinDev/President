"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export default function UserDropdown() {
  const router = useRouter();
  const { data: session } = useSession();

  // Foydalanuvchi ismining bosh harfini olish
  const getInitial = () => {
    if (session?.user) {
      const name =
        session.user.authType === "custom"
          ? session.user.serverData?.full_name
          : session.user.name;
      return name ? name.charAt(0).toUpperCase() : "";
    }
    return "";
  };

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
            Unlock your President benefits
          </div>
          <div className="flex gap-2">
            <Button
              variant={"default"}
              onClick={() => router.push("/auth/sign-up")}
            >
              Create an account
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => router.push("/auth/sign-in")}
            >
              Log in
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {getInitial() ? (
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-primary text-primary font-semibold cursor-pointer">
            {getInitial()}
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
            {session?.user?.authType === "custom"
              ? session.user.serverData?.full_name
              : session.user.name}
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
            Profil
          </Button>
          <Button
            variant="secondary"
            className="flex-1 w-[200px] border-red-500 text-red-600 hover:bg-red-50"
            onClick={() => signOut()}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Chiqish
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}