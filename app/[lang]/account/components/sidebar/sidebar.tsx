"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signOut } from "next-auth/react";

interface DictionaryProps {
  lang: "uz" | "ru" | "en" | "tj" | "az" | undefined;
  dictionary: {
    account: {
      sidebar: {
        accountDetails: string;
        favorite: string;
        order: string;
        changePassword: string;
        changeEmail: string;
        logout: string;
        logoutConfirm: string;
        no: string;
        yes: string;
      };
    };
  };
}

export default function AccountSidebar({ lang, dictionary }: DictionaryProps) {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const normalizedPathname = pathname?.replace(`/${lang}`, "") || "";

  const links = [
    { href: "/account", label: dictionary.account.sidebar.accountDetails },
    { href: "/account/favorite", label: dictionary.account.sidebar.favorite },
    { href: "/account/order", label: dictionary.account.sidebar.order },
    { href: "/account/change-password", label: dictionary.account.sidebar.changePassword },
    { href: "/account/change-email", label: dictionary.account.sidebar.changeEmail },
  ];

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <div className="w-full md:max-w-[200px] flex md:flex-col gap-2 overflow-x-auto whitespace-nowrap">
        {links.map((link) => (
          <Link
            key={link.href}
            href={pathname?.startsWith(`/${lang}`) ? `/${lang}${link.href}` : link.href}
            className={clsx(
              "px-4 py-2 rounded-md text-sm font-medium min-w-max",
              normalizedPathname === link.href
                ? "bg-gray-200 text-black"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            {link.label}
          </Link>
        ))}

        <button
          onClick={() => setShowLogoutModal(true)}
          className={clsx(
            "px-4 py-2 rounded-md text-sm font-medium text-left",
            "text-gray-600 hover:bg-gray-100 cursor-pointer"
          )}
        >
          {dictionary.account.sidebar.logout}
        </button>
      </div>

      <AlertDialog open={showLogoutModal} onOpenChange={setShowLogoutModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {dictionary.account.sidebar.logoutConfirm}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full flex items-center justify-center mt-5">
            <AlertDialogCancel className="w-[50%]">
              {dictionary.account.sidebar.no}
            </AlertDialogCancel>
            <AlertDialogAction className="w-[50%]" onClick={handleLogout}>
              {dictionary.account.sidebar.yes}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
