"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ProcessOption {
  id: number;
  name: string;
}

const orderProcess: ProcessOption[] = [
  { id: 1, name: "Shopping Cart" },
  { id: 2, name: "Checkout Details" },
  { id: 3, name: "Order Complete" },
];

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeProcess, setActiveProcess] = useState<ProcessOption | null>(
    orderProcess[0] // Initially setting the active process to the first item in the array
  );

  const handleProcessClick = (process: ProcessOption) => {
    setActiveProcess(process);
  };

  return (
    <section className="h-screen">
      <MaxWidthWrapper className="py-16 px-20">
        <div className="text-center space-y-10">
          <h2 className="text-5xl">Cart</h2>
          <div className="flex flex-row justify-center items-center gap-x-20">
            {orderProcess.map((process) => (
              <div
                key={process.id}
                className={cn(
                  "flex flex-col gap-y-4",
                  activeProcess === process ? "text-black" : "text-[#B1B5C3]"
                )}
                onClick={() => handleProcessClick(process)}
              >
                <div className="flex flex-row items-center gap-x-4 ">
                  <span
                    className={cn(
                      "w-8 h-8 text-white pt-1 rounded-[50%]",
                      activeProcess === process ? "bg-black" : "bg-[#B1B5C3]"
                    )}
                  >
                    {process.id}
                  </span>
                  <p>{process.name}</p>
                </div>
                {activeProcess === process && (
                  <Separator className="bg-black h-1" />
                )}
              </div>
            ))}
          </div>
          <div>{children}</div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
