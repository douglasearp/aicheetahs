'use client';

import { useState } from 'react';
import Header from '@/components/Header';

interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 'iX0HbrfRyvc',
    title: 'Portainer',
    url: 'https://www.youtube.com/watch?v=iX0HbrfRyvc&t=85s',
    thumbnail: 'https://img.youtube.com/vi/iX0HbrfRyvc/mqdefault.jpg',
  },
  {
    id: 'Bwqy0lsEaEg',
    title: 'Claude Cowork',
    url: 'https://www.youtube.com/watch?v=Bwqy0lsEaEg',
    thumbnail: 'https://img.youtube.com/vi/Bwqy0lsEaEg/mqdefault.jpg',
  },
  {
    id: 'bFC1QGEQ2E8',
    title: 'Claude Skills',
    url: 'https://www.youtube.com/watch?v=bFC1QGEQ2E8',
    thumbnail: 'https://img.youtube.com/vi/bFC1QGEQ2E8/mqdefault.jpg',
  },
  {
    id: 'sPmat30SE4k',
    title: 'Vercel',
    url: 'https://www.youtube.com/watch?v=sPmat30SE4k',
    thumbnail: 'https://img.youtube.com/vi/sPmat30SE4k/mqdefault.jpg',
  },
  {
    id: 'Efol-gHLn7w',
    title: 'Cloudflare',
    url: 'https://www.youtube.com/watch?v=Efol-gHLn7w',
    thumbnail: 'https://img.youtube.com/vi/Efol-gHLn7w/mqdefault.jpg',
  },
  {
    id: 'WInPBmCK3l4',
    title: 'Cursor Plan Mode',
    url: 'https://www.youtube.com/watch?v=WInPBmCK3l4',
    thumbnail: 'https://img.youtube.com/vi/WInPBmCK3l4/mqdefault.jpg',
  },
  {
    id: 'oAoigBWLZgE',
    title: 'Cursor MCP',
    url: 'https://www.youtube.com/watch?v=oAoigBWLZgE',
    thumbnail: 'https://img.youtube.com/vi/oAoigBWLZgE/mqdefault.jpg',
  },
  {
    id: 'ItPcGiStRYA',
    title: 'Eraser AI',
    url: 'https://www.youtube.com/watch?v=ItPcGiStRYA',
    thumbnail: 'https://img.youtube.com/vi/ItPcGiStRYA/mqdefault.jpg',
  },
  {
    id: '5Pm5aTC13qI',
    title: 'Google Antigravity Kit',
    url: 'https://www.youtube.com/watch?v=5Pm5aTC13qI',
    thumbnail: 'https://img.youtube.com/vi/5Pm5aTC13qI/mqdefault.jpg',
  },
  {
    id: 'lMqukH2oT7o',
    title: 'Aura.Build',
    url: 'https://www.youtube.com/watch?v=lMqukH2oT7o&t=40s',
    thumbnail: 'https://img.youtube.com/vi/lMqukH2oT7o/mqdefault.jpg',
  },
  {
    id: 'YLtlz88zrLg',
    title: 'Github Actions',
    url: 'https://www.youtube.com/watch?v=YLtlz88zrLg',
    thumbnail: 'https://img.youtube.com/vi/YLtlz88zrLg/mqdefault.jpg',
  },
  {
    id: 'RgZyX-e6W9E',
    title: 'Github Container Registry',
    url: 'https://www.youtube.com/watch?v=RgZyX-e6W9E&t=100s',
    thumbnail: 'https://img.youtube.com/vi/RgZyX-e6W9E/mqdefault.jpg',
  },
  {
    id: 'xQKtDgJXrlM',
    title: 'Capacitor iOS / Android',
    url: 'https://www.youtube.com/watch?v=xQKtDgJXrlM&t=81s',
    thumbnail: 'https://img.youtube.com/vi/xQKtDgJXrlM/mqdefault.jpg',
  },
  {
    id: 'm1-bc53EGh8',
    title: 'Expo iOS / Android',
    url: 'https://www.youtube.com/watch?v=m1-bc53EGh8',
    thumbnail: 'https://img.youtube.com/vi/m1-bc53EGh8/mqdefault.jpg',
  },
  {
    id: 'eGz9DS-aIeY',
    title: 'Linode Hosting',
    url: 'https://www.youtube.com/watch?v=eGz9DS-aIeY&t=420s',
    thumbnail: 'https://img.youtube.com/vi/eGz9DS-aIeY/mqdefault.jpg',
  },
  {
    id: 'AfxyA2O8JqM',
    title: 'Hostinger Hosting',
    url: 'https://www.youtube.com/watch?v=AfxyA2O8JqM&t=147s',
    thumbnail: 'https://img.youtube.com/vi/AfxyA2O8JqM/mqdefault.jpg',
  },
  {
    id: '0P53S34zm44',
    title: 'Netlify Hosting',
    url: 'https://www.youtube.com/watch?v=0P53S34zm44',
    thumbnail: 'https://img.youtube.com/vi/0P53S34zm44/mqdefault.jpg',
  },
  {
    id: 'fgbEwVWlpsI',
    title: 'Stripe Payments',
    url: 'https://www.youtube.com/watch?v=fgbEwVWlpsI',
    thumbnail: 'https://img.youtube.com/vi/fgbEwVWlpsI/mqdefault.jpg',
  },
  {
    id: 'kyphLGnSz6Q',
    title: 'Supabase Postgres',
    url: 'https://www.youtube.com/watch?v=kyphLGnSz6Q&t=905s',
    thumbnail: 'https://img.youtube.com/vi/kyphLGnSz6Q/mqdefault.jpg',
  },
  {
    id: 'gosd4iRZNdU',
    title: 'Google AI Studio',
    url: 'https://www.youtube.com/watch?v=gosd4iRZNdU',
    thumbnail: 'https://img.youtube.com/vi/gosd4iRZNdU/mqdefault.jpg',
  },
  {
    id: '4BwyqmRTrx8',
    title: 'Azure App Service Web App',
    url: 'https://www.youtube.com/watch?v=4BwyqmRTrx8&t=588s',
    thumbnail: 'https://img.youtube.com/vi/4BwyqmRTrx8/mqdefault.jpg',
  },
  {
    id: 'DJvM2lSPn6w',
    title: 'Next JS Auth',
    url: 'https://www.youtube.com/watch?v=DJvM2lSPn6w',
    thumbnail: 'https://img.youtube.com/vi/DJvM2lSPn6w/mqdefault.jpg',
  },
  {
    id: 'yufqeJLP1rI',
    title: 'Auth0',
    url: 'https://www.youtube.com/watch?v=yufqeJLP1rI',
    thumbnail: 'https://img.youtube.com/vi/yufqeJLP1rI/mqdefault.jpg',
  },
  {
    id: 'RebA5J-rlwg',
    title: 'Prisma ORM',
    url: 'https://www.youtube.com/watch?v=RebA5J-rlwg',
    thumbnail: 'https://img.youtube.com/vi/RebA5J-rlwg/mqdefault.jpg',
  },
  {
    id: '8nzt_xzsyq8',
    title: 'Notebook LM',
    url: 'https://www.youtube.com/watch?v=8nzt_xzsyq8&t=678s',
    thumbnail: 'https://img.youtube.com/vi/8nzt_xzsyq8/mqdefault.jpg',
  },
  {
    id: 'Sq8Cq7RZM2o',
    title: 'Azure Foundry',
    url: 'https://www.youtube.com/watch?v=Sq8Cq7RZM2o',
    thumbnail: 'https://img.youtube.com/vi/Sq8Cq7RZM2o/mqdefault.jpg',
  },
  {
    id: 'qAF1NjEVHhY',
    title: 'LangChain / LangGraph',
    url: 'https://www.youtube.com/watch?v=qAF1NjEVHhY',
    thumbnail: 'https://img.youtube.com/vi/qAF1NjEVHhY/mqdefault.jpg',
  },
  {
    id: 'QSW2L8dkaZk',
    title: 'ChromaDB Vector DB',
    url: 'https://www.youtube.com/watch?v=QSW2L8dkaZk',
    thumbnail: 'https://img.youtube.com/vi/QSW2L8dkaZk/mqdefault.jpg',
  },
  {
    id: 'mXNrhyw4q84',
    title: 'Qdrant Vector DB',
    url: 'https://www.youtube.com/watch?v=mXNrhyw4q84',
    thumbnail: 'https://img.youtube.com/vi/mXNrhyw4q84/mqdefault.jpg',
  },
  {
    id: 'WBPFjYLIhsA',
    title: 'SQL Server Vector DB',
    url: 'https://www.youtube.com/watch?v=WBPFjYLIhsA',
    thumbnail: 'https://img.youtube.com/vi/WBPFjYLIhsA/mqdefault.jpg',
  },
  {
    id: '5RIOQuHOihY',
    title: 'Ollama LLM Orchestrator',
    url: 'https://www.youtube.com/watch?v=5RIOQuHOihY',
    thumbnail: 'https://img.youtube.com/vi/5RIOQuHOihY/mqdefault.jpg',
  },
  {
    id: 'LmXaPUky_u4',
    title: 'Open Web GUI LLM Orchestrator',
    url: 'https://www.youtube.com/watch?v=LmXaPUky_u4',
    thumbnail: 'https://img.youtube.com/vi/LmXaPUky_u4/mqdefault.jpg',
  },
  {
    id: 'DjiUiOoQBPo',
    title: 'Bolt New AI Web UI Builder',
    url: 'https://www.youtube.com/watch?v=DjiUiOoQBPo&t=1258s',
    thumbnail: 'https://img.youtube.com/vi/DjiUiOoQBPo/mqdefault.jpg',
  },
  {
    id: 'TAXRZyGV1Dw',
    title: 'Replit AI Web UI Builder',
    url: 'https://www.youtube.com/watch?v=TAXRZyGV1Dw',
    thumbnail: 'https://img.youtube.com/vi/TAXRZyGV1Dw/mqdefault.jpg',
  },
  {
    id: '4yhd2cj8Ob8',
    title: 'Base 44 AI Web UI Builder',
    url: 'https://www.youtube.com/watch?v=4yhd2cj8Ob8',
    thumbnail: 'https://img.youtube.com/vi/4yhd2cj8Ob8/mqdefault.jpg',
  },
  {
    id: 'rqvtLxwMklo',
    title: 'Lovable AI Web UI Builder',
    url: 'https://www.youtube.com/watch?v=rqvtLxwMklo',
    thumbnail: 'https://img.youtube.com/vi/rqvtLxwMklo/mqdefault.jpg',
  },
  {
    id: 'v4DSSHPFtXQ',
    title: 'Lovart AI Web UI Builder',
    url: 'https://www.youtube.com/watch?v=v4DSSHPFtXQ',
    thumbnail: 'https://img.youtube.com/vi/v4DSSHPFtXQ/mqdefault.jpg',
  },
];

