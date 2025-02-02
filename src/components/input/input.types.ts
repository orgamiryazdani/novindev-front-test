import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export type InputProps<T extends FieldValues> = {
    label: keyof T;
    register: UseFormRegister<T>;
    error?: FieldError;
    required?: boolean;
    placeholder?: string;
    autoFocus?: boolean
};