import { getAllCatalogueServices } from "@/lib/data/services/services";
import { SearchParams } from "@/types/search-params";
import ServicesList from "./ServicesList";

const ServicesTable = async({searchParams}: {searchParams: Promise<SearchParams>}) => {
  const params = await searchParams;
  const query = params.search || "";
  const page = parseInt(params.page as string, 10) || 1;
  const pageSize = parseInt(params.pageSize as string, 10) || 10;

  const response = await getAllCatalogueServices({
    page: page,
    page_size: pageSize,
    search: query,
  })

  const services_list = {
    total: response.count,
    results: response.results,
  }


  return <ServicesList data={services_list} />

};

export default ServicesTable;
