import { useGetUsers } from "../hooks/useUsers";
import { Loading } from "../components/loading";
import UserCard from "../components/user/user-card";
import { Pagination } from "../components/pagination";
import { useSearchParams } from "react-router-dom";

const Users: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get("page"));
  const { data, isLoading } = useGetUsers({ page: pageNumber || 1 });

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
        {data?.data !== undefined && data?.data.length > 0 ? (
          data?.data.map(({ id, email, first_name, avatar }) => (
            <UserCard
              key={id}
              id={id}
              email={email}
              first_name={first_name}
              avatar={avatar}
            />
          ))
        ) : (
          <div className='w-full h-56 text-3xl font-bold flex items-center justify-center'>
            No user found
          </div>
        )}
        {data?.data !== undefined &&
          data?.data.length > 0 &&
          data?.total_pages !== 1 && (
            <Pagination
              page={data?.page || 1}
              total_pages={data?.total_pages || 1}
            />
          )}
      </div>
    </>
  );
};

export default Users;
