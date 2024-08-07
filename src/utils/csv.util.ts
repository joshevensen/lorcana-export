export interface Column {
  key: string;
  heading?: string;
}

export function createCSV(data: any[], columns: Column[]) {
  const refinedData: any[] = [];

  // add headers
  const headers = columns.map((column: Column) => {
    return column.heading ? column.heading : column.key;
  });
  refinedData.push(headers);

  // add rows
  data.forEach((row) => {
    const rowData: string[] = [];

    columns.forEach((column) => {
      rowData.push(row[column.key]);
    });

    refinedData.push(rowData);
  });

  // create csv string
  let csvContent = "";
  refinedData.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  // create blob to download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
  return URL.createObjectURL(blob);
}
