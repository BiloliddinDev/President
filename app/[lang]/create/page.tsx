"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/svg/favicon.svg";
import Link from "next/link";

export default function CreateContentPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-2 sm:px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mb-4 sm:mb-6"
            >
                <Image
                    src={Logo}
                    alt="Site Logo"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-[40px] sm:text-[60px] md:text-[100px] font-bold text-primary text-center leading-tight"
            >
                Coming Soon
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-xl mt-2 sm:mt-4"
            >
                We are building something extraordinary for you. Our full website experience is launching soon.
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-xs sm:text-sm text-muted-foreground mt-2 px-2 text-center"
            >
                Please return to our homepage in the meantime.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-4 sm:mt-6 w-full sm:w-auto px-4"
            >
                <Button asChild variant={'default'} className="w-full sm:w-auto text-sm sm:text-base py-2">
                    <Link href="/">Visit our Homepage</Link>
                </Button>
            </motion.div>
        </div>
    );
}