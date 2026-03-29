'use client'

import {ReactNode, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

export const Headroom = ({children}: { children: ReactNode }) => {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (ticking.current) return;

            ticking.current = true;
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    setShow(false);
                } else {
                    setShow(true);
                }
                lastScrollY.current = currentScrollY;
                ticking.current = false;
            });
        };

        window.addEventListener("scroll", controlNavbar, { passive: true });
        return () => window.removeEventListener("scroll", controlNavbar);
    }, []);

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
