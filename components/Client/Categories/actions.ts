'use server'

import { makeApiRequest } from "@/lib/api"

export const getServiceCategories = async () => {
    const response = await makeApiRequest(`/categories`, {
        method: 'GET',
        withToken: false,
        tag: 'ServiceCategories'
    })

    if (!response.ok) {
        throw new Error('Failed to fetch service categories')
    }

    const data = await response.json()
    return data
}