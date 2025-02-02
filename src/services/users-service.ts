import { createData, deleteData, readData, updateData } from "../core/http-service";
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

export const createUserApi = (data: CreateUserData) => {
    return createData<CreateUserData, CreateUserResponse>('/users', data);
};

export const updateUserApi = ({ id, data }: { id: number; data: CreateUserData }) => {
    return updateData<CreateUserData, Omit<CreateUserResponse, "id">>(`/users/${id}`, data);
};

