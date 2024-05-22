import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CgIPAz5u.mjs';
import { mergeProps, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0$1 } from './logo-byno-avececrit-xn-xShn4.mjs';
import { d as __nuxt_component_1, _ as _export_sfc } from '../server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/devalue/index.js';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/defu/dist/defu.mjs';
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
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Anna/Documents/projets-web/BYNO/BYNO/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("icon/icon-instagram.png");
const _imports_1 = "" + publicAssetsURL("icon/icon-linkedin.png");
const _imports_2 = "" + publicAssetsURL("icon/icon-youtube.png");
const _imports_4 = "" + publicAssetsURL("icon/menu-burger.png");
const _imports_5 = "" + publicAssetsURL("icon/cross-menu-burger.png");
const _sfc_main$2 = {
  watch: {
    "$route"() {
      this.showMobileMenu = false;
    }
  },
  data() {
    return {
      showMobileMenu: false,
      menu: [
        {
          url: "Services",
          name: "Services"
        },
        {
          url: "Productions",
          name: "Productions"
        },
        {
          url: "Retouches",
          name: "Retouches"
        },
        {
          url: "Apropos",
          name: "A propos"
        },
        {
          url: "Contact",
          name: "Contact"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navBar" }, _attrs))} data-v-5814ab35>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="logo-img" data-v-5814ab35${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "logo-img" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="${ssrRenderClass([{ "active2": $data.showMobileMenu }, "liste-onglets"])}" data-v-5814ab35><img${ssrRenderAttr("src", _imports_0$1)} alt="logo design byno" data-v-5814ab35><!--[-->`);
  ssrRenderList($data.menu, (item, key) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      key,
      to: { name: item.url }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<h2 data-v-5814ab35${_scopeId}>${ssrInterpolate(item.name)}</h2>`);
        } else {
          return [
            createVNode("h2", null, toDisplayString(item.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="liste-socials" data-v-5814ab35>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo instagram" data-v-5814ab35${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo instagram"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo linkedin" data-v-5814ab35${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "logo linkedin"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="logo youtube" data-v-5814ab35${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: "logo youtube"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><img style="${ssrRenderStyle(!$data.showMobileMenu ? null : { display: "none" })}" class="menu-burger"${ssrRenderAttr("src", _imports_4)} alt="open menu" data-v-5814ab35><img style="${ssrRenderStyle($data.showMobileMenu ? null : { display: "none" })}" class="cross menu-burger"${ssrRenderAttr("src", _imports_5)} alt="close menu" data-v-5814ab35></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5814ab35"]]);
const _sfc_main$1 = {
  data() {
    return {
      menu: [
        {
          url: "Services",
          name: "Services"
        },
        {
          url: "Productions",
          name: "Productions"
        },
        {
          url: "Retouches",
          name: "Retouches"
        },
        {
          url: "Apropos",
          name: "A propos"
        },
        {
          url: "Contact",
          name: "Contact"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-05220f8b>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "logo",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="logo-img" data-v-05220f8b${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "logo-img" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="bloc" data-v-05220f8b><p class="text" data-v-05220f8b>Je suis passionn\xE9 par mon m\xE9tier\xA0et je m&#39;engage \xE0 vous offrir des services de qualit\xE9 aussi bien dans le sound design que la vid\xE9o pour repr\xE9senter au mieux votre entreprise ou vos \xE9v\xE9nements.\xA0</p><div class="liste-pages" data-v-05220f8b><!--[-->`);
  ssrRenderList($data.menu, (item, key) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "",
      key,
      to: { name: item.url }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<h2 data-v-05220f8b${_scopeId}>${ssrInterpolate(item.name)}</h2>`);
        } else {
          return [
            createVNode("h2", null, toDisplayString(item.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="bloc-contact" data-v-05220f8b>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Me contacter`);
      } else {
        return [
          createTextVNode("Me contacter")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="liste-socials" data-v-05220f8b>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo instagram" data-v-05220f8b${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "logo instagram"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="logo linkedin" data-v-05220f8b${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            alt: "logo linkedin"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="logo youtube" data-v-05220f8b${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2,
            alt: "logo youtube"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-05220f8b"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "all-site" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BWWz7k5m.mjs.map
