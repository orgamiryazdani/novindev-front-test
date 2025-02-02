import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../hooks/useAuth";
import { Loading } from "../components/loading";

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is invalid")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "The password must be at least 4 digits long"),
});

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const naviagate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { mutateAsync, isPending } = useLoginUser();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { token } = await mutateAsync(data);
    if (token) {
      localStorage.setItem("accessToken", token);
      naviagate("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center justify-center w-full h-screen px-5 bg-gray-900 text-white'>
      <div className='md:w-96 w-80 h-96 flex flex-col items-center justify-center gap-y-5 bg-gray-700 rounded-md'>
        <h1 className='font-black text-3xl'>Login</h1>
        <Input
          label='email'
          register={register}
          required
          error={errors.email}
          placeholder='eve.holt@reqres.in'
          autoFocus
        />
        <Input
          label='password'
          register={register}
          required
          error={errors.password}
          placeholder='cityslicka'
        />
        <button
          type='submit'
          className='w-60 bg-sky-700 h-10 rounded-md cursor-pointer'>
          {isPending ? <Loading /> : "login"}
        </button>
      </div>
    </form>
  );
};

export default Login;
