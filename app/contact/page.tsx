export default function ContactPage() {
    return (
      <main className="flex min-h-screen flex-col bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
        <div className="mx-auto w-full max-w-5xl">
          <header className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in touch with me.
            </h1>
          </header>
                 
          <section className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            <p>
              If you have any questions, collaboration opportunities, or just want to say hello, feel free to reach out to me through the following channels:
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h3 className="mb-2 text-xl font-semibold">Email</h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  okdiphala@example.com
                </p>
              </div>
                        
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="mb-2 text-xl font-semibold">Location</h3>
              <p className="text-zinc-600 dark:text-zinc-300">
                2506 Unit 9 Mmabatho, South Africa
              </p>
            </div>
          </div>
          </section>
      </main>
    );
    
}