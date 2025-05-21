"use client"
import {useEffect} from "react"
import {useRouter} from "next/navigation"

export default function ShopsPage() {
    const router = useRouter()

    useEffect(() => {
        router.push("/shops/news")
    }, [router])

    return null
}