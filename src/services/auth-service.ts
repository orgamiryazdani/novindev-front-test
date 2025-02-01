import { createData } from "../core/http-service";

type LoginProps = {
    email: string;
    password: string;
};

type LoginResponse = {
    token: string;
};

export const loginUsersApi = (data: LoginProps): Promise<LoginResponse> => {
    return createData<LoginProps, LoginResponse>("/login", data);
};
