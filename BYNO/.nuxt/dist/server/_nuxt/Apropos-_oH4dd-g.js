import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "apropos" }, _attrs))} data-v-b86e0211><h2 class="title-h2" data-aos="fade-up" data-v-b86e0211>A propos</h2><div class="bloc-text" data-aos="fade-up" data-v-b86e0211><h3 data-v-b86e0211>Noé Chardon</h3><h4 data-v-b86e0211>entrepreneur passionné</h4><p data-v-b86e0211>Passionné par la musique et la vidéo, mon objectif est de vous guider dans la conception de votre identité visuelle et dans le déploiement de votre communication sur les réseaux sociaux. Chaque projet que je réalise est conçu pour vous satisfaire et vous accompagner dans votre développement.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Apropos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Apropos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b86e0211"]]);
export {
  Apropos as default
};
//# sourceMappingURL=Apropos-_oH4dd-g.js.map
