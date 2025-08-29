
import "./globals.css";
import TopNav from "@/components/TopNav";

export const metadata = {
  title: "Harbor Directory",
  description: "Find proven pros & products for low-voltage projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <TopNav />
        {children}
        <footer className="py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-2xl bg-gray-900 text-white grid place-items-center font-bold">H</div>
              <span className="font-semibold">Harbor</span>
            </div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Harbor Directory.</div>
            <div className="text-sm text-gray-600 flex gap-4">
              <a href="/pricing" className="hover:text-gray-800">Pricing</a>
              <a href="/import" className="hover:text-gray-800">Import</a>
              <a href="mailto:info@example.com" className="hover:text-gray-800">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
