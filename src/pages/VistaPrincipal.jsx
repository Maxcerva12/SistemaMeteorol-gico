import React from "react";
import { IconName } from "lucide-react";
import { Droplets, Sun, CloudRain } from "lucide-react";
import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"

// export const description = "A bar chart with a label"
// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ]
// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig

const VistaPrincipal = () => {
  return (
    <div className="flex gap-4 p-4 bg-[#5D5FEF] text-white h-screen">
      <article className="flex-1 bg-[#5D5FEF] border-none shadow-none overflow-hidden relative">
        <video
          className="absolute inset-0 w-2/5 h-full object-cover rounded-[20px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/access/video/videolluvia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="relative z-10 p-6 h-auto flex flex-col">
          <h2 className="text-4xl font-bold mb-2">Temperatura</h2>
          <p className="text-6xl font-bold mb-2">
            30°C <span className="text-2xl font-normal">/86°F</span>
          </p>
          <p className="text-xl">Tormenta eléctrica</p>
        </section>
        <div>
          <section className="absolute bottom-10 flex justify-between bg-[#ffffff]/60 rounded-lg p-4 w-2/5 text-black">
            <div className="flex flex-col items-center justify-center">
              {<Droplets className="w-7.5 h-7.5" />}
              <h3 style={{ fontSize: "25px" }} className="font-bold">
                40%
              </h3>
              <p style={{ fontSize: "10px" }} className="font-bold">
                Humedad
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              {<Sun className="w-7.5 h-7.5" />}
              <h3 style={{ fontSize: "25px" }} className="font-bold">
                7
              </h3>
              <p style={{ fontSize: "10px" }} className="font-bold">
                UV
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              {<CloudRain className="w-7.5 h-7.5" />}
              <h3 style={{ fontSize: "25px" }} className="font-bold">
                14%
              </h3>
              <p style={{ fontSize: "10px" }} className="font-bold">
                Precipitación
              </p>
            </div>
          </section>
        </div>
      </article>
      <article>
        <section>
          <h1>Tabla Temperatura</h1>
        </section>
      </article>
      <article>
        <section>
          <h1>UV INDEX</h1>
        </section>
        <section>
          <div className="checkbox-wrapper-35">
            <input
              value="private"
              name="switch"
              id="switch"
              type="checkbox"
              className="switch"
            />
            <label htmlFor="switch">
              <span className="switch-x-text">This is </span>
              <span className="switch-x-toggletext">
                <span className="switch-x-unchecked">
                  <span className="switch-x-hiddenlabel">Unchecked: </span>Off
                </span>
                <span className="switch-x-checked">
                  <span className="switch-x-hiddenlabel">Checked: </span>On
                </span>
              </span>
            </label>
          </div>
        </section>
      </article>
      <article>
        <section>
          <h1>Gráfica</h1>
          {/* <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card> */}
        </section>
      </article>
    </div>
  );
};

export default VistaPrincipal;
