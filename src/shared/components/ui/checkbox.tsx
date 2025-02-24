"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/shared/lib/utils";

/**
 * A Radix checkbox that:
 * - Outer shape (Root) is a black squircle "frame"
 * - Inner shape is white by default
 * - When checked, inner shape = `bg-secondary`
 * - No icon
 */
const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        // Use `group` so the child can read `[data-state=checked]` via `group-data-[state=checked]`
        className={cn(
            "group relative inline-flex h-8 w-8 items-center justify-center p-[6px]",
            // Outer squircle frame
            "rounded-[30%] bg-muted border border-black",
            // Focus ring, etc.
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
            // Disabled
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    >
        {/* Inner shape: white by default, becomes secondary on checked */}
        <div
            className={cn(
                "h-full w-full rounded-[30%] bg-muted",
                // Use `group-data-[state=checked]` to swap color in a child
                "group-data-[state=checked]:bg-secondary"
            )}
        />
    </CheckboxPrimitive.Root>
));

Checkbox.displayName = "SquircleFramedCheckbox";
export { Checkbox };
