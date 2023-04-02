import { i as identity, c as create_ssr_component, b as subscribe, v as validate_component, e as escape, d as createEventDispatcher, o as onDestroy, f as null_to_empty, h as add_attribute, m as missing_component, s as setContext, t as tick, g as getContext, j as each, k as add_classes } from "../../chunks/index2.js";
import { s as selected, f as filteredChannels, D as DefaultButton, d as downloadMode, q as query, h as hasQuery, c as countries, a as channels, N as NavBar } from "../../chunks/JsonDataViewer.svelte_svelte_type_style_lang.js";
import "dayjs";
import _ from "lodash";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const DownloadButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_selected();
  return `<div class="${"w-14 sm:w-44"}"><button class="${"rounded-md bg-accent-500 hover:bg-accent-600 transition-colors duration-200 text-sm text-white font-semibold px-5 h-10 flex items-center disabled:bg-gray-200 dark:disabled:text-gray-500 dark:disabled:bg-gray-700 w-full justify-center"}" ${!$selected.length ? "disabled" : ""} area-label="${"Download Playlist"}"><span class="${"sm:hidden inline"}"><svg fill="${"currentColor"}" class="${"w-4 h-4"}" viewBox="${"0 0 411 411"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_4_46)"}"><path d="${"M205.5 297.333C202.075 297.333 198.864 296.802 195.867 295.74C192.87 294.678 190.087 292.855 187.519 290.269L95.0438 197.794C90.3344 193.084 87.9797 187.091 87.9797 179.813C87.9797 172.534 90.3344 166.541 95.0438 161.831C99.7531 157.122 105.858 154.664 113.359 154.459C120.86 154.253 126.956 156.497 131.648 161.189L179.812 209.353V25.6876C179.812 18.4095 182.278 12.3044 187.21 7.3724C192.142 2.4404 198.239 -0.0170361 205.5 8.88839e-05C212.778 8.88839e-05 218.883 2.46609 223.815 7.39809C228.747 12.3301 231.205 18.4266 231.187 25.6876V209.353L279.352 161.189C284.061 156.48 290.166 154.228 297.667 154.433C305.167 154.639 311.264 157.105 315.956 161.831C320.666 166.541 323.02 172.534 323.02 179.813C323.02 187.091 320.666 193.084 315.956 197.794L223.481 290.269C220.912 292.837 218.13 294.661 215.133 295.74C212.136 296.819 208.925 297.35 205.5 297.333ZM51.375 411C37.2469 411 25.1481 405.965 15.0786 395.896C5.0091 385.826 -0.0170814 373.736 4.36121e-05 359.625V308.25C4.36121e-05 300.972 2.46605 294.867 7.39804 289.935C12.33 285.003 18.4265 282.545 25.6875 282.562C32.9657 282.562 39.0707 285.028 44.0027 289.96C48.9347 294.892 51.3921 300.989 51.375 308.25V359.625H359.625V308.25C359.625 300.972 362.091 294.867 367.023 289.935C371.955 285.003 378.051 282.545 385.312 282.562C392.591 282.562 398.696 285.028 403.628 289.96C408.56 294.892 411.017 300.989 411 308.25V359.625C411 373.753 405.965 385.852 395.896 395.921C385.826 405.991 373.736 411.017 359.625 411H51.375Z"}"></path></g><defs><clipPath id="${"clip0_4_46"}"><rect width="${"411"}" height="${"411"}"></rect></clipPath></defs></svg></span>

    <span class="${"hidden sm:inline"}">Download Playlist</span></button></div>`;
});
const SelectAllButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isAllSelected;
  let $filteredChannels, $$unsubscribe_filteredChannels;
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_filteredChannels = subscribe(filteredChannels, (value) => $filteredChannels = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  isAllSelected = $selected.length === $filteredChannels.length;
  $$unsubscribe_filteredChannels();
  $$unsubscribe_selected();
  return `<div class="${"w-14 sm:w-44"}">${isAllSelected ? `${validate_component(DefaultButton, "DefaultButton").$$render(
    $$result,
    {
      "area-label": "Deselect All (" + $selected.length + ")"
    },
    {},
    {
      default: () => {
        return `<span class="${"sm:hidden inline"}"><svg fill="${"currentColor"}" class="${"w-5 h-5"}" viewBox="${"0 0 538 412"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_3_43)"}"><path d="${"M18.6667 74.6747H416.947C427.254 74.6747 435.613 66.3153 435.613 56.008V18.6747C435.613 8.36213 427.254 0.00799561 416.947 0.00799561H18.6667C8.35933 0.00799561 0 8.36213 0 18.6747V56.008C0.0937507 66.2788 8.39587 74.5813 18.6667 74.6747ZM18.6667 211.448H166.48C174.688 211.495 182.568 208.255 188.371 202.453L233.34 158.161C237.043 154.656 238.22 149.245 236.309 144.521C234.397 139.798 229.783 136.724 224.689 136.782H18.6757C13.6705 136.776 8.86841 138.792 5.35801 142.365C1.84761 145.943 -0.0794594 150.776 0.00907389 155.786V193.12C0.00907389 203.427 8.36841 211.786 18.6757 211.786L18.6667 211.448ZM252 274.573H18.6667C8.35933 274.573 0 282.933 0 293.24V330.573C0 340.881 8.35933 349.24 18.6667 349.24H194.133C202.409 349.214 210.336 345.917 216.196 340.079L260.316 295.787C263.884 292.219 264.899 286.828 262.863 282.208C260.951 277.609 256.472 274.604 251.493 274.572L252 274.573ZM18.6667 74.6667H416.947C427.254 74.6667 435.613 66.3073 435.613 56V18.6667C435.613 8.35413 427.254 0 416.947 0H18.6667C8.35933 0 0 8.35413 0 18.6667V56C0.0937507 66.2708 8.39587 74.5733 18.6667 74.6667ZM532.68 352.8C536.05 356.003 537.961 360.451 537.961 365.102C537.961 369.758 536.05 374.206 532.68 377.409L504.508 406.087C501.305 409.462 496.857 411.368 492.206 411.368C487.555 411.368 483.107 409.462 479.904 406.087L408.633 334.816L337.362 406.087H337.357C334.154 409.462 329.706 411.368 325.055 411.368C320.404 411.368 315.956 409.462 312.753 406.087L284.581 377.915C281.211 374.712 279.3 370.264 279.3 365.613C279.3 360.962 281.211 356.514 284.581 353.311L355.852 281.696L284.581 210.425C281.211 207.222 279.3 202.774 279.3 198.123C279.3 193.472 281.211 189.024 284.581 185.821L312.753 157.144V157.138C315.956 153.769 320.404 151.857 325.055 151.857C329.706 151.857 334.154 153.769 337.357 157.138L408.461 228.409L479.904 157.138C483.107 153.769 487.555 151.857 492.206 151.857C496.857 151.857 501.305 153.769 504.508 157.138L532.68 185.31C536.05 188.513 537.961 192.961 537.961 197.613C537.961 202.264 536.05 206.711 532.68 209.915L461.41 281.696L532.68 352.8Z"}"></path></g><defs><clipPath id="${"clip0_3_43"}"><rect width="${"537.961"}" height="${"411.368"}"></rect></clipPath></defs></svg></span>
    <span class="${"hidden sm:inline"}">Deselect All (${escape($selected.length)})</span>`;
      }
    }
  )}` : `${validate_component(DefaultButton, "DefaultButton").$$render(
    $$result,
    {
      "area-label": "Select All (" + $filteredChannels.length + ")"
    },
    {},
    {
      default: () => {
        return `<span class="${"sm:hidden inline"}"><svg fill="${"currentColor"}" class="${"w-5 h-5"}" viewBox="${"0 0 543 411"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_1_4)"}"><path d="${"M160.199 329.208C151.017 316.344 146.141 300.896 146.281 285.088C146.349 281.833 145.058 278.697 142.719 276.432C140.469 274.052 137.339 272.697 134.063 272.703H18.6667C13.6927 272.744 8.93227 274.76 5.43227 278.302C1.96867 281.838 0.0208 286.588 0 291.536V328.869C0 339.182 8.35933 347.536 18.6667 347.536H149.672C162.063 347.536 166.813 337.692 160.199 329.208ZM18.6788 74.6615L416.959 74.6667C427.266 74.6667 435.626 66.3073 435.626 56V18.6667C435.626 8.35413 427.266 0 416.959 0H18.6788C8.37148 0 0.012146 8.35413 0.012146 18.6667V56C0.553813 65.9375 8.73095 73.74 18.6788 73.8173V74.6615ZM18.6788 211.435H177.852L177.847 211.44C183.988 212.075 190.118 210.174 194.816 206.18C207.04 193.341 223.254 185.029 240.806 182.592C264.046 179.55 287.39 187.373 304.103 203.8C308.176 208.044 309.535 211.268 322.598 211.268H334.988C343.228 211.326 351.139 208.018 356.879 202.107L401.682 156.967C405.223 153.394 406.291 148.05 404.395 143.388C402.416 138.669 397.801 135.597 392.687 135.581H19.3536C14.3744 135.628 9.61399 137.638 6.11399 141.185C2.60879 144.763 0.66093 149.581 0.68693 154.592V191.925C0.681722 201.972 8.62961 210.222 18.6709 210.592L18.6788 211.435ZM537.439 209.404L370.119 376.55L342.291 405.228C339.093 408.545 334.681 410.42 330.072 410.42C325.463 410.42 321.051 408.545 317.853 405.228L210.437 297.812C207.119 294.614 205.245 290.202 205.245 285.593C205.245 280.983 207.119 276.572 210.437 273.374L238.776 245.035C241.969 241.77 246.344 239.926 250.911 239.926C255.474 239.926 259.849 241.77 263.042 245.035L329.391 311.895L485.004 156.282C488.202 152.964 492.614 151.089 497.223 151.089C501.833 151.089 506.244 152.964 509.442 156.282L537.442 184.626C540.812 187.923 542.656 192.47 542.536 197.183C542.562 201.777 540.723 206.183 537.442 209.402L537.439 209.404Z"}"></path></g><defs><clipPath id="${"clip0_1_4"}"><rect width="${"542.541"}" height="${"410.42"}"></rect></clipPath></defs></svg></span>

    <span class="${"hidden sm:inline"}">Select All (${escape($filteredChannels.length)})</span>`;
      }
    }
  )}`}</div>`;
});
const BottomBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_selected();
  return `<div class="${"h-16 bg-white dark:bg-gray-800 fixed bottom-0 left-0 right-0 py-2.5 border-t border-t-gray-100 dark:border-t-gray-800"}"><div class="${"flex justify-between items-center max-w-5xl mx-auto px-3"}"><div class="${"text-sm text-gray-600 dark:text-gray-400 font-mono"}">Selected ${escape($selected.length.toLocaleString())} channel(s)
    </div>
    <div class="${"flex space-x-2"}">${validate_component(SelectAllButton, "SelectAllButton").$$render($$result, {}, {}, {})}
      ${validate_component(DownloadButton, "DownloadButton").$$render($$result, {}, {}, {})}</div></div></div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".svelte-g4wg3a{box-sizing:border-box}.bg.svelte-g4wg3a{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}.wrap.svelte-g4wg3a{position:relative;margin:2rem;max-height:100%}.window.svelte-g4wg3a{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-g4wg3a{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-g4wg3a{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-g4wg3a:before,.close.svelte-g4wg3a:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-g4wg3a:before{-webkit-transform:translate(0, -50%) rotate(45deg);-moz-transform:translate(0, -50%) rotate(45deg);transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-g4wg3a:after{-webkit-transform:translate(0, -50%) rotate(-45deg);-moz-transform:translate(0, -50%) rotate(-45deg);transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-g4wg3a:hover{background:black}.close.svelte-g4wg3a:hover:before,.close.svelte-g4wg3a:hover:after{height:2px;background:white}.close.svelte-g4wg3a:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-g4wg3a:active{transform:scale(0.9)}.close.svelte-g4wg3a:hover,.close.svelte-g4wg3a:focus,.close.svelte-g4wg3a:active{outline:none}",
  map: null
};
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component({
      ...options,
      props: { ...props, ...options.props }
    });
  };
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  let { show = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    unstyled
  };
  let state = { ...defaultState };
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(Object.assign(
      {},
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      state.styleBg
    ));
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
    state.transitionBg;
    state.transitionWindow;
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callback = {}) => {
    Component = bind(NewComponent, newProps);
    state = { ...defaultState, ...options };
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callback.onClose)
        callback.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callback.onClosed)
        callback.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callback = {}) => {
    if (!Component)
      return;
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo(0, scrollY);
  };
  setContext$1(key, { open, close });
  onDestroy(() => {
  });
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.classBg === void 0 && $$bindings.classBg && classBg !== void 0)
    $$bindings.classBg(classBg);
  if ($$props.classWindowWrap === void 0 && $$bindings.classWindowWrap && classWindowWrap !== void 0)
    $$bindings.classWindowWrap(classWindowWrap);
  if ($$props.classWindow === void 0 && $$bindings.classWindow && classWindow !== void 0)
    $$bindings.classWindow(classWindow);
  if ($$props.classContent === void 0 && $$bindings.classContent && classContent !== void 0)
    $$bindings.classContent(classContent);
  if ($$props.classCloseButton === void 0 && $$bindings.classCloseButton && classCloseButton !== void 0)
    $$bindings.classCloseButton(classCloseButton);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext$1 !== void 0)
    $$bindings.setContext(setContext$1);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  $$result.css.add(css$2);
  return `

