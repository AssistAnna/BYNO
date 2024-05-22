import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./AllServices-Bj0yvwOW.js";
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
const _sfc_main$1 = {
  data() {
    return {
      cards: [
        {
          id: 0,
          iconUrl: "/icon/services1.png",
          text1: "Relation client",
          text2: "Devis",
          text3: "Organisation du planning",
          text4: "Accompagnement jusqu'à la diffusion"
        },
        {
          id: 1,
          iconUrl: "/icon/services3.png",
          text1: "Brainstorming",
          text2: "Script / Scénario",
          text3: "Note d'intention",
          text4: "Repérages"
        },
        {
          id: 2,
          iconUrl: "/icon/services2.png",
          text1: "Tournage / Montage",
          text2: "Animation / Motion design",
          text3: "Voix off / Enregistrement",
          text4: "Mixage / Mastering"
        },
        {
          id: 3,
          iconUrl: "/icon/services4.png",
          text1: "Encodage tous supports",
          text2: "Envoi des fichiers dématerialisés",
          text3: "",
          text4: ""
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "all" }, _attrs))} data-v-5bea83fd><div class="cards-bloc" data-v-5bea83fd><!--[-->`);
  ssrRenderList($data.cards, (card, key) => {
    _push(`<div class="card box-shadow" data-v-5bea83fd><div class="card-icon" style="${ssrRenderStyle(" background-image: url(" + card.iconUrl + ")")}" data-v-5bea83fd></div><div class="liste-text" data-v-5bea83fd><p data-v-5bea83fd>${ssrInterpolate(card.text1)}</p><p data-v-5bea83fd>${ssrInterpolate(card.text2)}</p><p data-v-5bea83fd>${ssrInterpolate(card.text3)}</p><p data-v-5bea83fd>${ssrInterpolate(card.text4)}</p></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5bea83fd"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardServices = __nuxt_component_0;
  const _component_AllServices = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))} data-v-865e6bb7><h2 class="title-h2" data-aos="fade-up" data-v-865e6bb7>Services</h2>`);
  _push(ssrRenderComponent(_component_CardServices, { "data-aos": "fade-up" }, null, _parent));
  _push(ssrRenderComponent(_component_AllServices, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-865e6bb7"]]);
export {
  Services as default
};
//# sourceMappingURL=Services-G-6EEDua.js.map
