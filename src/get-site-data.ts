import type { MDXInstance } from 'astro';
import type { ProjectFrontMatter } from './types';

type ProjectFile = MDXInstance<ProjectFrontMatter>;

export async function getProjects(projects: ProjectFile[]) {
  return await Promise.all(
    projects.map(async (project) => {
      return {
        ...project.frontmatter,
        url: project.url,
        Content: project.Content,
        imgUrl: project.url + '/' + project.frontmatter.thumbnail,
      };
    })
  );
}
