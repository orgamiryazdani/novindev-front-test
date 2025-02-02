import { useState } from "react";
import { useDeleteUser } from "../../hooks/useUsers";
import { Loading } from "../loading";

const DeleteUser: React.FC<{ id: number }> = ({ id }) => {
  const { mutateAsync, isPending } = useDeleteUser();
  const [deletingUserId, setDeletingUserId] = useState<number | null>(null);

  const handleDeleteClick = async (id: number) => {
    setDeletingUserId(id);
    await mutateAsync({ id });
    setDeletingUserId(null);
  };

  return (
    <button
      onClick={() => handleDeleteClick(+id)}
      className='w-1/2 bg-rose-700 h-8 rounded-md cursor-pointer'>
      {deletingUserId === +id && isPending ? (
        <Loading
          width='60'
          height='30'
        />
      ) : (
        "DELETE"
      )}
    </button>
  );
};

export default DeleteUser;
