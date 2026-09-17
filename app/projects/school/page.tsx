interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
}

export default async function SchoolProjectsPage() {
  // Automatically switch between Vercel URL environments and Localhost
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';
  
  const res = await fetch(`${baseURL}/api/projects?type=school`, {
    cache: "no-store", // Disable caching to always get fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch school projects");
  }

  const projects: Project[] = await res.json();

  return (
    <main style={{ padding: "2rem" }}>
      <h2>School Projects</h2>
      {projects.length === 0 ? (
        <p>No school projects found.</p>
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