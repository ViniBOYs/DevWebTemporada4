import { PartsResponse } from "@/models/parts";
import { getAxios } from "./soucers.config";

export const getParts = (): Promise<PartsResponse> => {
    return getAxios().get("/parts");
}