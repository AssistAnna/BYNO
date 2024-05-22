import { useSSRContext, mergeProps } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1 } from './AllServices-Bj0yvwOW.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/pathe/dist/index.mjs';
import '../../renderer.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/devalue/index.js';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/@unhead/ssr/dist/index.mjs';

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
          text4: "Accompagnement jusqu'\xE0 la diffusion"
        },
        {
          id: 1,
          iconUrl: "/icon/services3.png",
          text1: "Brainstorming",
          text2: "Script / Sc\xE9nario",
          text3: "Note d'intention",
          text4: "Rep\xE9rages"
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
          text2: "Envoi des fichiers d\xE9materialis\xE9s",
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

export { Services as default };
//# sourceMappingURL=Services-G-6EEDua.mjs.map
