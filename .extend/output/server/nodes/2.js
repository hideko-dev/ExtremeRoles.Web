import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/pages/+page.js";
export const imports = ["_app/immutable/nodes/2.abcafed6.js","_app/immutable/chunks/scheduler.05577254.js","_app/immutable/chunks/index.dff9d965.js","_app/immutable/nodes/3.faf2f16f.js","_app/immutable/chunks/index.92d6d1e2.js"];
export const stylesheets = ["_app/immutable/assets/3.f9680e17.css","_app/immutable/assets/index.af927694.css"];
export const fonts = [];
