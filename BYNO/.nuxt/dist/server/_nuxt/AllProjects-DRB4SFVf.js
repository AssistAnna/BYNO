import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  data() {
    return {
      projets: [
        {
          name: "Musique",
          imgUrl: "/img/musique-onde.svg",
          projetUrl: "Productions/musique"
        },
        {
          name: "Design",
          imgUrl: "/img/design-img3.png",
          projetUrl: "Productions/design"
        },
        {
          name: "Drone",
          imgUrl: "/img/productions/drone.jpg",
          projetUrl: "Productions/drone"
        },
        {
          name: "Vidéo",
          imgUrl: "/img/productions/video.jpg",
          projetUrl: "Productions/video"
        },
        {
          name: "Sound design",
          imgUrl: "/img/productions/sound-design.jpg",
          projetUrl: "Productions/sound-design"
        }
      ]
    };
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-projects" }, _attrs))} data-v-74031620><!--[-->`);
  ssrRenderList($data.projets, (projet, key) => {
    _push(`<div class="projet" data-v-74031620><div data-v-74031620><div class="projet-img" style="${ssrRenderStyle(" background-image: url(" + projet.imgUrl + ")")}" data-v-74031620></div><h3 data-v-74031620>${ssrInterpolate(projet.name)}</h3></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-74031620"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=AllProjects-DRB4SFVf.js.map
