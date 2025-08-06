'use client';

import {ReactNode, useState} from "react";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Grid2X2, List} from "lucide-react";

type Props = {
    itemLength: number;
    children: ReactNode;
};

export default function SortAndViewToggleWrapper({itemLength, children}: Props) {
    const [view, setView] = useState<"grid" | "list">("grid");
    const [sort, setSort] = useState("Новейший");

    return (
        <div>
            <div className="flex items-center justify-between w-full py-4">
                <span className="text-sm text-muted-foreground">{itemLength} Продукты</span>

                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                            Сортировать по: {sort}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {["Новейший", "Цена: по возрастанию", "Цена: по убыванию"].map((option) => (
                                <DropdownMenuItem key={option} onClick={() => setSort(option)}>
                                    {option}
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
                            <Grid2X2 className="h-4 w-4"/>
                        </Button>
                        <Button
                            variant={view === "list" ? "default" : "outline"}
                            size="icon"
                            onClick={() => setView("list")}
                        >
                            <List className="h-4 w-4"/>
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
            >{children}</div>
        </div>
    );
}
