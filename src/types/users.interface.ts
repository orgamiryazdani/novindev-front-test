export interface Users {
    data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }[];
    page: number;
    per_page: number;
}

export interface User {
    data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }
}

export type CreateUserData = {
    name: string;
    job: string;
}

export interface CreateUserResponse {
    name: string;
    job: string;
    id: string;
    createdAt: string;
}