import React, {InputHTMLAttributes} from "react";
import {cn} from "@/core/utils/cn";

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    className?: string; // Styles for the checkbox input
    labelClassName?: string; // Styles for the wrapper
    wrapperClassName?: string; // Styles for the wrapper
}

export const Checkbox: React.FC<CheckboxFieldProps> = ({
    name,
    label,
    className,
    labelClassName,
    wrapperClassName,
    ...props
}) => (
    <div
        className={cn(
            "flex items-center gap-2", // Base styles for wrapper
            wrapperClassName // Custom styles for wrapper
        )}
    >
        <input
            type="checkbox"
            id={name}
            name={name}
            className={cn(
                "h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500",
                className // Custom styles for checkbox
            )}
            {...props}
        />
        <label
            htmlFor={name}
            className={cn(
                "text-primaryColor font-medium",
                labelClassName
            )}
        >
            {label}
        </label>
    </div>
);
