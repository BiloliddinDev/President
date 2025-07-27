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

const localePrefixes = ["uz", "en", "ru"];

export function BreadcrumbDynamic({url}: { url?: string }) {
    const pathname = usePathname();
    const rawSegments = pathname.split("/").filter(Boolean);
    const segments = rawSegments.filter(
        (seg, i) => !(i === 0 && localePrefixes.includes(seg))
    );
    

    const fullPaths = segments.map(
        (_, i) => "/" + segments.slice(0, i + 1).join("/")
    );

    const breadcrumbSegments = url ? segments.slice(0, -1) : segments;
    const breadcrumbPaths = url ? fullPaths.slice(0, -1) : fullPaths;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">President business gifts</BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbSegments.map((segment, i) => (
                    <div key={i} className="flex items-center">
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={breadcrumbPaths[i]} className="capitalize">
                                {decodeURIComponent(segment)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))}

                {url && (
                    <div className="flex items-center">
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="capitalize">
                                {decodeURIComponent(url)}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </div>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
