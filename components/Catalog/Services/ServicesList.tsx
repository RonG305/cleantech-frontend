"use client";
import ActionDropdown from "@/components/common/ActionDropdown";
import CustomPagination from "@/components/common/CustomPagination";
import { DataTable } from "@/components/common/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CatalogueServiceResponse } from "@/types/common";
import { ColumnDef } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";


export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Service Title",
    cell: ({ row }) => {
        const service = row.original;
      return (
        <span className="font-semibold">
          {service.name}
        </span>
      );
    },
  },
  {
    accessorKey: "category.name",
    header: "Category",
    cell: ({ row }) => {
      return row.original.category.name;
    },
  },
  {
    accessorKey: "base_price",
    header: "Base Price",
    cell: ({ row }) => {
      return row.original.base_price;
    },
  },

  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => {
      return row.original.duration;
    },
  },

  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => {
      const service = row.original;
      return (
        <Badge
          variant={service.is_active ? "success" : "destructive"}
        >
          {service.is_active ? "Active" : "Inactive"}
        </Badge>
      )
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const bill = row.original;
      return <ActionDropdown>actions</ActionDropdown>;
    },
  },
];

const ServicesList = ({data}: {data: CatalogueServiceResponse}) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const PAGE_SIZE = parseInt(searchParams.get("pageSize") || "10", 10);

  const AddExportOperations = () => {
    return (
      <div className="flex gap-2">
        <Button>Create Service</Button>
        {/* <DataExport data={data?.results || []} name="Services" />  */}
      </div>
    );
  };
  return (
      <DataTable
        data={data?.results || []}
        columns={columns}
        addExportOperationsComponent={<AddExportOperations />}
        searchable
        title="Services List"
        description="List of all services "
        paginationComponent={
            <CustomPagination
            currentPage={currentPage}
            totalItems={data.total}
            pageSize={PAGE_SIZE}
          />
        }
      />
  );
};

export default ServicesList;
