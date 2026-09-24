// lib/projects-db.ts
import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

// Define the number of projects displayed per page
const ITEMS_PER_PAGE = 6;

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

/** 
 * 1. fetchFilteredProjects(query, page)
* Executes a SQL query using ILIKE for case-sensitive search filtering
* with LIMIT and OFFSET clauses for pagination
*/
export async function fetchFilteredProjects(query: string, page: number): Promise<Project[]> {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const searchPattern = `%${query}`;

  try {
    const { rows } = await sql<Project>`
      SELECT * FROM Projects
      WHERE
        title ILIKE ${searchPattern} OR
        description ILIKE ${searchPattern}
      ORDER BY id
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset}
   `;
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered projects.');
  }
}

/**
 * 2. fetchProjectsPages(query)
 * Executes a COUNT(*) query matching the search filter to calculate
 * the total number of pages needed.
 */
export async function fetchProjectPages(query: string): Promise<number> {
  const searchPattern = `%${query}%`;

  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM projects
      WHERE
        title ILIKE ${searchPattern} OR
        description ILIKE ${searchPattern}
    `;
    
    const totalCount = Number(data.rows[0].count);
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total page count.')
  }
} 