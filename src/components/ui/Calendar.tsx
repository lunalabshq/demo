"use client"

import type React from "react"
import {DayPicker, useDayPicker, type DayPickerProps, labelNext, labelPrevious} from "react-day-picker"

import { cn } from "@/lib/utils"
import {useCallback, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {Button} from "@/components/ui/Button"
import {differenceInCalendarDays} from "date-fns"

export type CalendarProps = DayPickerProps & {
    yearRange?: number
    showYearSwitcher?: boolean
}

type NavView = "days" | "years"

const Calendar = ({className, showOutsideDays = true, showYearSwitcher = true, yearRange = 12, numberOfMonths, ...props}: CalendarProps) => {
    const initialYears = useMemo(() => {
        const currentYear = new Date().getFullYear()
        return {from: currentYear - Math.floor(yearRange / 2 - 1), to: currentYear + Math.ceil(yearRange / 2)}
    }, [yearRange])

    const [navView, setNavView] = useState<NavView>("days")
    const [displayYears, setDisplayYears] = useState<{ from: number, to: number }>(initialYears)
    const { onNextClick, onPrevClick, startMonth, endMonth } = props
    const columnsDisplayed = navView === "years" ? 1 : numberOfMonths

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            numberOfMonths={columnsDisplayed}
            className={cn("p-3 bg-primary shadow-md rounded-md border border-main", className)}
            classNames={{
                months: "relative flex",
                month_caption: "relative mx-10 flex h-7 items-center justify-center",
                weekdays: "flex flex-row",
                weekday: "w-8 text-sm font-normal text-secondary",
                month: "w-full",
                nav: "flex items-start",
                week: "mt-2 flex w-max items-start",
                day:
                    "rounded-md flex size-8 flex-1 items-center justify-center p-0 text-sm " +
                    "hover:bg-tertiary hover:text-primary",
                day_button: "size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100",
                range_start: "day-range-start rounded-l-md rounded-r-none",
                range_middle: "bg-tertiary text-primary hover:bg-tertiary hover:text-primary rounded-none",
                range_end: "day-range-end rounded-r-md rounded-l-none",
                selected: "bg-tertiary text-primary hover:bg-tertiary hover:text-primary",
                today: "bg-info/10 text-primary font-medium",
                outside: "day-outside text-tertiary",
                disabled: "text-tertiary/50 opacity-50",
                hidden: "invisible flex-1"
            }}

            components={{
                Chevron: ({ orientation }) => {
                    const Icon = orientation === "left" ? ChevronLeft : ChevronRight
                    return <Icon className="h-4 w-4" />
                },
                Nav: ({ className }) => (
                    <Nav
                        className={className}
                        displayYears={displayYears}
                        navView={navView}
                        setDisplayYears={setDisplayYears}
                        startMonth={startMonth}
                        endMonth={endMonth}
                        onPrevClick={onPrevClick}
                    />
                ),
                CaptionLabel: (props) => (
                    <CaptionLabel
                        showYearSwitcher={showYearSwitcher}
                        navView={navView}
                        setNavView={setNavView}
                        displayYears={displayYears}
                        {...props}
                    >
                        {props.children}
                    </CaptionLabel>
                ),
                MonthGrid: ({ className, children, ...props }) => (
                    <MonthGrid
                        // biome-ignore lint/correctness/noChildrenProp: <explanation>
                        children={children}
                        className={className}
                        displayYears={displayYears}
                        startMonth={startMonth}
                        endMonth={endMonth}
                        navView={navView}
                        setNavView={setNavView}
                        {...props}
                    />
                ),
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

interface NavProps {
    className?: string
    navView: NavView
    startMonth?: Date
    endMonth?: Date
    displayYears: { from: number, to: number }
    setDisplayYears: React.Dispatch<
        React.SetStateAction<{ from: number, to: number }>
    >
    onPrevClick?: (date: Date) => void
    onNextClick?: (date: Date) => void
}

function Nav({className, navView, startMonth, endMonth, displayYears, setDisplayYears, onPrevClick, onNextClick}: NavProps) {
    const { nextMonth, previousMonth, goToMonth } = useDayPicker()

    const isPreviousDisabled = (() => {
        if (navView === "years") {
            return (
                (startMonth && differenceInCalendarDays(new Date(displayYears.from - 1, 0, 1), startMonth) < 0) ||
                (endMonth && differenceInCalendarDays(new Date(displayYears.from - 1, 0, 1), endMonth) > 0)
            )
        }
        return !previousMonth
    })()

    const isNextDisabled = (() => {
        if (navView === "years") {
            return (
                (startMonth && differenceInCalendarDays(new Date(displayYears.to + 1, 0, 1), startMonth) < 0) ||
                (endMonth && differenceInCalendarDays(new Date(displayYears.to + 1, 0, 1), endMonth) > 0)
            )
        }
        return !nextMonth
    })()

    const handlePreviousClick = useCallback(() => {
        if (!previousMonth) return
        if (navView === "years") {
            setDisplayYears((prev) => ({
                from: prev.from - (prev.to - prev.from + 1),
                to: prev.to - (prev.to - prev.from + 1),
            }))
            onPrevClick?.(new Date(displayYears.from - (displayYears.to - displayYears.from), 0, 1))
            return
        }
        goToMonth(previousMonth)
        onPrevClick?.(previousMonth)
    }, [previousMonth, goToMonth, navView, setDisplayYears, onPrevClick, displayYears.from, displayYears.to])

    const handleNextClick = useCallback(() => {
        if (!nextMonth) return
        if (navView === "years") {
            setDisplayYears((prev) => ({
                from: prev.from + (prev.to - prev.from + 1),
                to: prev.to + (prev.to - prev.from + 1),
            }))
            onNextClick?.(new Date(displayYears.from + (displayYears.to - displayYears.from), 0, 1))
            return
        }
        goToMonth(nextMonth)
        onNextClick?.(nextMonth)
    }, [goToMonth, nextMonth, navView, setDisplayYears, onNextClick, displayYears.from, displayYears.to])
    return (
        <nav className={cn("flex items-center", className)}>
            <Button
                className="absolute left-0 h-7 w-7 bg-transparent p-0 text-secondary hover:text-primary hover:bg-tertiary border-0"
                type="button"
                tabIndex={isPreviousDisabled ? undefined : -1}
                disabled={isPreviousDisabled}
                aria-label={
                    navView === "years"
                        ? `Go to the previous ${displayYears.to - displayYears.from + 1} years`
                        : labelPrevious(previousMonth)
                }
                onClick={handlePreviousClick}
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
                className="absolute right-0 h-7 w-7 bg-transparent p-0 text-secondary hover:text-primary hover:bg-tertiary border-0"
                type="button"
                tabIndex={isNextDisabled ? undefined : -1}
                disabled={isNextDisabled}
                aria-label={
                    navView === "years"
                        ? `Go to the next ${displayYears.to - displayYears.from + 1} years`
                        : labelNext(nextMonth)
                }
                onClick={handleNextClick}
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </nav>
    )
}

interface CaptionLabelProps {
    children: React.ReactNode
    showYearSwitcher?: boolean
    navView: NavView
    setNavView: React.Dispatch<React.SetStateAction<NavView>>
    displayYears: { from: number, to: number }
}

function CaptionLabel({children, showYearSwitcher, navView, setNavView, displayYears, ...props}: CaptionLabelProps) {
    if (!showYearSwitcher) return <span {...props}>{children}</span>

    return (
        <Button
            className="h-7 w-full truncate text-sm font-medium hover:bg-tertiary bg-transparent border-0"
            onClick={() => setNavView((prev) => (prev === "days" ? "years" : "days"))}
        >
            {navView === "days" ? children : `${displayYears.from} - ${displayYears.to}`}
        </Button>
    )
}

interface MonthGridProps extends React.TableHTMLAttributes<HTMLTableElement> {
    className?: string
    children: React.ReactNode
    displayYears: { from: number, to: number }
    startMonth?: Date
    endMonth?: Date
    navView: NavView
    setNavView: React.Dispatch<React.SetStateAction<NavView>>
}

function MonthGrid({className, children, displayYears, startMonth, endMonth, navView, setNavView, ...props}: MonthGridProps) {
    if (navView === "years") {
        return (
            <YearGrid
                displayYears={displayYears}
                startMonth={startMonth}
                endMonth={endMonth}
                setNavView={setNavView}
                navView={navView}
                className={className}
                {...props}
            />
        )
    }
    return (
        <table className={className} {...props}>
            {children}
        </table>
    )
}

interface YearGridProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    displayYears: { from: number, to: number }
    startMonth?: Date
    endMonth?: Date
    setNavView: React.Dispatch<React.SetStateAction<NavView>>
    navView: NavView
}

function YearGrid({className, displayYears, startMonth, endMonth, setNavView, navView, ...props}: YearGridProps) {
    const { goToMonth, selected } = useDayPicker()

    return (
        <div className={cn("grid grid-cols-4 gap-y-2", className)} {...props}>
            {Array.from({ length: displayYears.to - displayYears.from + 1 }, (_, i) => {

                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                const isBefore = differenceInCalendarDays(new Date(displayYears.from + i, 11, 31), startMonth!) < 0
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                const isAfter = differenceInCalendarDays(new Date(displayYears.from + i, 0, 0), endMonth!) > 0
                const isDisabled = isBefore || isAfter

                return (
                    <Button
                        key={`${displayYears.from}-${displayYears.to}`}
                        className={cn(
                            "h-7 w-full text-sm font-normal hover:bg-tertiary bg-transparent border-0",
                            displayYears.from + i === new Date().getFullYear() &&
                            "bg-tertiary font-medium text-primary"
                        )}
                        onClick={() => {
                            setNavView("days")
                            goToMonth(new Date(displayYears.from + i, (selected as Date | undefined)?.getMonth() ?? 0))
                        }}
                        disabled={navView === "years" ? isDisabled : undefined}
                    >
                        {displayYears.from + i}
                    </Button>
                )
            })}
        </div>
    )
}

export { Calendar }
