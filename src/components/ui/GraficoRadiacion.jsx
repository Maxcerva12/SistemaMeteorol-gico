// import React, { useState, useMemo } from "react";
// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import { TrendingUp, Monitor, Smartphone } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./card";

// const chartData = [
//   { date: "2024-04-01", desktop: 222, mobile: 150 },
//   { date: "2024-04-02", desktop: 97, mobile: 180 },
//   { date: "2024-04-03", desktop: 167, mobile: 120 },
//   { date: "2024-04-04", desktop: 242, mobile: 260 },
//   { date: "2024-04-05", desktop: 373, mobile: 290 },
//   { date: "2024-04-06", desktop: 301, mobile: 340 },
//   { date: "2024-04-07", desktop: 245, mobile: 180 },
//   { date: "2024-04-08", desktop: 409, mobile: 320 },
//   { date: "2024-04-09", desktop: 59, mobile: 110 },
//   { date: "2024-04-10", desktop: 261, mobile: 190 },
//   { date: "2024-04-11", desktop: 327, mobile: 350 },
//   { date: "2024-04-12", desktop: 292, mobile: 210 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Radiacion",
//     color: "#F39237",
//     icon: Monitor,
//   },
// };

// export function Component() {
//   const [activeChart, setActiveChart] = useState("desktop");

//   const total = useMemo(
//     () => ({
//       desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
//       mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
//     }),
//     []
//   );

//   return (
//     <Card className="w-full max-w-screen-2xl mx-auto shadow-lg rounded-lg overflow-hidden max-h-dvh	">
//       <CardHeader className="text-white ">
//         <div className="flex items-center space-x-2">
//           <TrendingUp className="w-6 h-6" />
//           <CardTitle className="text-2xl font-bold">
//             Grafico de Radiacion
//           </CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="w-full h-[290px]">
//           <ResponsiveContainer>
//             <LineChart
//               data={chartData}
//               margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//               <XAxis
//                 dataKey="date"
//                 tickFormatter={(value) => {
//                   const date = new Date(value);
//                   return date.toLocaleDateString("es-ES", {
//                     month: "short",
//                     day: "numeric",
//                   });
//                 }}
//                 stroke="white"
//                 tick={{ fill: "white", fontSize: 12 }}
//               />
//               <YAxis stroke="white" tick={{ fill: "white", fontSize: 12 }} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "black",
//                   border: "none",
//                   borderRadius: "8px",
//                   boxShadow:
//                     "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//                 }}
//               />
//               <Legend />
//               {Object.entries(chartConfig).map(([key, config]) => (
//                 <Line
//                   key={key}
//                   type="monotone"
//                   dataKey={key}
//                   stroke={config.color}
//                   strokeWidth={3}
//                   dot={false}
//                   activeDot={{ r: 8 }}
//                   name={config.label}
//                   opacity={activeChart === key ? 1 : 0.3}
//                 />
//               ))}
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

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
];

const chartConfig = {
  desktop: {
    label: "Radiación",
    color: "#F39237",
    icon: Monitor,
  },
};

export function Component() {
  const [activeChart, setActiveChart] = useState("desktop");

  const total = useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  return (
    <Card className="w-full max-w-screen-xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <div className="flex items-center space-x-2 text-white">
          <TrendingUp className="w-6 h-6" />
          <CardTitle className="text-xl md:text-2xl font-bold">
            Gráfico de Radiación
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("es-ES", {
                    month: "short",
                    day: "numeric",
                  });
                }}
                stroke="white"
                tick={{ fill: "white", fontSize: 12 }}
              />
              <YAxis stroke="white" tick={{ fill: "white", fontSize: 12 }} />
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
