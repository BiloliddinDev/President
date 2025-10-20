// // // "use client";

// // // import { ReactNode, useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu";
// // // import { Grid2X2, List } from "lucide-react";

// // // type Props = {
// // //   itemLength: number;
// // //   children: ReactNode;
// // //   dictionary: {
// // //     category: {
// // //       title: string;
// // //       new: string;
// // //     };
// // //     sortAndView: {
// // //       productsLabel: string;
// // //       sortBy: string;
// // //       options: {
// // //         newest: string;
// // //         priceAsc: string;
// // //         priceDesc: string;
// // //       };
// // //     };
// // //   };
// // // };

// // // export default function SortAndViewToggleWrapper({
// // //   itemLength,
// // //   children,
// // //   dictionary,
// // // }: Props) {
// // //   const [view, setView] = useState<"grid" | "list">("grid");
// // //   const [sort, setSort] = useState(dictionary.sortAndView.options.newest);

// // //   const sortOptions = [
// // //     {
// // //       label: dictionary.sortAndView.options.newest,
// // //       value: "newest",
// // //     },
// // //     {
// // //       label: dictionary.sortAndView.options.priceAsc,
// // //       value: "priceAsc",
// // //     },
// // //     {
// // //       label: dictionary.sortAndView.options.priceDesc,
// // //       value: "priceDesc",
// // //     },
// // //   ];

// // //   return (
// // //     <div>
// // //       <div className="flex items-center justify-between w-full py-4">
// // //         <span className="text-sm text-muted-foreground">
// // //           {itemLength} {dictionary.sortAndView.productsLabel}
// // //         </span>

// // //         <div className="flex items-center gap-4">
// // //           <DropdownMenu>
// // //             <DropdownMenuTrigger asChild>
// // //               <Button variant="outline" size="sm">
// // //                 {dictionary.sortAndView.sortBy} {sort}
// // //               </Button>
// // //             </DropdownMenuTrigger>
// // //             <DropdownMenuContent align="end">
// // //               {sortOptions.map((option) => (
// // //                 <DropdownMenuItem
// // //                   key={option.value}
// // //                   onClick={() => setSort(option.label)}
// // //                 >
// // //                   {option.label}
// // //                 </DropdownMenuItem>
// // //               ))}
// // //             </DropdownMenuContent>
// // //           </DropdownMenu>

// // //           <div className="flex gap-2">
// // //             <Button
// // //               variant={view === "grid" ? "default" : "outline"}
// // //               size="icon"
// // //               onClick={() => setView("grid")}
// // //             >
// // //               <Grid2X2 className="h-4 w-4" />
// // //             </Button>
// // //             <Button
// // //               variant={view === "list" ? "default" : "outline"}
// // //               size="icon"
// // //               onClick={() => setView("list")}
// // //             >
// // //               <List className="h-4 w-4" />
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div
// // //         className={`grid gap-6 ${
// // //           view === "grid"
// // //             ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
// // //             : "grid-cols-1 sm:grid-cols-2"
// // //         }`}
// // //       >
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useMemo, useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";
// // import { Grid2X2, List } from "lucide-react";
// // import { ProductsInterface } from "@/interface/products-interface/products-interface";
// // import { ProductsCard } from "@/components/shared/products-cards/products-card";
// // import { formatCurrency } from "@/hooks/formatPrice";

// // type Props = {
// //   items: ProductsInterface[];
// //   dictionary: {

// //     category: {
// //       title: string;
// //       new: string;
// //       not_found: string;
// //       unavailable: string;
// //       show_more: string;
// //     };
// //     sortAndView: {
// //       productsLabel: string;
// //       sortBy: string;
// //       options: {
// //         newest: string;
// //         priceAsc: string;
// //         priceDesc: string;
// //       };
// //     };
// //   };
// // };

// // export default function SortAndViewToggleWrapper({ items, dictionary }: Props) {
// //   const [view, setView] = useState<"grid" | "list">("grid");
// //   const [sort, setSort] = useState<"newest" | "priceAsc" | "priceDesc">("newest");

// //   const sortOptions = [
// //     { label: dictionary.sortAndView.options.newest, value: "newest" as const },
// //     { label: dictionary.sortAndView.options.priceAsc, value: "priceAsc" as const },
// //     { label: dictionary.sortAndView.options.priceDesc, value: "priceDesc" as const },
// //   ];

// //   const sortedItems = useMemo(() => {
// //     let sorted = [...items];

