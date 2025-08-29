
"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type Company = {
  id?: string;
  name?: string;
  type?: string;
  city?: string;
  state?: string;
  services?: string | string[];
  brands?: string | string[];
  verticals?: string | string[];
  verified?: boolean | string;
  years?: number | string;
  website?: string;
  about?: string;
};

const toList = (v: any): string[] =>
  Array.isArray(v) ? v : typeof v === "string" ? v.split(/;|,\s*/).map((s: string) => s.trim()).filter(Boolean) : [];

export default function CompanyPage() {
  const params = useParams<{ id: string }>();
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("harbor_companies");
    if (raw) setCompanies(JSON.parse(raw));
  }, []);

  const company = useMemo(
    () => companies.find((c) => String(c.id ?? "") === params.id) ?? companies[0],
    [companies, params.id]
  );

  if (!company) return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <a href="/results" className="text-sm text-gray-600 hover:text-gray-900">← Back to results</a>
      <div className="mt-6">No company found.</div>
    </main>
  );

  const services = toList(company.services);
  const brands = toList(company.brands);
  const verticals = toList(company.verticals);
  const verified = String(company.verified).toLowerCase() === "true";

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <a href="/results" className="text-sm text-gray-600 hover:text-gray-900">← Back to results</a>
      <div className="rounded-2xl border p-6 mt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-2xl font-semibold flex items-center gap-2">
              {company.name}
              {verified && <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full">Verified</span>}
            </div>
            <div className="text-sm text-gray-600 capitalize">
              {company.type || "contractor"} • {company.city}, {company.state} • {company.years || 0} yrs
            </div>
          </div>
          {company.website && <a href={String(company.website)} className="px-4 py-2 rounded-xl bg-gray-900 text-white">Visit website</a>}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <h3 className="font-medium">About</h3>
            <p className="text-gray-700 mt-2">{company.about}</p>

            <h3 className="font-medium mt-6">Services</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {services.map((s) => <span key={s} className="px-2 py-1 rounded-full bg-gray-100 text-xs">{s}</span>)}
            </div>

            <h3 className="font-medium mt-6">Brands</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {brands.map((b) => <span key={b} className="px-2 py-1 rounded-full bg-gray-100 text-xs">{b}</span>)}
            </div>

            <h3 className="font-medium mt-6">Vertical experience</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {verticals.map((v) => <span key={v} className="px-2 py-1 rounded-full bg-gray-100 text-xs">{v}</span>)}
            </div>
          </div>

          <div>
            <div className="rounded-2xl border p-4">
              <h4 className="font-medium">Contact</h4>
              <div className="text-sm text-gray-700 mt-2">General: info@example.com</div>
              <div className="text-sm text-gray-700">Sales: sales@example.com</div>
              <div className="text-sm text-gray-700">Phone: (555) 123‑4567</div>
              <button className="mt-4 px-4 py-2 rounded-xl border w-full">Request contact</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
