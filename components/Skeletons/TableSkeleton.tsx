import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableRow, TableCell } from "../ui/table";

export function TableSkeleton() {
  return (
    <Table className="w-full ">
      <TableBody className="border rounded-lg">
        {Array.from({ length: 8 }).map((_, index) => (  
        <TableRow key={index} className="border-b hover:bg-muted/50">
          <TableCell>
            <div className="flex items-center space-x-4 w-full">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
