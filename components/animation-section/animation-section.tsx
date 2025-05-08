'use client'

import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {ReactNode, useEffect, useState} from 'react'

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale'

interface AnimatedSectionProps {
    children: ReactNode
    animation?: AnimationType
    delay?: number
    once?: boolean
    className?: string
}

export default function AnimatedSection({ children,  animation = 'fade-up', delay = 0,   once = true, className = ''}: AnimatedSectionProps) {
    
    const {ref, inView} = useInView({threshold: 0.2})
    const [hasViewed, setHasViewed] = useState(false)

    useEffect(() => {
        if (inView && once) setHasViewed(true)
    }, [inView, once])

    const getInitial = () => {
        switch (animation) {
            case 'fade-down':
                return {opacity: 0, y: -40}
            case 'fade-left':
                return {opacity: 0, x: -40}
            case 'fade-right':
                return {opacity: 0, x: 40}
            case 'scale':
                return {opacity: 0, scale: 0.9}
            default: 
                return {opacity: 0, y: 40}
        }
    }

    const visible = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
    }

    return (
        <motion.section
            ref={ref}
            initial={getInitial()}
            animate={inView || hasViewed ? visible : {}}
            transition={{duration: 0.6, ease: 'easeOut', delay}}
            className={className}
        >
            {children}
        </motion.section>
    )
}
