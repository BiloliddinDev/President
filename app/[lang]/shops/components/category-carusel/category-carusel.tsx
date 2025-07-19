'use client'

import {useRef} from 'react'
import {Button} from "@/components/ui/button"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {CategoryCard} from '@/components/shared/category-card/category-card'
import {CategoryCardType} from "@/interface/category-type/category-model"
import { CategoryDataType } from '@/app/[lang]/(home)/components/category'

interface CategoryCarouselProps {
    categories: CategoryCardType[]
    lang:"uz" | "ru" | "en"
}

export default function CategoryCarousel({categories,lang}: CategoryCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 300
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="w-full">
            <div className="flex justify-between mb-5">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <div>
                    <Button variant="ghost" onClick={() => scroll('left')}>
                        <ChevronLeft className="h-5 w-5"/>
                    </Button>
                    <Button variant="ghost" onClick={() => scroll('right')}>
                        <ChevronRight/>
                    </Button>
                </div>
            </div>
            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {categories.map((item) => (
                        <div key={item.id} className="w-[200px] h-[200px] flex-shrink-0">
                            <CategoryCard category={item} lang={lang}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
