interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "mono";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantClass = variant === "mono" ? "badge-mono" : "";
  
  return (
    <span className={`badge ${variantClass} ${className}`}>
      {children}
    </span>
  );
}

