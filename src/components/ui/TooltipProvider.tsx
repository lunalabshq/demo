"use client"

import {createContext, useContext, useState, useCallback, useRef} from 'react'
import type React from 'react'
import type {ReactNode} from 'react'
import {Tooltip, type TooltipProps} from "@/components/ui/Tooltip"

interface TooltipContextType {
    addTooltip: (props: TooltipProps) => void
    removeTooltip: () => void
    lastTooltipTimestamp: number | null
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

const useTooltip = () => {
    const context = useContext(TooltipContext)
    if (context === undefined) {
        throw new Error('useTooltip muss innerhalb eines TooltipProviders verwendet werden')
    }
    return context
}

const TooltipProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tooltip, setTooltip] = useState<TooltipProps | null>(null)
    const [lastTooltipTimestamp, setLastTooltipTimestamp] = useState<number | null>(null)

    const tooltipStartRef = useRef<number | null>(null);
    const removeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const addTooltip = useCallback((props: Omit<TooltipProps, 'x' | 'y'>) => {
        if (removeTimerRef.current) {
            clearTimeout(removeTimerRef.current);
            removeTimerRef.current = null;
        }

        tooltipStartRef.current = Date.now();
        setTooltip(props);
    }, []);

    const removeTooltip = () => {
        if (!tooltipStartRef.current) {
            setTooltip(null);
            return;
        }

        const elapsed = Date.now() - tooltipStartRef.current;
        const delay = elapsed >= 300 ? 0 : 300 - elapsed;

        removeTimerRef.current = setTimeout(() => {
            setLastTooltipTimestamp(Date.now());
            setTooltip(null);
            tooltipStartRef.current = null;
            removeTimerRef.current = null;
        }, delay);
    }


    return (
        <TooltipContext.Provider value={{ addTooltip, removeTooltip, lastTooltipTimestamp }}>
            {children}
            {tooltip && <Tooltip lastTooltipTimestamp={lastTooltipTimestamp} {...tooltip}/>}
        </TooltipContext.Provider>
    )
}

export default TooltipProvider
export { useTooltip }