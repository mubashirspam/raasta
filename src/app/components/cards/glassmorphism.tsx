import React from "react";

interface GlassStyle extends React.CSSProperties {
  "--glass-bg": string;
  "--glass-highlight": string;
  "--glass-blur": string;
}

interface GlassContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "rounded" | "large";
  inline?: boolean;
  bgColor?: string;
  highlightColor?: string;
  blurAmount?: number;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = "",
  variant = "default",
  inline = false,
  bgColor = "rgba(255, 255, 255, 0.1)",
  highlightColor = "rgba(255, 255, 255, 0.3)",
  blurAmount = 10,
}) => {
  const baseClasses = "relative isolate";
  const variantClasses = {
    default: "rounded-lg",
    rounded: "rounded-4xl",
    large: "rounded-[2000px]",
  };
  const containerClasses = inline ? "inline-flex" : "block";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${containerClasses} ${className}`}
      style={
        {
          "--glass-bg": bgColor,
          "--glass-highlight": highlightColor,
          "--glass-blur": `${blurAmount}px`,
        } as GlassStyle
      }
    >
      <div
        className="absolute inset-0 z-0 isolate"
        style={{
          backdropFilter: `blur(var(--glass-blur))`,
          WebkitBackdropFilter: `blur(var(--glass-blur))`,
        }}
      />

      <div
        className="absolute inset-0 z-[2] rounded-[inherit] overflow-hidden"
        style={{
          boxShadow: `inset 1px 1px 0 var(--glass-highlight), inset 0 0 5px var(--glass-highlight)`,
        }}
      />

      <div className="relative z-[3]">{children}</div>

      <svg className="hidden">
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurred"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  padding = "md",
}) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <GlassContainer variant="rounded" className={className}>
      <div className={paddingClasses[padding]}>{children}</div>
    </GlassContainer>
  );
};
