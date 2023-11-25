import { c as create_ssr_component, d as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faFire, faBolt, faCode, faBrush, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const features_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".titles.svelte-3fnlaa{display:flex;align-items:center;font-size:17px;width:max-content}.title.svelte-3fnlaa{margin-left:8px;font-weight:500}.icon.svelte-3fnlaa{background:white;color:black;width:2rem;height:2rem;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:19px}.desc.svelte-3fnlaa{margin-top:3px;color:#9a9a9a}.card.svelte-3fnlaa{background:rgba(25, 25, 25, 0.9);backdrop-filter:blur(50px);width:12rem;height:7rem;padding:0.7rem;border-radius:9px;position:relative}section.svelte-3fnlaa{width:90%;margin:15px auto 0;border-radius:10px;display:flex;align-items:center;gap:10px;position:absolute;left:5%;bottom:8%}",
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const cards = [
    {
      title: "Advanced",
      description: "Hello World",
      icon: faFire
    },
    {
      title: "Fast",
      description: "Hello World",
      icon: faBolt
    },
    {
      title: "Open Source",
      description: "Hello World",
      icon: faCode
    },
    {
      title: "Customizable",
      description: "Hello World",
      icon: faBrush
    }
  ];
  $$result.css.add(css$3);
  return `<section class="svelte-3fnlaa">${each(cards, (c) => {
    return `<div class="card svelte-3fnlaa"><div class="titles svelte-3fnlaa"><div class="icon svelte-3fnlaa">${validate_component(Fa, "Fa").$$render($$result, { icon: c.icon, fw: true }, {}, {})}</div> <p class="title svelte-3fnlaa">${escape(c.title)}</p></div> <p class="desc svelte-3fnlaa">${escape(c.description)}</p> </div>`;
  })} </section>`;
});
const btns_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1ucm4q3.svelte-1ucm4q3{display:flex;align-items:center;margin-left:15%;margin-top:1rem}.btn.svelte-1ucm4q3.svelte-1ucm4q3{display:flex;align-items:center;justify-content:center;background:#1e1e1e;padding-inline:1.2rem;padding-block:5px;border-radius:100px;transition:all 0.2s ease;border:1px solid transparent;cursor:pointer;color:#d3d3d3}.icon.svelte-1ucm4q3.svelte-1ucm4q3{margin-left:5px;transition:all 0.2s ease}.btn.svelte-1ucm4q3.svelte-1ucm4q3:hover{background:transparent;border-color:#2a2a2a}.btn.svelte-1ucm4q3:hover .icon.svelte-1ucm4q3{transform:translateX(5px)}",
  map: null
};
const Btns = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-1ucm4q3"><div class="btn svelte-1ucm4q3"><p data-svelte-h="svelte-1veyu57">Read the documentation</p> <div class="icon svelte-1ucm4q3">${validate_component(Fa, "Fa").$$render($$result, { icon: faArrowRight, fw: true }, {}, {})}</div></div> </section>`;
});
const top_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-1ut82fo{font-family:'Poppins', sans-serif;height:100vh;width:100%;display:flex;align-items:center}.title.svelte-1ut82fo{font-size:50px;font-weight:500;margin-left:15%;width:40rem;line-height:4rem}.sub.svelte-1ut82fo{margin-left:15%;color:#9b9b9b;font-weight:500;font-size:16px;width:70%}span.svelte-1ut82fo{background:linear-gradient(to right, #00b2ff, #d000ff);-webkit-text-fill-color:transparent;-webkit-background-clip:text}@media(max-width: 800px){}",
  map: null
};
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `    <section class="svelte-1ut82fo"><div><p class="title svelte-1ut82fo" data-svelte-h="svelte-17r45xp">Powerful AmongUs mod for <span class="svelte-1ut82fo">advanced</span> users</p> <p class="sub svelte-1ut82fo" data-svelte-h="svelte-uilb3v">Among Us mods that are very powerful and finely customizable for all users to enjoy.</p> ${validate_component(Btns, "Btns").$$render($$result, {}, {}, {})} ${validate_component(Features, "Features").$$render($$result, {}, {}, {})}</div> </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-151kpo6{display:flex;align-items:center;justify-content:center;height:max-content;background:url("../../lib/assets/bg.webp") no-repeat center/cover}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-151kpo6">${validate_component(Top, "Top").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
