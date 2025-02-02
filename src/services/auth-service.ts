import { createData } from "../core/http-service";

type LoginProps = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
};

export const loginUsersApi = (data: LoginProps) => {
    return createData<LoginProps, LoginResponse>("/login", data);
};
