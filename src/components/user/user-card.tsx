import { Link } from "react-router-dom";
import DeleteUser from "./delete-user";
import EditUser from "./edit-user";
import { UserCardProps } from "./user-card.types";

const UserCard: React.FC<UserCardProps> = ({
  id,
  first_name,
  email,
  avatar,
}) => {
  return (
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
        <EditUser first_name={first_name} />
        <DeleteUser id={id} />
      </div>
    </div>
  );
};

export default UserCard;
