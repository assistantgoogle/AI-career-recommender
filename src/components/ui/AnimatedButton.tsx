import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({ children, className, ...props }: AnimatedButtonProps) => {
  return (
    <Button
      className={cn(
        "animated-button",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </Button>
  );
};

export default AnimatedButton;