"use client";
import React, { ComponentProps } from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode
  className?: string
} & ComponentProps<"button">

export default function FormSubmitButton({ children, className, ...props }: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className={`btn btn-primary ${className}`} type="submit" {...props}>
      {pending && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
}
