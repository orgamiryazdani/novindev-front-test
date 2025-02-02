import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { createUserApi, deleteUserApi, getUserApi, getUsersApi, updateUserApi } from "../services/users-service";
import { User, Users } from "../types/users.interface";
import toast from "react-hot-toast";

export const useGetUsers = ({ page }: { page: number }) => {
    const queryResult: UseQueryResult<Users> = useQuery({
        queryKey: ['users', page],
        queryFn: () => getUsersApi({ page }),
    });

    const { data, isLoading } = queryResult;

    return { data, isLoading };
};

export const useGetUser = ({ id }: { id: number }) => {
    const queryResult: UseQueryResult<User> = useQuery({
        queryKey: ['user', id],
        queryFn: () => getUserApi({ id }),
    });

    const { data, isLoading } = queryResult;

    return { data, isLoading };
};

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: deleteUserApi,
        onSuccess: () => {
            toast.success('User deleted successfully')
        },
    });
};

export const useCreateUser = () => {
    return useMutation({
        mutationFn: createUserApi,
        onSuccess: () => {
            toast.success('Create user successfully')
        },
    });
};

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            toast.success('update user successfully')
        },
    });
};
