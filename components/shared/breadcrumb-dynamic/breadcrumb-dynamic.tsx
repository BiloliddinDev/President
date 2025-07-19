// "use client";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { usePathname } from "next/navigation";

// const localePrefixes = ["uz", "en", "ru"];

// export function BreadcrumbDynamic({url}:{url?:string}) {
//   const pathname = usePathname();

//   const rawSegments = pathname.split("/").filter(Boolean);
//   const segments = rawSegments.filter(
//     (seg, i) => !(i === 0 && localePrefixes.includes(seg))
//   );
//   const fullPaths = segments.map(
//     (_, i) => "/" + segments.slice(0, i + 1).join("/")
//   );

//   return (
//     <Breadcrumb >
//       <BreadcrumbList>
//         <BreadcrumbItem>
//           <BreadcrumbLink href="/">President business gifts</BreadcrumbLink>
//         </BreadcrumbItem>

//         {segments.map((segment, i) => {
//           const isLast = i === segments.length - 1;
//           const path = fullPaths[i];
//           return (
//             <div key={i} className="flex items-center">
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 {isLast ? (
//                   <BreadcrumbPage className="capitalize">
//                     {decodeURIComponent(segment)}
//                   </BreadcrumbPage>
//                 ) : (
//                   <BreadcrumbLink href={path} className="capitalize">
//                     {decodeURIComponent(segment)}
//                   </BreadcrumbLink>
//                 )}
//               </BreadcrumbItem>
//             </div>
//           );
//         })}
//       </BreadcrumbList>
//     </Breadcrumb>
//   );
// }
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

export function BreadcrumbDynamic({ url }: { url?: string }) {
  const pathname = usePathname();

  const rawSegments = pathname.split("/").filter(Boolean);
  const segments = rawSegments.filter(
    (seg, i) => !(i === 0 && localePrefixes.includes(seg))
  );
  const fullPaths = segments.map(
    (_, i) => "/" + segments.slice(0, i + 1).join("/")
  );

  // Agar `url` bo‘lsa, oxirgi segmentni tashlab yuboramiz
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumbPaths[i]} className="capitalize">
                {decodeURIComponent(segment)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}

        {/* Oxirgi qism: agar props orqali `url` berilgan bo‘lsa, uni oxirgi sahifa sifatida ko‘rsatamiz */}
        {url && (
          <div className="flex items-center">
            <BreadcrumbSeparator />
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
