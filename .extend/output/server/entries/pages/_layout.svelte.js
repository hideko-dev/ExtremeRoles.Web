import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { F as Fa } from "../../chunks/fa.js";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
const latin$1 = "";
const latin = "";
const Fonts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".navs.svelte-1aqyn4h.svelte-1aqyn4h{display:flex;align-items:center;justify-content:center;gap:10px}section.svelte-1aqyn4h.svelte-1aqyn4h{display:flex;align-items:center;justify-content:center;font-weight:300;font-family:'Inter', sans-serif;font-size:15px;margin-left:2.5rem;transition:all 0.2s}section.svelte-1aqyn4h a.svelte-1aqyn4h{text-decoration:none;color:rgba(255, 255, 255, 0.6);transition:all 0.2s}section.svelte-1aqyn4h a.svelte-1aqyn4h:hover{color:white}@media(max-width: 650px){.navs.svelte-1aqyn4h.svelte-1aqyn4h{display:none}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-1aqyn4h" data-svelte-h="svelte-1461nnp"><div class="navs svelte-1aqyn4h"><a href="https://exr-docs.github.com" class="svelte-1aqyn4h">Documentation</a> <a href="/status" class="svelte-1aqyn4h">Status</a></div> </section>`;
});
const btns_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-snuadt{margin:0 2.5rem 0 auto}.btns.svelte-snuadt{display:flex;align-items:center;justify-content:center;gap:5px}.btn.svelte-snuadt{background:rgba(0, 0, 0, 0.6);color:#d7d7d7;backdrop-filter:blur(10px);padding-inline:10px;padding-block:2px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;transition:all 0.3s;text-decoration:none;font-weight:400}.btn.svelte-snuadt:hover{opacity:0.7}",
  map: null
};
const Btns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-snuadt"><div class="btns svelte-snuadt"><a class="btn svelte-snuadt" href="https://discord.com/invite/UzJcfBYcyS">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord }, {}, {})} <p data-svelte-h="svelte-1bb0688">Discord</p></a> <a class="btn svelte-snuadt" href="https://github.com/yukieiji/ExtremeRoles">${validate_component(Fa, "Fa").$$render($$result, { icon: faGithub }, {}, {})} <p data-svelte-h="svelte-1nww2d">Github</p></a></div> </section>`;
});
const header_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-z5glt1{font-family:'Poppins', sans-serif;z-index:10;position:fixed;width:100%;display:flex;align-items:center;background:transparent;height:5rem}.logo.svelte-z5glt1{font-size:25px;font-weight:400;margin-left:2rem;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-z5glt1"><div class="logo svelte-z5glt1">${validate_component(Fa, "Fa").$$render($$result, { icon: faBolt }, {}, {})}</div> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${validate_component(Btns, "Btns").$$render($$result, {}, {}, {})} </section>`;
});
const globals = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Fonts, "Fonts").$$render($$result, {}, {}, {})} <main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
