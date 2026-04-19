import { readdirSync, renameSync, existsSync } from 'fs';
import { join } from 'path';

const projectsDir = new URL('../src/content/projects', import.meta.url).pathname;

for (const dir of readdirSync(projectsDir)) {
  const slug = dir.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const oldPath = join(projectsDir, dir, 'index.mdx');
  const newPath = join(projectsDir, dir, `${slug}.mdx`);

  if (!existsSync(oldPath)) {
    console.log(`skipping ${dir} — no index.mdx found`);
    continue;
  }

  renameSync(oldPath, newPath);
  console.log(`${dir}/index.mdx → ${slug}.mdx`);
}
