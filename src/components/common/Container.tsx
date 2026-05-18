import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
