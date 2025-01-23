"use client";

import { TrendingUp } from "lucide-react";
import { Bar, ComposedChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MessageCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, incoming: 120, answered: 90 },
  { month: "February", desktop: 305, incoming: 150, answered: 120 },
  { month: "March", desktop: 237, incoming: 180, answered: 160 },
  { month: "April", desktop: 73, incoming: 200, answered: 170 },
  { month: "May", desktop: 209, incoming: 220, answered: 190 },
  { month: "June", desktop: 214, incoming: 240, answered: 200 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  incoming: {
    label: "Incoming",
    color: "hsl(var(--chart-2))", // Adjust colors as needed
  },
  answered: {
    label: "Answered",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function Chart1() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex gap-[6px] items-center text-[12px] text-[#667085] "> <MessageCircle className="fill-[#667085]" size={15}/> CONSULTATIONS</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="h-[300px] md:h-[400px]" >
        <ChartContainer config={chartConfig} className="h-full w-full" >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              
              {/* Left Y-Axis */}
              <YAxis yAxisId="left" 
              label={{ 
                value: 'Number of Experts', 
                angle: -90, 
                position: 'insideLeft',
                style: {
                  textAnchor: 'middle',
                  fill: '#667085',
                  fontSize: 12
                }
              }} 
              
              />
    

              {/* Right Y-Axis */}
              <YAxis yAxisId="right" orientation="right" 
              label={{ 
                value: 'Consultations', 
                angle: 90, 
                position: 'insideRight',
                style: {
                  textAnchor: 'middle',
                  fill: '#667085',
                  fontSize: 12
                }
              }}
              
              />

              

              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
                content={<ChartTooltipContent hideLabel />}
              />
              
              {/* Bar linked to Left Y-Axis */}
              <Bar dataKey="desktop" fill="#FFF3C6" radius={8} yAxisId="left" />
              
              {/* Line linked to Left Y-Axis */}
              <Line
                type="monotone"
                dataKey="incoming"
                stroke="#15B79F"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
                yAxisId="left"
              />
              
              {/* Line linked to Right Y-Axis */}
              <Line
                type="monotone"
                dataKey="answered"
                stroke="#8A94A6"
                strokeWidth={2}
                dot={false}
                yAxisId="right"
              />

              

            </ComposedChart>
          </ResponsiveContainer>

          
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      <div className="flex items-center space-x-6 mt-4 pl-4">
        {/* Key Item 1 */}
        <div className="flex items-center space-x-2">
          <span className="w-4 h-1 bg-[#15B79F] rounded"></span>
          <span className="text-sm text-gray-600">Incoming</span>
        </div>

        {/* Key Item 2 */}
        <div className="flex items-center space-x-2">
          <span className="w-4 h-1 bg-[#8A94A6] rounded"></span>
          <span className="text-sm text-gray-600">Answered</span>
        </div>

        {/* Key Item 3 */}
        <div className="flex items-center space-x-2">
          <span className="w-4 h-1 bg-[#FFF3C6] rounded"></span>
          <span className="text-sm text-gray-600">Experts online</span>
        </div>
      </div>
      </CardFooter>
    </Card>
  );
}
