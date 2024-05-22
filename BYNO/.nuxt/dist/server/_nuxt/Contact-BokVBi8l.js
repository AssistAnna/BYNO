import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-byno-avececrit-xn-xShn4.js";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-contact" }, _attrs))} data-v-5a3a553b><div class="bloc-title" data-v-5a3a553b><img${ssrRenderAttr("src", _imports_0)} alt="logo byno" data-v-5a3a553b><div class="soulignement" data-v-5a3a553b></div></div><form class="formulaire" data-v-5a3a553b><input${ssrRenderAttr("value", _ctx.name)} type="text" placeholder="Nom, Prénom" data-v-5a3a553b><input${ssrRenderAttr("value", _ctx.email)} type="text" placeholder="Email" data-v-5a3a553b><input${ssrRenderAttr("value", _ctx.telephone)} type="text" placeholder="Téléphone" data-v-5a3a553b><textarea rows="6" data-v-5a3a553b>Votre message ...</textarea><div class="button" data-v-5a3a553b><button type="submit" data-v-5a3a553b>${ssrInterpolate(_ctx.isLoading ? "Loading..." : "Envoyer")}</button></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5a3a553b"]]);
export {
  Contact as default
};
//# sourceMappingURL=Contact-BokVBi8l.js.map
