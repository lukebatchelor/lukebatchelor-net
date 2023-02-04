declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blogs": {
"2018-10-04-a-world-without-javascript.mdx": {
  id: "2018-10-04-a-world-without-javascript.mdx",
  slug: string,
  body: string,
  collection: "blogs",
  data: InferEntrySchema<"blogs">
},
},
"projects": {
"2018-08-20-css-binary-decoder.mdx": {
  id: "2018-08-20-css-binary-decoder.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-09-17-css-tic-tac-toe.mdx": {
  id: "2018-09-17-css-tic-tac-toe.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-10-15-css-rhythm-game.mdx": {
  id: "2018-10-15-css-rhythm-game.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-10-22-lukebatchelor-net.mdx": {
  id: "2018-10-22-lukebatchelor-net.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-10-28-face-folding.mdx": {
  id: "2018-10-28-face-folding.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-10-29-amazing-anagrams.mdx": {
  id: "2018-10-29-amazing-anagrams.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-11-12-slide-puzzle.mdx": {
  id: "2018-11-12-slide-puzzle.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2020-02-23-unity-match-3-game-jam.mdx": {
  id: "2020-02-23-unity-match-3-game-jam.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2020-08-22-circlez.mdx": {
  id: "2020-08-22-circlez.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2023-01-03-emoji-mosaic-creator.mdx": {
  id: "2023-01-03-emoji-mosaic-creator.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
},

	};

	type ContentConfig = typeof import("./config");
}
