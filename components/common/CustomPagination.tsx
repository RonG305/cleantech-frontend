"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize?: number;
}

const CustomPagination = ({
  currentPage,
  totalItems,
  pageSize = 10,
}: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalItems / pageSize);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const buildHref = (page: number | null) => {
    if (!page) return "#";

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));

    return `${pathname}?${params.toString()}`;
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 4) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <Link href={buildHref(prevPage)}>
        <Button variant="outline" size="sm">
          <Icon icon="solar:arrow-left-linear" /> Previous
        </Button>
      </Link>

      <div className=" flex items-center gap-4">
        {generatePageNumbers().map((page, index) =>
          typeof page === "string" ? (
            <span key={index} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <Link href={buildHref(page)}>
              <Button
                key={index}
                variant={page === currentPage ? "default" : "outline"}
              >
                {page}
              </Button>
            </Link>
          ),
        )}
      </div>

      <Link href={buildHref(nextPage)}>
        <Button variant="outline" size="sm">
          Next <Icon icon="solar:arrow-right-linear" />
        </Button>
      </Link>
    </div>
  );
};

export default CustomPagination;
