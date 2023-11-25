

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/status/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.fcf546b9.js","_app/immutable/chunks/scheduler.05577254.js","_app/immutable/chunks/index.dff9d965.js"];
export const stylesheets = [];
export const fonts = [];
