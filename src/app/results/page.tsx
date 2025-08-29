
"use client";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [companies, setCompanies] = useState<any[]>([]);
  useEffect(() => {
    const raw = localStorage.getItem("harbor_companies");
    if (raw) setCompanies(JSON.parse(raw));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Browse Results</h1>
      {companies.length === 0 ? <p>No companies found. Try importing first.</p> :
        <ul>{companies.map((c, i) => <li key={i}>{c.name} - {c.city}</li>)}</ul>
      }
    </main>
  );
}
