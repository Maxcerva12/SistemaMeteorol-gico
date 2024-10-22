import React from "react";

const BackgroundColor = (temperatura) => {
  if (temperatura > 32) {
    return "bg-[#FDBAAC]";
  } else if (temperatura > 20) {
    return "bg-[#f0e1be]";
  } else {
    return "bg-[#5E57A6]";
  }
};

const Card = ({ children, className, temperatura }) => {
  const bgColorClass = BackgroundColor(temperatura);

  return (
    <div className={`p-4 ${bgColorClass} shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const CardDescription = ({ children, className }) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
};

const CardHeader = ({ children, className }) => {
  return <div className={`pb-2 ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
