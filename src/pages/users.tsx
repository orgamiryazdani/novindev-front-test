import { useGetUsers } from "../hooks/useGetUsers";

const Users: React.FC = () => {
  const { data, isLoading } = useGetUsers({ page: 1 });

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <h1 className='text-3xl font-black text-center pt-4'>users</h1>
      <div className='flex items-center justify-center xl:justify-start px-2 mt-2 flex-wrap'>
        {data?.data.map(({ id, email, first_name, last_name, avatar }) => (
          <div
            key={id}
            className='bg-gray-800 p-2 w-52 h-auto m-5 rounded-lg cursor-pointer flex flex-col items-center justify-between'>
            <p className='font-bold'>
              {first_name} {last_name}
            </p>
            <a
              href={`mailto:${email}`}
              className='border-b'>
              {email}
            </a>
            <img
              className='rounded-lg mt-2 object-cover h-48 w-48'
              src={avatar}
              alt={first_name}
            />
            <div className='flex justify-between font-bold h-10 items-end w-full gap-x-3'>
              <button className='w-1/2 bg-sky-700 h-8 rounded-md'>EDIT</button>
              <button className='w-1/2 bg-rose-700 h-8 rounded-md'>
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
