export interface ServiceCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface CatalogueService {
    id: string;
    category_id: string;
    provider_id: string | null;
    name: string;
    description: string;
    base_price: number;
    duration: number; 
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
    category: ServiceCategory;
}
