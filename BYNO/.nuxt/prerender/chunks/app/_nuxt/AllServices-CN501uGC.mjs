import { b as buildAssetsURL } from '../../renderer.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/Anna/Documents/Projets%20webs/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + buildAssetsURL("service-img-bloc1.Dp77iHRq.jpg");
const _imports_1 = "" + buildAssetsURL("service-img-bloc2.DQ84uiRl.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-services" }, _attrs))} data-v-ff595d5f><div class="bloc" data-aos="fade-right" data-v-ff595d5f><img${ssrRenderAttr("src", _imports_0)} alt="image vaisseau spatial" class="img-bloc" data-v-ff595d5f><div class="title-text" data-v-ff595d5f><h3 data-v-ff595d5f>Notre approche</h3><p data-v-ff595d5f>Byno est un studio sp\xE9cialis\xE9 dans la production audiovisuelle et sonore, offrant une approche collaborative pour la r\xE9alisation de vid\xE9os. Chaque projet est trait\xE9 avec une attention particuli\xE8re, car il porte en lui son message n\xE9essitant ainsi une approche personnalis\xE9e.</p></div></div><div class="bloc bloc2" data-aos="fade-left" data-v-ff595d5f><img${ssrRenderAttr("src", _imports_1)} alt="image vaisseau spatial" class="img-bloc img-special" data-v-ff595d5f><div class="title-text" data-v-ff595d5f><h3 data-v-ff595d5f>Qualit\xE9 sound design</h3><p data-v-ff595d5f>Byno vous propose une qualit\xE9 de sound design in\xE9gal\xE9e, surpassant toute possibilit\xE9 offerte par les robots ou les algorithmes. Il r\xE9pond \xE0 vos exigences avec une pr\xE9cision minutieuse, prenant en compte les moindes d\xE9tails de votre demande.</p></div><img${ssrRenderAttr("src", _imports_1)} alt="image vaisseau spatial" class="img-bloc img2" data-v-ff595d5f></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ff595d5f"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AllServices-CN501uGC.mjs.map
