'use server'

import { makeApiRequest } from "@/lib/api";
import { LoginProps, RegisterProps } from "./types";
import { cookies } from "next/headers";

export async function loginUser(formData: LoginProps) {
    const response = await makeApiRequest('/auth/login', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    if(data?.accessToken) {
        (await cookies()).set('AUTH_TOKEN', data.accessToken, { httpOnly: true, path: '/' });
    }
    return data;
}

export async function registerUser(formData: RegisterProps) {
    const response = await makeApiRequest('/auth/create-user', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
}