import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateUser } from "../hooks/useUsers";
import { Loading } from "../components/loading";

type FormValues = {
  name: string;
  job: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  job: yup.string().required("Job is required"),
});

const CreateUser: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { mutateAsync, isPending } = useCreateUser();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await mutateAsync(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-y-5 items-center justify-center h-full'>
      <h1 className='text-3xl font-black'>create user</h1>
      <Input
        label='name'
        register={register}
        required
        error={errors.name}
        autoFocus={true}
      />
      <Input
        label='job'
        register={register}
        required
        error={errors.job}
      />
      <button
        className='h-12 bg-sky-600 w-60 rounded-xl cursor-pointer font-bold text-xl'
        type='submit'>
        {isPending ? <Loading /> : "create user"}
      </button>
    </form>
  );
};

export default CreateUser;
