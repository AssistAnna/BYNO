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
const _imports_0 = "" + __buildAssetsURL("design-img1.DRaHo0YY.png");
const _imports_1 = "" + __buildAssetsURL("design-img2.CRlTNejD.png");
const _imports_2 = "" + __buildAssetsURL("design-img3.By7YwC-_.png");
const _imports_3 = "" + __buildAssetsURL("design-img4.CxscSM0L.png");
const _imports_4 = "" + __buildAssetsURL("design-img5.DN5wcn85.png");
const _imports_5 = "" + __buildAssetsURL("design-img6.DKPFiZ4v.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "design-all" }, _attrs))} data-v-9678d372><h2 class="title-h2" data-aos="fade-up" data-v-9678d372>Design</h2><p data-aos="fade-up" data-v-9678d372>Les pochettes de single ont été soigneusement conçues pour refléter le style adapté à l’artiste et au genre musical correspondant.</p><div class="bloc-img" data-v-9678d372><img${ssrRenderAttr("src", _imports_0)} alt="image pochette album rose" data-v-9678d372><img${ssrRenderAttr("src", _imports_1)} alt="image pochette album design beige" data-v-9678d372></div><div class="bloc-img wesh" data-v-9678d372><img${ssrRenderAttr("src", _imports_2)} alt="image pochette album otherside" data-v-9678d372><img${ssrRenderAttr("src", _imports_3)} alt="image pochette album loadjak" data-v-9678d372></div><div class="bloc-img" data-v-9678d372><img${ssrRenderAttr("src", _imports_4)} alt="image pochette album superfly" data-v-9678d372><img${ssrRenderAttr("src", _imports_5)} alt="image pochette album I gotta love" data-v-9678d372></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Productions/Design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Design = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9678d372"]]);
export {
  Design as default
};
//# sourceMappingURL=Design-BqNDR-n7.js.map
