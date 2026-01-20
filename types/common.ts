import { CatalogueService } from "./catalogue";

export interface CatalogueServiceResponse {
    total: number;
    results: CatalogueService[];
}