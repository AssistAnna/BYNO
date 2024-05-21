import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _imports_0 = "" + __buildAssetsURL("service-img-bloc1.Dp77iHRq.jpg");
const _imports_1 = "" + __buildAssetsURL("service-img-bloc2.DQ84uiRl.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-services" }, _attrs))} data-v-ff595d5f><div class="bloc" data-aos="fade-right" data-v-ff595d5f><img${ssrRenderAttr("src", _imports_0)} alt="image vaisseau spatial" class="img-bloc" data-v-ff595d5f><div class="title-text" data-v-ff595d5f><h3 data-v-ff595d5f>Notre approche</h3><p data-v-ff595d5f>Byno est un studio spécialisé dans la production audiovisuelle et sonore, offrant une approche collaborative pour la réalisation de vidéos. Chaque projet est traité avec une attention particulière, car il porte en lui son message néessitant ainsi une approche personnalisée.</p></div></div><div class="bloc bloc2" data-aos="fade-left" data-v-ff595d5f><img${ssrRenderAttr("src", _imports_1)} alt="image vaisseau spatial" class="img-bloc img-special" data-v-ff595d5f><div class="title-text" data-v-ff595d5f><h3 data-v-ff595d5f>Qualité sound design</h3><p data-v-ff595d5f>Byno vous propose une qualité de sound design inégalée, surpassant toute possibilité offerte par les robots ou les algorithmes. Il répond à vos exigences avec une précision minutieuse, prenant en compte les moindes détails de votre demande.</p></div><img${ssrRenderAttr("src", _imports_1)} alt="image vaisseau spatial" class="img-bloc img2" data-v-ff595d5f></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ff595d5f"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=AllServices-CN501uGC.js.map
