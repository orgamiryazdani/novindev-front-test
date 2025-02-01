import { UseFormRegister, FieldValues, FieldError } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: keyof T;
  register: UseFormRegister<T>;
  error?: FieldError;
  required?: boolean;
  placeholder?: string;
};

export const Input = <T extends FieldValues>({
  label,
  register,
  error,
  required,
  placeholder,
}: InputProps<T>) => (
  <div className='flex flex-col w-60'>
    <label>{label as string}</label>
    <input
      {...register(label as any, { required })}
      className='border p-2'
      placeholder={placeholder}
    />
    {error && <p className='text-red-500 text-sm'>{error.message}</p>}
  </div>
);
