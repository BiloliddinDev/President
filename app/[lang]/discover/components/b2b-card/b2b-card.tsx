"use client";

import Image, {StaticImageData} from "next/image";
import React, {useState} from "react";
import Placeholder from "@/public/images/placeholder.png";
import RightImage from "@/app/[lang]/discover/components/b2b-card/right-image/right-image";
import {buttonVariants} from "@/components/ui/button";
import {ResponsiveValue} from "@/hooks/get-responsive-value";
import {useSession} from "next-auth/react";
import {mutateB2bImage} from "@/hooks/useB2bImage";
import {toast} from "sonner";

interface B2bCardProps {
    className?: string;
    image: StaticImageData;
    top: ResponsiveValue;
    right: ResponsiveValue;
    size: number;
    title: string;
    desc: string;
}

export const B2bCard = ({className, image, top, right, size, title, desc}: B2bCardProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const {data: session, status} = useSession();

    const userId = session?.user?.serverData?.id; 

    const handleBlocked = () => {
        toast.error("Авторизация требуется", {
            description: "Пожалуйста, войдите в систему перед загрузкой файла.",
            className: "!bg-white !text-black",
            descriptionClassName: "!text-black",
        });
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!userId) {
            handleBlocked();
            e.currentTarget.value = ""; 
            return;
        }

        if (file.size > 3 * 1024 * 1024) {
            toast.error("Файл слишком большой", {description: "Максимум 3MB."});
            e.currentTarget.value = "";
            return;
        }

        setSelectedImage(file.name);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("userId", userId);

        try {
            setUploading(true);
            const res = await fetch("/api/remove-bg", {method: "POST", body: formData});
            if (!res.ok) throw new Error("Upload failed");

            await mutateB2bImage(userId);
            toast.success("Логотип обновлён");
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Ошибка загрузки");
        } finally {
            setUploading(false);
        }
    };

    const disabled = uploading || !userId || status === "loading";

    return (
        <div className={`${className} flex justify-between items-center`}>
            <div>
                <h2 className="text-primary text-lg font-medium mb-5">{title}</h2>
                <p className="text-sm text-zinc-600 w-[300px] md:w-[450px]">{desc}</p>

                <div data-aos="fade-right" className="mt-6 flex items-center gap-4 p-4 bg-white rounded border">
                    <Image src={Placeholder} alt="placeholder" width={96} height={96}/>
                    <div className="w-full">
                        <p className="text-sm text-primary mb-2">
                            Пожалуйста, загрузите свой логотип, размер должен быть меньше <br/> 3MB.
                        </p>

                        <input
                            id="image"
                            type="file"
                            accept="image/png"
                            className="hidden"
                            onChange={handleImageChange}
                            disabled={disabled}
                        />

                        <div className="w-full flex gap-2 items-center justify-between">
                            <div>{uploading ? "Uploading..." : selectedImage || "Нет выбора файла"}</div>

                            <label
                                htmlFor="image"
                                onClick={() => {
                                    if (!userId) handleBlocked();
                                }}
                                className={`${buttonVariants({variant: "secondary"})} w-[30px] ${
                                    disabled ? "pointer-events-none opacity-60" : "cursor-pointer"
                                }`}
                            >
                                Выбрать файл
                            </label>
                        </div>

                        {!userId && status !== "loading" && (
                            <p className="text-xs text-red-500 mt-2">Только для авторизованных пользователей.</p>
                        )}
                    </div>
                </div>
            </div>

            <RightImage top={top} right={right} size={size} image={image}/>
        </div>
    );
};
