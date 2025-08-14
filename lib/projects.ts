import projectsData from "@/data/projects.json";

export interface Project {
  id: number;
  name: string;
  tag: string;
  description: string;
  languages: string[];
  url: string;
  featured: boolean;
}

export interface ProjectsData {
  projects: Project[];
}

// Get all projects
export function getAllProjects(): Project[] {
  return projectsData.projects;
}

// Get featured projects only
export function getFeaturedProjects(): Project[] {
  return projectsData.projects.filter((project) => project.featured);
}

// Get projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return projectsData.projects.filter((project) => project.tag === tag);
}

// Get unique tags
export function getUniqueTags(): string[] {
  const tags = projectsData.projects.map((project) => project.tag);
  return Array.from(new Set(tags));
}

// Get project by ID
export function getProjectById(id: number): Project | undefined {
  return projectsData.projects.find((project) => project.id === id);
}

// Search projects by name or description
export function searchProjects(query: string): Project[] {
  const lowercaseQuery = query.toLowerCase();
  return projectsData.projects.filter(
    (project) =>
      project.name.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.languages.some((lang) =>
        lang.toLowerCase().includes(lowercaseQuery)
      )
  );
}
