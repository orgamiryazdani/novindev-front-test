import { FieldValues } from "react-hook-form";
import { InputProps } from "./input.types";

export const Input = <T extends FieldValues>({
  label,
  register,
  error,
  required,
  placeholder,
  autoFocus,
}: InputProps<T>) => (
  <div className='flex flex-col w-60'>
    <label>{label as string}</label>
    <input
      autoFocus={autoFocus}
      {...register(label as any, { required })}
      className='border p-2'
      placeholder={placeholder}
    />
    {error && <p className='text-red-500 text-sm'>{error.message}</p>}
  </div>
);
