import { getProjects, type Project } from "@/lib/projects-db";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  // 1. Initialize an empty variable to hold your data safely outside the block
  let projects: Project[] = [];
  let hasError = false;

  try {
    // 2. Keep ONLY the dangerous database query operation inside the try/catch
    projects = await getProjects();
  } catch {
    // Flag that a database failure occurred
    hasError = true;
  }

  // 3. Handle your fallback error view cleanly out in the open
  if (hasError) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Projects</h1>
        <p>Error loading projects. Please try again later.</p>
      </main>
    );
  }

  // 4. Return your normal successful JSX safely away from any try/catch gates
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
