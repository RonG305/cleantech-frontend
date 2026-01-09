export interface LoginProps {
    email: string;
    password: string;
}


export interface RegisterProps {
    email: string;
    password: string;
    roles: string[];
    account_type: 'INDIVIDUAL' | 'COMPANY';
    company_name?: string;
    company_website?: string;
    company_registration_number?: string;
}

export interface AuthResponse {
    message?: string;
    error?: string;
}