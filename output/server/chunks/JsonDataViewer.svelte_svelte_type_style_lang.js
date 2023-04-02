import { c as create_ssr_component, b as subscribe, h as add_attribute, d as createEventDispatcher, v as validate_component } from "./index2.js";
import "iptv-playlist-generator";
import "@freearhey/search-js";
import "lodash";
import { w as writable } from "./index.js";
import { p as page } from "./stores.js";
const query = writable("");
const hasQuery = writable(false);
const channels = writable([]);
const countries = writable({});
const filteredChannels = writable([]);
const selected = writable([]);
const downloadMode = writable(false);
const SearchFieldMini = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $query, $$unsubscribe_query;
  $$unsubscribe_query = subscribe(query, (value) => $query = value);
  $$unsubscribe_query();
  return `<form autocomplete="${"off"}" class="${"w-full"}"><div class="${"w-full"}"><label for="${"search-input"}" class="${"sr-only"}">Search</label>
    <div class="${"relative w-full"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg class="${"w-4 h-4 text-gray-500 dark:text-gray-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></div>
      <input type="${"search"}" id="${"search-input"}" class="${"bg-gray-50 border border-gray-300 text-gray-900 outline-blue-500 text-sm rounded-md block w-full pl-9 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"}" placeholder="${"Search"}"${add_attribute("value", $query, 0)}></div></div></form>`;
});
const DefaultButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"rounded-md bg-white hover:bg-gray-200 transition-colors duration-200 border border-gray-200 dark:border-gray-700 dark:bg-gray-700 text-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:border-gray-600 text-sm font-semibold text-center px-4 h-10 flex items-center justify-center w-full"}">${slots.default ? slots.default({}) : ``}</button>`;
});
const CreatePlaylistButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $downloadMode, $$unsubscribe_downloadMode;
  $$unsubscribe_downloadMode = subscribe(downloadMode, (value) => $downloadMode = value);
  createEventDispatcher();
  $$unsubscribe_downloadMode();
  return `<div class="${"w-14 sm:w-36"}">${$downloadMode ? `${validate_component(DefaultButton, "DefaultButton").$$render($$result, { "area-label": "Done" }, {}, {
    default: () => {
      return `<span class="${"sm:hidden inline"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"}" clip-rule="${"evenodd"}"></path><path d="${"M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"}"></path></svg></span>

    <span class="${"hidden sm:inline"}">Done</span>`;
    }
  })}` : `<button class="${"rounded-md bg-accent-500 hover:bg-accent-600 transition-colors duration-200 text-sm text-white font-semibold text-center px-4 h-10 flex items-center w-full justify-center"}" area-label="${"Create Playlist"}"><span class="${"sm:hidden inline"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path fill-rule="${"evenodd"}" d="${"M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"}" clip-rule="${"evenodd"}"></path><path d="${"M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"}"></path></svg></span><span class="${"hidden sm:inline"}">Create Playlist</span></button>`}</div>`;
});
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { withSearch = false } = $$props;
  if ($$props.withSearch === void 0 && $$bindings.withSearch && withSearch !== void 0)
    $$bindings.withSearch(withSearch);
  $$unsubscribe_page();
  return `<nav class="${"bg-white border-b border-gray-200 py-2.5 dark:border-gray-700 dark:bg-gray-800 w-full h-[61px]"}"><div class="${"flex justify-between items-center mx-auto px-3 w-full max-w-6xl"}"><div class="${"flex flex-start items-center sm:basis-88 shrink"}"><a href="${"/"}" class="${"flex mr-6"}"><span class="${"text-[1.15rem] text-[#24292f] self-center font-semibold whitespace-nowrap dark:text-white font-mono"}">/iptv-org</span></a>
      <div class="${"hidden sm:block w-full"}">${withSearch ? `${validate_component(SearchFieldMini, "SearchFieldMini").$$render($$result, {}, {}, {})}` : ``}</div></div>

    <div class="${"flex flex-end items-center space-x-4"}"><div><a href="${"https://github.com/iptv-org/"}" class="${"inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-2.5 ml-1"}" target="${"_blank"}" rel="${"noreferrer"}" aria-label="${"GitHub"}"><svg class="${"w-5 h-5"}" aria-hidden="${"true"}" focusable="${"false"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 496 512"}"><path fill="${"currentColor"}" d="${"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}"></path></svg></a>
        <button type="${"button"}" class="${"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-2.5"}" aria-label="${"Toggle Dark Mode"}"><svg class="${["w-5 h-5", ""].join(" ").trim()}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}" aria-hidden="${"true"}" focusable="${"false"}" role="${"img"}"><path d="${"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}"></path></svg>
          <svg class="${["w-5 h-5", "hidden"].join(" ").trim()}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}"></path></svg></button></div>
      <div>${validate_component(CreatePlaylistButton, "CreatePlaylistButton").$$render($$result, {}, {}, {})}</div></div></div></nav>`;
});
const Clipboard_svelte_svelte_type_style_lang = "";
const CopyToClipboard_svelte_svelte_type_style_lang = "";
const JsonView_svelte_svelte_type_style_lang = "";
const JsonDataViewer_svelte_svelte_type_style_lang = "";
export {
  DefaultButton as D,
  NavBar as N,
  channels as a,
  countries as c,
  downloadMode as d,
  filteredChannels as f,
  hasQuery as h,
  query as q,
  selected as s
};
