import React from "react";
import { TrendingUp, BarChart as BarChartIcon } from "lucide-react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 186 },
  { month: "August", desktop: 305 },
  { month: "September", desktop: 237 },
  { month: "October", desktop: 73 },
  { month: "November", desktop: 209 },
  { month: "December", desktop: 214 },
];

const getColorByTemperature = (temperatura) => {
  if (temperatura > 32) {
    return {
      barColor: "black",
      rayaColor: "#fff",
      titleColor: "#000",
      toplis: "white",
      toplisMes: "#000",
    }; // Alta temperatura
  } else if (temperatura > 20) {
    return {
      barColor: "#d53f51",
      rayaColor: "black",
      titleColor: "#d53f51",
      toplis: "black",
    }; // Temperatura moderada
  } else {
    return {
      barColor: "#FFFFFF",
      rayaColor: "#fff",
      titleColor: "#fff",
      toplis: "black",
    }; // Baja temperatura
  }
};

export function ComponentBar({ temperatura }) {
  const maxValue = Math.max(...chartData.map((item) => item.desktop));
  const { barColor, rayaColor, titleColor, toplis, toplisMes } =
    getColorByTemperature(temperatura);

  return (
    <Card
      className="w-full mx-auto shadow-lg rounded-lg overflow-hidden"
      temperatura={temperatura}
    >
      <CardHeader className="text-white">
        <div
          className="flex items-center space-x-2"
          style={{ color: titleColor }}
        >
          <BarChartIcon className="w-6 h-6" />
          <CardTitle className="text-2xl font-bold">
            Gráfico de Temperatura
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-[30vh] min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid // cambia color de la barra
                strokeDasharray="3 3"
                vertical={false}
                stroke={rayaColor}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: barColor, fontSize: 12 }}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis hide domain={[0, maxValue * 1.1]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: toplis,
                  color: toplisMes,
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              />
              <Bar
                dataKey="desktop"
                fill={barColor}
                radius={[8, 8, 0, 0]}
                maxBarSize={45}
              >
                <LabelList
                  dataKey="desktop"
                  position="top"
                  offset={10}
                  fill={titleColor}
                  fontSize={12}
                  formatter={(value) => `${value}`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
