"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {usePathname} from "next/navigation";
import {useBreadcrumbTranslation} from "@/hooks/useBreadcrumbTranslation";

const localePrefixes = ["uz", "en", "ru"];

export function BreadcrumbDynamic({url}: { url?: string }) {
    const pathname = usePathname();
    const rawSegments = pathname.split("/").filter(Boolean);
    const segments = rawSegments.filter((seg, i) => !(i === 0 && localePrefixes.includes(seg)));
    const fullPaths = segments.map((_, i) => "/" + segments.slice(0, i + 1).join("/"));
    const breadcrumbSegments = url ? segments.slice(0, -1) : segments;
    const breadcrumbPaths = url ? fullPaths.slice(0, -1) : fullPaths;

    const t = useBreadcrumbTranslation();

    return (
        <Breadcrumb >
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">{t["home"] || "Home"}</BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbSegments.map((segment, i) => (
                    <div key={i} className="flex items-center">
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={breadcrumbPaths[i]} className="capitalize">
                                {t[segment] || decodeURIComponent(segment)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))}

                {url && (
                    <div className="flex items-center">
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="capitalize">
                                {t[url] || decodeURIComponent(url)}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </div>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}