export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-200 text-xs font-semibold">
            Terms & Safety
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Last updated: {new Date().toISOString().split("T")[0]}
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Clear, simple ground rules so you know what to expect when using
            Teseract.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">1. Acceptance</h2>
            <p className="text-gray-300">
              By using Teseract you agree to these terms. If you don&apos;t agree,
              please do not use the service.
            </p>
          </section>

          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">2. Service</h2>
            <p className="text-gray-300">
              Teseract helps you track finances, goals, and insights. Features may
              evolve as we improve the product.
            </p>
          </section>

          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">3. Use</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                You are responsible for the accuracy of your data.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                No misuse: no spam, abuse, or illegal activity.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400"></span>
                Use only where legally permitted in your region.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">4. Disclaimer</h2>
            <p className="text-gray-300">
              Teseract is not a licensed financial advisor. Insights are
              informational and do not constitute financial advice.
            </p>
          </section>

          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">5. Liability</h2>
            <p className="text-gray-300">
              Teseract is provided “as is”. We are not liable for losses arising
              from the use of the service, to the maximum extent allowed by law.
            </p>
          </section>

          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">6. Termination</h2>
            <p className="text-gray-300">
              We may suspend or terminate accounts for misuse or legal reasons.
              You may stop using the service at any time.
            </p>
          </section>

          <section className="rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(168,85,247,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">7. Contact</h2>
            <p className="text-gray-300">Questions? Reach us at support@teseract.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
