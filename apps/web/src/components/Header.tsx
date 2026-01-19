'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-slate-950/95 backdrop-blur-sm shadow-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/ai-cheetahs-logo-final.png"
            alt="AI Cheetahs"
            width={300}
            height={80}
            priority
            className="h-auto w-40 drop-shadow-lg sm:w-56 md:w-64"
          />
        </a>
        <nav className="flex gap-4 sm:gap-6">
          <a
            href="/"
            className={`text-sm font-medium transition-colors sm:text-base ${
              pathname === '/'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Home
          </a>
          <a
            href="/services"
            className={`text-sm font-medium transition-colors sm:text-base ${
              pathname === '/services'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Services
          </a>
          <a
            href="/hot-topics"
            className={`text-sm font-medium transition-colors sm:text-base ${
              pathname === '/hot-topics'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Hot Topics
          </a>
          <a
            href="/contact"
            className={`text-sm font-medium transition-colors sm:text-base ${
              pathname === '/contact'
                ? 'text-cyan-400'
                : 'text-gray-300 hover:text-cyan-400'
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

