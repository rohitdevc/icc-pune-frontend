"use server";

import { apiGETFetch } from "./api";
import {
    Development
} from "@/types/api";

export const getDevelopment = async (page_slug_one: string, page_slug_two: string) => apiGETFetch<Development>(`developments/${page_slug_one}/${page_slug_two}`);