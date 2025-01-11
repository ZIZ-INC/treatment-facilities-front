import React, {InputHTMLAttributes} from "react";
import {cn} from "@/core/utils/cn";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: React.ReactNode; // Custom JSX element to render after the input
    className?: string; // Styles for the input
    labelClassName?: string; // Styles for the label
    wrapperClassName?: string; // Styles for the wrapper
    postfix?: React.ReactNode; // Custom JSX element to render after the input
}

export const Input: React.FC<InputFieldProps> = ({
    label,
    hint,
    className,
    labelClassName,
    wrapperClassName,
    postfix,
    ...props
}) => (
    <div
        className={cn(
            "flex flex-col h-auto w-full", // Base styles for wrapper
            wrapperClassName // Custom styles for wrapper
        )}
    >
        <label
            htmlFor={props.id}
            className={cn(
                "font-medium w-full text-[16px]",
                labelClassName,
                !props.disabled ? "text-primaryColor" : "text-secondaryColor"
            )}
        >
            {label}
        </label>
        <div className="flex items-center w-full gap-2">
            <input
                className={cn(
                    "border border-gray-300 rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-blue-500",
                    className,
                    !props.disabled ? "text-primaryColor" : "text-secondaryColor"
                )}
                {...props}
            />
            {postfix}
        </div>
        <div className={
            !props.disabled ? "text-primaryColor" : "text-secondaryColor"
        }>
            {hint}
        </div>
    </div>
);
