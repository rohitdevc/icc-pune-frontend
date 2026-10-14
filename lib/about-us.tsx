"use server";

import { apiGETFetch } from "./api";
import {
    AboutManagementIntroduction,
    AboutManagement,
    AboutLandmarkIntroduction,
    AboutLandmark,
    AboutOccupantIntroduction,
    AboutDevelopment
} from "@/types/api";

export const getAboutManagementIntroduction = async () => apiGETFetch<AboutManagementIntroduction>(`about/management-introduction`);

export const getAboutManagement = async () => apiGETFetch<AboutManagement[]>(`about/management`);

export const getAboutLandmarkIntroduction = async () => apiGETFetch<AboutLandmarkIntroduction>(`about/landmark-introduction`);

export const getAboutLandmarks = async () => apiGETFetch<AboutLandmark[]>(`about/landmarks`);

export const getAboutOccupantIntroduction = async () => apiGETFetch<AboutOccupantIntroduction>(`about/occupant-introduction`);

export const getAboutDevelopments = async () => apiGETFetch<AboutDevelopment[]>(`about/developments`);