import { useState } from "react";
import { Modal } from "../modal";
import { Input } from "../input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Loading } from "../loading";
import { useUpdateUser } from "../../hooks/useUsers";

type FormValues = {
  name: string;
  job: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  job: yup.string().required("Job is required"),
});

const EditUser: React.FC<{ id: number; first_name: string }> = ({
  id,
  first_name,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { mutateAsync, isPending } = useUpdateUser();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await mutateAsync({ data, id });
    reset();
    onClose();
  };

  const onClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {/* edit modal */}
      <Modal
        title={`EDIT: ${first_name}`}
        onClose={onClose}
        open={openModal}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-y-5 items-center'>
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
            type='submit'
            className='bg-yellow-500 rounded-md h-11 cursor-pointer w-60'>
            {isPending ? <Loading /> : "save changes"}
          </button>
        </form>
      </Modal>
      {/* edit user card btn */}
      <button
        onClick={onClose}
        className='w-1/2 bg-sky-700 h-8 cursor-pointer rounded-md'>
        EDIT
      </button>
    </>
  );
};

export default EditUser;
