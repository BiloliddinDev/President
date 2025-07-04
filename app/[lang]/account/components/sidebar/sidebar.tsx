"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import clsx from 'clsx'
import {useState} from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {signOut} from "next-auth/react"

const links = [
    {href: '/account', label: 'Account detail'},
    {href: '/account/favorite', label: 'My favorite'},
    {href: '/account/order', label: 'Order'},
    {href: '/account/change-password', label: 'Change password'},
    {href: '/account/change-email', label: 'Change email'},
]

export default function AccountSidebar({lang}: { lang: string | undefined }) {
    const pathname = usePathname()
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const normalizedPathname = pathname?.replace(`/${lang}`, '') || ''

    const handleLogout = () => {
        signOut({callbackUrl: '/'})
    }

    return (
        <>
            <div className="w-full md:max-w-[200px] flex md:flex-col gap-2 overflow-x-auto whitespace-nowrap">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={pathname?.startsWith('/ru') ? `/ru${link.href}` : link.href}
                        className={clsx(
                            'px-4 py-2 rounded-md text-sm font-medium min-w-max',
                            normalizedPathname === link.href
                                ? 'bg-gray-200 text-black'
                                : 'text-gray-600 hover:bg-gray-100'
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={() => setShowLogoutModal(true)}
                    className={clsx(
                        'px-4 py-2 rounded-md text-sm font-medium text-left',
                        'text-gray-600 hover:bg-gray-100 cursor-pointer'
                    )}
                >
                    Log out
                </button>
            </div>

            <AlertDialog open={showLogoutModal} onOpenChange={setShowLogoutModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter className={"w-full flex items-center justify-center mt-5"}>
                        <AlertDialogCancel className={"w-[50%]"}>No</AlertDialogCancel>
                        <AlertDialogAction
                            className={"w-[50%]"}
                            onClick={handleLogout}
                        >
                            Yes
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
