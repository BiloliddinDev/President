"use client";
import HTMLFlipBook from "react-pageflip";
import {cn} from "@/lib/utils";
import React from "react";

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
    return (
        <div className="relative">
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
                style={{}}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={true}
                startZIndex={100}
                autoSize={true}
                maxShadowOpacity={0.5}
                showCover={false}
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
