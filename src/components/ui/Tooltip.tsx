"use client"

import React, {type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState} from "react"
import {KeyboardShortcut} from "@/components/ui/KeyboardShortcut"

interface TooltipProps {
    message: string
    trigger: DOMRect
    icon?: ReactNode
    anchor?: "tl" | "tc" | "tr" | "bl" | "bc" | "br" | "lt" | "lc" | "lb" | "rt" | "rc" | "rb"
    delay?: number
    color?: string
    offset?: number
    shortcut?: string
}

function Tooltip({ anchor = "rc", delay = 1000, icon, color, message, offset = 8, shortcut, trigger, lastTooltipTimestamp }: TooltipProps & { lastTooltipTimestamp: number | null }) {
    const [isVisible, setIsVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const timeout = useRef<number | null>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    const calculatePosition = useCallback(() => {
        if (!tooltipRef.current) return
        const tooltipRect = tooltipRef.current.getBoundingClientRect()

        const scrollX = window.scrollX || document.documentElement.scrollLeft
        const scrollY = window.scrollY || document.documentElement.scrollTop

        let x: number
        let y: number

        switch (anchor) {
            //Top
            case "tl":
                x = trigger.left + scrollX
                y = trigger.top + scrollY - offset - tooltipRect.height
                break
            case "tc":
                x = trigger.left + scrollX + (trigger.width / 2) - (tooltipRect.width / 2)
                y = trigger.top + scrollY - offset - tooltipRect.height
                break
            case "tr":
                x = trigger.right + scrollX - tooltipRect.width
                y = trigger.top + scrollY - offset - tooltipRect.height
                break

            // Bottom
            case "bl":
                x = trigger.left + scrollX
                y = trigger.bottom + scrollY + offset
                break
            case "bc":
                x = trigger.left + scrollX + (trigger.width / 2) - (tooltipRect.width / 2)
                y = trigger.bottom + scrollY + offset
                break
            case "br":
                x = trigger.right + scrollX - tooltipRect.width
                y = trigger.bottom + scrollY + offset
                break

            // Left
            case "lt":
                x = trigger.left + scrollX - offset - tooltipRect.width
                y = trigger.top + scrollY
                break
            case "lc":
                x = trigger.left + scrollX - offset - tooltipRect.width
                y = trigger.top + scrollY + (trigger.height / 2) - (tooltipRect.height / 2)
                break
            case "lb":
                x = trigger.left + scrollX - offset - tooltipRect.width
                y = trigger.bottom + scrollY - tooltipRect.height
                break

            // Right
            case "rt":
                x = trigger.right + scrollX + offset
                y = trigger.top + scrollY
                break
            case "rc":
                x = trigger.right + scrollX + offset
                y = trigger.top + scrollY + (trigger.height / 2) - (tooltipRect.height / 2)
                break
            case "rb":
                x = trigger.right + scrollX + offset
                y = trigger.bottom + scrollY - tooltipRect.height
                break

            default:
                x = trigger.left + scrollX
                y = trigger.top + scrollY
        }

        setPosition({ x, y })
    }, [anchor, offset, trigger.bottom, trigger.height, trigger.left, trigger.right, trigger.top, trigger.width])

    useLayoutEffect(() => {
        if (isVisible) {
            calculatePosition()
        }
    }, [isVisible, calculatePosition])


    useEffect(() => {
        const currentTimestamp = Date.now()
        const lastTooltipVisible = lastTooltipTimestamp !== null && currentTimestamp - lastTooltipTimestamp < 500

        if (delay) {
            if (lastTooltipVisible) {
                calculatePosition()
                setIsVisible(true)
            } else {
                timeout.current = window.setTimeout(() => {
                    calculatePosition()
                    setIsVisible(true)
                }, delay)
            }
        } else if (timeout.current) {
            clearTimeout(timeout.current)
        }

        return () => {
            if (timeout.current) clearTimeout(timeout.current)
            window.removeEventListener('resize', calculatePosition)
            window.removeEventListener('scroll', calculatePosition)
        }
    }, [calculatePosition, delay, lastTooltipTimestamp])

    if (!isVisible) return null

    return (
        <div
            className={"absolute z-50 w-max flex flex-row space-x-4 items-center px-2 py-1 rounded-md shadow-md text-xs bg-gray-100 border border-gray-300"}
            style={{top: position.y, left: position.x}}
            ref={tooltipRef}
        >
            <div className={"flex flex-row space-x-2 items-center text-xs text-gray-800"}>
                {icon}
                <span>{message}</span>
            </div>
            {shortcut && <KeyboardShortcut key={shortcut} keyString={shortcut} className={"bg-inverted text-inverted"}/>}
        </div>
    )
}

export { Tooltip }
export type { TooltipProps }