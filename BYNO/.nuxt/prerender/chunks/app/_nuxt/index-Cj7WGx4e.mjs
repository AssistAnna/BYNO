import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, mergeProps } from 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './AllProjects-B8JvP0w2.mjs';
import { _ as __nuxt_component_1 } from './AllServices-CN501uGC.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/devalue/index.js';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("frame.BcrFfrBG.png");
const _imports_1 = "" + buildAssetsURL("logo.CcxpeLr8.png");
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
  _push(`<p class="text-presentation" data-aos="fade-up">Je suis passionn\xE9 par mon m\xE9tier et je m&#39;engage \xE0 vous offrir des services de qualit\xE9 aussi bien dans le sound design que la vid\xE9o pour repr\xE9senter au mieux votre entreprise ou vos \xE9v\xE9nements.</p><h2 class="title-h2" data-aos="fade-up">Projets</h2>`);
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

export { index as default };
//# sourceMappingURL=index-Cj7WGx4e.mjs.map
