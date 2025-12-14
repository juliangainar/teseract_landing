"use client";

import Header from "./Header";
import WaitlistModal from "./WaitlistModal";
import { Locale } from "@/data/locales";
import { Copy, Feature } from "@/data/types";
import { useEffect, useState } from "react";

type LandingProps = {
  locale: Locale;
  content: Copy;
};

const accentPills: Record<
  NonNullable<Feature["accent"]>,
  { bg: string; text: string; dot: string }
> = {
  blue: {
    bg: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    text: "text-blue-400",
    dot: "bg-blue-500",
  },
  pink: {
    bg: "bg-pink-500/20 border-pink-400/30 text-pink-200",
    text: "text-pink-200",
    dot: "bg-pink-400",
  },
};

function FeatureBlock({
  feature,
  reversed,
  pillLabel,
}: {
  feature: Feature;
  reversed?: boolean;
  pillLabel: string;
}) {
  const accent = feature.accent ?? "blue";
  const pill = accentPills[accent];
  const media = (
    <div className="relative group perspective-1000 transform-gpu sm:scale-[1.02] md:scale-[1.04] transition-transform duration-500">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950 transform rotate-1 group-hover:-rotate-2 group-hover:scale-[1.05] transition-all duration-500">
        <img
          loading="lazy"
          src={feature.image.src}
          alt={feature.image.alt}
          className="w-full h-auto object-contain rounded-2xl transition-transform duration-700"
        />
      </div>
    </div>
  );

  const text = (
    <div className="space-y-6">
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${pill.bg} w-fit`}
      >
        <div className={`w-2 h-2 rounded-full ${pill.dot}`}></div>
        <span className={`${pill.text} text-sm font-medium`}>{pillLabel}</span>
      </div>
      <h3 className="text-4xl lg:text-5xl font-bold text-white">
        {feature.title}
      </h3>
      <p className="text-gray-400 text-lg leading-relaxed">
        {feature.description}
      </p>
      <ul className="space-y-3 text-gray-300">
        {feature.bullets.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mb-32" id={feature.id}>
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          reversed ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {reversed ? (
          <>
            {text}
            {media}
          </>
        ) : (
          <>
            {media}
            {text}
          </>
        )}
      </div>
    </div>
  );
}

export default function LandingPage({ locale, content }: LandingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signups, setSignups] = useState(0);

  useEffect(() => {
    const target = 4820;
    const increment = Math.max(1, Math.floor(target / 120));
    const id = setInterval(() => {
      setSignups((prev) => {
        const next = prev + increment;
        return next >= target ? target : next;
      });
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
      <Header
        locale={locale}
        copy={content.header}
        onGetAccess={() => setIsModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-green-400 text-sm font-medium">
                  {content.hero.badges[0]}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-indigo-200"
                  aria-hidden="true"
                >
                  <path
                    d="M10 2l1.6 3.4L15 7l-3.4 1.6L10 12l-1.6-3.4L5 7l3.4-1.6L10 2z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.5 11l.8 1.6 1.6.8-1.6.8L4.5 16l-.8-1.6-1.6-.8 1.6-.8.8-1.6zM15.5 4l.8 1.6 1.6.8-1.6.8-.8 1.6-.8-1.6-1.6-.8 1.6-.8.8-1.6z"
                    fill="currentColor"
                    opacity="0.75"
                  />
                </svg>
                <span className="text-indigo-100 text-sm font-medium">
                  {content.hero.badges[1]}
                </span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              {content.hero.title}{" "}
              <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                {content.hero.highlight}
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 font-medium"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M10 0L12 7L19 9L12 11L10 18L8 11L1 9L8 7L10 0Z"
                    fill="currentColor"
                  />
                </svg>
                {content.hero.cta}
              </button>
            </div>

            <div className="space-y-2 pt-4">
              {content.hero.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                  />
                  <p className="text-gray-400 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-blue-800/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 shadow-2xl shadow-blue-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">
                    {content.hero.dashboard.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="text-white font-semibold mb-3">
                      {content.hero.dashboard.character}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <svg width="60" height="60" viewBox="0 0 50 50">
                          <defs>
                            <linearGradient
                              id="levelGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#60a5fa" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="25,8 38,15 38,30 25,40 12,30 12,15"
                            fill="url(#levelGradient)"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                          LV 7
                        </div>
                      </div>
                      <div>
                        <div className="text-white text-sm">
                          {content.hero.dashboard.classLabel}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {content.hero.dashboard.titleLabel}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{content.hero.dashboard.xp}</span>
                        <span className="text-green-400">
                          {content.hero.dashboard.xpChange}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">
                          {content.hero.dashboard.netWorthLabel}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">
                            {content.hero.dashboard.netWorth}
                          </span>
                          <div className="flex items-center gap-1 text-green-400 text-xs">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path d="M6 2L9 7H3L6 2Z" fill="currentColor" />
                            </svg>
                            {content.hero.dashboard.netWorthChange}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">
                          {content.hero.dashboard.cashflowLabel}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">
                            {content.hero.dashboard.cashflow}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {content.hero.dashboard.cashflowNote}
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">
                          {content.hero.dashboard.debtLabel}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">
                            {content.hero.dashboard.debt}
                          </span>
                          <div className="flex items-center gap-1 text-red-400 text-xs">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path d="M6 10L3 5H9L6 10Z" fill="currentColor" />
                            </svg>
                            {content.hero.dashboard.debtChange}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">
                          {content.hero.dashboard.savingsLabel}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">32%</span>
                          <span className="text-green-400 text-xs">
                            {content.hero.dashboard.savingsStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-white font-semibold mb-3">
                      {content.hero.dashboard.missionsTitle}
                    </div>
                    <div className="space-y-3">
                      {content.hero.dashboard.missions.map((mission) => (
                        <div
                          key={mission.title}
                          className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50"
                        >
                          <div className="text-white text-sm font-medium mb-2">
                            {mission.title}
                          </div>
                          <div className="text-gray-400 text-xs mb-2">
                            {mission.reward}
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full"
                              style={{ width: mission.progress }}
                            ></div>
                          </div>
                        </div>
                      ))}
                      <div className="bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-lg p-3 border border-blue-500/30 -mt-2 ml-4 relative z-20">
                        <div className="text-gray-300 text-xs mb-1">
                          {content.hero.dashboard.snapshotLabel ||
                            content.hero.dashboard.snapshot.title}
                        </div>
                        <div className="text-white font-semibold text-lg">
                          {content.hero.dashboard.snapshot.change}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {content.hero.dashboard.snapshot.body}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Agent */}
        <section
          id="ai-agent"
          className="mt-20 py-14 px-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900/60 via-blue-950/60 to-indigo-950/50 shadow-2xl shadow-blue-500/20"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 w-fit">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="text-indigo-100 text-sm font-medium">
                  {content.aiAgent.badge}
                </span>
              </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {content.aiAgent.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(99,102,241,0.45)]">
                {content.aiAgent.highlight}
              </span>{" "}
              {content.aiAgent.suffix}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {content.aiAgent.description}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {content.aiAgent.advisorTag && (
                <>
                    {content.aiAgent.advisorPrefix}{" "}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400/25 via-orange-400/20 to-pink-400/20 border border-orange-400/30 text-amber-100 font-semibold tracking-tight shadow-[0_4px_14px_rgba(251,191,36,0.25)]">
                      {content.aiAgent.advisorTag}
                    </span>
                  </>
                )}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.aiAgent.chips.map((item) => (
                  <div
                    key={item}
                    className="bg-slate-900/60 border border-indigo-500/20 rounded-xl px-4 py-3 text-gray-200 text-sm shadow-lg shadow-indigo-500/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[420px]">
              <div className="relative bg-slate-900/70 border border-indigo-500/30 rounded-2xl p-5 shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/15 rounded-full blur-3xl"></div>
                <div className="relative space-y-3">
                  <div className="flex items-center gap-2 text-xs text-indigo-100">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    {content.aiAgent.liveData}
                  </div>
                  <div className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-3 text-sm text-gray-200">
                    <div className="text-indigo-200 text-xs mb-1">
                      {content.aiAgent.youAsked}
                    </div>
                    {content.aiAgent.sampleQuestion}
                  </div>
                  <div className="bg-gradient-to-br from-indigo-600/40 via-blue-600/30 to-slate-800/70 border border-indigo-500/40 rounded-xl p-4 text-sm text-gray-100 space-y-2">
                    <div className="text-xs uppercase tracking-wide text-indigo-100/80">
                      {content.aiAgent.agentInsight}
                    </div>
                    <p>{content.aiAgent.sampleAnswer}</p>
                    <div className="flex items-center gap-2 text-emerald-300 text-xs">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9l3 3 9-9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {content.aiAgent.sampleAction}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard image */}
        <div className="mt-20 w-full">
          <div className="relative group perspective-1000 transform-gpu">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative transform transform-gpu transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-2 rotate-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                <img
                  loading="lazy"
                  src="/assets/tsseract_dashboard.png"
                  alt="Teseract Dashboard"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>

        {/* Features */}
        <section id="features" className="mt-32 py-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {content.featuresIntro.title}{" "}
              <span className="text-blue-400">
                {content.featuresIntro.highlight}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {content.featuresIntro.subtitle}
            </p>
          </div>

          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group perspective-1000 transform-gpu">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/25 via-blue-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 bg-gradient-to-br from-slate-900 to-blue-950 p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-indigo-100">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      {content.featuresIntro.monthlyReport.liveData}
                    </span>
                    <span className="text-gray-300">
                      {content.featuresIntro.monthlyReport.monthlyLabel}
                    </span>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-4 text-gray-100 space-y-3 border border-slate-700/60">
                    <div className="text-indigo-200 text-xs">
                      {content.featuresIntro.monthlyReport.youAsked}
                    </div>
                    <div className="text-sm">
                      {content.featuresIntro.monthlyReport.sampleQuestion}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-600/40 via-blue-600/30 to-slate-800/70 rounded-xl p-4 border border-indigo-500/40 text-gray-100 space-y-2">
                    <div className="text-xs uppercase tracking-wide text-indigo-100/80">
                      {content.featuresIntro.monthlyReport.agentAnswer}
                    </div>
                    <p className="text-sm">
                      {content.featuresIntro.monthlyReport.sampleAnswer}
                    </p>
                    <div className="text-emerald-300 text-xs flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9l3 3 9-9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {content.featuresIntro.monthlyReport.sampleAction}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                  <span className="text-indigo-100 text-sm font-medium">
                    {content.featuresIntro.monthlyReport.badge}
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">
                  {content.featuresIntro.monthlyReport.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {content.featuresIntro.monthlyReport.description}
                </p>
                <ul className="space-y-3 text-gray-200">
                  {content.featuresIntro.monthlyReport.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-fuchsia-400 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {content.features.map((feature, index) => (
            <FeatureBlock
              key={feature.id}
              feature={feature}
              reversed={index % 2 === 1}
              pillLabel={content.header.nav.features}
            />
          ))}
        </section>

        {/* Goals */}
        <div id="goals" className="mb-32 scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group perspective-1000 transform-gpu sm:scale-[1.02] md:scale-[1.04] transition-transform duration-500">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-pink-400/30 shadow-2xl shadow-pink-500/20 bg-gradient-to-br from-slate-900 to-blue-950 transform rotate-1 group-hover:-rotate-2 group-hover:scale-[1.05] transition-all duration-500">
                <img
                  loading="lazy"
                  src="/assets/goals.png"
                  alt="Goals visualization"
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 w-fit">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-pink-200 text-sm font-medium">
                  {content.goals.badge}
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white">
                {content.goals.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {content.goals.description}
              </p>
              <ul className="space-y-3 text-gray-300">
                {content.goals.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-pink-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3 rounded-2xl border border-pink-400/25 bg-slate-900/60 p-4 shadow-lg shadow-pink-500/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-100 text-xs font-semibold uppercase tracking-wide">
                  {content.goals.exampleLabel}
                </div>
                <div className="space-y-2">
                  <div className="rounded-xl bg-slate-800/60 border border-slate-700/50 p-3 text-gray-200 text-sm">
                    <div className="text-xs text-gray-400 mb-1">You</div>
                    {content.goals.exampleQuestion}
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-blue-500/15 border border-pink-400/30 p-3 text-gray-100 text-sm space-y-1">
                    <div className="text-xs text-pink-200 mb-1">
                      {content.goals.agentLabel}
                    </div>
                    <div>{content.goals.exampleAnswer}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {content.faq.title}{" "}
              <span className="text-blue-400">{content.faq.highlight}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {content.faq.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {content.faq.items.map((faq) => (
              <div
                key={faq.q}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 py-20">
          <div className="relative bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-blue-800/40 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/20 text-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {content.cta.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-200 drop-shadow-[0_0_12px_rgba(125,211,252,0.35)]">
                  {content.cta.highlight}
                </span>{" "}
                {content.cta.tail}
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {content.cta.subtitle}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 font-medium mx-auto"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 0L12 7L19 9L12 11L10 18L8 11L1 9L8 7L10 0Z"
                    fill="currentColor"
                  />
                </svg>
                {content.cta.button}
              </button>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-2 text-sm text-blue-100 mx-auto">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">
                    {signups.toLocaleString()}
                  </span>
                  <span>{content.cta.signups}</span>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <svg width="32" height="32" viewBox="0 0 40 40">
                    <defs>
                      <linearGradient
                        id="footerLogo"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#60a5fa"
                          stopOpacity="0.9"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity="1"
                        />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="20,5 32,10 32,25 20,35 8,25 8,10"
                      fill="url(#footerLogo)"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold">Teseract</h3>
              </div>
              <p className="text-gray-400 text-sm">{content.footer.tagline}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                {content.footer.product}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {content.header.nav.features}
                  </a>
                </li>
                <li>
                  <a
                    href="#ai-agent"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {content.header.nav.aiAgent}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                {content.footer.company}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {content.header.nav.faq}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                {content.footer.legal}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`/${locale}/privacy`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {content.footer.privacy}
                  </a>
                </li>
                <li>
                  <a
                    href={`/${locale}/terms`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {content.footer.terms}
                  </a>
                </li>
                <li>
                  <a
                    href={`/${locale}/security`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {content.footer.security}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-400 text-sm">{content.footer.rights}</p>
          </div>
        </div>
      </footer>

      <WaitlistModal
        locale={locale}
        copy={content.waitlist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
