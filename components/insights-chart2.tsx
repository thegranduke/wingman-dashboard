"use client"

import { TrendingUp, ChartNoAxesColumnIncreasing } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#134E48",
    
  },
  mobile: {
    label: "Mobile",
    color: "#CCFBEF",
  },
} satisfies ChartConfig

export function Chart2() {
  return (
    <Card className="h-full">
      <CardHeader>
      <CardTitle className="flex gap-[6px] items-center text-[12px] text-[#667085]"> <ChartNoAxesColumnIncreasing strokeWidth={3} size={15}/> VS PAST PERIOD</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="h-[300px] md:h-[400px]"  >
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false}  />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      <div className="flex items-center space-x-6 mt-4 pl-4">
        {/* Key Item 1 */}
        <div className="flex items-center space-x-2">
          <span className="w-4 h-1 bg-[#134E48] rounded"></span>
          <span className="text-sm text-gray-600">Incoming</span>
        </div>

        {/* Key Item 2 */}
        <div className="flex items-center space-x-2">
          <span className="w-4 h-1 bg-[#CCFBEF] rounded"></span>
          <span className="text-sm text-gray-600">Answered</span>
        </div>
      </div>
      </CardFooter>
    </Card>
  )
}
