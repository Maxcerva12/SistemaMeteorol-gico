// import React from "react";
// import { TrendingUp, BarChart as BarChartIcon } from "lucide-react";
// import {
//   ResponsiveContainer,
//   Bar,
//   BarChart,
//   CartesianGrid,
//   LabelList,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./card";

// export const description = "Un gráfico de barras con etiquetas estilizado";

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Temperatura",
//     color: "#ffffff", //Cambia el color de las barras
//   },
// };

// export function ComponentBar() {
//   const maxValue = Math.max(...chartData.map((item) => item.desktop));

//   return (
//     <Card className="w-full  mx-auto  shadow-lg rounded-lg overflow-hidden ">
//       <CardHeader className=" text-white ">
//         <div className="flex items-center space-x-2">
//           <BarChartIcon className="w-6 h-6" />
//           <CardTitle className="text-2xl font-bold">
//             Grafico de Temperatura
//           </CardTitle>
//         </div>
//         {/* <CardDescription className="text-indigo-100 mt-2">
//           Enero - Junio 2024
//         </CardDescription> */}
//       </CardHeader>
//       <CardContent className="p-6">
//         <ResponsiveContainer
//           width="100%"
//           height="100%"
//           className="w-full mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
//         >
//           <BarChart
//             data={chartData}
//             margin={{
//               top: 20,
//               right: 30,
//               left: 20,
//               bottom: 10,
//             }}
//           >
//             <CartesianGrid
//               strokeDasharray="3 3"
//               vertical={false}
//               stroke="white" //Cambia el color de las rayas del fondo
//             />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tick={{ fill: "white", fontSize: 12 }} // fill cambia los colores de el eje X
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <YAxis
//               hide
//               domain={[0, maxValue * 1.1]} // Ajusta el dominio para dejar espacio para las etiquetas
//             />
//             <Tooltip
//               contentStyle={{
//                 backgroundColor: "#000",
//                 border: "none",
//                 borderRadius: "8px",
//                 boxShadow:
//                   "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//               }}
//             />
//             <Bar
//               dataKey="desktop"
//               fill={chartConfig.desktop.color}
//               radius={[8, 8, 0, 0]}
//               maxBarSize={45}
//             >
//               <LabelList
//                 dataKey="desktop"
//                 position="top"
//                 offset={10}
//                 fill="white" //Cambia los numeros de arriba de las barras
//                 fontSize={12}
//                 formatter={(value) => `${value}`}
//               />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }

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

const chartConfig = {
  desktop: {
    label: "Temperatura",
    color: "#ffffff",
  },
};

export function ComponentBar() {
  const maxValue = Math.max(...chartData.map((item) => item.desktop));

  return (
    <Card className="w-full mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="text-white">
        <div className="flex items-center space-x-2">
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
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="white"
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "white", fontSize: 12 }}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis hide domain={[0, maxValue * 1.1]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#000",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              />
              <Bar
                dataKey="desktop"
                fill={chartConfig.desktop.color}
                radius={[8, 8, 0, 0]}
                maxBarSize={45}
              >
                <LabelList
                  dataKey="desktop"
                  position="top"
                  offset={10}
                  fill="white"
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

