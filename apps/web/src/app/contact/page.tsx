'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-12 text-center sm:mb-16">
            <h1 className="mb-4 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          {/* Contact Card */}
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              <div className="grid md:grid-cols-5">
                {/* Left Column - Photo */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:col-span-2 md:p-12">
                  <div className="mx-auto max-w-sm">
                    {/* Professional Photo */}
                    <div className="mb-6 overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src="/doug-earp.jpeg"
                        alt="Douglas Earp"
                        width={400}
                        height={400}
                        className="h-auto w-full object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center">
                      <a
                        href="https://www.linkedin.com/in/douglasearp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg bg-[#0A66C2] px-6 py-3 text-white transition-all hover:bg-[#004182] hover:shadow-lg"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span className="font-semibold">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Information */}
                <div className="p-8 md:col-span-3 md:p-12">
                  {/* Name and Credentials */}
                  <div className="mb-8 border-b border-slate-700 pb-8">
                    <h2 className="mb-3 text-3xl font-light tracking-tight text-white sm:text-4xl">
                      Douglas Earp
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">
                        CLSSMBB
                      </span>
                      <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">
                        CSM
                      </span>
                      <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">
                        PMP
                      </span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Email
                      </label>
                      <div className="flex items-center gap-3">
                        <a
                          href="mailto:doug.earp@gmail.com"
                          className="text-lg text-white transition-colors hover:text-cyan-400 sm:text-xl"
                        >
                          doug.earp@gmail.com
                        </a>
                        <button
                          onClick={() => copyToClipboard('doug.earp@gmail.com', 'email')}
                          className="rounded-lg bg-slate-800 p-2 text-gray-300 transition-all hover:bg-slate-700 hover:text-white"
                          title="Copy email"
                        >
                          {copiedEmail ? (
                            <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Phone
                      </label>
                      <div className="flex items-center gap-3">
                        <a
                          href="tel:+19136381320"
                          className="text-lg text-white transition-colors hover:text-cyan-400 sm:text-xl"
                        >
                          913.638.1320
                        </a>
                        <button
                          onClick={() => copyToClipboard('913.638.1320', 'phone')}
                          className="rounded-lg bg-slate-800 p-2 text-gray-300 transition-all hover:bg-slate-700 hover:text-white"
                          title="Copy phone"
                        >
                          {copiedPhone ? (
                            <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="group">
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-gray-400">
                        LinkedIn
                      </label>
                      <a
                        href="https://www.linkedin.com/in/douglasearp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-cyan-400 sm:text-xl"
                      >
                        /in/douglasearp
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6">
                    <p className="text-center text-gray-200">
                      <span className="font-semibold text-white">Let's connect.</span> Whether you're looking to discuss AI solutions, 
                      project management strategies, or consulting opportunities, I'm here to help accelerate your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Explanation */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 shadow-xl">
                <h3 className="mb-2 text-lg font-semibold text-cyan-400">CLSSMBB</h3>
                <p className="text-sm text-gray-300">
                  Certified Lean Six Sigma Master Black Belt - Expert in process improvement and operational excellence
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 shadow-xl">
                <h3 className="mb-2 text-lg font-semibold text-cyan-400">CSM</h3>
                <p className="text-sm text-gray-300">
                  Certified Scrum Master - Agile methodology and team facilitation specialist
                </p>
              </div>
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 shadow-xl">
                <h3 className="mb-2 text-lg font-semibold text-cyan-400">PMP</h3>
                <p className="text-sm text-gray-300">
                  Project Management Professional - Strategic project leadership and delivery expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 sm:mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent sm:text-2xl">
                AI
              </span>
              <span className="text-xl font-bold text-white sm:text-2xl">Cheetahs</span>
            </div>
            <p className="text-sm text-gray-400 sm:text-base">
              Accelerate Your App Development with AI
            </p>
            <p className="mt-3 text-xs text-gray-500 sm:mt-4 sm:text-sm">
              © 2026 AI Cheetahs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

