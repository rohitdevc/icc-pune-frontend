export interface MetaData {
    meta_title: string;
    meta_description: string;
    canonical_url: string;
}

export interface Banner {
    banner_image_url: string;
    banner_video_url?: string;
    banner_image_caption?: string;
    banner_image_description?: string;
}

export interface TokenResponse {
    access_token: string;
}

export interface AboutManagementIntroduction {
    introduction_caption: string;
    introduction_description: string;
}

export interface AboutManagement {
    management_name: string;
    management_designation: string;
}

export interface AboutLandmarkIntroduction {
    introduction_caption: string;
    introduction_description: string;
}

export interface AboutLandmark {
    landmark_name: string;
    landmark_distance: string;
}

export interface AboutOccupantIntroduction {
    introduction_caption: string;
    introduction_description: string;
}

export interface AboutDevelopment {
    development_name: string;
    occupants_data: string[]
}

export interface ProjectDeveloperIntroduction {
    introduction_description: string;
}

export interface ProjectDeveloperProject {
    project_name: string;
    project_logo_url: string;
    banner_image_url: string;
}

export interface InvestorReport {
    report_name: string;
    report_pdf_url: string;
}

export interface Investor {
    category_name: string;
    reports_data: InvestorReport[]
}

export interface Amenity {
    amenity_name: string;
    amenity_description: string;
}

export interface Specification {
    specification_name: string;
    specification_description: string;
}

export interface FloorPlan {
    floor_plan_name: string;
    floor_plan_image_url: string;
}

export interface Gallery {
    gallery_name: string;
    gallery_image_url: string;
}

export interface Development {
    project_name: string;
    introduction_caption: string;
    introduction_description: string;
    amenity_caption: string;
    amenity_description: string;
    amenities_data: Amenity[];
    specifications_data: Specification[];
    floor_plans_data: FloorPlan[];
    galleries_data: Gallery[];
    meta_title: string;
    meta_description: string;
    banner_image_url: string;
    canonical_url: string;
}