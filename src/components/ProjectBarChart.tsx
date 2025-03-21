"use client"

import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    ToggleGroup,
    ToggleGroupItem,
    tooltip,
} from "lunalabs-ui"
import {Bar, BarChart, XAxis} from "recharts";
import React, {useMemo, useState} from "react"
import {Info} from "lucide-react"

function ProjectBarChart() {
    const [range, setRange] = useState<number>(30)

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

    const chartData = useMemo(() =>
        Array.from({ length: 30 }, (_, index) => ({
            day: `Day ${index + 1}`,
            first: Math.floor(Math.random() * 300) + 50,
            second: Math.floor(Math.random() * 200) + 20
        })
    ), [])

    return (
        <div className={"flex flex-col gap-4 w-full h-full justify-between bg-tertiary border border-main/20 rounded-md overflow-hidden p-4"}>
            <div className={"flex items-center justify-between"}>
                <div className={"flex gap-2 items-center"}>
                    <p className={"font-medium text-primary"}>Projects completed</p>
                    <div {...infoTooltip}>
                        <Info size={14}
                              className={"text-tertiary"}
                        />
                    </div>
                </div>
                <ToggleGroup
                    type="single"
                    className="shadow-sm"
                    value={`${range} days`}
                    onValueChange={(value) => setRange(Number.parseInt(value.split(" ")[0]))}
                >
                    <ToggleGroupItem value="7 days" aria-label="7 days">
                        7 days
                    </ToggleGroupItem>
                    <ToggleGroupItem value="14 days" aria-label="14 days">
                        14 days
                    </ToggleGroupItem>
                    <ToggleGroupItem value="30 days" aria-label="30 days">
                        30 days
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[350px]">
                <BarChart accessibilityLayer data={chartData.slice(0, range)}>
                    <XAxis
                        interval={range === 7 ? 0 : range > 20 ? 4 : 1}
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