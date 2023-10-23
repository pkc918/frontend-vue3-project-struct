import { serviceAxios } from "./index.ts";

export const getUserInfo = (params: number) => {
    return serviceAxios({
        url: `/api/user/${params}`,
        method: "get"
    });
};
