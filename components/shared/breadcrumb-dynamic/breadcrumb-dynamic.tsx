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

const localePrefixes = ["uz", "en", "ru"];

export function BreadcrumbDynamic() {
  const pathname = usePathname();

  const rawSegments = pathname.split("/").filter(Boolean);
  const segments = rawSegments.filter(
    (seg, i) => !(i === 0 && localePrefixes.includes(seg))
  );
  const fullPaths = segments.map(
    (_, i) => "/" + segments.slice(0, i + 1).join("/")
  );

  return (
    <Breadcrumb className="pt-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">President business gifts</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1;
          const path = fullPaths[i];
          return (
            <div key={i} className="flex items-center">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">
                    {decodeURIComponent(segment)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={path} className="capitalize">
                    {decodeURIComponent(segment)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
