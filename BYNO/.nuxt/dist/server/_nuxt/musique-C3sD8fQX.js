import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("musique-onde.a_rXGVJH.svg");
const _sfc_main = {
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "musique-all" }, _attrs))} data-v-7a19053d><div class="title" data-v-7a19053d><h2 class="title-h2" data-v-7a19053d>Musique</h2></div><img${ssrRenderAttr("src", _imports_0)} alt="image onde musique" data-v-7a19053d><p data-v-7a19053d>“Le mixage est un moment magique qui peut parfois devenir une étape compliquée. C&#39;est pourquoi, je vais pouvoir vous accompagner afin de distribuer vos productions d’une qualité sonore exemplaire.”</p><div class="soundcloud-bloc" data-v-7a19053d><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1805324568%3Fsecret_token%3Ds-P4E9swPaO7k&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" data-v-7a19053d></iframe><div style="${ssrRenderStyle({ "font-size": "10px", "color": "#cccccc", "line-break": "anywhere", "word-break": "normal", "overflow": "hidden", "white-space": "nowrap", "text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", "font-weight": "100" })}" data-v-7a19053d><a href="https://soundcloud.com/user-291296058" title="IGOTA" target="_blank" style="${ssrRenderStyle({ "color": "#cccccc", "text-decoration": "none" })}" data-v-7a19053d>IGOTA</a> · <a href="https://soundcloud.com/user-291296058/morceaux-site-internet-mixer-off/s-P4E9swPaO7k" title="Morceaux Site Internet MIXER OFF" target="_blank" style="${ssrRenderStyle({ "color": "#cccccc", "text-decoration": "none" })}" data-v-7a19053d>Morceaux Site Internet MIXER OFF</a></div><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1805325246%3Fsecret_token%3Ds-lkAJ8GFbPW7&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" data-v-7a19053d></iframe><div style="${ssrRenderStyle({ "font-size": "10px", "color": "#cccccc", "line-break": "anywhere", "word-break": "normal", "overflow": "hidden", "white-space": "nowrap", "text-overflow": "ellipsis", "font-family": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", "font-weight": "100" })}" data-v-7a19053d><a href="https://soundcloud.com/user-291296058" title="IGOTA" target="_blank" style="${ssrRenderStyle({ "color": "#cccccc", "text-decoration": "none" })}" data-v-7a19053d>IGOTA</a> · <a href="https://soundcloud.com/user-291296058/morceaux-site-internet-mixer-on/s-lkAJ8GFbPW7" title="Morceaux Site Internet MIXER ON" target="_blank" style="${ssrRenderStyle({ "color": "#cccccc", "text-decoration": "none" })}" data-v-7a19053d>Morceaux Site Internet MIXER ON</a></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Productions/musique.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const musique = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7a19053d"]]);
export {
  musique as default
};
//# sourceMappingURL=musique-C3sD8fQX.js.map
