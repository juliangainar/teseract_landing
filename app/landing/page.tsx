'use client';

import { useState } from 'react';
import Header from '../components/Header';
import WaitlistModal from '../components/WaitlistModal';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950">
      <Header onGetAccess={() => setIsModalOpen(true)} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section: Main Content */}
          <div className="space-y-8">
            {/* Green Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-400 text-sm font-medium">
                Built for people who want to actually win with money
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Turn your finances into a game you can{" "}
              <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                finally win.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Teseract is your financial command center: net worth, missions, daily spending and visual goals — all in one place, designed like an RPG.
            </p>

            {/* CTA Buttons */}
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
                Get early access
              </button>
              <button className="px-6 py-3 rounded-lg bg-gray-900 border border-white/20 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-white"
                >
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 6L14 10L8 14V6Z" fill="currentColor" />
                </svg>
                Watch dashboard demo
              </button>
            </div>

            {/* Feature List */}
            <div className="space-y-2 pt-4">
              <p className="text-gray-400 text-sm">Track net worth, debts & cashflow</p>
              <p className="text-gray-400 text-sm">Complete missions, unlock achievements</p>
              <p className="text-gray-400 text-sm">Perfect for solo users & small teams</p>
            </div>
          </div>

          {/* Right Section: Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-blue-800/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 shadow-2xl shadow-blue-500/20">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
              
              {/* Dashboard Content */}
              <div className="relative z-10">
                {/* Dashboard Title */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Dashboard · Teseract</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column: Your Character */}
                  <div className="space-y-4">
                    <div className="text-white font-semibold mb-3">Your character</div>
                    
                    {/* Level Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <svg width="50" height="50" viewBox="0 0 50 50">
                          <defs>
                            <linearGradient id="levelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                          LV 7
                        </div>
                      </div>
                      <div>
                        <div className="text-white text-sm">Class: Builder</div>
                        <div className="text-gray-400 text-xs">Title: Net Worth Architect</div>
                      </div>
                    </div>

                    {/* XP Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>1,240 / 2,000 XP</span>
                        <span className="text-green-400">+120 this week</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="space-y-3 mt-4">
                      {/* Net Worth */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">Net worth</div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">€ 18,450</span>
                          <div className="flex items-center gap-1 text-green-400 text-xs">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 2L9 7H3L6 2Z" fill="currentColor" />
                            </svg>
                            +€1,250 this month
                          </div>
                        </div>
                      </div>

                      {/* Monthly Cashflow */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">Monthly cashflow</div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">+€ 420</span>
                          <span className="text-gray-400 text-xs">Stable · 4 sources</span>
                        </div>
                      </div>

                      {/* Total Debt */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">Total debt</div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">€ 14,450</span>
                          <div className="flex items-center gap-1 text-red-400 text-xs">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 10L3 5H9L6 10Z" fill="currentColor" />
                            </svg>
                            -€350 vs last month
                          </div>
                        </div>
                      </div>

                      {/* Savings Rate */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-gray-400 text-xs mb-1">Savings rate</div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">32%</span>
                          <span className="text-green-400 text-xs">On track for goals</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Missions */}
                  <div className="space-y-4">
                    <div className="text-white font-semibold mb-3">Missions · Education</div>
                    
                    {/* Mission Cards */}
                    <div className="space-y-3">
                      {/* Mission 1 */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-white text-sm font-medium mb-2">
                          Save €500 this month
                        </div>
                        <div className="text-gray-400 text-xs mb-2">
                          Reward: +150 XP · "Discipline" badge
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>

                      {/* Mission 2 */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                        <div className="text-white text-sm font-medium mb-2">
                          Pay €300 of debt
                        </div>
                        <div className="text-gray-400 text-xs mb-2">
                          Reward: +110 XP · Faster freedom
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>

                      {/* Mission 3 */}
                      <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 relative">
                        <div className="text-white text-sm font-medium mb-2">
                          Finish one finance course
                        </div>
                        <div className="text-gray-400 text-xs mb-2">
                          Reward: +90 XP · Level UP
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>

                      {/* SNAPSHOT Card - Overlapping */}
                      <div className="bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-lg p-3 border border-blue-500/30 -mt-2 ml-4 relative z-20">
                        <div className="text-gray-300 text-xs mb-1">SNAPSHOT</div>
                        <div className="text-white font-semibold text-lg">+€ 1,670</div>
                        <div className="text-gray-400 text-xs">Net worth change in the last 30 days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Dashboard Image Section */}
        <div className="mt-20 w-full">
          <div className="relative group perspective-1000">
            {/* Glow effect behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image container with rotation and hover effects */}
            <div className="relative transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-2 rotate-1">
              {/* Border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Dashboard image */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                <img 
                  src="/assets/tsseract_dashboard.png" 
                  alt="Teseract Dashboard" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
            
            {/* Floating elements for extra depth */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-32 py-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Everything you need to <span className="text-blue-400">master your finances</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features designed to make financial management engaging and rewarding
            </p>
          </div>

          {/* Feature 1: Track Your Assets - Image Left */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                  <img 
                    src="/assets/assets.png" 
                    alt="Assets Management" 
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 text-sm font-medium">Feature</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">Track Your Assets</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Monitor all your assets in one place - cash, investments, property, and more. See your net worth grow in real-time with beautiful visualizations and detailed breakdowns.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time asset tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multiple asset categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Net worth visualization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2: Manage Debts - Text Left, Image Right */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 text-sm font-medium">Feature</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">Manage Debts</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Track all your debts, see payment schedules, and watch your debt decrease as you complete missions. Get a clear view of your financial obligations and progress.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete debt overview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Payment schedule tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progress visualization</span>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                  <img 
                    src="/assets/debts.png" 
                    alt="Debt Management" 
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Daily Spending - Image Left */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                  <img 
                    src="/assets/daily_spending.png" 
                    alt="Daily Spending" 
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 text-sm font-medium">Feature</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">Daily Spending</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Monitor your daily expenses, set budgets, and get insights into your spending patterns. Understand where your money goes and make smarter financial decisions.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time expense tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Smart budget management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Spending insights & analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 4: Income Tracking - Text Left, Image Right */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 text-sm font-medium">Feature</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">Income Tracking</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Track all your income sources, see cashflow trends, and understand your financial health. Get a complete picture of your earnings and plan for the future.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multiple income sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cashflow visualization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Income trend analysis</span>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                  <img 
                    src="/assets/income.png" 
                    alt="Income Tracking" 
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Subscription Management - Image Left */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                  <img 
                    src="/assets/subscriptions.png" 
                    alt="Subscription Management" 
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 text-sm font-medium">Feature</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">Subscription Management</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Keep track of all your subscriptions, avoid forgotten charges, and optimize your recurring expenses. Never lose track of what you're paying for.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete subscription list</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Renewal date tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cost optimization insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 6: Missions & Achievements - Text Left, Image Right */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-blue-400 text-sm font-medium">Feature</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">Missions & Achievements</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Complete financial missions, earn XP, unlock achievements, and level up your financial game. Turn financial management into an engaging experience.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gamified financial goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>XP and leveling system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlockable achievements</span>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-gradient-to-br from-slate-900 to-blue-950">
                  <img 
                    src="/assets/financial_inventory_missions.png" 
                    alt="Missions & Achievements" 
                    className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-32 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to know about Teseract
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is Teseract?",
                a: "Teseract is a gamified financial management platform that turns your finances into an RPG-style game. Track your net worth, complete missions, unlock achievements, and level up as you improve your financial health."
              },
              {
                q: "How does the gamification work?",
                a: "You earn XP by completing financial missions like saving money, paying off debt, or learning about finance. As you level up, you unlock new titles, badges, and achievements that reflect your financial progress."
              },
              {
                q: "Is my financial data secure?",
                a: "Absolutely. We use bank-level encryption to protect your data. Your financial information is encrypted both in transit and at rest, and we never share your data with third parties."
              },
              {
                q: "Can I use Teseract for free?",
                a: "Teseract offers a free tier with basic features. Premium plans unlock advanced analytics, unlimited missions, and priority support. Join our waitlist to get early access and special pricing."
              },
              {
                q: "What currencies are supported?",
                a: "Currently, Teseract supports EUR, USD, GBP, and other major currencies. We're continuously adding support for more currencies based on user demand."
              },
              {
                q: "When will Teseract be available?",
                a: "We're currently in beta testing. Join our waitlist to get early access and be notified when we launch publicly. Early supporters will receive exclusive benefits and discounts."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 py-20">
          <div className="relative bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-blue-800/40 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/20 text-center">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to level up your finances?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of people who are turning their finances into a game they can finally win.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 font-medium mx-auto"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L12 7L19 9L12 11L10 18L8 11L1 9L8 7L10 0Z" fill="currentColor" />
                </svg>
                Get Early Access
              </button>
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
                      <linearGradient id="footerLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
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
              <p className="text-gray-400 text-sm">
                Turn your finances into a game you can finally win.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
                <li><a href="#modules" className="text-gray-400 hover:text-white text-sm transition-colors">Modules</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Teseract. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

