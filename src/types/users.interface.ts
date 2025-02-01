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