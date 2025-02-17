import React, {useMemo} from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/Chart"
import {Area, AreaChart, Bar, BarChart, CartesianGrid, Label, Line, LineChart, Pie, PieChart, XAxis} from "recharts"

const meta: Meta<typeof ChartContainer> = {
    title: "Components/Chart",
    component: ChartContainer,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof ChartContainer>

export const BarChart1: Story = {
    render: () => {

        const chartConfig = {
            desktop: {
                label: "Desktop",
                color: "#2563eb"
            },
            mobile: {
                label: "Mobile",
                color: "#60a5fa"
            }
        } satisfies ChartConfig

        const chartData = [
            { month: "January", desktop: 186, mobile: 80 },
            { month: "February", desktop: 305, mobile: 200 },
            { month: "March", desktop: 237, mobile: 120 },
            { month: "April", desktop: 73, mobile: 190 },
            { month: "May", desktop: 209, mobile: 130 },
            { month: "June", desktop: 214, mobile: 140 }
        ]

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent/>} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </div>
        )
    },
}

export const AreaChart1: Story = {
    render: () => {

        const chartConfig = {
            desktop: {
                label: "Desktop",
                color: "#2563eb"
            },
            mobile: {
                label: "Mobile",
                color: "#60a5fa"
            }
        } satisfies ChartConfig

        const chartData = [
            { month: "January", desktop: 186, mobile: 80 },
            { month: "February", desktop: 305, mobile: 200 },
            { month: "March", desktop: 237, mobile: 120 },
            { month: "April", desktop: 73, mobile: 190 },
            { month: "May", desktop: 209, mobile: 130 },
            { month: "June", desktop: 214, mobile: 140 }
        ]


        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <ChartContainer config={chartConfig} className={"w-full min-h-[200px]"}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="mobile"
                            type="natural"
                            fill="#60a5fa"
                            fillOpacity={0.4}
                            stroke="#60a5fa"
                            stackId="a"
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="#2563eb"
                            fillOpacity={0.4}
                            stroke="#2563eb"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </div>
        )
    },
}

export const PieChart1: Story = {
    render: () => {

        const chartConfig = {
            visitors: {
                label: "Visitors",
            },
            chrome: {
                label: "Chrome",
                color: "#2563eb"
            },
            safari: {
                label: "Safari",
                color: "#60a5fa"
            },
            firefox: {
                label: "Firefox",
                color: "#f87171"
            },
            edge: {
                label: "Edge",
                color: "#34d399"
            },
            other: {
                label: "Other",
                color: "#d97706"
            }
        } satisfies ChartConfig

        const chartData = [
            { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
            { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
            { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
            { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
            { browser: "other", visitors: 190, fill: "var(--color-other)" }
        ]

        const totalVisitors = useMemo(() => {
            return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
        }, [])

        return (
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full min-h-[250px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-black dark:fill-white text-3xl font-bold"
                                            >
                                                {totalVisitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-black/90 dark:fill-white/90"
                                            >
                                                Visitors
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        )
    }
}

export const LineChart1: Story = {
    render: () => {

        const chartConfig = {
            desktop: {
                label: "Desktop",
                color: "#2563eb"
            }
        } satisfies ChartConfig

        const chartData = [
            {month: "January", desktop: 186},
            {month: "February", desktop: 305},
            {month: "March", desktop: 237},
            {month: "April", desktop: 73},
            {month: "May", desktop: 209},
            {month: "June", desktop: 214}
        ]

        return (

            <ChartContainer config={chartConfig} className={"w-full min-h-[200px]"}>
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                    }}
                >
                    <CartesianGrid vertical={false}/>
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel/>}
                    />
                    <Line
                        dataKey="desktop"
                        type="natural"
                        stroke="var(--color-desktop)"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>
        )
    }
}