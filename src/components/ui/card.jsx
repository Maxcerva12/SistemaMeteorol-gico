// // src/components/ui/Card.jsx
// import React from "react";

// const Card = ({ children, className }) => {
//   return (
//     <div className={`p-4 bg-white shadow-md rounded-lg ${className}`}>
//       {children}
//     </div>
//   );
// };

// const CardContent = ({ children, className }) => {
//   return <div className={`p-4 ${className}`}>{children}</div>;
// };

// export { Card, CardContent };

// src/components/ui/Card.jsx
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`p-4 bg-[#5E57A6] shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={` ${className}`}>{children}</div>;
};

const CardDescription = ({ children, className }) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
};

const CardHeader = ({ children, className }) => {
  return <div className={` pb-2  ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
};

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
