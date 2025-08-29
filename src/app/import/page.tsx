
"use client";
import Papa from "papaparse";
import { useState } from "react";

export default function ImportPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [status, setStatus] = useState("");

  const handleFile = (file: File) => {
    setStatus("Parsing CSV...");
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: any) => {
        setRows(results.data);
        localStorage.setItem("harbor_companies", JSON.stringify(results.data));
        setStatus(`Imported ${results.data.length} rows.`);
      },
      error: (err: any) => setStatus(`Error: ${err.message}`)
    });
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Import companies from CSV</h1>
      <input type="file" accept=".csv" onChange={e => e.target.files && handleFile(e.target.files[0])} />
      <div>{status}</div>
      <pre>{JSON.stringify(rows.slice(0, 5), null, 2)}</pre>
    </main>
  );
}
