import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-byno-avececrit-BvhLzsFz.js";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-contact" }, _attrs))} data-v-cb1fafed><div class="bloc-title" data-v-cb1fafed><img${ssrRenderAttr("src", _imports_0)} alt="logo byno" data-v-cb1fafed><div class="soulignement" data-v-cb1fafed></div></div><form class="formulaire" data-v-cb1fafed><input${ssrRenderAttr("value", _ctx.name)} type="text" placeholder="Nom, Prénom" data-v-cb1fafed><input${ssrRenderAttr("value", _ctx.email)} type="text" placeholder="Email" data-v-cb1fafed><input${ssrRenderAttr("value", _ctx.telephone)} type="text" placeholder="Téléphone" data-v-cb1fafed><textarea rows="6" data-v-cb1fafed>Votre message ...</textarea><div class="button" data-v-cb1fafed><button type="submit" data-v-cb1fafed>${ssrInterpolate(_ctx.isLoading ? "Loading..." : "Envoyer")}</button></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cb1fafed"]]);
export {
  Contact as default
};
//# sourceMappingURL=Contact-C1DM5YJa.js.map
