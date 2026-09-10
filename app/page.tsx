import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Calendar Project",
    description:
      "A Java GUI program that is built to demonstrate a calendar that can handle multiple tasks and events.",
    technologies: ["Java", "JavaFX"],
    link: "https://github.com/byui-dev/calendar-project",
  },
  {
    title: "Note taking app",
    description: "A simple note-taking app built using Kotlin",
    technologies: ["Kotlin"],
    link: "https://github.com/byui-dev/note-taking-app",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to my project portfolio.
          </h1>
        </header>

        <section className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          <p>
            I build practical software projects focused on problem solving, user
            experience, and clean design.
          </p>
        </section>

        <ProjectList projects={projects} />
      </div>
    </main>
  );
}