${Component ? `<div class="${[
    escape(null_to_empty(state.classBg), true) + " svelte-g4wg3a",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap), true) + " svelte-g4wg3a",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow), true) + " svelte-g4wg3a",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton), true) + " svelte-g4wg3a",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="${"Close modal"}"${add_attribute("style", cssCloseButton, 0)}></button>`}` : ``}
        <div class="${[
    escape(null_to_empty(state.classContent), true) + " svelte-g4wg3a",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}
${slots.default ? slots.default({}) : ``}`;
});
const Spinner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loading-wave-dots.svelte-10h86fq.svelte-10h86fq{position:relative}.loading-wave-dots.svelte-10h86fq .wave-item.svelte-10h86fq{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:svelte-10h86fq-loading-wave-dots linear 2.8s infinite;animation:svelte-10h86fq-loading-wave-dots linear 2.8s infinite}.loading-wave-dots.svelte-10h86fq .wave-item.svelte-10h86fq:first-child{margin-left:-36px}.loading-wave-dots.svelte-10h86fq .wave-item.svelte-10h86fq:nth-child(2){margin-left:-20px;-webkit-animation-delay:0.14s;animation-delay:0.14s}.loading-wave-dots.svelte-10h86fq .wave-item.svelte-10h86fq:nth-child(3){margin-left:-4px;-webkit-animation-delay:0.28s;animation-delay:0.28s}.loading-wave-dots.svelte-10h86fq .wave-item.svelte-10h86fq:nth-child(4){margin-left:12px;-webkit-animation-delay:0.42s;animation-delay:0.42s}.loading-wave-dots.svelte-10h86fq .wave-item.svelte-10h86fq:last-child{margin-left:28px;-webkit-animation-delay:0.56s;animation-delay:0.56s}@-webkit-keyframes svelte-10h86fq-loading-wave-dots{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}100%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes svelte-10h86fq-loading-wave-dots{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}100%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq{width:5px;height:5px;-webkit-animation:svelte-10h86fq-loading-circles linear .75s infinite;animation:svelte-10h86fq-loading-circles linear .75s infinite}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes svelte-10h86fq-loading-circles{0%{background:#dfdfdf}90%{background:#505050}100%{background:#dfdfdf}}@keyframes svelte-10h86fq-loading-circles{0%{background:#dfdfdf}90%{background:#505050}100%{background:#dfdfdf}}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq{background:#666;-webkit-animation:svelte-10h86fq-loading-bubbles linear .75s infinite;animation:svelte-10h86fq-loading-bubbles linear .75s infinite}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:first-child{margin-top:-12.5px;margin-left:-0.5px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(3){margin-top:-0.5px;margin-left:11.5px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(5){margin-top:11.5px;margin-left:-0.5px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(7){margin-top:-0.5px;margin-left:-12.5px}.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes svelte-10h86fq-loading-bubbles{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}100%{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes svelte-10h86fq-loading-bubbles{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}100%{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default.svelte-10h86fq.svelte-10h86fq{position:relative;border:1px solid #999;-webkit-animation:svelte-10h86fq-loading-rotating ease 1.5s infinite;animation:svelte-10h86fq-loading-rotating ease 1.5s infinite}.loading-default.svelte-10h86fq.svelte-10h86fq:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral.svelte-10h86fq.svelte-10h86fq{border:2px solid #777;border-right-color:transparent;-webkit-animation:svelte-10h86fq-loading-rotating linear .85s infinite;animation:svelte-10h86fq-loading-rotating linear .85s infinite}@-webkit-keyframes svelte-10h86fq-loading-rotating{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-10h86fq-loading-rotating{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.loading-bubbles.svelte-10h86fq.svelte-10h86fq,.loading-circles.svelte-10h86fq.svelte-10h86fq{position:relative}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq,.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(2),.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(2){-webkit-animation-delay:0.093s;animation-delay:0.093s}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(3),.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(3){-webkit-animation-delay:0.186s;animation-delay:0.186s}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(4),.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(4){-webkit-animation-delay:0.279s;animation-delay:0.279s}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(5),.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(5){-webkit-animation-delay:0.372s;animation-delay:0.372s}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(6),.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(6){-webkit-animation-delay:0.465s;animation-delay:0.465s}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:nth-child(7),.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:nth-child(7){-webkit-animation-delay:0.558s;animation-delay:0.558s}.loading-circles.svelte-10h86fq .circle-item.svelte-10h86fq:last-child,.loading-bubbles.svelte-10h86fq .bubble-item.svelte-10h86fq:last-child{-webkit-animation-delay:0.651s;animation-delay:0.651s}.loading-bubbles.svelte-10h86fq.svelte-10h86fq,.loading-circles.svelte-10h86fq.svelte-10h86fq,.loading-spiral.svelte-10h86fq.svelte-10h86fq,.loading-wave-dots.svelte-10h86fq.svelte-10h86fq,.loading-default.svelte-10h86fq.svelte-10h86fq{display:inline-block;margin:5px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spinner = "" } = $$props;
  if ($$props.spinner === void 0 && $$bindings.spinner && spinner !== void 0)
    $$bindings.spinner(spinner);
  $$result.css.add(css$1);
  return `${spinner === "bubbles" ? `
	<span class="${"loading-bubbles svelte-10h86fq"}"><span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span>
		<span class="${"bubble-item svelte-10h86fq"}"></span></span>` : `${spinner === "circles" ? `
	<span class="${"loading-circles svelte-10h86fq"}"><span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span>
		<span class="${"circle-item svelte-10h86fq"}"></span></span>` : `${spinner === "spiral" ? `
	<i class="${"loading-spiral svelte-10h86fq"}"></i>` : `${spinner === "wavedots" ? `
	<span class="${"loading-wave-dots svelte-10h86fq"}"><span class="${"wave-item svelte-10h86fq"}"></span>
		<span class="${"wave-item svelte-10h86fq"}"></span>
		<span class="${"wave-item svelte-10h86fq"}"></span>
		<span class="${"wave-item svelte-10h86fq"}"></span>
		<span class="${"wave-item svelte-10h86fq"}"></span></span>` : `
	<i class="${"loading-default svelte-10h86fq"}"></i>`}`}`}`}`;
});
const InfiniteLoading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".infinite-loading-container.svelte-o3w4bf{clear:both;text-align:center}.btn-try-infinite.svelte-o3w4bf{margin-top:5px;padding:5px 10px;color:#999;font-size:14px;line-height:1;background:transparent;border:1px solid #ccc;border-radius:3px;outline:none;cursor:pointer}.btn-try-infinite.svelte-o3w4bf:not(:active):hover{opacity:0.8}",
  map: null
};
const THROTTLE_LIMIT = 50;
const LOOP_CHECK_TIMEOUT = 1e3;
const LOOP_CHECK_MAX_CALLS = 10;
const ERROR_INFINITE_LOOP = [
  `executed the callback function more than ${LOOP_CHECK_MAX_CALLS} times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper rather than automatic searching, you can do this:`,
  "<!-- add a special attribute for the real scroll wrapper (can also be data-infinite-wrapper) -->",
  "<div infinite-wrapper>",
  "  ...",
  "  <!-- set forceUseInfiniteWrapper -->",
  "  <InfiniteLoading forceUseInfiniteWrapper>",
  "</div>",
  "or",
  '<div class="infinite-wrapper">',
  "  ...",
  "  <!-- set forceUseInfiniteWrapper as css selector of the real scroll wrapper -->",
  '  <InfiniteLoading forceUseInfiniteWrapper=".infinite-wrapper" />',
  "</div>"
].join("\n");
const thirdEventArg = (() => {
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get() {
        supportsPassive = { passive: true };
        return true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
  }
  return supportsPassive;
})();
const throttler = {
  timers: [],
  caches: [],
  throttle(fn) {
    if (this.caches.indexOf(fn) === -1) {
      this.caches.push(fn);
      this.timers.push(setTimeout(
        () => {
          fn();
          this.caches.splice(this.caches.indexOf(fn), 1);
          this.timers.shift();
        },
        THROTTLE_LIMIT
      ));
    }
  },
  reset() {
    this.timers.forEach((timer) => {
      clearTimeout(timer);
    });
    this.timers.length = 0;
    this.caches = [];
  }
};
const loopTracker = {
  isChecked: false,
  timer: null,
  times: 0,
  track() {
    this.times += 1;
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => {
        this.isChecked = true;
      },
      LOOP_CHECK_TIMEOUT
    );
    if (this.times > LOOP_CHECK_MAX_CALLS) {
      console.error(ERROR_INFINITE_LOOP);
      this.isChecked = true;
    }
  }
};
const scrollBarStorage = {
  key: "_infiniteScrollHeight",
  getScrollElement(element) {
    return element === window ? document.documentElement : element;
  },
  save(element) {
    const target = this.getScrollElement(element);
    target[this.key] = target.scrollHeight;
  },
  restore(element) {
    const target = this.getScrollElement(element);
    if (typeof target[this.key] === "number") {
      target.scrollTop = target.scrollHeight - target[this.key] + target.scrollTop;
    }
    this.remove(target);
  },
  remove(element) {
    if (element[this.key] !== void 0) {
      delete element[this.key];
    }
  }
};
function isVisible(element) {
  return element && element.offsetWidth + element.offsetHeight > 0;
}
const InfiniteLoading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showSpinner;
  let showError;
  let showNoResults;
  let showNoMore;
  const dispatch = createEventDispatcher();
  const STATUS = {
    READY: 0,
    LOADING: 1,
    COMPLETE: 2,
    ERROR: 3
  };
  let { distance = 100 } = $$props;
  let { spinner = "default" } = $$props;
  let { direction = "bottom" } = $$props;
  let { forceUseInfiniteWrapper = false } = $$props;
  let { identifier = +new Date() } = $$props;
  let isFirstLoad = true;
  let status = STATUS.READY;
  let thisElement;
  let scrollParent;
  const stateChanger = {
    loaded: async () => {
      isFirstLoad = false;
      if (direction === "top") {
        await tick();
        scrollBarStorage.restore(scrollParent);
      }
      if (status === STATUS.LOADING) {
        await tick();
        await attemptLoad(true);
      }
    },
    complete: async () => {
      status = STATUS.COMPLETE;
      await tick();
      scrollParent.removeEventListener("scroll", scrollHandler, thirdEventArg);
    },
    reset: async () => {
      status = STATUS.READY;
      isFirstLoad = true;
      scrollBarStorage.remove(scrollParent);
      scrollParent.addEventListener("scroll", scrollHandler, thirdEventArg);
      setTimeout(
        () => {
          throttler.reset();
          scrollHandler();
        },
        1
      );
    },
    error: () => {
      status = STATUS.ERROR;
      throttler.reset();
    }
  };
  function scrollHandler(event) {
    if (status === STATUS.READY) {
      if (event && event.constructor === Event && isVisible(thisElement)) {
        throttler.throttle(attemptLoad);
      } else {
        attemptLoad();
      }
    }
  }
  async function attemptLoad(isContinuousCall) {
    if (status !== STATUS.COMPLETE && isVisible(thisElement) && getCurrentDistance() <= distance) {
      status = STATUS.LOADING;
      if (direction === "top") {
        await tick();
        scrollBarStorage.save(scrollParent);
      }
      dispatch("infinite", stateChanger);
      if (isContinuousCall && !forceUseInfiniteWrapper && !loopTracker.isChecked) {
        loopTracker.track();
      }
    } else if (status === STATUS.LOADING) {
      status = STATUS.READY;
    }
  }
  function getCurrentDistance() {
    let distance2;
    if (direction === "top") {
      distance2 = typeof scrollParent.scrollTop === "number" ? scrollParent.scrollTop : scrollParent.pageYOffset;
    } else {
      const infiniteElementOffsetTopFromBottom = thisElement.getBoundingClientRect().top;
      const scrollElementOffsetTopFromBottom = scrollParent === window ? window.innerHeight : scrollParent.getBoundingClientRect().bottom;
      distance2 = infiniteElementOffsetTopFromBottom - scrollElementOffsetTopFromBottom;
    }
    return distance2;
  }
  onDestroy(() => {
  });
  if ($$props.distance === void 0 && $$bindings.distance && distance !== void 0)
    $$bindings.distance(distance);
  if ($$props.spinner === void 0 && $$bindings.spinner && spinner !== void 0)
    $$bindings.spinner(spinner);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.forceUseInfiniteWrapper === void 0 && $$bindings.forceUseInfiniteWrapper && forceUseInfiniteWrapper !== void 0)
    $$bindings.forceUseInfiniteWrapper(forceUseInfiniteWrapper);
  if ($$props.identifier === void 0 && $$bindings.identifier && identifier !== void 0)
    $$bindings.identifier(identifier);
  $$result.css.add(css);
  showSpinner = status === STATUS.LOADING;
  showError = status === STATUS.ERROR;
  showNoResults = status === STATUS.COMPLETE && isFirstLoad;
  showNoMore = status === STATUS.COMPLETE && !isFirstLoad;
  return `<div class="${"infinite-loading-container svelte-o3w4bf"}"${add_attribute("this", thisElement, 0)}>${showSpinner ? `<div class="${"infinite-status-prompt"}">${slots.spinner ? slots.spinner({ isFirstLoad }) : `
				${validate_component(Spinner, "Spinner").$$render($$result, { spinner }, {}, {})}
			`}</div>` : ``}

	${showNoResults ? `<div class="${"infinite-status-prompt"}">${slots.noResults ? slots.noResults({}) : `
				No results :(
			`}</div>` : ``}

	${showNoMore ? `<div class="${"infinite-status-prompt"}">${slots.noMore ? slots.noMore({}) : `
				No more data :)
			`}</div>` : ``}

	${showError ? `<div class="${"infinite-status-prompt"}">${slots.error ? slots.error({ attemptLoad }) : `
				Oops, something went wrong :(
				<br>
				<button class="${"btn-try-infinite svelte-o3w4bf"}">Retry
				</button>
			`}</div>` : ``}
</div>`;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { selected: selected2 = false } = $$props;
  let { indeterminate = false } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected2 !== void 0)
    $$bindings.selected(selected2);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  return `${selected2 ? `<button class="${"w-12 h-12 rounded-full text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200 flex items-center justify-center"}" area-label="${"Unselect"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-6 h-6"}"><path fill-rule="${"evenodd"}" d="${"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"}" clip-rule="${"evenodd"}"></path></svg></button>` : `${indeterminate ? `<button class="${"w-12 h-12 rounded-full text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200 flex items-center justify-center"}" area-label="${"Unselect"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-6 h-6"}"><path fill-rule="${"evenodd"}" d="${"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"}" clip-rule="${"evenodd"}"></path></svg></button>` : `<button class="${"w-12 h-12 rounded-full text-gray-200 hover:text-gray-400 dark:text-gray-700 dark:hover:text-gray-600 transition-colors duration-200 flex items-center justify-center"}" area-label="${"Select"}"><svg viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"w-6 h-6"}" stroke="${"currentColor"}" stroke-width="${"1.5"}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}" fill="${"none"}"></circle></svg></button>`}`}`;
});
function pluralize(number, word) {
  return number > 1 ? word + "s" : word;
}
const ChannelItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSelected;
  let $selected, $$unsubscribe_selected;
  let $downloadMode, $$unsubscribe_downloadMode;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_downloadMode = subscribe(downloadMode, (value) => $downloadMode = value);
  let { channel } = $$props;
  const guides = channel._guides;
  const streams = channel._streams;
  getContext("simple-modal");
  if ($$props.channel === void 0 && $$bindings.channel && channel !== void 0)
    $$bindings.channel(channel);
  isSelected = !!$selected.find((c) => c.id === channel.id);
  $$unsubscribe_selected();
  $$unsubscribe_downloadMode();
  return `${$downloadMode ? `<div class="${"w-14 h-14 shrink-0 flex items-center absolute -left-14"}">${validate_component(Checkbox, "Checkbox").$$render($$result, { selected: isSelected }, {}, {})}</div>` : ``}
<div class="${"border-b last:border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-gray-700 h-16 flex items-center relative"}"><div class="${"px-4 sm:pl-10 sm:pr-16 w-36 sm:w-52 flex shrink-0 items-center justify-center"}"><div class="${"inline-flex items-center justify-center whitespace-nowrap overflow-hidden"}">${channel.logo ? `<img class="${"block align-middle mx-auto max-w-[6rem] max-h-[2.75rem] text-sm text-gray-400 dark:text-gray-600 cursor-defaults"}" loading="${"lazy"}" referrerpolicy="${"no-referrer"}"${add_attribute("src", channel.logo, 0)}${add_attribute("alt", channel.name, 0)}>` : ``}</div></div>
  <div class="${"w-52 px-2 sm:w-72 shrink-0"}"><div><div class="${"text-left"}"><div class="${"flex space-x-2 items-center"}"><a href="${"/channel?id=" + escape(channel.id, true)}" tabindex="${"0"}" class="${"font-normal text-gray-600 dark:text-white hover:underline hover:text-blue-500 line-clamp-1"}"${add_attribute("title", channel.name, 0)}>${escape(channel.name)}</a>
          ${channel.is === "closed" ? `<div class="${"text-gray-500 border-[1px] border-gray-200 text-xs inline-flex items-center px-2.5 py-0.5 ml-1 mr-2 dark:text-gray-300 cursor-default rounded-full"}" title="${"closed: " + escape(channel.closed, true)}">Closed
          </div>` : ``}</div>
        ${channel.alt_names.length ? `<div class="${"text-sm text-gray-400 dark:text-gray-400 line-clamp-1"}"${add_attribute("title", channel.alt_names.join(", "), 0)}>${escape(channel.alt_names.join(", "))}</div>` : ``}</div></div></div>
  <div class="${"w-52 px-2 sm:w-72"}"><div><code class="${"break-words text-sm text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700 px-2 py-1 rounded-sm select-all cursor-text font-mono"}">${escape(channel.id)}</code></div></div>
  <div class="${"w-52 px-4 sm:56"}"><div class="${"text-right flex justify-end space-x-3 items-center"}">${guides.length ? `<button class="${"text-sm text-gray-500 dark:text-gray-100 inline-flex space-x-1 flex items-center hover:text-blue-500 dark:hover:text-blue-400"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" class="${"w-5 h-5"}"><path d="${"M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"}"></path><path fill-rule="${"evenodd"}" d="${"M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"}" clip-rule="${"evenodd"}"></path></svg>

        <div>${escape(guides.length)}</div>
        <div>${escape(pluralize(guides.length, "guide"))}</div></button>
      ` : ``}${streams.length ? `
      <button class="${"text-sm text-gray-500 dark:text-gray-100 inline-flex space-x-1 flex items-center hover:text-blue-500 dark:hover:text-blue-400"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"}"></path></svg>

        <div>${escape(streams.length)}</div>
        <div>${escape(pluralize(streams.length, "stream"))}</div></button>` : ``}</div></div></div>`;
});
const ChannelGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { channels: channels2 = [] } = $$props;
  if ($$props.channels === void 0 && $$bindings.channels && channels2 !== void 0)
    $$bindings.channels(channels2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"flex flex-col"}"><div class="${"overflow-y-auto"}"><div class="${"inline-block min-w-full align-middle overflow-hidden"}"><div class="${"min-w-full divide-y divide-gray-200 dark:divide-gray-700"}"><div class="${"bg-gray-50 dark:bg-gray-700"}"><div class="${"flex"}"><div class="${"w-36 sm:w-52 shrink-0"}"></div>
            <div class="${"py-3 px-2 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase dark:text-gray-400 w-52 sm:w-72 shrink-0"}">Name
            </div>
            <div class="${"py-3 px-2 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase dark:text-gray-400 w-48 sm:w-80"}">TVG-ID
            </div>
            <div><span class="${"sr-only"}">Actions</span></div></div></div>
        <div class="${"bg-white dark:bg-gray-800"}">${each(channels2, (channel) => {
      return `${validate_component(ChannelItem, "ChannelItem").$$render(
        $$result,
        { channel },
        {
          channel: ($$value) => {
            channel = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const CountryItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let intersect;
  let expanded;
  let isSelected;
  let isIndeterminate;
  let $selected, $$unsubscribe_selected;
  let $downloadMode, $$unsubscribe_downloadMode;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_downloadMode = subscribe(downloadMode, (value) => $downloadMode = value);
  let { country } = $$props;
  let { channels: channels2 = [] } = $$props;
  let { hasQuery: hasQuery2 } = $$props;
  if ($$props.country === void 0 && $$bindings.country && country !== void 0)
    $$bindings.country(country);
  if ($$props.channels === void 0 && $$bindings.channels && channels2 !== void 0)
    $$bindings.channels(channels2);
  if ($$props.hasQuery === void 0 && $$bindings.hasQuery && hasQuery2 !== void 0)
    $$bindings.hasQuery(hasQuery2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    intersect = _.intersectionBy($selected, channels2, "id");
    expanded = country.expanded || channels2 && channels2.length > 0 && hasQuery2;
    isSelected = intersect.length === channels2.length;
    isIndeterminate = intersect.length !== 0 && intersect.length < channels2.length;
    $$rendered = `<div class="${["mb-2 md:mb-3", $downloadMode ? "pl-14" : ""].join(" ").trim()}" style="${"transition: padding-left 100ms"}"><h2 id="${"accordion-heading-" + escape(country.code, true)}" class="${"flex relative"}">${$downloadMode ? `<div class="${"w-14 h-14 shrink-0 flex items-center absolute -left-14"}">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        selected: isSelected,
        indeterminate: isIndeterminate
      },
      {},
      {}
    )}</div>` : ``}
    <button type="${"button"}" class="${[
      "flex items-center focus:ring-0 dark:focus:ring-gray-800 justify-between p-4 w-full font-medium text-left border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-800",
      (expanded ? "rounded-t-md" : "") + " " + (!expanded ? "rounded-md" : "") + " " + (expanded ? "border-b-0" : "")
    ].join(" ").trim()}"${add_attribute("aria-expanded", expanded, 0)} aria-controls="${"accordion-body-" + escape(country.code, true)}"><span>${escape(country.flag)} ${escape(country.name)}</span>
      <svg class="${["w-6 h-6 shrink-0", expanded ? "rotate-180" : ""].join(" ").trim()}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button></h2>
  ${expanded ? `<div class="${"relative"}" id="${"accordion-body-" + escape(country.code, true)}" aria-labelledby="${"accordion-heading-" + escape(country.code, true)}"><div class="${"border border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-md overflow-hidden"}">${validate_component(ChannelGrid, "ChannelGrid").$$render(
      $$result,
      { channels: channels2 },
      {
        channels: ($$value) => {
          channels2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_selected();
  $$unsubscribe_downloadMode();
  return $$rendered;
});
const SearchField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $query, $$unsubscribe_query;
  $$unsubscribe_query = subscribe(query, (value) => $query = value);
  getContext("simple-modal");
  let { found = 0 } = $$props;
  let { isLoading = true } = $$props;
  if ($$props.found === void 0 && $$bindings.found && found !== void 0)
    $$bindings.found(found);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  $$unsubscribe_query();
  return `<form class="${"mb-5"}"><div><label for="${"search-input"}" class="${"sr-only"}">Search</label>
    <div class="${"relative mt-1"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"}" clip-rule="${"evenodd"}"></path></svg></div>
      <input type="${"search"}" id="${"search-input"}" class="${"bg-white border border-gray-300 text-gray-900 outline-blue-500 text-sm rounded-md block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"}" placeholder="${"Search for channels"}"${add_attribute("value", $query, 0)}></div>
    <div class="${"mt-2 flex justify-between px-1"}"><span class="${"inline-flex text-sm text-gray-500 dark:text-gray-400 font-mono"}">Found 
        <span${add_classes((isLoading ? "animate-spin" : "").trim())}>${escape(!isLoading ? found.toLocaleString() : "/")}</span>
         channel(s)</span>
      <button type="${"button"}" class="${"inline-flex text-sm text-gray-500 dark:text-gray-400 font-mono hover:underline hover:text-blue-500 dark:hover:text-blue-400"}">Search syntax
      </button></div></div></form>`;
});
const initLimit = 10;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let grouped;
  let $$unsubscribe_query;
  let $hasQuery, $$unsubscribe_hasQuery;
  let $$unsubscribe_countries;
  let $$unsubscribe_channels;
  let $filteredChannels, $$unsubscribe_filteredChannels;
  let $downloadMode, $$unsubscribe_downloadMode;
  $$unsubscribe_query = subscribe(query, (value) => value);
  $$unsubscribe_hasQuery = subscribe(hasQuery, (value) => $hasQuery = value);
  $$unsubscribe_countries = subscribe(countries, (value) => value);
  $$unsubscribe_channels = subscribe(channels, (value) => value);
  $$unsubscribe_filteredChannels = subscribe(filteredChannels, (value) => $filteredChannels = value);
  $$unsubscribe_downloadMode = subscribe(downloadMode, (value) => $downloadMode = value);
  let _countries = [];
  let limit = initLimit;
  let infiniteId = +new Date();
  let isLoading = true;
  const unsubscribe = filteredChannels.subscribe(reset);
  onDestroy(unsubscribe);
  function reset() {
    infiniteId = +new Date();
    limit = initLimit;
  }
  let scrollTop = 0;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    visible = _countries.slice(0, limit);
    grouped = _.groupBy($filteredChannels, "country");
    $$rendered = `
${$$result.head += `<!-- HEAD_svelte-1y0o10k_START -->${$$result.title = `<title>iptv-org</title>`, ""}<meta name="${"description"}" content="${"Collection of resources dedicated to IPTV"}"><!-- HEAD_svelte-1y0o10k_END -->`, ""}

<header class="${[
      "z-40 w-full min-w-[360px] flex items-center",
      "absolute "
    ].join(" ").trim()}" style="${"top: " + escape(
      0,
      true
    ) + "px"}">${validate_component(NavBar, "NavBar").$$render($$result, { withSearch: scrollTop > 150 }, {}, {})}</header>

