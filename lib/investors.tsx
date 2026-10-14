"use server";

import { apiGETFetch } from "./api";
import {
    Investor
} from "@/types/api";

export const getInvestors = async () => apiGETFetch<Investor[]>(`investors`);