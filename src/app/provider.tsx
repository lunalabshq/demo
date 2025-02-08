"use client"

import { ConvexReactClient } from "convex/react"
import type { ReactNode } from "react"
import {ConvexAuthProvider} from "@convex-dev/auth/react"


function ConvexClientProvider({ children }: { children: ReactNode }) {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL
    if (!url) return
    const convex = new ConvexReactClient(url)

    return (
        <ConvexAuthProvider client={convex}>
            {children}
        </ConvexAuthProvider>
    )
}

export default ConvexClientProvider