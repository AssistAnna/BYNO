import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./AllProjects-B8JvP0w2.js";
import { _ as __nuxt_component_1 } from "./AllServices-CN501uGC.js";
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
const _imports_0 = "" + __buildAssetsURL("frame.BcrFfrBG.png");
const _imports_1 = "" + __buildAssetsURL("logo.CcxpeLr8.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "groupe-img-accueil" }, _attrs))} data-v-45193003><img${ssrRenderAttr("src", _imports_0)} alt="" class="frame" data-v-45193003><div class="logo" data-v-45193003><img${ssrRenderAttr("src", _imports_1)} alt="" class="logo-ecriture" data-v-45193003></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GroupeImgAccueil.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-45193003"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GroupeImgAccueil = __nuxt_component_0;
  const _component_AllProjects = __nuxt_component_0$1;
  const _component_AllServices = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-index" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_GroupeImgAccueil, { "data-aos": "fade-up" }, null, _parent));
  _push(`<p class="text-presentation" data-aos="fade-up">Je suis passionné par mon métier et je m&#39;engage à vous offrir des services de qualité aussi bien dans le sound design que la vidéo pour représenter au mieux votre entreprise ou vos événements.</p><h2 class="title-h2" data-aos="fade-up">Projets</h2>`);
  _push(ssrRenderComponent(_component_AllProjects, { "data-aos": "fade-up" }, null, _parent));
  _push(`<h2 class="title-h2" data-aos="fade-up">Services</h2>`);
  _push(ssrRenderComponent(_component_AllServices, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-Cj7WGx4e.js.map
