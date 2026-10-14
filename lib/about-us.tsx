"use server";

import { apiGETFetch } from "./api";
import {
    AboutManagementIntroduction,
    AboutManagement
} from "@/types/api";

export const getAboutManagementIntroduction = async () => apiGETFetch<AboutManagementIntroduction>(`about/management-introduction`);

export const getAboutManagement = async () => apiGETFetch<AboutManagement[]>(`about/management`);

export const getAboutManagement = async () => apiGETFetch<AboutManagement[]>(`about/management`);