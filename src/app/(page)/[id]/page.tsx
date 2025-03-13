"use client"

import { projects } from "@/lib/mockup-data/projects"
import {useParams} from "next/navigation"
import {useMemo} from "react"
import {ChatInput} from "@/components/ChatInput"
import {Chat} from "@/components/Chat"

export default function ProjectPage() {
    const { id } = useParams()
    const project = useMemo(() => projects.find(project => project.id === Number(id)), [])

    return (
        <div className={"h-full grid grid-cols-2 lg:grid-cols-3 gap-4"}>
            <div className={"flex flex-col items-center justify-between p-4 h-full col-span-2 rounded-md border border-main/40"}>
                <Chat/>
                <ChatInput/>
            </div>

            <div className={"h-full col-span-1 rounded-md bg-tertiary"}>
            </div>
        </div>
    )
}