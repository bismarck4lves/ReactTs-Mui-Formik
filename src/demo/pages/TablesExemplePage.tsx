import { DeleteButton } from "components/Button";
import { DataGrid } from "components/DataGrid";
import stocks from "../mocks/stocks";

function TablesExemplePage() {
  const columns = [
    {
      field: "id",
      headerName: "id",
      renderCell: () => Math.random(),
    },
    {
      field: "abbr",
      headerName: "Abbr",
      renderCell: (foo) => foo.row.abbr,
      width: 200
    },
    {
      field: "ADANIPORTS",
      headerName: "ADANIPORTS",
      renderCell: (foo) => foo.row.name,
      width: 200

    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: () => (
        <>
          <DeleteButton />
        </>
      ),
    },
  ];

  return <DataGrid columns={columns} rows={stocks} height="50vh"
  getRowId={() => Math.random()}
  />;
}

export default TablesExemplePage;
