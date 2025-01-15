import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-lg p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;