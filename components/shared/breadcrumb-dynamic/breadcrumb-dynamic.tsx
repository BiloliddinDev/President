"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { useBreadcrumbTranslation } from "@/hooks/useBreadcrumbTranslation";
import { splitNameAndIdFromParam } from "@/hooks/get-breadcrumb";

const localePrefixes = ["uz", "en", "ru"];

export function BreadcrumbDynamic({ url }: { url?: string }) {
  const pathname = usePathname();
  const rawSegments = pathname.split("/").filter(Boolean);
  const segm = rawSegments.filter(
    (seg, i) => !(i === 0 && localePrefixes.includes(seg))
  );

  const segments = segm.map((item) => {
    if (typeof item === "string" && item.includes("id")) {
      const parsed = splitNameAndIdFromParam(item);
      return parsed?.name ?? "";
    }
    return item ?? "";
  });

  const fullPaths = segm.map((_, i) => "/" + segm.slice(0, i + 1).join("/"));
  const breadcrumbSegments = url ? segments.slice(0, -1) : segments;
  const breadcrumbPaths = url ? fullPaths.slice(0, -1) : fullPaths;

  const t = useBreadcrumbTranslation();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{t["home"] || "Home"}</BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbSegments.map((segment, i) => (
          <div key={i} className="flex items-center">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumbPaths[i]} className="capitalize">
                {t[segment as string] || decodeURIComponent(segment as string)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}

        {url && (
          <div className="flex items-center">
            <BreadcrumbSeparator />
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
