import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl pl-2.5 md:pl-18",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
