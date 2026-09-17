export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link: string;  
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    type: 'opensource',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    link: 'https://github.com/example/repo'
  },
  {
    id: 2,
    title: 'School Management System',
    description: 'A web application for managing school operations, including student records and attendance.',
    type: 'school',
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/example/school-management-system'
  }
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter(p => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project |null {
  return projects.find(p => p.id === id) ?? null;
}
