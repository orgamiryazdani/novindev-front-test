import { useParams } from "react-router-dom";
import { useGetUser } from "../hooks/useUsers";
import { Loading } from "../components/loading";

const User: React.FC = () => {
  const { id } = useParams() || 1;
  const { data, isLoading } = useGetUser({ id: Number(id) });

  if (isLoading)
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <Loading />
      </div>
    );

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='bg-gray-500 md:w-96 h-96 w-72 rounded-md flex flex-col items-center justify-between p-3'>
        <div className='text-xl font-bold'>کاربر شماره : {data?.data.id}</div>
        <img
          className='w-32 h-32 rounded-full'
          src={data?.data.avatar}
          alt={data?.data.first_name}
        />
        <div className='w-full h-11 rounded-md bg-gray-800 flex items-center justify-center'>
          {data?.data.email}
        </div>
        <div className='w-full h-11 rounded-md bg-gray-800 flex items-center justify-center'>
          {data?.data.first_name}
        </div>
        <div className='w-full h-11 rounded-md bg-gray-800 flex items-center justify-center'>
          {data?.data.last_name}
        </div>
      </div>
    </div>
  );
};

export default User;
