'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';

const sections = [
  { id: 'ai-development', label: 'AI Development' },
  { id: 'frontend', label: 'Frontend Technologies' },
  { id: 'backend', label: 'Backend Technologies' },
  { id: 'devops', label: 'DevOps & Infrastructure' },
  { id: 'database', label: 'Database Technologies' },
  { id: 'auth', label: 'Authentication & Security' },
  { id: 'ai-platforms', label: 'AI/ML Platforms' },
  { id: 'vector-db', label: 'Vector Databases' },
  { id: 'local-ai', label: 'Local AI Models' },
  { id: 'architecture', label: 'Architecture & Design' },
  { id: 'reference', label: 'Quick Reference Matrix' },
  { id: 'use-cases', label: 'Technology Stack Combinations' },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState('ai-development');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{name: string; section: string; id: string}>>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Searchable index of all technologies and sections
  const searchableItems = [
    // Frontend
    { name: 'Next.js', section: 'Frontend Technologies', id: 'frontend' },
    { name: 'React.js', section: 'Frontend Technologies', id: 'frontend' },
    { name: 'Tailwind CSS', section: 'Frontend Technologies', id: 'frontend' },
    { name: 'ESLint', section: 'Frontend Technologies', id: 'frontend' },
    // Backend
    { name: 'Python', section: 'Backend Technologies', id: 'backend' },
    { name: 'FastAPI', section: 'Backend Technologies', id: 'backend' },
    { name: '.NET Core', section: 'Backend Technologies', id: 'backend' },
    // DevOps
    { name: 'Docker', section: 'DevOps & Infrastructure', id: 'devops' },
    { name: 'Portainer', section: 'DevOps & Infrastructure', id: 'devops' },
    { name: 'GitHub Actions', section: 'DevOps & Infrastructure', id: 'devops' },
    { name: 'GitHub Container Registry', section: 'DevOps & Infrastructure', id: 'devops' },
    { name: 'Terraform', section: 'DevOps & Infrastructure', id: 'devops' },
    // Database
    { name: 'PostgreSQL', section: 'Database Technologies', id: 'database' },
    { name: 'Supabase', section: 'Database Technologies', id: 'database' },
    { name: 'Azure SQL Server', section: 'Database Technologies', id: 'database' },
    { name: 'SQL Server Enterprise', section: 'Database Technologies', id: 'database' },
    { name: 'MySQL', section: 'Database Technologies', id: 'database' },
    { name: 'MariaDB', section: 'Database Technologies', id: 'database' },
    { name: 'MongoDB', section: 'Database Technologies', id: 'database' },
    { name: 'Microsoft Garnet', section: 'Database Technologies', id: 'database' },
    { name: 'Redis Cache', section: 'Database Technologies', id: 'database' },
    // Auth
    { name: 'Azure Entra', section: 'Authentication & Security', id: 'auth' },
    { name: 'Auth0', section: 'Authentication & Security', id: 'auth' },
    { name: 'AWS IAM', section: 'Authentication & Security', id: 'auth' },
    { name: 'Okta', section: 'Authentication & Security', id: 'auth' },
    { name: 'NextAuth.js', section: 'Authentication & Security', id: 'auth' },
    // AI Platforms
    { name: 'Azure AI Foundry', section: 'AI/ML Platforms', id: 'ai-platforms' },
    { name: 'LangGraph', section: 'AI/ML Platforms', id: 'ai-platforms' },
    { name: 'Google AI Studio', section: 'AI/ML Platforms', id: 'ai-platforms' },
    { name: 'Banana', section: 'AI/ML Platforms', id: 'ai-platforms' },
    { name: 'Imagen', section: 'AI/ML Platforms', id: 'ai-platforms' },
    // Vector DB
    { name: 'ChromaDB', section: 'Vector Databases', id: 'vector-db' },
    { name: 'Qdrant', section: 'Vector Databases', id: 'vector-db' },
    { name: 'Azure Cosmos NoSQL', section: 'Vector Databases', id: 'vector-db' },
    // Local AI
    { name: 'Mistral', section: 'Local AI Models', id: 'local-ai' },
    { name: 'Ollama', section: 'Local AI Models', id: 'local-ai' },
    { name: 'Open WebUI', section: 'Local AI Models', id: 'local-ai' },
    // Architecture
    { name: 'Eraser AI', section: 'Architecture & Design', id: 'architecture' },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchableItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.section.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (id: string) => {
    scrollToSection(id);
    setSearchQuery('');
    setSearchResults([]);
    setShowResults(false);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Side Navigation */}
            <aside className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] lg:w-64 shrink-0">
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-4">
                <h3 className="mb-4 text-lg font-semibold text-cyan-400">Services</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-12 pb-16">
              {/* AI Development Section */}
              <section id="ai-development" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-4 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    AI-Powered Development Platform
                  </h2>
                  
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Accelerated Development with Cursor AI & Claude AI, Google Gemini, Cursor Composer
                  </h3>
                  
                  <p className="mb-6 leading-relaxed text-gray-300">
                    Our development workflow leverages the most advanced AI-powered development tools available today, dramatically increasing productivity while maintaining enterprise-grade code quality. Cursor AI with Model Context Protocol (MCP) serves as our intelligent IDE, providing context-aware code generation, multi-file editing capabilities, and seamless integration with databases, APIs, and development tools. This allows us to understand entire codebases at once, enabling intelligent refactoring and architectural improvements that would take traditional development teams weeks to accomplish.
                  </p>
                  
                  <p className="leading-relaxed text-gray-300">
                    Combined with Claude AI's Composer and Task Management features, we orchestrate complex multi-step development workflows, automate repetitive tasks, generate comprehensive documentation, and maintain coding standards across large projects. This AI-augmented approach allows us to deliver production-ready applications <span className="font-semibold text-cyan-400">3-5x faster</span> than traditional development methods while reducing bugs and technical debt through intelligent code analysis and automated testing workflows.
                  </p>
                </div>
              </section>

              {/* Search Technologies */}
              <section className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h3 className="mb-4 text-xl font-semibold text-white">Search Technologies & Services</h3>
                  <div className="relative" ref={searchRef}>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => searchQuery && setShowResults(true)}
                      placeholder="Search for technologies (e.g., Next.js, Docker, PostgreSQL)..."
                      className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 pl-12 text-white placeholder-gray-500 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                    <svg
                      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSearchResults([]);
                          setShowResults(false);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-white"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                    
                    {/* Search Results Dropdown */}
                    {showResults && searchResults.length > 0 && (
                      <div className="absolute z-50 mt-2 w-full rounded-lg bg-slate-800 border border-slate-700 shadow-xl max-h-96 overflow-y-auto">
                        <div className="p-2">
                          <p className="px-3 py-2 text-xs font-semibold text-gray-400">
                            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                          </p>
                          {searchResults.map((result, index) => (
                            <button
                              key={index}
                              onClick={() => handleResultClick(result.id)}
                              className="w-full rounded-md px-3 py-3 text-left transition-colors hover:bg-slate-700"
                            >
                              <div className="font-semibold text-white">{result.name}</div>
                              <div className="text-sm text-gray-400">{result.section}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {showResults && searchQuery && searchResults.length === 0 && (
                      <div className="absolute z-50 mt-2 w-full rounded-lg bg-slate-800 border border-slate-700 shadow-xl p-4">
                        <p className="text-center text-gray-400">No technologies found matching "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Frontend Technologies */}
              <section id="frontend" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Frontend Technologies
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Next.js */}
                    <div className="border-l-4 border-cyan-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Next.js</h3>
                      <p className="mb-3 text-sm text-gray-400">React Framework for Production</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">Core Capabilities:</h4>
                      <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
                        <li>Server-side rendering (SSR) and static site generation (SSG)</li>
                        <li>API routes for backend functionality</li>
                        <li>Automatic code splitting and optimization</li>
                        <li>Built-in image optimization</li>
                        <li>File-based routing system</li>
                        <li>Edge runtime support for global performance</li>
                      </ul>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Next.js enables AI-powered applications with exceptional performance through its hybrid rendering capabilities. Server-side rendering allows AI models to pre-process data before reaching the client, reducing latency for AI-driven recommendations and personalization. The framework's API routes can host AI endpoints for invoice processing, document analysis, and real-time predictions without separate backend infrastructure.
                      </p>
                    </div>

                    {/* React.js */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">React.js</h3>
                      <p className="mb-3 text-sm text-gray-400">JavaScript Library for Building User Interfaces</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">Core Capabilities:</h4>
                      <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
                        <li>Component-based architecture for reusable UI elements</li>
                        <li>Virtual DOM for efficient rendering</li>
                        <li>Declarative programming model</li>
                        <li>Rich ecosystem of libraries and tools</li>
                        <li>Hooks for state and side-effect management</li>
                        <li>Strong TypeScript integration</li>
                      </ul>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        React's component architecture perfectly suits AI-driven interfaces where different sections update independently based on model predictions. Real-time AI features like chatbots, sentiment analysis displays, and dynamic recommendations benefit from React's efficient re-rendering—only updating components affected by new AI predictions rather than entire pages.
                      </p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Tailwind CSS</h3>
                      <p className="mb-3 text-sm text-gray-400">Utility-First CSS Framework</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">Core Capabilities:</h4>
                      <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
                        <li>Utility classes for rapid UI development</li>
                        <li>Responsive design without custom CSS</li>
                        <li>Dark mode support built-in</li>
                        <li>Customizable design system</li>
                        <li>Tiny production bundle sizes</li>
                        <li>JIT (Just-In-Time) compiler for performance</li>
                      </ul>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Tailwind accelerates development of AI application interfaces by 3-5x through utility-first styling, crucial when iterating on AI-powered dashboards and data visualizations. AI applications often require rapid prototyping to test different data presentation approaches—Tailwind enables designers to modify layouts in real-time based on user feedback without touching CSS files.
                      </p>
                    </div>

                    {/* ESLint */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">ESLint</h3>
                      <p className="mb-3 text-sm text-gray-400">JavaScript Code Quality and Linting Tool</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">Core Capabilities:</h4>
                      <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
                        <li>Static code analysis for JavaScript/TypeScript</li>
                        <li>Automatic error detection before runtime</li>
                        <li>Code style enforcement</li>
                        <li>Custom rule configuration</li>
                        <li>Integration with IDEs and CI/CD pipelines</li>
                        <li>Auto-fix capabilities for common issues</li>
                      </ul>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        ESLint ensures AI-critical code maintains enterprise-grade quality by catching errors before they reach production—crucial in AI systems where bugs can lead to incorrect predictions or data processing errors. Integration with AI coding assistants like Cursor AI and Claude allows automated code review and suggestions, maintaining consistent coding standards across teams.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Backend Technologies */}
              <section id="backend" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Backend Technologies
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Python */}
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Python</h3>
                      <p className="mb-3 text-sm text-gray-400">High-Level Programming Language</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Python is the industry standard for AI and machine learning development, offering unparalleled access to frameworks like TensorFlow, PyTorch, scikit-learn, and Hugging Face Transformers. Building AI systems in Python means leveraging thousands of pre-trained models, NLP libraries, computer vision tools, and data processing frameworks unavailable in other languages.
                      </p>
                    </div>

                    {/* FastAPI */}
                    <div className="border-l-4 border-teal-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">FastAPI</h3>
                      <p className="mb-3 text-sm text-gray-400">Modern Python Web Framework</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        FastAPI is purpose-built for AI and ML services, providing the fastest Python framework for serving AI models in production. Its async architecture handles thousands of simultaneous AI inference requests—critical for real-time applications like fraud detection, invoice processing, or customer sentiment analysis.
                      </p>
                    </div>

                    {/* .NET Core */}
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">.NET Core</h3>
                      <p className="mb-3 text-sm text-gray-400">Cross-Platform Application Framework</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        .NET Core excels at building enterprise AI systems requiring extreme performance and reliability, particularly for financial services and payment processing. The framework's ML.NET library enables training and deploying machine learning models entirely in C#, perfect for organizations with existing .NET investments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DevOps & Infrastructure */}
              <section id="devops" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    DevOps & Infrastructure
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Docker */}
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Docker</h3>
                      <p className="mb-3 text-sm text-gray-400">Containerization Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Docker solves AI deployment's biggest challenge: dependency management and reproducibility. AI models often require specific Python versions, CUDA drivers, and conflicting library versions—Docker containers package everything together, ensuring models that work on data scientists' laptops run identically in production.
                      </p>
                    </div>

                    {/* Portainer */}
                    <div className="border-l-4 border-cyan-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Portainer</h3>
                      <p className="mb-3 text-sm text-gray-400">Container Management Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Portainer democratizes AI deployment by providing a visual interface for managing complex AI containerized systems, allowing non-DevOps team members to deploy and monitor AI services. The platform's template system enables one-click deployment of complete AI stacks, reducing deployment time from hours to minutes.
                      </p>
                    </div>

                    {/* GitHub Actions */}
                    <div className="border-l-4 border-slate-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">GitHub Actions</h3>
                      <p className="mb-3 text-sm text-gray-400">CI/CD Automation Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        GitHub Actions automates AI model deployment, testing, and validation workflows directly from code repositories, ensuring AI systems maintain quality and performance standards across every release. For AI applications, Actions can automatically retrain models when new training data is committed, run inference performance benchmarks, validate model accuracy against test datasets, and deploy updated models to production only when quality thresholds are met. The platform's integration with the GitHub ecosystem means AI teams can trigger workflows based on pull requests, schedule model retraining jobs, and maintain complete audit trails of every model version deployed—critical for regulated industries requiring ML governance. GitHub Actions' marketplace provides pre-built workflows for popular AI frameworks (TensorFlow, PyTorch, Hugging Face), enabling teams to implement enterprise-grade MLOps pipelines in minutes rather than weeks.
                      </p>
                    </div>

                    {/* GitHub Container Registry */}
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">GitHub Container Registry</h3>
                      <p className="mb-3 text-sm text-gray-400">Container Image Storage and Distribution</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        GitHub Container Registry provides secure, version-controlled storage for AI model containers directly integrated with source code repositories, ensuring complete traceability from code to deployed model. For AI systems, the registry stores containerized models with specific library versions, CUDA dependencies, and preprocessing pipelines, guaranteeing that the exact model environment tested in development runs identically in production. The platform's fine-grained access control allows AI teams to manage who can pull production model containers while maintaining separate permissions for development images—critical for enterprises with compliance requirements. Integration with GitHub Actions enables automated container builds and security scanning: when data scientists push model updates, containers are automatically built, scanned for vulnerabilities, tagged with version numbers, and deployed only if security checks pass. For multi-cloud AI deployments, Container Registry provides a single source of truth for model images that can be pulled to AWS, Azure, GCP, or on-premise infrastructure, eliminating the need to maintain separate registries per cloud provider.
                      </p>
                    </div>

                    {/* Terraform */}
                    <div className="border-l-4 border-violet-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Terraform</h3>
                      <p className="mb-3 text-sm text-gray-400">Infrastructure as Code Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Terraform revolutionizes AI infrastructure management by defining cloud resources, databases, networks, and GPU clusters as code, enabling AI teams to provision entire ML environments in minutes with guaranteed consistency across development, staging, and production. For AI applications requiring complex infrastructure (Kubernetes clusters for model serving, vector databases, Redis caches, load balancers), Terraform scripts capture the complete architecture, allowing instant replication for new clients or disaster recovery scenarios. The platform's state management tracks infrastructure changes over time, critical when AI systems scale from prototype (single GPU instance) to production (multi-region deployment with auto-scaling model servers)—teams can preview infrastructure modifications before applying them, preventing costly mistakes like accidentally deleting production databases storing training data. Terraform's multi-cloud support allows AI consulting firms to deploy identical architectures to AWS, Azure, or GCP with minimal code changes, providing client flexibility and avoiding vendor lock-in. For regulated AI deployments, Terraform modules codify compliance requirements (encryption at rest, network isolation, audit logging) ensuring every AI environment meets security standards automatically. The platform integrates with CI/CD pipelines: when AI teams commit infrastructure changes, automated testing validates Terraform scripts before applying them to production, while drift detection alerts when manual changes create inconsistencies between code and actual infrastructure—essential for maintaining governance in enterprise AI systems where unauthorized modifications could compromise security or model performance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Database Technologies */}
              <section id="database" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Database Technologies
                  </h2>
                  
                  <div className="space-y-8">
                    {/* PostgreSQL */}
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">PostgreSQL</h3>
                      <p className="mb-3 text-sm text-gray-400">Advanced Relational Database</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        PostgreSQL's pgvector extension transforms it into a powerful vector database for AI applications, storing embeddings from language models and enabling semantic search across millions of documents in milliseconds. The database's JSON capabilities allow storing ML model predictions, confidence scores, and metadata without rigid schemas.
                      </p>
                    </div>

                    {/* Supabase */}
                    <div className="border-l-4 border-green-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Supabase</h3>
                      <p className="mb-3 text-sm text-gray-400">Open-Source Firebase Alternative (PostgreSQL-based)</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Supabase accelerates AI application development by eliminating backend boilerplate—auto-generated APIs mean AI frontends can immediately query predictions, user data, and model outputs without writing API code. Real-time subscriptions enable live AI dashboards where fraud alerts and predictions appear instantly.
                      </p>
                    </div>

                    {/* Azure SQL Server */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Azure SQL Server</h3>
                      <p className="mb-3 text-sm text-gray-400">Enterprise Cloud Database with AI Integration</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Azure SQL Server provides enterprise-grade database capabilities with built-in AI and machine learning services, allowing AI models to execute directly within the database for real-time predictions on transactional data. The platform's vector search capabilities enable semantic search across structured data, while automatic tuning uses AI to optimize query performance without manual intervention. For financial AI applications processing millions of transactions, Azure SQL's in-database ML means fraud detection models run where the data lives, eliminating latency from data movement. Integration with Azure AI services allows SQL queries to invoke computer vision, NLP, and anomaly detection models directly, enabling sophisticated AI features with T-SQL commands. The platform's enterprise security, compliance certifications (SOC 2, HIPAA, PCI-DSS), and automatic backups make it ideal for regulated industries deploying AI systems requiring absolute data integrity and auditability.
                      </p>
                    </div>

                    {/* SQL Server Enterprise */}
                    <div className="border-l-4 border-indigo-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">SQL Server Enterprise</h3>
                      <p className="mb-3 text-sm text-gray-400">On-Premise Mission-Critical Database Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        SQL Server Enterprise delivers maximum performance for AI workloads requiring on-premise deployment, offering SQL Server Machine Learning Services that run Python and R models directly in the database with parallel processing across all CPU cores. For enterprises with air-gapped AI requirements or data sovereignty constraints, SQL Server Enterprise processes sensitive data locally while executing complex ML models for fraud detection, customer churn prediction, and financial forecasting without external dependencies. The platform's columnstore indexes and in-memory OLTP dramatically accelerate AI training data preparation and feature engineering, reducing time from hours to minutes when aggregating billions of transactions. Advanced analytics functions enable data scientists to prototype models using T-SQL before deploying to production, while Resource Governor ensures AI workloads don't impact critical transactional systems. For Fortune 500 companies with existing SQL Server infrastructure, Enterprise edition provides a proven path to production AI with minimal architectural changes.
                      </p>
                    </div>

                    {/* MySQL */}
                    <div className="border-l-4 border-orange-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">MySQL</h3>
                      <p className="mb-3 text-sm text-gray-400">Open-Source Relational Database</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        MySQL powers AI applications requiring reliable, cost-effective data storage with global adoption and extensive ecosystem support, making it ideal for startups and mid-market AI deployments. The database's JSON document storage enables flexible schema evolution as AI models change, while full-text search capabilities support basic semantic search for AI-powered recommendation systems. MySQL's replication and clustering features allow AI applications to scale horizontally, distributing read-heavy AI inference queries across multiple servers while maintaining write consistency. For AI SaaS platforms serving thousands of customers, MySQL's mature multi-tenancy patterns and partition pruning enable efficient data isolation and query performance. The database integrates seamlessly with popular AI frameworks through Python, enabling rapid prototyping where data scientists query training data, store model predictions, and track experiment results using familiar SQL interfaces. MySQL's zero licensing cost makes it attractive for AI applications with unpredictable scaling requirements.
                      </p>
                    </div>

                    {/* MariaDB */}
                    <div className="border-l-4 border-teal-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">MariaDB</h3>
                      <p className="mb-3 text-sm text-gray-400">Enhanced MySQL-Compatible Database</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        MariaDB enhances MySQL with advanced analytics capabilities and columnar storage specifically designed for AI/ML workloads requiring complex analytical queries across massive datasets. The database's ColumnStore engine accelerates feature engineering for AI models, processing billions of rows for aggregations and transformations 100x faster than traditional row storage—critical when preparing training data for deep learning models. For real-time AI applications, MariaDB's parallel query execution enables sub-second analysis of customer behavior patterns, transaction anomalies, and trend predictions across years of historical data. The platform's temporal tables provide built-in time-travel queries, essential for training time-series prediction models and maintaining audit trails of AI-generated decisions for compliance. MariaDB's compatibility with MySQL means organizations can upgrade existing AI applications to gain performance benefits without code changes, while the open-source licensing and active community ensure long-term viability for enterprise AI deployments.
                      </p>
                    </div>

                    {/* MongoDB */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">MongoDB</h3>
                      <p className="mb-3 text-sm text-gray-400">Document-Oriented NoSQL Database</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        MongoDB's flexible document model perfectly suits AI applications where data structures evolve rapidly, allowing ML model outputs, predictions, and metadata to be stored without schema migrations as models improve and change over time. The database's native vector search capabilities enable semantic similarity queries across millions of documents, powering AI recommendation engines, duplicate detection systems, and intelligent search without separate vector databases. For AI platforms processing unstructured data (JSON API responses, IoT sensor streams, social media content), MongoDB stores raw data alongside AI-generated insights and classifications in single documents, simplifying queries and eliminating joins. MongoDB Atlas's built-in search powered by Lucene enables full-text search combined with vector similarity, allowing AI chatbots to find relevant documents using both keywords and semantic meaning. The platform's change streams provide real-time data feeds to AI models, enabling fraud detection systems to analyze transactions as they occur and recommendation engines to update instantly when user behavior changes.
                      </p>
                    </div>

                    {/* Microsoft Garnet */}
                    <div className="border-l-4 border-red-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Microsoft Garnet</h3>
                      <p className="mb-3 text-sm text-gray-400">High-Performance Remote Cache and Storage</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Microsoft Garnet delivers extreme performance for AI applications requiring ultra-low latency caching and session management, processing millions of requests per second with sub-millisecond response times—critical for real-time AI inference serving. For AI-powered recommendation systems, Garnet caches model predictions, user embeddings, and feature vectors in memory, enabling instant personalization without repeatedly querying databases or recomputing expensive ML inference. The platform's compatibility with Redis protocols means existing AI applications using Redis can migrate to Garnet for 10x performance improvements without code changes, while gaining enterprise support and Azure integration. Garnet's advanced data structures (sorted sets, bitmaps, HyperLogLog) enable efficient storage of ML model outputs like ranking scores, user segments, and approximate cardinality counts essential for analytics pipelines. For AI systems serving millions of users, Garnet's clustering and replication ensure high availability while distributed caching reduces load on primary databases, allowing AI applications to scale horizontally while maintaining consistent sub-millisecond performance for cached inference results.
                      </p>
                    </div>

                    {/* Redis Cache */}
                    <div className="border-l-4 border-red-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Redis Cache</h3>
                      <p className="mb-3 text-sm text-gray-400">In-Memory Data Structure Store</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Redis Cache accelerates AI applications by storing frequently accessed model predictions, embeddings, and features in memory, reducing inference latency from hundreds of milliseconds to sub-millisecond response times—transforming user experience for real-time AI features. For AI chatbots and recommendation engines, Redis caches conversation history, user preferences, and recently computed predictions, allowing instant responses without repeated database queries or model inference. The platform's pub/sub messaging enables real-time distribution of AI model updates: when fraud detection models identify new patterns, Redis broadcasts alerts to all application servers instantly. Redis's support for complex data types (lists, sets, sorted sets, hashes) allows efficient storage of AI-specific data like similarity rankings, user segments, and time-series predictions used by ML pipelines. For multi-model AI systems, Redis serves as a coordination layer where different AI services (NLP, computer vision, recommendation) cache intermediate results and share context, reducing redundant computation and enabling sophisticated multi-step AI workflows with consistent performance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Authentication & Security */}
              <section id="auth" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Authentication & Security
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Azure Entra */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Azure Entra</h3>
                      <p className="mb-3 text-sm text-gray-400">Enterprise Identity and Access Management</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Azure Entra secures AI systems handling sensitive data by enforcing enterprise-grade authentication and conditional access—ensuring AI-powered financial applications only allow access from approved devices and locations. Integration with Microsoft's compliance tools ensures AI systems meet SOC 2, HIPAA, and GDPR requirements automatically.
                      </p>
                    </div>

                    {/* Auth0 */}
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Auth0</h3>
                      <p className="mb-3 text-sm text-gray-400">Customer Identity and Access Management Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Auth0 enables AI applications to offer frictionless, secure authentication experiences critical for customer-facing AI products. The platform's rules engine can integrate AI: using machine learning models to detect suspicious login patterns and automatically step up authentication when risk scores are high.
                      </p>
                    </div>

                    {/* AWS IAM */}
                    <div className="border-l-4 border-yellow-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">AWS IAM</h3>
                      <p className="mb-3 text-sm text-gray-400">AWS Identity and Access Management</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        AWS IAM provides enterprise-grade security for AI applications deployed on AWS infrastructure, enabling fine-grained access control to AI models, training data, and inference endpoints with role-based permissions that scale to thousands of users. For AI systems processing sensitive data, IAM policies enforce least-privilege access where data scientists can access training datasets but not production customer data, while ML engineers can deploy models but not modify training pipelines. The platform's integration with AWS AI services (SageMaker, Bedrock, Rekognition) allows centralized permission management: a single IAM role can govern access to model training, vector databases, and real-time inference APIs. AWS IAM's temporary credentials and session tokens enable secure AI workflows where automated pipelines authenticate dynamically without storing permanent credentials, critical for CI/CD systems deploying ML models. For multi-account AI architectures, IAM's cross-account access and AWS Organizations integration allow enterprises to maintain separate environments for AI development, staging, and production while centrally managing security policies and compliance requirements across all AWS AI resources.
                      </p>
                    </div>

                    {/* Okta */}
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Okta</h3>
                      <p className="mb-3 text-sm text-gray-400">Enterprise Identity and Access Management Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Okta delivers enterprise-grade identity management for AI applications requiring seamless integration across cloud providers and on-premise systems, enabling unified authentication across AWS, Azure, GCP, and internal AI platforms with single sign-on. For AI consulting firms serving Fortune 500 clients, Okta's workforce identity features allow client employees to access AI dashboards and models using their existing corporate credentials without creating separate accounts, while maintaining complete security isolation between organizations. The platform's adaptive authentication uses behavioral analytics and risk signals to dynamically adjust authentication requirements: if an AI system detects unusual model access patterns or data queries from anomalous locations, Okta automatically steps up to multi-factor authentication. Okta's API-first architecture enables AI applications to programmatically manage user lifecycles, provision access to new AI features based on roles, and automatically revoke permissions when employees change departments—critical for maintaining security in rapidly evolving AI deployments. For regulated industries, Okta provides audit logs and compliance reports showing exactly who accessed which AI models and data, meeting SOC 2, HIPAA, and GDPR requirements while supporting zero-trust security architectures for AI systems.
                      </p>
                    </div>

                    {/* NextAuth.js */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">NextAuth.js</h3>
                      <p className="mb-3 text-sm text-gray-400">Authentication Solution for Next.js Applications</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        NextAuth.js provides seamless authentication for AI applications built with Next.js, offering built-in support for OAuth providers, JWT tokens, and database sessions with minimal configuration—reducing AI app development time from weeks to hours. For AI-powered SaaS products, NextAuth.js handles authentication complexity while developers focus on AI features: users can sign in with Google, GitHub, or email, with session management and token refresh handled automatically. The library's integration with Next.js API routes enables secure AI endpoints where authentication is verified server-side before executing expensive model inference or accessing training data. NextAuth.js supports multiple database adapters (PostgreSQL, MongoDB, MySQL), allowing AI applications to store user sessions alongside model predictions and usage analytics in the same database for simplified architecture. For AI startups requiring rapid iteration, NextAuth.js's TypeScript support and React hooks provide type-safe authentication state management, ensuring AI features correctly handle authenticated vs. anonymous users. The platform's callback functions enable custom logic: automatically creating vector embeddings for new users, initializing AI personalization profiles, or logging model access for compliance—all executed seamlessly during the authentication flow.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* AI/ML Platforms */}
              <section id="ai-platforms" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    AI/ML Platforms & Orchestration
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Azure AI Foundry */}
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Azure AI Foundry</h3>
                      <p className="mb-3 text-sm text-gray-400">Enterprise AI Development Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Azure AI Foundry accelerates enterprise AI development by providing a complete platform for building, training, and deploying production-ready AI systems with enterprise governance built-in. The platform enables rapid experimentation with multiple AI models (GPT-4, Claude, Llama, Mistral) through a unified interface.
                      </p>
                    </div>

                    {/* LangGraph */}
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">LangGraph</h3>
                      <p className="mb-3 text-sm text-gray-400">Framework for Building Stateful AI Agents</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        LangGraph transforms simple AI models into sophisticated agents capable of multi-step reasoning and complex workflows essential for enterprise automation. For invoice processing, LangGraph orchestrates workflows where AI extracts data, validates against business rules, and routes for approval—reducing manual review by 80%.
                      </p>
                    </div>

                    {/* Google AI Studio */}
                    <div className="border-l-4 border-yellow-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Google AI Studio</h3>
                      <p className="mb-3 text-sm text-gray-400">Rapid AI Prototyping and API Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Google AI Studio accelerates AI development by providing instant access to state-of-the-art multimodal models without infrastructure setup. The browser-based interface allows business stakeholders to test Gemini models on actual company data and validate ROI before committing to implementation.
                      </p>
                    </div>

                    {/* Banana */}
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Banana (nano banana)</h3>
                      <p className="mb-3 text-sm text-gray-400">Serverless GPU Infrastructure for ML Models</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Banana solves the ML infrastructure challenge for AI applications with unpredictable traffic patterns, providing enterprise-grade GPU compute that scales to zero when unused. The platform's sub-second cold starts mean occasional-use AI features maintain real-time performance without keeping expensive GPUs idle.
                      </p>
                    </div>

                    {/* Imagen */}
                    <div className="border-l-4 border-pink-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Imagen (Google)</h3>
                      <p className="mb-3 text-sm text-gray-400">Text-to-Image AI Model</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Imagen enables enterprises to automate visual content creation at scale, particularly valuable for e-commerce, marketing, and product development. For retail companies, Imagen generates lifestyle images and seasonal variations from product descriptions—reducing photography costs by 70% while accelerating time-to-market.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vector Databases */}
              <section id="vector-db" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Vector Databases & Embedding Storage
                  </h2>
                  
                  <div className="space-y-8">
                    {/* ChromaDB */}
                    <div className="border-l-4 border-orange-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">ChromaDB</h3>
                      <p className="mb-3 text-sm text-gray-400">Open-Source Embedding Database</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        ChromaDB excels at rapid prototyping of AI applications requiring semantic search, making it ideal for proof-of-concept projects. Building a document Q&A system becomes trivial: upload PDFs, ChromaDB generates embeddings automatically, and semantic queries return relevant content in milliseconds.
                      </p>
                    </div>

                    {/* Qdrant */}
                    <div className="border-l-4 border-red-600 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Qdrant</h3>
                      <p className="mb-3 text-sm text-gray-400">High-Performance Vector Search Engine</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Qdrant delivers enterprise-grade vector search performance for production AI systems handling millions of users and billions of embeddings. Sub-10ms search latency ensures chatbots respond instantly even when searching across every support ticket and knowledge base article ever created.
                      </p>
                    </div>

                    {/* Azure Cosmos NoSQL */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Azure Cosmos NoSQL</h3>
                      <p className="mb-3 text-sm text-gray-400">Globally Distributed NoSQL Database with Vector Search</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Azure Cosmos NoSQL combines globally distributed document storage with native vector search capabilities, enabling AI applications to store transactional data, embeddings, and metadata in a single database with automatic multi-region replication and sub-10ms latency worldwide. For global AI applications serving millions of users, Cosmos DB's vector indexing allows semantic search across product catalogs, customer support documents, and user-generated content while maintaining single-digit millisecond read latency in 30+ Azure regions simultaneously. The platform's multi-model API support (NoSQL, MongoDB, Cassandra, Gremlin) means AI applications can use familiar interfaces while gaining enterprise features like automatic scaling, 99.999% availability SLA, and compliance certifications (SOC 2, HIPAA, ISO 27001). For AI-powered e-commerce and recommendation systems, Cosmos DB stores user profiles, purchase history, and preference embeddings together, enabling real-time personalization queries that combine transactional filters with vector similarity in milliseconds. The database's integration with Azure AI services allows stored documents to be automatically vectorized and indexed for semantic search, while change feed capabilities enable real-time ML model updates whenever new data arrives—critical for fraud detection and recommendation systems requiring immediate adaptation to user behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local AI Models */}
              <section id="local-ai" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Local AI Models & Inference
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Mistral */}
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Mistral</h3>
                      <p className="mb-3 text-sm text-gray-400">High-Performance Open-Source Language Models</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Mistral models provide enterprise-quality AI capabilities with complete data privacy and zero per-token costs—critical for financial services and healthcare handling sensitive data that cannot leave corporate networks. Processing 10 million invoices costs $0 after initial setup versus $50,000+ with cloud APIs.
                      </p>
                    </div>

                    {/* Ollama */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Ollama</h3>
                      <p className="mb-3 text-sm text-gray-400">Local LLM Runtime and Management Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Ollama democratizes AI development by making local LLM deployment as simple as "ollama run llama3"—eliminating cloud dependencies, API costs, and data privacy concerns. Ollama's OpenAI-compatible API means applications built for GPT-4 can switch to local Llama 3 with a single configuration change.
                      </p>
                    </div>

                    {/* Open WebUI */}
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Open WebUI</h3>
                      <p className="mb-3 text-sm text-gray-400">Self-Hosted AI Interface Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Open WebUI transforms local AI models into enterprise-ready applications with professional interfaces, user management, and document processing. For companies wanting ChatGPT functionality with data privacy, Open WebUI provides an identical experience while keeping conversations on corporate servers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Architecture & Design */}
              <section id="architecture" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Architecture & Design Tools
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Eraser AI */}
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h3 className="mb-2 text-xl font-semibold text-white">Eraser AI</h3>
                      <p className="mb-3 text-sm text-gray-400">AI-Powered Architecture Diagramming and Documentation Platform</p>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">Core Capabilities:</h4>
                      <ul className="mb-4 list-inside list-disc space-y-1 text-gray-300">
                        <li>AI-generated architecture diagrams from text descriptions</li>
                        <li>Real-time collaborative diagramming</li>
                        <li>Automatic documentation generation</li>
                        <li>Database schema visualization</li>
                        <li>Cloud infrastructure diagram creation</li>
                        <li>Version control and diagram history</li>
                      </ul>
                      
                      <h4 className="mb-2 text-sm font-semibold text-cyan-400">AI Value Proposition:</h4>
                      <p className="text-gray-300">
                        Eraser AI revolutionizes software architecture documentation by transforming natural language descriptions into professional technical diagrams in seconds, eliminating hours of manual diagramming work. For AI development teams, Eraser AI generates system architecture diagrams showing data flows between ML models, databases, APIs, and frontend components—simply describe "AI invoice processing system with FastAPI backend, PostgreSQL database, and Next.js frontend" and receive production-ready architecture diagrams instantly. The platform's AI understands technical terminology: request "microservices architecture with Redis cache, Docker containers, and Azure AI Foundry integration" and it automatically positions components with proper connections and annotations following industry best practices. For AI consulting delivering to Fortune 500 clients, Eraser AI maintains consistency across documentation: database schemas, cloud infrastructure diagrams, and API architecture all follow the same visual language, while collaborative editing allows distributed teams to refine diagrams in real-time during planning sessions. The platform's version control tracks architectural evolution as AI systems grow, enabling teams to visualize how adding new ML models or data pipelines impacts existing infrastructure. Eraser AI integrates with development workflows, allowing architects to generate diagrams from code repositories or database schemas automatically, ensuring documentation stays synchronized with implementation—critical for regulated industries requiring accurate technical documentation for AI system audits and compliance reviews.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Reference Matrix */}
              <section id="reference" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Quick Reference Matrix
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="pb-3 pr-4 font-semibold text-cyan-400">Technology</th>
                          <th className="pb-3 pr-4 font-semibold text-cyan-400">Primary Use</th>
                          <th className="pb-3 pr-4 font-semibold text-cyan-400">AI Superpower</th>
                          <th className="pb-3 font-semibold text-cyan-400">Best For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        {/* Frontend */}
                        <tr><td className="py-3 pr-4 text-white">Next.js</td><td className="py-3 pr-4 text-gray-300">Frontend Framework</td><td className="py-3 pr-4 text-gray-300">Edge AI, SSR for ML</td><td className="py-3 text-gray-300">Fast AI dashboards</td></tr>
                        <tr><td className="py-3 pr-4 text-white">React.js</td><td className="py-3 pr-4 text-gray-300">UI Library</td><td className="py-3 pr-4 text-gray-300">Reactive AI interfaces</td><td className="py-3 text-gray-300">Real-time AI updates</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Tailwind CSS</td><td className="py-3 pr-4 text-gray-300">Styling Framework</td><td className="py-3 pr-4 text-gray-300">Rapid AI UI iteration</td><td className="py-3 text-gray-300">Data-heavy dashboards</td></tr>
                        <tr><td className="py-3 pr-4 text-white">ESLint</td><td className="py-3 pr-4 text-gray-300">Code Quality Tool</td><td className="py-3 pr-4 text-gray-300">Prevent AI system bugs</td><td className="py-3 text-gray-300">Mission-critical AI apps</td></tr>
                        {/* Backend */}
                        <tr><td className="py-3 pr-4 text-white">Python</td><td className="py-3 pr-4 text-gray-300">Backend Language</td><td className="py-3 pr-4 text-gray-300">ML ecosystem access</td><td className="py-3 text-gray-300">Model training, data science</td></tr>
                        <tr><td className="py-3 pr-4 text-white">FastAPI</td><td className="py-3 pr-4 text-gray-300">API Framework</td><td className="py-3 pr-4 text-gray-300">High-concurrency AI serving</td><td className="py-3 text-gray-300">Real-time ML inference APIs</td></tr>
                        <tr><td className="py-3 pr-4 text-white">.NET Core</td><td className="py-3 pr-4 text-gray-300">Enterprise Framework</td><td className="py-3 pr-4 text-gray-300">High-performance AI</td><td className="py-3 text-gray-300">Financial AI, payments</td></tr>
                        {/* DevOps */}
                        <tr><td className="py-3 pr-4 text-white">Docker</td><td className="py-3 pr-4 text-gray-300">Containerization</td><td className="py-3 pr-4 text-gray-300">ML reproducibility</td><td className="py-3 text-gray-300">Model deployment, scaling</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Portainer</td><td className="py-3 pr-4 text-gray-300">Container Management</td><td className="py-3 pr-4 text-gray-300">AI stack visualization</td><td className="py-3 text-gray-300">Multi-model orchestration</td></tr>
                        <tr><td className="py-3 pr-4 text-white">GitHub Actions</td><td className="py-3 pr-4 text-gray-300">CI/CD Platform</td><td className="py-3 pr-4 text-gray-300">Automated ML workflows</td><td className="py-3 text-gray-300">MLOps pipelines</td></tr>
                        <tr><td className="py-3 pr-4 text-white">GitHub Container Registry</td><td className="py-3 pr-4 text-gray-300">Container Registry</td><td className="py-3 pr-4 text-gray-300">Model image versioning</td><td className="py-3 text-gray-300">Multi-cloud AI deployment</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Terraform</td><td className="py-3 pr-4 text-gray-300">Infrastructure as Code</td><td className="py-3 pr-4 text-gray-300">Reproducible AI infrastructure</td><td className="py-3 text-gray-300">Multi-cloud environments</td></tr>
                        {/* Databases */}
                        <tr><td className="py-3 pr-4 text-white">PostgreSQL</td><td className="py-3 pr-4 text-gray-300">Relational Database</td><td className="py-3 pr-4 text-gray-300">Vector search, hybrid data</td><td className="py-3 text-gray-300">AI + transactional workloads</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Supabase</td><td className="py-3 pr-4 text-gray-300">Backend-as-a-Service</td><td className="py-3 pr-4 text-gray-300">Instant AI APIs</td><td className="py-3 text-gray-300">Rapid AI prototyping</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Azure SQL Server</td><td className="py-3 pr-4 text-gray-300">Cloud Database</td><td className="py-3 pr-4 text-gray-300">In-database ML</td><td className="py-3 text-gray-300">Enterprise AI, compliance</td></tr>
                        <tr><td className="py-3 pr-4 text-white">SQL Server Enterprise</td><td className="py-3 pr-4 text-gray-300">On-Premise Database</td><td className="py-3 pr-4 text-gray-300">Parallel ML processing</td><td className="py-3 text-gray-300">Air-gapped AI systems</td></tr>
                        <tr><td className="py-3 pr-4 text-white">MySQL</td><td className="py-3 pr-4 text-gray-300">Open-Source RDBMS</td><td className="py-3 pr-4 text-gray-300">Cost-effective scaling</td><td className="py-3 text-gray-300">Startups, mid-market AI</td></tr>
                        <tr><td className="py-3 pr-4 text-white">MariaDB</td><td className="py-3 pr-4 text-gray-300">MySQL-Compatible DB</td><td className="py-3 pr-4 text-gray-300">Columnar analytics</td><td className="py-3 text-gray-300">Feature engineering</td></tr>
                        <tr><td className="py-3 pr-4 text-white">MongoDB</td><td className="py-3 pr-4 text-gray-300">Document Database</td><td className="py-3 pr-4 text-gray-300">Flexible AI data models</td><td className="py-3 text-gray-300">Unstructured AI data</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Microsoft Garnet</td><td className="py-3 pr-4 text-gray-300">Remote Cache</td><td className="py-3 pr-4 text-gray-300">Ultra-low latency caching</td><td className="py-3 text-gray-300">Real-time inference</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Redis Cache</td><td className="py-3 pr-4 text-gray-300">In-Memory Store</td><td className="py-3 pr-4 text-gray-300">Sub-ms prediction caching</td><td className="py-3 text-gray-300">High-traffic AI apps</td></tr>
                        {/* Authentication */}
                        <tr><td className="py-3 pr-4 text-white">Azure Entra</td><td className="py-3 pr-4 text-gray-300">Enterprise Auth</td><td className="py-3 pr-4 text-gray-300">Enterprise AI security</td><td className="py-3 text-gray-300">Fortune 50 deployments</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Auth0</td><td className="py-3 pr-4 text-gray-300">Customer Auth</td><td className="py-3 pr-4 text-gray-300">Frictionless AI access</td><td className="py-3 text-gray-300">SaaS AI products</td></tr>
                        <tr><td className="py-3 pr-4 text-white">AWS IAM</td><td className="py-3 pr-4 text-gray-300">AWS Identity</td><td className="py-3 pr-4 text-gray-300">Fine-grained AI permissions</td><td className="py-3 text-gray-300">AWS AI deployments</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Okta</td><td className="py-3 pr-4 text-gray-300">Enterprise IAM</td><td className="py-3 pr-4 text-gray-300">Unified multi-cloud auth</td><td className="py-3 text-gray-300">Enterprise consulting</td></tr>
                        <tr><td className="py-3 pr-4 text-white">NextAuth.js</td><td className="py-3 pr-4 text-gray-300">Next.js Auth</td><td className="py-3 pr-4 text-gray-300">Seamless Next.js integration</td><td className="py-3 text-gray-300">AI startups, rapid dev</td></tr>
                        {/* AI Platforms */}
                        <tr><td className="py-3 pr-4 text-white">Azure AI Foundry</td><td className="py-3 pr-4 text-gray-300">AI Platform</td><td className="py-3 pr-4 text-gray-300">Enterprise MLOps</td><td className="py-3 text-gray-300">Regulated industry AI</td></tr>
                        <tr><td className="py-3 pr-4 text-white">LangGraph</td><td className="py-3 pr-4 text-gray-300">AI Agent Framework</td><td className="py-3 pr-4 text-gray-300">Stateful workflows</td><td className="py-3 text-gray-300">Complex automation</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Google AI Studio</td><td className="py-3 pr-4 text-gray-300">AI Prototyping</td><td className="py-3 pr-4 text-gray-300">Multimodal testing</td><td className="py-3 text-gray-300">Gemini evaluation</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Banana</td><td className="py-3 pr-4 text-gray-300">Serverless GPU</td><td className="py-3 pr-4 text-gray-300">Zero-scaling ML infra</td><td className="py-3 text-gray-300">Variable traffic AI</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Imagen</td><td className="py-3 pr-4 text-gray-300">Text-to-Image AI</td><td className="py-3 pr-4 text-gray-300">Automated visuals</td><td className="py-3 text-gray-300">E-commerce, marketing</td></tr>
                        {/* Vector Databases */}
                        <tr><td className="py-3 pr-4 text-white">ChromaDB</td><td className="py-3 pr-4 text-gray-300">Vector Database</td><td className="py-3 pr-4 text-gray-300">Rapid prototyping</td><td className="py-3 text-gray-300">POCs, startups, demos</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Qdrant</td><td className="py-3 pr-4 text-gray-300">Vector Search</td><td className="py-3 pr-4 text-gray-300">Billion-scale performance</td><td className="py-3 text-gray-300">Enterprise semantic search</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Azure Cosmos NoSQL</td><td className="py-3 pr-4 text-gray-300">Global NoSQL + Vector</td><td className="py-3 pr-4 text-gray-300">Multi-region vector search</td><td className="py-3 text-gray-300">Global AI applications</td></tr>
                        {/* Local AI */}
                        <tr><td className="py-3 pr-4 text-white">Mistral</td><td className="py-3 pr-4 text-gray-300">Open LLM</td><td className="py-3 pr-4 text-gray-300">Private AI, zero cost</td><td className="py-3 text-gray-300">Sensitive data, high-volume</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Ollama</td><td className="py-3 pr-4 text-gray-300">Local LLM Runtime</td><td className="py-3 pr-4 text-gray-300">On-premise deployment</td><td className="py-3 text-gray-300">Air-gapped systems</td></tr>
                        <tr><td className="py-3 pr-4 text-white">Open WebUI</td><td className="py-3 pr-4 text-gray-300">AI Interface</td><td className="py-3 pr-4 text-gray-300">User-friendly local AI</td><td className="py-3 text-gray-300">Internal AI assistants</td></tr>
                        {/* Architecture */}
                        <tr><td className="py-3 pr-4 text-white">Eraser AI</td><td className="py-3 pr-4 text-gray-300">Architecture Diagrams</td><td className="py-3 pr-4 text-gray-300">AI-generated diagrams</td><td className="py-3 text-gray-300">Technical documentation</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Technology Stack Combinations */}
              <section id="use-cases" className="scroll-mt-32">
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-6 sm:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-cyan-400 sm:text-3xl">
                    Technology Stack Combinations for Common AI Use Cases
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Invoice Processing */}
                    <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold text-white">AI-Powered Invoice Processing Platform</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="font-semibold text-cyan-400">Frontend:</span> Next.js + React + Tailwind CSS</li>
                        <li><span className="font-semibold text-cyan-400">Backend:</span> FastAPI (async processing) + Python (OCR/NLP models)</li>
                        <li><span className="font-semibold text-cyan-400">AI Platform:</span> Azure AI Foundry + LangGraph</li>
                        <li><span className="font-semibold text-cyan-400">Database:</span> PostgreSQL + Qdrant</li>
                        <li><span className="font-semibold text-cyan-400">Auth:</span> Azure Entra</li>
                        <li><span className="font-semibold text-cyan-400">Deploy:</span> Docker + Portainer</li>
                      </ul>
                    </div>

                    {/* Fraud Detection */}
                    <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold text-white">Real-Time Fraud Detection System</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="font-semibold text-cyan-400">Frontend:</span> React + Tailwind CSS</li>
                        <li><span className="font-semibold text-cyan-400">Backend:</span> .NET Core + FastAPI</li>
                        <li><span className="font-semibold text-cyan-400">AI Models:</span> Mistral (on-premise) + Azure AI Foundry</li>
                        <li><span className="font-semibold text-cyan-400">Database:</span> PostgreSQL + Supabase</li>
                        <li><span className="font-semibold text-cyan-400">Auth:</span> Auth0 + Azure Entra</li>
                        <li><span className="font-semibold text-cyan-400">Deploy:</span> Docker</li>
                      </ul>
                    </div>

                    {/* Sentiment Analysis */}
                    <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold text-white">Customer Sentiment Analysis Dashboard</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="font-semibold text-cyan-400">Frontend:</span> Next.js + React + Tailwind CSS</li>
                        <li><span className="font-semibold text-cyan-400">Backend:</span> Python + FastAPI</li>
                        <li><span className="font-semibold text-cyan-400">AI:</span> LangGraph + ChromaDB</li>
                        <li><span className="font-semibold text-cyan-400">Database:</span> Supabase</li>
                        <li><span className="font-semibold text-cyan-400">Auth:</span> Auth0</li>
                        <li><span className="font-semibold text-cyan-400">Deploy:</span> Docker + Portainer</li>
                      </ul>
                    </div>

                    {/* On-Premise AI */}
                    <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold text-white">On-Premise AI Assistant (Air-Gapped)</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="font-semibold text-cyan-400">Frontend:</span> Open WebUI</li>
                        <li><span className="font-semibold text-cyan-400">Backend:</span> Ollama</li>
                        <li><span className="font-semibold text-cyan-400">AI Models:</span> Mistral 7B + CodeLlama</li>
                        <li><span className="font-semibold text-cyan-400">Vector DB:</span> ChromaDB</li>
                        <li><span className="font-semibold text-cyan-400">Database:</span> PostgreSQL</li>
                        <li><span className="font-semibold text-cyan-400">Auth:</span> Azure Entra</li>
                        <li><span className="font-semibold text-cyan-400">Deploy:</span> Docker + Portainer</li>
                      </ul>
                    </div>

                    {/* Multi-Tenant SaaS */}
                    <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold text-white">Multi-Tenant SaaS AI Platform</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="font-semibold text-cyan-400">Frontend:</span> Next.js + React + Tailwind CSS</li>
                        <li><span className="font-semibold text-cyan-400">Backend:</span> FastAPI + LangGraph</li>
                        <li><span className="font-semibold text-cyan-400">AI:</span> Azure AI Foundry + Mistral</li>
                        <li><span className="font-semibold text-cyan-400">Vector DB:</span> Qdrant</li>
                        <li><span className="font-semibold text-cyan-400">Database:</span> Supabase + PostgreSQL</li>
                        <li><span className="font-semibold text-cyan-400">Auth:</span> Auth0</li>
                        <li><span className="font-semibold text-cyan-400">Deploy:</span> Docker + Portainer</li>
                      </ul>
                    </div>

                    {/* E-Commerce Visual */}
                    <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                      <h3 className="mb-3 text-lg font-semibold text-white">E-Commerce Visual Content Platform</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="font-semibold text-cyan-400">Frontend:</span> Next.js + React + Tailwind CSS</li>
                        <li><span className="font-semibold text-cyan-400">Backend:</span> FastAPI + Python</li>
                        <li><span className="font-semibold text-cyan-400">AI Models:</span> Imagen + Google AI Studio</li>
                        <li><span className="font-semibold text-cyan-400">Infrastructure:</span> Banana (serverless GPU)</li>
                        <li><span className="font-semibold text-cyan-400">Vector DB:</span> Qdrant</li>
                        <li><span className="font-semibold text-cyan-400">Database:</span> Supabase + PostgreSQL</li>
                        <li><span className="font-semibold text-cyan-400">Auth:</span> Auth0</li>
                        <li><span className="font-semibold text-cyan-400">Deploy:</span> Docker + Portainer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
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

