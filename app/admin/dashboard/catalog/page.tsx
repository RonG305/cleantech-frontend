import ServicesTable from "@/components/Catalog/Services/ServicesTable";
import { TableSkeleton } from "@/components/Skeletons/TableSkeleton";
import { SearchParams } from "@/types/search-params";
import { Suspense } from "react";

const page = async ({searchParams}: {searchParams: Promise<SearchParams>}) => {
  return (
    <Suspense fallback={<TableSkeleton />}>
     <ServicesTable searchParams={searchParams} />
    </Suspense>
  );
};

export default page;
