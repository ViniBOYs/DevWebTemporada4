import axios, { type AxiosResponse } from "axios";

export const getAxios = () => {
    const createdAxios = axios.create({
        baseURL: "https://mamge-make-bot.azurewebsite.net/api",
        timeout: 40000, // 40 segundos
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: "Bearer mue token..."
        }
    });
    // ? createdAxios.interceptors.request ---> Executa ANTES de chamar o Backend
    // ? createdAxios.interceptors.response --> Executa DEPOIS de chamar o Backend

    createdAxios.interceptors.response.use(getAxiosResponse);
    return getAxiosResponse;
}

const getAxiosResponse = (response: AxiosResponse) => {
    return response.data;
}