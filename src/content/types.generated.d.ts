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
"2017-07-31-bolt.mdx": {
  id: "2017-07-31-bolt.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2017-11-24-landkid.mdx": {
  id: "2017-11-24-landkid.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2018-08-10-hvac-legend-generator-poc.mdx": {
  id: "2018-08-10-hvac-legend-generator-poc.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
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
"2019-09-07-disappearing-homer-gif-generator.mdx": {
  id: "2019-09-07-disappearing-homer-gif-generator.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2019-10-09-curling-game.mdx": {
  id: "2019-10-09-curling-game.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2019-12-14-spritesheet-tools.mdx": {
  id: "2019-12-14-spritesheet-tools.mdx",
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
"2020-03-14-generozity-donation-platform.mdx": {
  id: "2020-03-14-generozity-donation-platform.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2020-03-27-startups-game.mdx": {
  id: "2020-03-27-startups-game.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2020-05-02-coup-game.mdx": {
  id: "2020-05-02-coup-game.mdx",
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
"2020-10-31-gday-chat.mdx": {
  id: "2020-10-31-gday-chat.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-03-13-mass-haul-data-parser.mdx": {
  id: "2021-03-13-mass-haul-data-parser.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-03-21-12d-report-to-pdf-generator.mdx": {
  id: "2021-03-21-12d-report-to-pdf-generator.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-06-26-build-a-book.mdx": {
  id: "2021-06-26-build-a-book.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-06-26-webp-to-png-converter.mdx": {
  id: "2021-06-26-webp-to-png-converter.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-07-06-vid-keeper.mdx": {
  id: "2021-07-06-vid-keeper.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-07-10-hotmilo23-archive.mdx": {
  id: "2021-07-10-hotmilo23-archive.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-07-11-paste-app.mdx": {
  id: "2021-07-11-paste-app.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-07-18-skip-app.mdx": {
  id: "2021-07-18-skip-app.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2021-10-15-decider-app.mdx": {
  id: "2021-10-15-decider-app.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2022-12-03-engagement-album.mdx": {
  id: "2022-12-03-engagement-album.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2022-12-17-up-brett.mdx": {
  id: "2022-12-17-up-brett.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2022-12-28-pace-calculator.mdx": {
  id: "2022-12-28-pace-calculator.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
"2022-12-29-beer-calorie-calculator.mdx": {
  id: "2022-12-29-beer-calorie-calculator.mdx",
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
"2023-01-07-url-snake.mdx": {
  id: "2023-01-07-url-snake.mdx",
  slug: string,
  body: string,
  collection: "projects",
  data: InferEntrySchema<"projects">
},
},

	};

	type ContentConfig = typeof import("./config");
}
