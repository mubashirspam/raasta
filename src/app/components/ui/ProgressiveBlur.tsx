import React from "react";

function ProgressiveBlur() {
  return (
    <div
      className="fixed z-50 bottom-0 w-full transition-all duration-300 pointer-events-none"
      style={
        {
          "--blur": "20px",
          "--ratio": "1.4",
          transform: "scaleY(-1)",
          height: "100px",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 1,
          backdropFilter: "blur(var(--blur))",
          WebkitBackdropFilter: "blur(var(--blur))",
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 30%)",
          WebkitMask:
            "linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 30%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 2,
          backdropFilter: "blur(calc(var(--blur) / var(--ratio)))",
          WebkitBackdropFilter: "blur(calc(var(--blur) / var(--ratio)))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 40%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 40%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 3,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 4,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 30%, rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 5,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 70%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 40%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 70%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 6,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 80%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 80%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 7,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 90%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 60%, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 90%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 8,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 70%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 9,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 60%, rgb(0, 0, 0) 80%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 10,
          backdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          WebkitBackdropFilter:
            "blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))))",
          mask: "linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
          WebkitMask:
            "linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </div>
  );
}

export default ProgressiveBlur;