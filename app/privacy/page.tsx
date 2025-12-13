export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-200 text-xs font-semibold">
            Privacy First
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Last updated: {new Date().toISOString().split("T")[0]}
          </p>
          <p className="text-gray-300 mt-4 max-w-3xl">
            We collect only what we need to run Teseract and keep you informed.
            No selling data, no hidden tricks—just transparent handling of your
            information.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-2xl border border-blue-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(59,130,246,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">
              1. What we collect
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Email when you join the waitlist or sign up.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Basic usage events to keep the service reliable and secure.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-blue-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(59,130,246,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">
              2. How we use it
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Send onboarding emails, product updates, and waitlist status.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Improve reliability, performance, and security.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-blue-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(59,130,246,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Sharing & retention
            </h2>
            <p className="text-gray-300">
              We don&apos;t sell your data. We use trusted processors (like
              email delivery) under strict agreements. Data is kept only as long
              as needed to operate the service or until you request deletion.
            </p>
          </section>

          <section className="rounded-2xl border border-blue-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(59,130,246,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Your rights
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Access, correct, or delete your data.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Unsubscribe from communications anytime.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-400"></span>
                Contact us for any privacy request: privacy@teseract.xyz
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-blue-500/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(59,130,246,0.12)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Contact
            </h2>
            <p className="text-gray-300">
              Questions or requests? Email us at privacy@teseract.xyz.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
