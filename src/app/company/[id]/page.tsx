
"use client";
import { useParams } from "next/navigation";

export default function CompanyPage() {
  const params = useParams<{id:string}>();
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Company Profile</h1>
      <p>Company ID: {params.id}</p>
    </main>
  );
}
