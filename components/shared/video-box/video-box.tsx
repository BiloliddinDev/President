"use client";
import IconComponent from "@/components/icon/icon-view";
import {VideoBoxProps} from "@/interface/discover/video-box";
import React, {FC, useRef, useState} from "react";

const VideoBox: FC<VideoBoxProps> = ({
                                         videoSrc,
                                         poster,
                                         width,
                                         height,
                                         className = "",
                                     }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const video = videoRef.current;
        if (video) {
            video.play();
            video.setAttribute("controls", "true");
            setIsPlaying(true);
        }
    };

    const containerStyle = width && height ? {width, height} : undefined;

    return (
        <div
            className={`flex items-center justify-center bg-gray-100 ${
                !width || !height ? "w-full" : ""
            }`}
            style={containerStyle}
        >
            <div
                className={`relative rounded overflow-hidden shadow-lg ${className} ${
                    !width || !height ? "w-full aspect-video" : ""
                }`}
                style={
                    !width || !height ? undefined : {width: "100%", height: "100%"}
                }
            >
                <video
                    ref={videoRef}
                    muted={true}
                    className="w-full h-full object-cover"
                    poster={poster}
                    autoPlay={true}
                >
                    <source src={typeof videoSrc === "string" ? videoSrc : videoSrc?.src} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <button
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
                        onClick={handlePlay}
                    >
                        <IconComponent name="play"/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default VideoBox;
