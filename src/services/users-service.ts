import { deleteData, readData } from "../core/http-service";
import { User, Users } from "../types/users.interface";

export const getUsersApi = ({ page = 1 }: { page: number }) => {
    return readData<Users>(`/users?page=${page}`);
};

export const getUserApi = ({ id = 1 }: { id: number }) => {
    return readData<User>(`/users/${id}`);
};


export const deleteUserApi = ({ id = 1 }: { id: number }) => {
    return deleteData(`/users/${id}`);
};
