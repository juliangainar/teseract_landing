'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({
  isOpen,
  onClose,
}: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = getCookie('teseract_consent');
    if (consent === 'true') setAccepted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!accepted) {
      setError('Please accept the Privacy Policy and Terms to join.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error('Failed to join waitlist');
      }

      const data = await res.json();

      setIsSubmitting(false);
      setIsSuccess(true);
      setCookie('teseract_consent', 'true', { maxAge: 60 * 60 * 24 * 365 });

      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        onClose();
      }, 2000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl border border-blue-500/30 shadow-2xl max-w-md w-full p-8 transform transition-all">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
                    <path
                      d="M16 0L20 14L32 16L20 18L16 32L12 18L0 16L12 14L16 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Join the Waitlist
            </h2>
            <p className="text-gray-400 text-center mb-6">
              Be among the first to experience Teseract. Get early access and exclusive updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <input
                  id="consent"
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500/50"
                />
                <label htmlFor="consent" className="leading-relaxed">
                  I agree to the{' '}
                  <Link
                    href="/terms"
                    className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
                    target="_blank"
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy"
                    className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting || !accepted}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Joining...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z" fill="currentColor" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-500/20 rounded-full p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">You're in!</h2>
            <p className="text-gray-400">
              We'll send you an email when Teseract is ready.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
