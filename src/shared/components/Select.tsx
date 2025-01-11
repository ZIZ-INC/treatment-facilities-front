import React, {SelectHTMLAttributes} from "react";
import {cn} from "@/core/utils/cn";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: {
        label: string;
        value: string;
    }[];
    className?: string; // Styles for the select element
    labelClassName?: string; // Styles for the wrapper
    wrapperClassName?: string; // Styles for the wrapper
    error?: string; // Optional error message
}

export const Select: React.FC<SelectFieldProps> = ({
    name,
    label,
    options,
    className,
    labelClassName,
    wrapperClassName,
    error,
    ...props
}) => (
    <div
        className={cn(
            "flex flex-col gap-2 p-4", // Base styles for wrapper
            wrapperClassName // Custom styles for wrapper
        )}
    >
        <label
            htmlFor={name}
            className={cn(
                "text-primaryColor font-medium",
                labelClassName
            )}>
            {label}
        </label>
        <select
            id={name}
            name={name}
            className={cn(
                "border text-gray-700 rounded-md px-3 py-2 w-full shadow-sm",
                error
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100",
                "hover:border-gray-400 active:border-blue-600 transition-colors duration-150 ease-in-out",
                className // Custom styles for select
            )}
            {...props}
        >
            <option value="" disabled>
                {label}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);
