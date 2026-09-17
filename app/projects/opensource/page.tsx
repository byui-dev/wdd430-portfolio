interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
}

export default async function OpenSourceProjectsPage() {
  // fetch data on the server with the type query parameter
  const res = await fetch(
    "http://localhost:3000/api/projects?type=opensource",
    {
      cache: "no-store", // Disable caching to always get fresh data
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch open source projects");
  }

  const projects: Project[] = await res.json();

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Open Source Projects</h2>
      {projects.length === 0 ? (
        <p>No open source projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
