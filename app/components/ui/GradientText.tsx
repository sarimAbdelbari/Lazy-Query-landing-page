interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "purple" | "cyan";
}

export default function GradientText({
  children,
  className = "",
  variant = "purple",
}: GradientTextProps) {
  const gradientClass = variant === "purple" ? "gradient-text" : "gradient-text-cyan";
  
  return <span className={`${gradientClass} ${className}`}>{children}</span>;
}

