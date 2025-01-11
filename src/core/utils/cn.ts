import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

/**
 * A utility function to merge Tailwind CSS classes and handle conditional logic.
 * @param inputs - A list of class values (strings, objects, arrays).
 * @returns A single merged class string.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}
