import React from "react";

const TableRow = ({ children }: React.PropsWithChildren) => {
  return <tr className="">{children}</tr>;
};

const TableCell = ({
  isHeader,
  children,
}: { isHeader?: boolean } & React.PropsWithChildren) => {
  const Tag = isHeader ? "th" : "td";

  return <Tag>{children}</Tag>;
};

interface Props {}

export const DataGrid: React.FC<Props> = () => {
  return (
    <table>
      <thead>
        <TableRow>
          <TableCell isHeader>Id</TableCell>
          <TableCell isHeader>First name</TableCell>
          <TableCell isHeader>Last name</TableCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Maasddddddddddddddddddddddddddx</TableCell>
          <TableCell>Stenex</TableCell>
        </TableRow>
      </tbody>
    </table>
  );
};
