import { _ as __nuxt_component_0 } from "./AllProjects-DRB4SFVf.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AllProjects = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "productions" }, _attrs))} data-v-85a34f66><h2 class="title-h2" data-aos="fade-up" data-v-85a34f66>Productions</h2>`);
  _push(ssrRenderComponent(_component_AllProjects, { "data-aos": "fade-up" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Productions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-85a34f66"]]);
export {
  index as default
};
//# sourceMappingURL=index-DiqHCUsZ.js.map