// //     if (sort === "priceAsc") {
// //       sorted.sort((a, b) => (Number(formatCurrency(a.locale_price.price)) || 0) - (Number(formatCurrency(b.locale_price)) || 0));
// //     } else if (sort === "priceDesc") {
// //       sorted.sort((a, b) => (Number(formatCurrency(b.locale_price)) || 0) - (Number(formatCurrency(a.locale_price)) || 0));
// //     } else {
// //       // Newest bo'yicha (id yoki yaratilgan sana orqali)
// //       sorted.sort((a, b) => (b.id || 0) - (a.id || 0));
// //     }

// //     return sorted;
// //   }, [items, sort]);

// //   return (
// //     <div>
// //       <div className="flex items-center justify-between w-full py-4">
// //         <span className="text-sm text-muted-foreground">
// //           {items.length} {dictionary.sortAndView.productsLabel}
// //         </span>

// //         <div className="flex items-center gap-4">
// //           <DropdownMenu>
// //             <DropdownMenuTrigger asChild>
// //               <Button variant="outline" size="sm">
// //                 {dictionary.sortAndView.sortBy}{" "}
// //                 {sortOptions.find((o) => o.value === sort)?.label}
// //               </Button>
// //             </DropdownMenuTrigger>
// //             <DropdownMenuContent align="end">
// //               {sortOptions.map((option) => (
// //                 <DropdownMenuItem
// //                   key={option.value}
// //                   onClick={() => setSort(option.value)}
// //                 >
// //                   {option.label}
// //                 </DropdownMenuItem>
// //               ))}
// //             </DropdownMenuContent>
// //           </DropdownMenu>

// //           <div className="flex gap-2">
// //             <Button
// //               variant={view === "grid" ? "default" : "outline"}
// //               size="icon"
// //               onClick={() => setView("grid")}
// //             >
// //               <Grid2X2 className="h-4 w-4" />
// //             </Button>
// //             <Button
// //               variant={view === "list" ? "default" : "outline"}
// //               size="icon"
// //               onClick={() => setView("list")}
// //             >
// //               <List className="h-4 w-4" />
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       <div
// //         className={`grid gap-6 ${
// //           view === "grid"
// //             ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
// //             : "grid-cols-1 sm:grid-cols-2"
// //         }`}
// //       >
// //         {sortedItems.map((product, index) => (
// //           <span
// //             data-aos="fade-left"
// //             key={product.id}
// //             data-aos-delay={`${index * 300}`}
// //           >
// //             <ProductsCard
// //               key={product.id}
// //               productData={product}
// //               dictionary={dictionary}
// //             />
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Grid2X2, List } from "lucide-react";
// import { ProductsInterface } from "@/interface/products-interface/products-interface";
// import { ProductsCard } from "@/components/shared/products-cards/products-card";
// import { formatCurrency } from "@/hooks/formatPrice";

// type Props = {
//   initialItems: ProductsInterface[];
//   dictionary: {
//     category: {
//       title: string;
//       new: string;
//       not_found?: string;
//       unavailable?: string;
//       show_more?: string;
//     };
//     sortAndView: {
//       productsLabel: string;
//       sortBy: string;
//       options: {
//         newest: string;
//         priceAsc: string;
//         priceDesc: string;
//       };
//     };
//   };
// };

// export default function SortAndViewToggleWrapper({
//   initialItems,
//   dictionary,
// }: Props) {
//   const [view, setView] = useState<"grid" | "list">("grid");
//   const [sort, setSort] = useState< "priceAsc" | "priceDesc">("priceAsc");
//   // const [sort, setSort] = useState<"newest" | "priceAsc" | "priceDesc">("newest");

//   const sortOptions = [
//     // { label: dictionary.sortAndView.options.newest, value: "newest" as const },
//     { label: dictionary.sortAndView.options.priceAsc, value: "priceAsc" as const },
//     { label: dictionary.sortAndView.options.priceDesc, value: "priceDesc" as const },
//   ];

//   const sortedItems = useMemo(() => {
//     const sorted = [...initialItems];

