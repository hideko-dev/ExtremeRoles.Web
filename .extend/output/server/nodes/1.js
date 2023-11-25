

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.699002ac.js","_app/immutable/chunks/scheduler.05577254.js","_app/immutable/chunks/index.dff9d965.js","_app/immutable/chunks/singletons.73704671.js"];
export const stylesheets = [];
export const fonts = [];
