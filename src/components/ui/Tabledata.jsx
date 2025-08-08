import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export function Tabledata({ data }) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
      <Table className="text-center min-w-[900px]">
        <TableCaption className="text-sm text-green-600 font-bold">
          Live data from database.
        </TableCaption>

        {/* Table Header */}
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Zip</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {data.map((db, index) => (
            <TableRow
              key={db._id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <TableCell className="font-mono text-xs">
                {db._id.slice(0, 6)}...
              </TableCell>
              <TableCell className="font-medium">{db.name}</TableCell>
              <TableCell className="truncate max-w-[150px]">{db.email}</TableCell>
              <TableCell>{db.phone_number}</TableCell>
              <TableCell className="whitespace-pre-wrap max-w-[200px]">
                {db.address}
              </TableCell>
              <TableCell>{db.city}</TableCell>
              <TableCell>
                <Badge variant="secondary">{db.state}</Badge>
              </TableCell>
              <TableCell>{db.zip_code}</TableCell>
              <TableCell>
                <Badge>{db.country}</Badge>
              </TableCell>
              <TableCell>
                {format(new Date(db.created_at), "MMM d, yyyy h:mm a")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
