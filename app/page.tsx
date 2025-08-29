
export default function HomePage() {
  const logos = ["Pelco","Legrand Ortronics","Superior Essex","WilsonPro","Zinwave","Wtec Smartengine"];
  return (
    <main>
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Find proven pros & products for any low‑voltage project.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Search by brand, service, or city. Verified listings. No cold‑calling roulette.
            </p>
          </div>

          <div className="mt-8">
            <div className="w-full md:w-3/4 lg:w-2/3 rounded-2xl border shadow-sm p-2 flex flex-col md:flex-row gap-2">
              <input className="flex-1 px-4 py-3 rounded-xl outline-none" placeholder="Try ‘Pelco in Minneapolis’ or ‘Fiber termination in ND’" />
              <div className="flex gap-2">
                <select className="px-3 py-3 rounded-xl border">
                  <option>Brand</option>
                  <option>Service</option>
                  <option>Region</option>
                </select>
                <a href="/results" className="px-5 py-3 rounded-xl bg-gray-900 text-white grid place-items-center">
                  Search
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Example: <span className="font-mono">“Zinwave installers MN”</span></p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10 items-center">
            {logos.map((l) => (
              <div key={l} className="text-sm text-gray-500 border rounded-xl p-3 text-center">{l}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
