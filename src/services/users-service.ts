import { createData, deleteData, readData } from "../core/http-service";
import { CreateUserData, CreateUserResponse, User, Users } from "../types/users.interface";

export const getUsersApi = ({ page = 1 }: { page: number }) => {
    return readData<Users>(`/users?page=${page}`);
};

export const getUserApi = ({ id = 1 }: { id: number }) => {
    return readData<User>(`/users/${id}`);
};


export const deleteUserApi = ({ id = 1 }: { id: number }) => {
    return deleteData(`/users/${id}`);
};

export const createUserApi = (data: CreateUserData): Promise<CreateUserResponse> => {
    return createData<CreateUserData, CreateUserResponse>('/users', data);
};
