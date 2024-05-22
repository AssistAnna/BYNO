import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __publicAssetsURL("img/design-img1.png");
const _imports_1 = "" + __publicAssetsURL("img/design-img2.png");
const _imports_2 = "" + __publicAssetsURL("img/design-img3.png");
const _imports_3 = "" + __publicAssetsURL("img/design-img4.png");
const _imports_4 = "" + __publicAssetsURL("img/design-img5.png");
const _imports_5 = "" + __publicAssetsURL("img/design-img6.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "design-all" }, _attrs))} data-v-eb3b254f><h2 class="title-h2" data-aos="fade-up" data-v-eb3b254f>Design</h2><p data-aos="fade-up" data-v-eb3b254f>Les pochettes de single ont été soigneusement conçues pour refléter le style adapté à l’artiste et au genre musical correspondant.</p><div class="bloc-img" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_0)} alt="image pochette album rose" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_1)} alt="image pochette album design beige" data-v-eb3b254f></div><div class="bloc-img wesh" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_2)} alt="image pochette album otherside" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_3)} alt="image pochette album loadjak" data-v-eb3b254f></div><div class="bloc-img" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_4)} alt="image pochette album superfly" data-v-eb3b254f><img${ssrRenderAttr("src", _imports_5)} alt="image pochette album I gotta love" data-v-eb3b254f></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Productions/design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const design = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb3b254f"]]);
export {
  design as default
};
//# sourceMappingURL=design-D047ChFx.js.map
