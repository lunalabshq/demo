"use client"

import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    Select, SelectContent, SelectGroup, SelectItem, SelectTrigger,
    SelectValue,
    tooltip,
} from "lunalabs-ui"
import {Bar, BarChart, XAxis } from "recharts";
import React from "react"
import {CalendarClock, Info} from "lucide-react"

function ProjectBarChart() {

    const infoTooltip = tooltip<HTMLDivElement>({
        message: "This chart shows the number of projects completed by each team in the selected timeframe",
        delay: 200,
        width: 200
    })

    const chartConfig = {
        first: {
            label: "First Team",
            color: "#205417"
        },
        second: {
            label: "Second Team",
            color: "#68db53"
        }
    } satisfies ChartConfig

    const chartData = Array.from({ length: 30 }, (_, index) => ({
        day: `Day ${index + 1}`,
        first: Math.floor(Math.random() * 300) + 50,
        second: Math.floor(Math.random() * 200) + 20
    }))

    return (
        <div className={"flex flex-col gap-4 w-full h-full bg-tertiary rounded-md overflow-hidden p-4"}>
            <div className={"flex items-center justify-between"}>
                <div className={"flex gap-2 items-center"}>
                    <p className={"font-medium text-primary"}>Projects completed</p>
                    <div {...infoTooltip}>
                        <Info size={14}
                              className={"text-tertiary"}
                        />
                    </div>
                </div>
                <Select value={"30 days"}>
                    <SelectTrigger className="w-[180px] shadow-sm">
                        <CalendarClock size={14}/>
                        <SelectValue placeholder="Select a timeframe"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="7 days">7 days</SelectItem>
                            <SelectItem value="14 days">14 days</SelectItem>
                            <SelectItem value="30 days">30 days</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[400px]">
                <BarChart accessibilityLayer data={chartData}>
                    <XAxis
                        interval={5}
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent/>}/>
                    <ChartLegend content={<ChartLegendContent/>}/>
                    <Bar dataKey="first" fill={chartConfig.first.color} radius={4}/>
                    <Bar dataKey="second" fill={chartConfig.second.color} radius={4}/>
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export {ProjectBarChart}