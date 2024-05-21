import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$1 = {
  data() {
    return {
      photos: [
        {
          imgUrl: "_nuxt/assets/img/carousel/carousel-img1.jpg"
        },
        {
          imgUrl: "_nuxt/assets/img/carousel/carousel-img3.jpg"
        },
        {
          imgUrl: "_nuxt/assets/img/carousel/carousel-img2.jpg"
        },
        {
          imgUrl: "_nuxt/assets/img/carousel/carousel-img5.jpg"
        },
        {
          imgUrl: "_nuxt/assets/img/carousel/carousel-img4.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))} data-v-39b47dae><p data-v-39b47dae>Décomposition d&#39;un travail de retouches</p><div class="grande-photo" data-aos="fade-up" data-v-39b47dae></div><div class="bloc-photos box-shadow" data-aos="fade-down" data-v-39b47dae><!--[-->`);
  ssrRenderList($data.photos, (photo, key) => {
    _push(`<div class="photo" data-v-39b47dae><div class="img" style="${ssrRenderStyle(" background-image: url(" + photo.imgUrl + ")")}" data-v-39b47dae></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-39b47dae"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "retouches" }, _attrs))} data-v-9c960113><h2 class="title-h2" data-aos="fade-up" data-v-9c960113>Retouches</h2><h3 data-aos="fade-up" data-v-9c960113>Donner un autre sens à la photographie</h3><div class="img1 box-shadow" data-aos="fade-up" data-v-9c960113></div><div class="bloc-img-text" data-v-9c960113><div class="img2 box-shadow" data-aos="fade-right" data-v-9c960113></div><h4 data-aos="fade-left" data-v-9c960113>Une simple image ou un simple regard peut communiquer une multitude de significations.</h4></div><div class="bloc3" data-v-9c960113><div class="img3 box-shadow" data-v-9c960113></div><div class="liste-photos" data-v-9c960113></div></div>`);
  _push(ssrRenderComponent(_component_Carousel, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Retouches.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Retouches = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9c960113"]]);
export {
  Retouches as default
};
//# sourceMappingURL=Retouches-BxZ7S-Oj.js.map
