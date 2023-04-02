import { c as create_ssr_component, d as createEventDispatcher, h as add_attribute, e as escape, t as tick, v as validate_component, b as subscribe, j as each } from "../../../chunks/index2.js";
import { a as channels, N as NavBar } from "../../../chunks/JsonDataViewer.svelte_svelte_type_style_lang.js";
import "dayjs";
import { p as page } from "../../../chunks/stores.js";
const css$1 = {
  code: "textarea.svelte-w8w2mp{left:0;bottom:0;margin:0;padding:0;opacity:0;width:1px;height:1px;border:none;display:block;position:absolute}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { text } = $$props;
  let textarea;
  async function copy() {
    textarea.select();
    document.execCommand("Copy");
    await tick();
    textarea.blur();
    dispatch("copy");
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `${slots.default ? slots.default({ copy }) : ``}
<textarea class="${"svelte-w8w2mp"}"${add_attribute("this", textarea, 0)}>${escape(text, true)}</textarea>`;
});
const css = {
  code: ".tooltip.svelte-1x4n8x::after{content:'';position:absolute;left:100%;top:50%;border-width:7px;border-style:solid;transform:translate3d(0, -7px, 0px);border-color:transparent transparent transparent black}",
  map: null
};
const CopyToClipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `${validate_component(Clipboard, "Clipboard").$$render($$result, { text }, {}, {
    default: ({ copy }) => {
      return `<button type="${"button"}" class="${"relative flex items-center p-1 text-xs text-gray-500 dark:text-gray-100"}"><svg class="${"w-5 h-5"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"}"></path></svg>
    <span class="${"hidden"}">Copy to Clipboard</span>
    <div role="${"tooltip"}" class="${[
        "tooltip inline-block absolute right-10 top-0 py-2 px-3 text-xs text-gray-100 rounded-md bg-black svelte-1x4n8x",
        "hidden"
      ].join(" ").trim()}">Copied!
    </div></button>`;
    }
  })}`;
});
const StreamItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stream } = $$props;
  if ($$props.stream === void 0 && $$bindings.stream && stream !== void 0)
    $$bindings.stream(stream);
  return `<div class="${"w-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 rounded-md border border-gray-200"}"><div class="${[
    "w-full inline-flex justify-between px-3 py-2 border-gray-200 dark:border-gray-600",
    ""
  ].join(" ").trim()}"><div class="${"flex space-x-3 items-center max-w-[90%] w-full"}"><button class="${"w-4 h-4 flex justify-center align-middle text-gray-500 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-600 shrink-0"}"><svg class="${["w-4 h-4", ""].join(" ").trim()}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg></button>
      <svg class="${[
    "w-2 h-2 flex shrink-0",
    (stream.status === "online" ? "fill-green-500" : "") + " " + (["blocked", "timeout"].includes(stream.status) ? "fill-yellow-500" : "") + " " + (stream.status === "error" ? "fill-red-500" : "")
  ].join(" ").trim()}" viewBox="${"0 0 100 100"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"50"}" cy="${"50"}" r="${"50"}"></circle></svg>
      <a class="${"whitespace-nowrap text-sm text-gray-600 dark:text-gray-100 hover:text-blue-500 hover:underline inline-flex align-middle max-w-[85%] w-full"}"${add_attribute("href", stream.url, 0)}${add_attribute("title", stream.url, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}"><span class="${"truncate"}">${escape(stream.url)}</span><span class="${"inline-flex items-center pl-1 text-sm font-semibold text-gray-500 rounded-full"}"><svg class="${"w-4 h-4"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}"></path></svg></span></a></div>
    <div class="${"flex shrink-0"}">${validate_component(CopyToClipboard, "CopyToClipboard").$$render($$result, { text: stream.url }, {}, {})}</div></div>
  ${``}</div>`;
});
const GuideItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guide } = $$props;
  if ($$props.guide === void 0 && $$bindings.guide && guide !== void 0)
    $$bindings.guide(guide);
  return `<div class="${"w-full bg-gray-100 dark:bg-gray-700 dark:border-gray-600 rounded-md border border-gray-200"}"><div class="${[
    "w-full inline-flex justify-between px-3 py-2 border-gray-200 dark:border-gray-600",
    ""
  ].join(" ").trim()}"><div class="${"flex space-x-3 items-center max-w-[90%] w-full"}"><button class="${"w-4 h-4 flex justify-center align-middle text-gray-500 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-600 shrink-0"}"><svg class="${["w-4 h-4", ""].join(" ").trim()}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 5l7 7-7 7"}"></path></svg></button>
      <a class="${"whitespace-nowrap text-sm text-gray-600 dark:text-gray-100 hover:text-blue-500 hover:underline inline-flex align-middle max-w-[85%] w-full"}"${add_attribute("href", guide.url, 0)}${add_attribute("title", guide.url, 0)} target="${"_blank"}" rel="${"noreferrer"}"><span class="${"truncate"}">${escape(guide.url)}</span><span class="${"inline-flex items-center pl-1 text-sm font-semibold text-gray-500 rounded-full"}"><svg class="${"w-4 h-4"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}"></path></svg></span></a></div>
    <div class="${"flex shrink-0"}">${validate_component(CopyToClipboard, "CopyToClipboard").$$render($$result, { text: guide.url }, {}, {})}</div></div>
  ${``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_channels;
  let $$unsubscribe_page;
  $$unsubscribe_channels = subscribe(channels, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let streams = [];
  let guides = [];
  $$unsubscribe_channels();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1u3dx9r_START -->${$$result.title = `<title>${escape("iptv-org")}</title>`, ""}<!-- HEAD_svelte-1u3dx9r_END -->`, ""}

<header class="${"fixed z-40 w-full min-w-[360px] top-0"}">${validate_component(NavBar, "NavBar").$$render($$result, { withSearch: true }, {}, {})}</header>

<main class="${"bg-slate-50 dark:bg-[#1d232e] min-h-screen min-w-[360px] pt-16"}"><section class="${"container max-w-[820px] mx-auto px-2 pt-6 pb-20 flex-col space-y-4"}">${`<div class="${"flex items-center justify-center w-full pt-1 pb-6 tracking-tight text-sm text-gray-500 dark:text-gray-400 font-mono"}">loading...
    </div>`} ${``} ${streams.length ? `<div class="${"border rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 bg-white"}"><div class="${"flex justify-between items-center py-4 pl-5 pr-4 rounded-t border-b dark:border-gray-700"}"><div class="${"w-1/3 overflow-hidden"}"><h3 class="${"text-l font-medium text-gray-900 dark:text-white"}">Streams</h3></div></div>
      <div class="${"overflow-y-scroll overflow-x-hidden w-full p-6"}"><div class="${"space-y-2"}">${each(streams, (stream) => {
    return `${validate_component(StreamItem, "StreamItem").$$render($$result, { stream }, {}, {})}`;
  })}</div></div></div>` : ``} ${guides.length ? `<div class="${"border rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 bg-white"}"><div class="${"flex justify-between items-center py-4 pl-5 pr-4 rounded-t border-b dark:border-gray-700"}"><div class="${"w-1/3 overflow-hidden"}"><h3 class="${"text-l font-medium text-gray-900 dark:text-white"}">Guides</h3></div></div>
      <div class="${"overflow-y-scroll overflow-x-hidden w-full p-6"}"><div class="${"space-y-2"}">${each(guides, (guide) => {
    return `${validate_component(GuideItem, "GuideItem").$$render($$result, { guide }, {}, {})}`;
  })}</div></div></div>` : ``}</section></main>`;
});
export {
  Page as default
};
