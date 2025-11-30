'use client';

import { useState } from 'react';

interface HeaderProps {
  onGetAccess?: () => void;
}

export default function Header({ onGetAccess }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 py-4">
      <nav className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-r from-slate-900 via-blue-950 to-blue-800/50 px-4 sm:px-5 md:px-8 py-3 sm:py-4 flex items-center justify-between backdrop-blur-sm border border-blue-900/30 shadow-xl">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Logo - Hexagon with enhanced glow */}
          <div className="relative">
            <div className="absolute inset-0 blur-md opacity-50">
              <svg width="32" height="32" viewBox="0 0 40 40" className="sm:w-10 sm:h-10">
                <defs>
                  <linearGradient id="hexGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <polygon
                  points="20,5 32,10 32,25 20,35 8,25 8,10"
                  fill="url(#hexGlow)"
                />
              </svg>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              className="relative drop-shadow-[0_0_8px_rgba(96,165,250,0.6)] sm:w-10 sm:h-10"
            >
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Outer hexagon with gradient */}
              <polygon
                points="20,5 32,10 32,25 20,35 8,25 8,10"
                fill="url(#hexGradient)"
                stroke="white"
                strokeWidth="1.5"
                filter="url(#glow)"
              />
              {/* Inner darker hexagon */}
              <polygon
                points="20,10 28,13.5 28,21.5 20,28 12,21.5 12,13.5"
                fill="#1e40af"
                opacity="0.7"
              />
            </svg>
          </div>
          {/* Brand Name and Tagline */}
          <div className="flex flex-col">
            <h1 className="text-white text-base sm:text-xl font-bold tracking-tight">Teseract</h1>
            <p className="text-gray-400 text-[10px] sm:text-xs font-normal hidden sm:block">everything in one place</p>
          </div>
        </div>

        {/* Center: Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#modules" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Modules
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Pricing
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            FAQ
          </a>
        </div>

        {/* Right: Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <button className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white hover:bg-gray-800/90 hover:border-gray-600/50 transition-all text-xs lg:text-sm font-medium backdrop-blur-sm">
            Sign in
          </button>
          <button 
            onClick={onGetAccess}
            className="px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 transition-all flex items-center gap-2 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.6)] text-xs lg:text-sm font-medium relative overflow-hidden group"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white relative z-10 lg:w-4 lg:h-4"
            >
              <path
                d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z"
                fill="currentColor"
              />
              <circle cx="12" cy="4" r="1" fill="currentColor" />
              <circle cx="4" cy="12" r="0.5" fill="currentColor" />
            </svg>
            <span className="relative z-10 hidden lg:inline">Get early access</span>
            <span className="relative z-10 lg:hidden">Get access</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-blue-800/50 backdrop-blur-sm border border-blue-900/30 shadow-xl p-4 animate-in slide-in-from-top-2">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4 mb-4">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
            >
              Features
            </a>
            <a
              href="#modules"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
            >
              Modules
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
            >
              FAQ
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-700/50">
            <button className="w-full px-4 py-2.5 rounded-lg bg-gray-900/80 border border-gray-700/50 text-white hover:bg-gray-800/90 hover:border-gray-600/50 transition-all text-sm font-medium backdrop-blur-sm">
              Sign in
            </button>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onGetAccess?.();
              }}
              className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] text-sm font-medium relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-white relative z-10"
              >
                <path
                  d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z"
                  fill="currentColor"
                />
                <circle cx="12" cy="4" r="1" fill="currentColor" />
                <circle cx="4" cy="12" r="0.5" fill="currentColor" />
              </svg>
              <span className="relative z-10">Get early access</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

