"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-[#F2F2F2] w-fit inline-flex h-9 sm:h-10 items-center justify-center rounded-[20px] sm:rounded-[30px] ",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "text-[#828282] font-outfit inline-flex h-[calc(100%-4px)] flex-1 items-center justify-center gap-1 sm:gap-1.5 rounded-[20px] sm:rounded-[30px] border border-transparent px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
        "data-[state=active]:bg-[#013941] data-[state=active]:text-white data-[state=active]:rounded-[20px] sm:data-[state=active]:rounded-[30px]",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };