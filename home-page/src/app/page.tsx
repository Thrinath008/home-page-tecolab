'use client'
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function HomePage() {


  const router = useRouter();
  return (
    <>
      <Head>
        <title>Tecolab - Learn by Building</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=container-queries"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      primary: '#481dc9',
                      'background-light': '#f6f6f8',
                      'background-dark': '#151121',
                    },
                    fontFamily: {
                      display: ['Inter'],
                    },
                    borderRadius: {
                      DEFAULT: '0.5rem',
                      lg: '1rem',
                      xl: '1.5rem',
                      full: '9999px',
                    },
                  },
                },
              }
            `,
          }}
        />
        <style>{`
          .bg-hero-pattern {
            background-image: url('/pattern.svg');
            background-repeat: repeat;
            background-position: center;
            background-size: auto;
          }
          .light .bg-hero-pattern {
            background-image: url('/pattern-light.svg');
          }
        `}</style>
      </Head>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <h2 className="text-xl font-bold">Tecolab</h2>
            </div>
            <nav className="flex space-x-8 text-gray-800 dark:text-gray-300 font-semibold">
              <a href="#" className="hover:text-primary">
                Explore
              </a>
              <a href="#" className="hover:text-primary">
                Roadmaps
              </a>
              <a href="#" className="hover:text-primary">
                Projects
              </a>
              <a href="#" className="hover:text-primary">
                Community
              </a>
            </nav>
            <div className="flex space-x-4">
              <button onClick={() => router.push("/login")} className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white">
                Login
              </button>
              <button className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90">
                Register
              </button>
            </div>
          </div>
        </header>
        <main>
          <section className="relative flex min-h-screen items-center justify-center bg-hero-pattern">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
                Learn by Building with <span className="text-primary">Real-World Projects</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                Join thousands of learners building real projects and mastering new skills.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <button className="px-8 py-3 text-base font-bold text-white bg-primary hover:bg-primary/90 rounded-lg transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
                  Get Started
                </button>
                <button className="px-8 py-3 text-base font-bold text-gray-800 dark:text-gray-200 bg-gray-200/50 dark:bg-gray-700/50 hover:bg-gray-300/70 dark:hover:bg-gray-600/70 rounded-lg transition-colors">
                  Explore Projects
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}