import { p as publicAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _imports_0 = "" + publicAssetsURL("img/design-img1.png");
const _imports_1 = "" + publicAssetsURL("img/design-img2.png");
const _imports_2 = "" + publicAssetsURL("img/design-img3.png");
const _imports_3 = "" + publicAssetsURL("img/design-img4.png");
const _imports_4 = "" + publicAssetsURL("img/design-img5.png");
const _imports_5 = "" + publicAssetsURL("img/design-img6.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "design-all" }, _attrs))} data-v-eb3b254f><h2 class="title-h2" data-aos="fade-up" data-v-eb3b254f>Design</h2><p data-aos="fade-up" data-v-eb3b254f>Les pochettes de single ont \xE9t\xE9 soigneusement con\xE7ues pour refl\xE9ter le style adapt\xE9 \xE0 l\u2019artiste et au genre musical correspondant.</p><div class="bloc-img" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_0)} alt="image pochette album rose" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_1)} alt="image pochette album design beige" data-v-eb3b254f></div><div class="bloc-img wesh" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_2)} alt="image pochette album otherside" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_3)} alt="image pochette album loadjak" data-v-eb3b254f></div><div class="bloc-img" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_4)} alt="image pochette album superfly" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_5)} alt="image pochette album I gotta love" data-v-eb3b254f></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Productions/design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const design = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb3b254f"]]);

export { design as default };
//# sourceMappingURL=design-D047ChFx.mjs.map
