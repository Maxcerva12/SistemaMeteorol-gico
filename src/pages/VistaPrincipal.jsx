import { useState, useEffect } from "react";
import { Droplets, Sun, CloudRain } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Component } from "../components/ui/GraficoRadiacion";
import { ComponentBar } from "../components/ui/barras";
import { Componentlinea } from "../components/ui/linea";

const generateData = () => ({
  temperatura: 30,
  humedad: 40,
  uvIndex: 7,
  precipitacion: 14,
});

const VistaPrincipal = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-2 bg-[#FFFFF2] text-white min-h-screen">
      {/* Tarjeta de temperatura */}
      <Card className="w-full md:w-[48%] lg:w-[31%] bg-[#5D5FEF] border-none shadow-none overflow-hidden relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video/videolluvia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">Temperatura</h2>
            <p className="text-6xl font-bold mb-2">
              30°C <span className="text-2xl font-normal">/86°F</span>
            </p>
            <p className="text-xl">Tormenta eléctrica</p>
          </div>
          <div className="flex justify-around bg-[#ffffff]/60 rounded-lg p-4 text-black">
            <MetricaSimple
              icon={<Droplets className="w-8 h-8" />}
              value="40%"
              label="Humedad"
            />
            <MetricaSimple
              icon={<Sun className="w-8 h-8" />}
              value="7"
              label="UV"
            />
            <MetricaSimple
              icon={<CloudRain className="w-8 h-8" />}
              value="14%"
              label="Precipitación"
            />
          </div>
        </CardContent>
      </Card>

      {/* Gráficos y Switch */}
      <div className="flex-1 space-y-4 w-full lg:w-[67%]">
        <ComponentBar />
        <div className="flex lg:flex-row justify-around gap-4 w-full">
          <div className="flex-1 flex ">
            <Componentlinea className="w-full h-auto" />
          </div>
          <div className="flex-1">
            <Component className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

function MetricaSimple({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}

export default VistaPrincipal;
