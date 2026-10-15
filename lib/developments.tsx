"use server";

import { apiGETFetch } from "./api";
import {
    Development,
    Developments
} from "@/types/api";

export const getDevelopments = async () => apiGETFetch<Development[]>(`developments`);

export const getDevelopment = async (page_slug_one: string, page_slug_two: string) => apiGETFetch<Developments>(`developments/${page_slug_one}/${page_slug_two}`);