import { useState, useEffect } from "react";
import { Droplets, Sun, CloudRain } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Component } from "../components/ui/GraficoRadiacion";
import { ComponentBar } from "../components/ui/barras";
import { Componentlinea } from "../components/ui/linea";

const generateData = () => ({
  temperatura: Math.floor(Math.random() * 90),
  humedad: 40,
  uvIndex: 7,
  precipitacion: 14,
});

const VideoTemperatura = (temperatura) => {
  if (temperatura > 32) {
    return "/assets/video/videocalor.mp4";
  } else if (temperatura > 20) {
    return "/assets/video/Fresh.mp4";
  } else {
    return "/assets/video/videolluvia.mp4";
  }
};

const ColorTitulo = (temperatura) => {
  if (temperatura > 32) {
    return {
      titleColor: "black",
      subtitulo: "Calor Extremo",
      contenedoricons: "rgb(18 16 16 / 50%)",
      icons: "#fff",
    }; // Alta temperatura
  } else if (temperatura > 20) {
    return {
      titleColor: "#d53f51",
      subtitulo: "Calor Moderado",
      contenedoricons: "rgb(255 255 255 / 60%)",
      icons: "#000",
    }; // Temperatura moderada
  } else {
    return {
      titleColor: "#fff",
      subtitulo: "Tormenta Eléctrica",
      contenedoricons: "rgb(255 255 255 / 60%)",
      icons: "#000",
    };
  }
};

const VistaPrincipal = () => {
  const [data, setData] = useState(generateData());
  const [videoSrc, setVideoSrc] = useState(VideoTemperatura(data.temperatura));
  const { subtitulo, titleColor, contenedoricons, icons } = ColorTitulo(
    data.temperatura
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateData();
      setData(newData);
      setVideoSrc(VideoTemperatura(newData.temperatura));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-2 bg-[#FFFFF2] text-white min-h-screen">
      {/* Tarjeta de temperatura */}
      <Card
        className="w-full md:w-[48%] lg:w-[31%] border-none shadow-none overflow-hidden relative"
        temperatura={data.temperatura}
      >
        <video
          key={videoSrc} // Añadimos una key para forzar la recarga del video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div style={{ color: titleColor }}>
            <h1 className="text-[3rem] font-bold ">Temperatura</h1>
            <p className="text-[2.75rem] font-bold mb-2">
              {data.temperatura}°C{" "}
              <span className="text-[1.625rem] font-normal">
                /{Math.round((data.temperatura * 9) / 5 + 32)}°F
              </span>
            </p>
            <p className="text-[1.188rem]">{subtitulo}</p>
          </div>
          <div
            style={{ backgroundColor: contenedoricons }}
            className="flex justify-around rounded-lg text-black  w-[22.313rem] h-[6rem] items-center "
          >
            <MetricaSimple
              icon={<Droplets className="w-[1.25rem] h-[1.25rem]" />}
              value={`${data.humedad}%`}
              label="Humedad"
            />
            <MetricaSimple
              icon={<Sun className="w-[1.25rem] h-[1.25rem]" />}
              value={data.uvIndex}
              label="UV"
            />
            <MetricaSimple
              icon={<CloudRain className="w-[1.25rem] h-[1.25rem]" />}
              value={`${data.precipitacion}%`}
              label="Precipitación"
            />
          </div>
        </CardContent>
      </Card>

      {/* Gráficos */}
      <div className="flex-1 space-y-4 w-full lg:w-[67%]">
        <ComponentBar temperatura={data.temperatura} />
        <div className="flex flex-col lg:flex-row justify-around gap-4 w-full">
          <div className="flex-1 flex">
            <Componentlinea
              temperatura={data.temperatura}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Component
              temperatura={data.temperatura}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
  function MetricaSimple({ icon, value, label }) {
    return (
      <div style={{ color: icons }} className="flex flex-col items-center">
        {icon}
        <div className="text-2xl font-bold mt-2 text-[1.563rem]">{value}</div>
        <div className="text-[0.563rem]">{label}</div>
      </div>
    );
  }
};

export default VistaPrincipal;
