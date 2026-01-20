import { BASE_URLS } from "@/api/base";
import { makeApiRequest } from "@/api/main";

export async function getAllCatalogueServices({page, page_size, search}: {page?: number, page_size?: number, search?: string}) {
    const  response = await makeApiRequest(BASE_URLS.CATALOGUE_API_URL,`/services/?page=${page}&limit=${page_size}&search=${search}`, {
        method: 'GET',
        withToken: true,
        tag: 'services-list',
    });
    if (!response?.ok) {
        throw new Error( 'Failed to fetch services');
    }
    const data = await response.json();
    return {
        count: data.total,
        results: data.results,
    };
}
