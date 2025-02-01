import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUsersApi } from "../services/users-service";
import { Users } from "../types/users.interface";

export const useGetUsers = ({ page }: { page: number }) => {
    const queryResult: UseQueryResult<Users> = useQuery({
        queryKey: ['users', page],
        queryFn: () => getUsersApi({ page }),
    });

    const { data, isLoading } = queryResult;

    return { data, isLoading };
};
