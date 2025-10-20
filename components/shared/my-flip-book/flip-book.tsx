"use client";
import HTMLFlipBook from "react-pageflip";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react"; // ✅ useState, useEffect qo‘shildi

interface FlipBookProps {
    children: React.ReactNode;
    className?: string;
    startPage?: number;
    width?: number;
    height?: number;
    size?: "fixed" | "stretch";
    showNavigationButtons?: boolean;
    onPageFlip?: (page: number) => void;
}

const MyFlipBook = (props: FlipBookProps) => {
    const [isPortrait, setIsPortrait] = useState(false); // ✅ mobil yoki desktop rejim holati

    useEffect(() => {
        const updateMode = () => {
            // Agar ekran 768px dan kichik bo‘lsa → portret rejim (bitta sahifa)
            setIsPortrait(window.innerWidth < 768);
        };
        updateMode(); // sahifa yuklanganda tekshiradi
        window.addEventListener("resize", updateMode);
        return () => window.removeEventListener("resize", updateMode);
    }, []);

    return (
        <div className="relative z-50 ml-0 xl:-ml-28 overflow-hidden py-4">
            <HTMLFlipBook
                className={cn("book-content", props.className)}
                startPage={props.startPage || 0}
                size={props.size || "fixed"}
                width={props.width || 300}
                height={props.height || 400}
                minWidth={props.width || 300}
                minHeight={props.height || 400}
                maxWidth={1000}
                maxHeight={1500}
                swipeDistance={30}
                style={{ backgroundColor: "transparent" }}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={isPortrait} // ✅ mobilga moslash
                startZIndex={100}
                autoSize={true}
                maxShadowOpacity={0.5}
                showCover={!isPortrait} // ✅ mobilga cover bermaymiz
                mobileScrollSupport={true}
                clickEventForward={true}
                useMouseEvents={true}
                showPageCorners={true}
                disableFlipByClick={false}
                onFlip={(e) => {
                    props.onPageFlip?.(e.data);
                }}
            >
                {props.children}
            </HTMLFlipBook>
        </div>
    );
};

export default MyFlipBook;
