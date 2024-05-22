import { mergeProps, useSSRContext } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './logo-byno-avececrit-xn-xShn4.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../renderer.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/devalue/index.js';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/defu/dist/defu.mjs';
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
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-contact" }, _attrs))} data-v-5a3a553b><div class="bloc-title" data-v-5a3a553b><img${ssrRenderAttr("src", _imports_0)} alt="logo byno" data-v-5a3a553b><div class="soulignement" data-v-5a3a553b></div></div><form class="formulaire" data-v-5a3a553b><input${ssrRenderAttr("value", _ctx.name)} type="text" placeholder="Nom, Pr\xE9nom" data-v-5a3a553b><input${ssrRenderAttr("value", _ctx.email)} type="text" placeholder="Email" data-v-5a3a553b><input${ssrRenderAttr("value", _ctx.telephone)} type="text" placeholder="T\xE9l\xE9phone" data-v-5a3a553b><textarea rows="6" data-v-5a3a553b>Votre message ...</textarea><div class="button" data-v-5a3a553b><button type="submit" data-v-5a3a553b>${ssrInterpolate(_ctx.isLoading ? "Loading..." : "Envoyer")}</button></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5a3a553b"]]);

export { Contact as default };
//# sourceMappingURL=Contact-BokVBi8l.mjs.map
