import { readData } from "../core/http-service";
import { Users } from "../types/users.interface";

export const getUsersApi = ({ page = 1 }: { page: number }) => {
    return readData<Users>(`/users?page=${page}`);
};

