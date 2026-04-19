#!/usr/bin/env bun
import fs from 'fs';
import path from 'path';
import readline from 'readline';

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function template(date: string, title: string, slug: string): string {
  return `---
title: '${title}'
date: '${date}'
description: ''
thumbnail: ./${slug}.png
thumbnailAlt: 'Screenshot of ${title}'
tags: []
githubUrl: 'https://github.com/lukebatchelor/${slug}'
previewUrl: ''
blogUrl: ''
---

Content goes here.
`;
}

function ask(rl: readline.Interface, prompt: string): Promise<string> {
  return new Promise(resolve => rl.question(prompt, resolve));
}

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const titleArg = process.argv[2];
  let title: string;
  let date: string;

  if (titleArg) {
    title = titleArg;
    date = process.argv[3] ?? today();
    rl.close();
  } else {
    date = (await ask(rl, `Date? (${today()}) `)).trim() || today();
    title = (await ask(rl, 'Title? ')).trim();
    rl.close();
  }

  if (!title) {
    console.error('Error: title is required');
    process.exit(1);
  }

  const slug = slugify(title);
  const dirName = `${date}-${slug}`;
  const dirPath = path.join('src', 'content', 'projects', dirName);
  const filePath = path.join(dirPath, 'index.mdx');

  if (fs.existsSync(dirPath)) {
    console.error(`Error: ${dirPath} already exists`);
    process.exit(1);
  }

  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, template(date, title, slug), 'utf-8');

  console.log(`\nCreated: ${filePath}`);
  console.log(`Slug:    ${slug}`);
  console.log(`\nNext: add a thumbnail at ${dirPath}/${slug}.png`);
}

main();
