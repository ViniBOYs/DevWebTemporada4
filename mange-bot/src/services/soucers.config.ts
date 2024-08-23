import axios, { type AxiosResponse } from "axios";
export const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const getAxios = () => {
    const createdAxios = axios.create({
        baseURL: "/proxy-api/api",
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
    return createdAxios;
}

const getAxiosResponse = (response: AxiosResponse) => {
    return response.data;
}