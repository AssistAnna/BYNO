import { mergeProps, useSSRContext } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './logo-byno-avececrit-xn-xShn4.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "soon-cmp" }, _attrs))} data-v-b22d8212><h5 data-v-b22d8212>Page en cours de construction</h5><img${ssrRenderAttr("src", _imports_0)} alt="logo byno" data-v-b22d8212></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/en-attente.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b22d8212"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=en-attente-D360NoUl.mjs.map
