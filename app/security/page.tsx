export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs font-semibold">
            Security
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Security at Teseract
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Last updated: {new Date().toISOString().split("T")[0]}
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">
            We protect your data with industry best practices so you can focus
            on your finances.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-emerald-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(16,185,129,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">Data Protection</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Encryption in transit (HTTPS) for all traffic.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Minimal data collection: email + necessary metadata only.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-emerald-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(16,185,129,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">Access & Control</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Role-based access for internal tools.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                Data removal upon request; unsubscribe anytime.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-emerald-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(16,185,129,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">Vendors</h2>
            <p className="text-gray-300">
              We work with trusted providers (e.g., email delivery) under data
              protection agreements. We do not sell your data.
            </p>
          </section>

          <section className="rounded-2xl border border-emerald-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(16,185,129,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
            <p className="text-gray-300">
              Security questions or reports? Email security@teseract.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
