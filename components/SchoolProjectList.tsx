import { getProjects } from '@/lib/projects-db';
import { defaultMaxListeners } from 'events';

interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
}

export default async function SchoolProjectList() {
    // Add a temporary delay to test the skeleton loader
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    let projects: Project[] = [];
    try {
        const allProjects = await getProjects();
        projects = allProjects.filter((p) => p.type === 'school');
    } catch (error) {
        console.error("Failed to load school projects:", error);
    }

    if (projects.length === 0) return <p>No school projects found.</p>;

    return (
        <ul>
            {projects.map((project) => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </li>
            ))}
        </ul>
    );
} 