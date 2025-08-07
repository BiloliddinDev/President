"use client"

import {useTheme} from "next-themes"
import {Toaster as Sooner, ToasterProps} from "sonner"

const Toaster = ({...props}: ToasterProps) => {
    const {theme = "system"} = useTheme()

    return (
        <Sooner
            theme={theme as ToasterProps["theme"]}
            className="toaster group text-black"
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "text-black",
                    "--normal-border": "var(--border)",
                } as React.CSSProperties
            }
            {...props}
        />
    )
}

export {Toaster}