//     if (sort === "priceAsc") {
//       sorted.sort((a, b) => (Number(a.locale_price) || 0) - (Number(b.locale_price) || 0));
//     } else if (sort === "priceDesc") {
//       sorted.sort((a, b) => (Number(b.locale_price) || 0) - (Number(a.locale_price) || 0));
//     }
//     // else {
//     //   // "newest" — agar created_at bo‘lsa shuni ishlatamiz, bo‘lmasa id bo‘yicha
//     //   sorted.sort((a, b) => {
//     //     const dateA = a.createdAt ? new Date(a.createdAt).getTime() : a.id || 0;
//     //     const dateB = b.createdAt ? new Date(b.createdAt).getTime() : b.id || 0;
//     //     return dateB - dateA;
//     //   }
//     // );
//     // }

//     return sorted;
//   }, [initialItems, sort]);

//   return (
//     <div>
//       <div className="flex items-center justify-between w-full py-4">
//         <span className="text-sm text-muted-foreground">
//           {initialItems.length} {dictionary.sortAndView.productsLabel}
//         </span>

//         <div className="flex items-center gap-4">
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="outline" size="sm">
//                 {dictionary.sortAndView.sortBy}{" "}
//                 {sortOptions.find((o) => o.value === sort)?.label}
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               {sortOptions.map((option) => (
//                 <DropdownMenuItem
//                   key={option.value}
//                   onClick={() => setSort(option.value)}
//                 >
//                   {option.label}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <div className="flex gap-2">
//             <Button
//               variant={view === "grid" ? "default" : "outline"}
//               size="icon"
//               onClick={() => setView("grid")}
//             >
//               <Grid2X2 className="h-4 w-4" />
//             </Button>
//             <Button
//               variant={view === "list" ? "default" : "outline"}
//               size="icon"
//               onClick={() => setView("list")}
//             >
//               <List className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`grid gap-6 ${
//           view === "grid"
//             ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
//             : "grid-cols-1 sm:grid-cols-2"
//         }`}
//       >
//         {sortedItems.map((product, index) => (
//           <span
//             data-aos="fade-left"
//             key={product.id}
//             data-aos-delay={`${index * 300}`}
//           >
//             <ProductsCard
//               key={product.id}
//               productData={product}
//               dictionary={dictionary}
//             />
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Grid2X2, List } from "lucide-react";
import { ProductsInterface } from "@/interface/products-interface/products-interface";
import { ProductsCard } from "@/components/shared/products-cards/products-card";

type Props = {
  initialItems: ProductsInterface[];
  dictionary: {
    category: {
      title: string;
      new: string;
      not_found?: string;
      unavailable?: string;
      show_more?: string;
    };
    sortAndView: {
      productsLabel: string;
      sortBy: string;
      options: {
        newest: string;
        priceAsc: string;
        priceDesc: string;
      };
    };
  };
};

export default function SortAndViewToggleWrapper({
  initialItems,
  dictionary,
}: Props) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<"priceAsc" | "priceDesc" | "newest">(
    "newest"
  );

  const sortOptions = [
    {
      label: dictionary.sortAndView.options.newest,
      value: "newest" as const,
    },
    {
      label: dictionary.sortAndView.options.priceAsc,
      value: "priceAsc" as const,
    },
    {
      label: dictionary.sortAndView.options.priceDesc,
      value: "priceDesc" as const,
    },
  ];

console.log(initialItems)
  const sortedItems = useMemo(() => {
    const sorted = [...initialItems];

    if (sort === "priceAsc") {
      sorted.sort((a, b) => a.locale_price.price - b.locale_price.price);
    } else if (sort === "priceDesc") {
      sorted.sort((a, b) => b.locale_price.price - a.locale_price.price);
    } else {
      sorted.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : a.id || 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : b.id || 0;
        return dateB - dateA;
      });
    }

    return sorted;
  }, [initialItems, sort]);


  return (
    <div>
      <div className="flex items-center justify-between w-full py-4">
        <span className="text-sm text-muted-foreground">
          {sortedItems.length} {dictionary.sortAndView.productsLabel}
        </span>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {dictionary.sortAndView.sortBy}{" "}
                {sortOptions.find((o) => o.value === sort)?.label}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSort(option.value)}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex gap-2">
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("grid")}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* MUHIM: mappingni sortedItems dan qiling */}
      {sortedItems.length === 0 ? (
        <div className="py-10 text-center text-muted-foreground">
          {dictionary.category.not_found ?? "No products"}
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {sortedItems.map((item) => (
            <ProductsCard
              key={item.id}
              productData={item}
              className="grid"
              dictionary={dictionary}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {sortedItems.map((item) => (
            <ProductsCard
              key={item.id}
              productData={item}
              className="list"
              dictionary={dictionary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
