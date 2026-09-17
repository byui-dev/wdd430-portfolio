// Define a TypeScript interface for the props of the ProjectsPage component
interface Project {
  id: string;
  name: string;
  description: string;
}

export default async function ProjectsPage() {
  // 1. Fetch data directly on the server
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store", // Disable caching to always get fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects: Project[] = await res.json();

  // Render the data
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