<main class="${"bg-slate-50 dark:bg-[#1d232e] min-h-screen min-w-[360px]"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        unstyled: true,
        classBg: "fixed top-0 left-0 z-40 w-screen h-screen flex flex-col bg-black/[.7] overflow-y-scroll",
        closeButton: false
      },
      {},
      {
        default: () => {
          return `<section class="${"max-w-5xl mx-auto px-2 pt-24 sm:pt-32 pb-20 overflow-hidden"}">${validate_component(SearchField, "SearchField").$$render(
            $$result,
            {
              isLoading,
              found: $filteredChannels.length
            },
            {
              isLoading: ($$value) => {
                isLoading = $$value;
                $$settled = false;
              },
              found: ($$value) => {
                $filteredChannels.length = $$value;
                $$settled = false;
              }
            },
            {}
          )}
      ${isLoading ? `<div class="${"flex items-center justify-center w-full pt-1 pb-6 tracking-tight text-sm text-gray-500 dark:text-gray-400 font-mono"}">loading...
      </div>` : ``} ${each(visible, (country) => {
            return `${grouped[country.code] && grouped[country.code].length > 0 ? `${validate_component(CountryItem, "CountryItem").$$render(
              $$result,
              {
                country,
                channels: grouped[country.code],
                hasQuery: $hasQuery
              },
              {
                country: ($$value) => {
                  country = $$value;
                  $$settled = false;
                },
                channels: ($$value) => {
                  grouped[country.code] = $$value;
                  $$settled = false;
                },
                hasQuery: ($$value) => {
                  $hasQuery = $$value;
                  $$settled = false;
                }
              },
              {}
            )}` : ``}`;
          })} ${!isLoading ? `${validate_component(InfiniteLoading, "InfiniteLoading").$$render($$result, { identifier: infiniteId, distance: 500 }, {}, {
            spinner: () => {
              return `<div slot="${"spinner"}"></div>`;
            },
            error: () => {
              return `<div slot="${"error"}"></div>`;
            },
            noMore: () => {
              return `<div slot="${"noMore"}"></div>`;
            },
            noResults: () => {
              return `<div slot="${"noResults"}"></div>`;
            }
          })}` : ``}</section>`;
        }
      }
    )}</main>

${$downloadMode ? `${validate_component(BottomBar, "BottomBar").$$render($$result, {}, {}, {})}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_query();
  $$unsubscribe_hasQuery();
  $$unsubscribe_countries();
  $$unsubscribe_channels();
  $$unsubscribe_filteredChannels();
  $$unsubscribe_downloadMode();
  return $$rendered;
});
export {
  Page as default
};
