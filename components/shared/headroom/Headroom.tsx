'use client'

import {ReactNode, useCallback, useEffect, useState} from "react";
import {motion} from "framer-motion";

export const Headroom = ({children}: { children: ReactNode }) => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [controlNavbar]);

    return (
        <motion.div
            initial={{y: 0}}
            animate={{y: show ? 0 : "-100px"}}
            transition={{duration: 0.3}}
            className="fixed top-0 left-0 w-full z-50"
        >
            {children}
        </motion.div>
    );
};