export default function HotTopics() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const handleVideoSelect = (video: Video) => {
    setCurrentVideo(video);
    // Scroll to top to see the player
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 md:pt-32">
        {/* Hero Section with Video Player */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <h1 className="mb-6 text-3xl font-bold text-white sm:mb-8 sm:text-4xl md:text-5xl">
              🔥 Hot Topics
            </h1>
            
            {/* Currently Playing */}
            <div className="mb-4 flex items-center gap-2 sm:mb-6">
              <div className="h-1 w-1 animate-pulse rounded-full bg-red-500"></div>
              <p className="text-sm text-gray-400 sm:text-base">
                Now Playing: <span className="font-semibold text-white">{currentVideo.title}</span>
              </p>
            </div>

            {/* Video Player - 80% size */}
            <div className="mx-auto w-[80%]">
              <div className="relative overflow-hidden rounded-xl bg-black shadow-2xl">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=0`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {currentVideo.title}
                </h2>
                <p className="text-sm text-gray-400 sm:text-base">
                  AI development tools and cutting-edge technologies
                </p>
              </div>
              <a
                href={currentVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-red-700 sm:px-6 sm:py-3 sm:text-base"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Video Selection Grid - Netflix Style */}
        <section className="bg-slate-950 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
              Featured Videos
            </h2>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoSelect(video)}
                  onMouseEnter={() => setIsHovering(video.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                    currentVideo.id === video.id
                      ? 'ring-4 ring-cyan-400'
                      : 'hover:scale-105 hover:ring-2 hover:ring-white/50'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full bg-slate-800">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity ${
                      isHovering === video.id ? 'opacity-100' : 'opacity-60'
                    }`}>
                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/90 transition-transform ${
                          isHovering === video.id ? 'scale-110' : 'scale-100'
                        }`}>
                          <svg
                            className="h-6 w-6 translate-x-0.5 text-black"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Currently Playing Badge */}
                    {currentVideo.id === video.id && (
                      <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-cyan-400 px-2 py-1 text-xs font-bold text-black">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-black"></div>
                        PLAYING
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="bg-slate-900 p-3">
                    <h3 className="line-clamp-2 text-left text-sm font-semibold text-white sm:text-base">
                      {video.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Stay Updated with the Latest Tech
            </h2>
            <p className="mb-8 text-gray-400">
              Discover cutting-edge tools, frameworks, and technologies that power modern app development
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                #AI
              </span>
              <span className="rounded-full bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-400">
                #Development
              </span>
              <span className="rounded-full bg-purple-400/10 px-4 py-2 text-sm font-medium text-purple-400">
                #Cloud
              </span>
              <span className="rounded-full bg-green-400/10 px-4 py-2 text-sm font-medium text-green-400">
                #DevOps
              </span>
            </div>
          </div>
        </section>
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

