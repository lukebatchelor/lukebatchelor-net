const fs = require('fs');
const path = require('path');
const readline = require('node:readline');
const slugify = require('slugify');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

const template = (date, title, slug) => `---
title: '${title}'
date: '${date}'
description: ''
githubUrl: 'https://github.com/lukebatchelor/${slug}'
previewUrl: ''
blogUrl: ''
thumbnail: '${slug}.png'
thumbnailAlt: 'Screenshot of "${title}"'
tags: []

---

Content
`;

(async () => {
  const date = await question('Date? ');
  const title = await question('Title? ');
  console.log('');
  const slug = slugify(title.toLowerCase());
  const fileName = `${date}-${slug}.mdx`;
  const filePath = path.join('src', 'content', 'projects', fileName);
  const fileStr = template(date, title, slug);
  const publicDir = path.join('public', 'projects', slug);
  fs.writeFileSync(filePath, fileStr, 'utf-8');
  fs.mkdirSync(publicDir);
  console.log(date);
  console.log(slug);
  console.log(filePath);
  console.log(fileStr);
  rl.close();
})();
