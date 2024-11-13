// src/components/ui/Chart.jsx
import React from "react";

const ChartConfig = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const ChartContainer = ({ children, className }) => {
  return <div className={`relative ${className}`}>{children}</div>;
};

const ChartTooltip = ({ children, className }) => {
  return (
    <div className={`absolute bg-white p-2 shadow-md rounded ${className}`}>
      {children}
    </div>
  );
};

const ChartTooltipContent = ({ children, className }) => {
  return <div className={`text-sm ${className}`}>{children}</div>;
};

export { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent };
