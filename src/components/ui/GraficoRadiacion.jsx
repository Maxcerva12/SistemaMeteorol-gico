import React, { useState, useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingUp, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 292, mobile: 210 },
];

const getColorByTemperature = (temperatura) => {
  if (temperatura > 32) {
    return {
      barColor: "#026C7C",
      rayaColor: "black",
      titleColor: "black",
      toplis: "white",
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
      barColor: "#F39237",
      rayaColor: "#fff",
      titleColor: "#fff",
      toplis: "white",
    }; // Baja temperatura
  }
};

export function Component({ temperatura }) {
  const [activeChart, setActiveChart] = useState("desktop");
  const { barColor, rayaColor, titleColor } =
    getColorByTemperature(temperatura);

  const chartConfig = {
    desktop: {
      label: "Radiación",
      color: barColor,
      icon: Monitor,
    },
  };

  return (
    <Card
      className="w-full max-w-screen-xl mx-auto shadow-lg rounded-lg h-full"
      temperatura={temperatura}
    >
      <CardHeader>
        <div className="flex items-center space-x-2 text-white">
          <TrendingUp className="w-6 h-6" style={{ color: titleColor }} />
          <div style={{ color: titleColor }}>
            <CardTitle className="text-xl md:text-2xl font-bold">
              Gráfico de Radiación
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={rayaColor} />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("es-ES", {
                    month: "short",
                    day: "numeric",
                  });
                }}
                stroke={rayaColor} // cambia el color de el eje x
                tick={{ fill: rayaColor, fontSize: 12 }}
              />
              <YAxis
                stroke={rayaColor}
                tick={{ fill: rayaColor, fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111827",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                }}
              />
              <Legend wrapperStyle={{ color: "white" }} />
              {Object.entries(chartConfig).map(([key, config]) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={config.color}
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 8 }}
                  name={config.label}
                  opacity={activeChart === key ? 1 : 0.3}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
