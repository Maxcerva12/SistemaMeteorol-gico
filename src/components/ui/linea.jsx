import React from "react";
import { TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export const description = "Un gráfico de líneas múltiples estilizado";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Temperatura",
    color: "#3b82f6",
  },
  mobile: {
    label: "Humedad",
    color: "#10b981",
  },
};

export function Componentlinea() {
  return (
    <Card className="w-full  mx-auto min-h-[16rem] ">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <CardTitle className="text-2xl font-bold">
            Grafico de Temperatura y Humedad
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[40.5vh] min-h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                tickFormatter={(value) => value.slice(0, 3)}
                stroke="white" /* cambia el color de la barra eje X */
                tick={{ fill: "white", fontSize: 12 }}
              />
              <YAxis
                stroke="white"
                /*cambia el color de la barra eje Y  */ tick={{
                  fill: "white",
                  fontSize: 15,
                }}
              />
              <Tooltip /* esto sirve para sacar el boton flotante */
                contentStyle={{
                  backgroundColor: "#000",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Line
                type="monotone"
                dataKey="desktop"
                name={chartConfig.desktop.label}
                stroke={chartConfig.desktop.color}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="mobile"
                name={chartConfig.mobile.label}
                stroke={chartConfig.mobile.color}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 8, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
