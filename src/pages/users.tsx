import { Link } from "react-router-dom";
import { useDeleteUser, useGetUsers } from "../hooks/useUsers";
import { Loading } from "../components/loading";
import { useState } from "react";

const Users: React.FC = () => {
  const { data, isLoading } = useGetUsers({ page: 1 });
  const { mutateAsync, isPending } = useDeleteUser();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  const handleDeleteClick = async (id: number) => {
    setDeletingUserId(id);
    await mutateAsync({ id });
    setDeletingUserId(null);
  };

  if (isLoading)
    return (
      <div className='w-full h-full flex items-center justify-center'>
        <Loading />
      </div>
    );

  return (
    <>
      <h1 className='text-3xl font-black text-center pt-4'>users</h1>
      <div className='flex items-center justify-center xl:justify-start px-2 mt-2 flex-wrap'>
        {data?.data.map(({ id, email, first_name, avatar }) => (
          <div
            key={id}
            className='bg-gray-800 p-2 w-52 h-auto m-5 rounded-lg cursor-pointer flex flex-col items-center justify-between'>
            <Link
              to={`/user/${id}`}
              className='font-bold'>
              {first_name}
            </Link>
            <a
              href={`mailto:${email}`}
              className='border-b'>
              {email}
            </a>
            <Link to={`/user/${id}`}>
              <img
                className='rounded-lg mt-2 object-cover h-48 w-48'
                src={avatar}
                alt={first_name}
              />
            </Link>
            <div className='flex justify-between font-bold h-10 items-end w-full gap-x-3'>
              <button className='w-1/2 bg-sky-700 h-8 rounded-md'>EDIT</button>
              <button
                onClick={() => handleDeleteClick(id)}
                className='w-1/2 bg-rose-700 h-8 rounded-md cursor-pointer'>
                {deletingUserId === id && isPending ? (
                  <Loading
                    width='60'
                    height='30'
                  />
                ) : (
                  "DELETE"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
