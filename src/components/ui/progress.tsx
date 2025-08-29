"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-32 w-32 rounded-full flex items-center justify-center",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="absolute rounded-full flex-1 inset-0 transition-all"
        style={{
          background: `conic-gradient(#3b82f6 ${value}%, #e5e7eb ${value}%) `,
        }}
      />
      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-gray-800">{value}%</span>
      </div>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
