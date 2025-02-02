import { useMutation } from "@tanstack/react-query";
import { loginUsersApi } from "../services/auth-service";
import toast from "react-hot-toast";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: loginUsersApi,
        onSuccess: () => {
            toast.success('welcome')
        },
    });
};