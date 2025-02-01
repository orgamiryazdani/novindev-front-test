import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { deleteUserApi, getUserApi, getUsersApi } from "../services/users-service";
import { User, Users } from "../types/users.interface";
import { queryClient } from "../lib/react-query";
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
        onError: (error) => {
            toast.error(error.message)
        },
    });
};
