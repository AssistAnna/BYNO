import { useSSRContext, mergeProps } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = {
  data() {
    return {
      photos: [
        {
          imgUrl: "/img/carousel/carousel-img1.jpg"
        },
        {
          imgUrl: "/img/carousel/carousel-img3.jpg"
        },
        {
          imgUrl: "/img/carousel/carousel-img2.jpg"
        },
        {
          imgUrl: "/img/carousel/carousel-img5.jpg"
        },
        {
          imgUrl: "/img/carousel/carousel-img4.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))} data-v-8a05582d><p data-v-8a05582d>D\xE9composition d&#39;un travail de retouches</p><div class="grande-photo" data-aos="fade-up" data-v-8a05582d></div><div class="bloc-photos box-shadow" data-aos="fade-down" data-v-8a05582d><!--[-->`);
  ssrRenderList($data.photos, (photo, key) => {
    _push(`<div class="photo" data-v-8a05582d><div class="img" style="${ssrRenderStyle(" background-image: url(" + photo.imgUrl + ")")}" data-v-8a05582d></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8a05582d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "retouches" }, _attrs))} data-v-ef7f7998><h2 class="title-h2" data-aos="fade-up" data-v-ef7f7998>Retouches</h2><h3 data-aos="fade-up" data-v-ef7f7998>Donner un autre sens \xE0 la photographie</h3><div class="img1 box-shadow" data-aos="fade-up" data-v-ef7f7998></div><div class="bloc-img-text" data-v-ef7f7998><div class="img2 box-shadow" data-aos="fade-right" data-v-ef7f7998></div><h4 data-aos="fade-left" data-v-ef7f7998>Une simple image ou un simple regard peut communiquer une multitude de significations.</h4></div><div class="bloc3" data-v-ef7f7998><div class="img3 box-shadow" data-v-ef7f7998></div><div class="liste-photos" data-v-ef7f7998></div></div>`);
  _push(ssrRenderComponent(_component_Carousel, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Retouches.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Retouches = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ef7f7998"]]);

export { Retouches as default };
//# sourceMappingURL=Retouches-j4vxVjO_.mjs.map
