import { useGetUsers } from "../hooks/useUsers";
import { Loading } from "../components/loading";
import UserCard from "../components/user/user-card";

const Users: React.FC = () => {
  const { data, isLoading } = useGetUsers({ page: 1 });

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
          <UserCard
            key={id}
            id={id}
            email={email}
            first_name={first_name}
            avatar={avatar}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
