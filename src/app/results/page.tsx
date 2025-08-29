
"use client";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [companies, setCompanies] = useState<any[]>([]);
  useEffect(() => {
    const raw = localStorage.getItem("harbor_companies");
    if (raw) setCompanies(JSON.parse(raw));
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Browse Results</h1>
      {companies.length === 0 ? (
        <p className="text-gray-600">No companies found. Try importing first.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((c, i) => (
            <div key={i} className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{c.name}</h2>
                {c.verified && (
                  <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {c.type || "Contractor"} • {c.city}, {c.state} • {c.years || 0} yrs
              </div>
              <p className="text-gray-700 mt-3 line-clamp-3">{c.about}</p>
              {c.services && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.services.split ? c.services.split(/;|,/).map((s:string)=>(
                    <span key={s} className="px-2 py-1 rounded-full bg-gray-100 text-xs">{s}</span>
                  )) : null}
                </div>
              )}
              {c.brands && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.brands.split ? c.brands.split(/;|,/).map((b:string)=>(
                    <span key={b} className="text-xs text-gray-500">{b}</span>
                  )) : null}
                </div>
              )}
              <div className="mt-4 flex gap-3 text-sm">
                <a href={`/company/${c.id || i}`} className="px-3 py-1.5 rounded-lg border hover:bg-gray-50">
                  View profile
                </a>
                {c.website && (
                  <a href={c.website} target="_blank" className="px-3 py-1.5 rounded-lg border hover:bg-gray-50">
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
