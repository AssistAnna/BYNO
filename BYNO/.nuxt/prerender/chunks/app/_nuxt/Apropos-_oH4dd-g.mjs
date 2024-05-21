import { mergeProps, useSSRContext } from 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/klona/dist/index.mjs';
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

const _sfc_main = {
  data() {
    return {
      logos: [
        {
          imgUrl: "_nuxt/assets/img/partenaires/logo-mazda.png"
        },
        {
          imgUrl: "_nuxt/assets/img/partenaires/logo-menton.png"
        },
        {
          imgUrl: "_nuxt/assets/img/partenaires/logo-R.png"
        },
        {
          imgUrl: "_nuxt/assets/img/partenaires/logo-chateau.png"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "apropos" }, _attrs))} data-v-b86e0211><h2 class="title-h2" data-aos="fade-up" data-v-b86e0211>A propos</h2><div class="bloc-text" data-aos="fade-up" data-v-b86e0211><h3 data-v-b86e0211>No\xE9 Chardon</h3><h4 data-v-b86e0211>entrepreneur passionn\xE9</h4><p data-v-b86e0211>Passionn\xE9 par la musique et la vid\xE9o, mon objectif est de vous guider dans la conception de votre identit\xE9 visuelle et dans le d\xE9ploiement de votre communication sur les r\xE9seaux sociaux. Chaque projet que je r\xE9alise est con\xE7u pour vous satisfaire et vous accompagner dans votre d\xE9veloppement.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apropos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Apropos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b86e0211"]]);

export { Apropos as default };
//# sourceMappingURL=Apropos-_oH4dd-g.mjs.map
