"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Grid2X2, List } from "lucide-react";

type Props = {
  itemLength: number;
  children: ReactNode;
  dictionary: {
    category: {
      title: string;
      new: string;
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
  itemLength,
  children,
  dictionary,
}: Props) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState(dictionary.sortAndView.options.newest);

  const sortOptions = [
    {
      label: dictionary.sortAndView.options.newest,
      value: "newest",
    },
    {
      label: dictionary.sortAndView.options.priceAsc,
      value: "priceAsc",
    },
    {
      label: dictionary.sortAndView.options.priceDesc,
      value: "priceDesc",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between w-full py-4">
        <span className="text-sm text-muted-foreground">
          {itemLength} {dictionary.sortAndView.productsLabel}
        </span>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {dictionary.sortAndView.sortBy} {sort}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setSort(option.label)}
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

      <div
        className={`grid gap-6 ${
          view === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
