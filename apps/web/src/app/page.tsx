import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section id="about" className="bg-slate-900 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
              Why Choose AI Cheetahs?
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:bg-slate-800/70 sm:p-8">
                <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">⚡</div>
                <h3 className="mb-2 text-lg font-bold text-cyan-400 sm:mb-3 sm:text-xl">Lightning Fast</h3>
                <p className="text-sm text-gray-300 sm:text-base">
                  Accelerate development with AI-powered tools and automation
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:bg-slate-800/70 sm:p-8">
                <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">🚀</div>
                <h3 className="mb-2 text-lg font-bold text-cyan-400 sm:mb-3 sm:text-xl">Rapid Deployment</h3>
                <p className="text-sm text-gray-300 sm:text-base">
                  Get your applications to market faster with streamlined workflows
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:bg-slate-800/70 sm:p-8">
                <div className="mb-3 text-4xl sm:mb-4 sm:text-5xl">🎯</div>
                <h3 className="mb-2 text-lg font-bold text-cyan-400 sm:mb-3 sm:text-xl">Innovative Solutions</h3>
                <p className="text-sm text-gray-300 sm:text-base">
                  Cutting-edge AI technology for modern development challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl md:mb-16 md:text-5xl">
              Powerful Features
            </h2>
            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">AI-Powered Development</h3>
                  <p className="text-sm text-gray-400 sm:text-base">
                    Leverage advanced AI algorithms to automate repetitive tasks and boost productivity
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">Seamless Integration</h3>
                  <p className="text-sm text-gray-400 sm:text-base">
                    Integrate with your existing tools and workflows without disruption
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">Enterprise Security</h3>
                  <p className="text-sm text-gray-400 sm:text-base">
                    Bank-level security with end-to-end encryption and compliance standards
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">Expert Support</h3>
                  <p className="text-sm text-gray-400 sm:text-base">
                    24/7 dedicated support from our team of AI and development experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 sm:py-10 md:py-12">
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
    </main>
  );
}

