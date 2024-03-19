import { _ as _export_sfc, a as openBlock, c as createElementBlock, b as createBaseVNode, g as createVNode, w as withCtx, f as resolveComponent, p as pushScopeId, e as popScopeId, N as NavbarElement } from "./index-dYP1f3qd.js";
import { c as createElementIfNotDefined, S as Swiper, a as SwiperSlide, P as Pagination } from "./navigation-SiUY9WuU.js";
import Footer from "./Footer-wqAv5sIL.js";
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res)
        return res;
    }
    if (el) {
      if (typeof el === "string")
        res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res)
      return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON")
          subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach((el) => initButton(el, "next"));
    prevEl.forEach((el) => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach((el) => destroyButton(el, "next"));
    prevEl.forEach((el) => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}
const _imports_0 = "/Fasadstore.ru/assets/6-ajf2r4C6.webp";
const _imports_1 = "/Fasadstore.ru/assets/7-8DdHos-G.webp";
const _imports_2 = "/Fasadstore.ru/assets/20140418_135437_11zon-LJcbLgkw.webp";
const _imports_3 = "/Fasadstore.ru/assets/S6000062_11zon-sKb-DTRJ.webp";
const _imports_4 = "/Fasadstore.ru/assets/S6000064_11zon-70sbN_fJ.webp";
const _imports_5 = "/Fasadstore.ru/assets/20130301_123529-nZLrzWAg.webp";
const _imports_6 = "/Fasadstore.ru/assets/20130517_174130_11zon-YRv394J4.webp";
const _imports_7 = "/Fasadstore.ru/assets/20130517_180124-Photoroom_11zon-y3tau75k.webp";
const _imports_8 = "/Fasadstore.ru/assets/DSC01198-TXek--wX.webp";
const _imports_9 = "/Fasadstore.ru/assets/DSC01202-LzWMS5nA.webp";
const _imports_10 = "/Fasadstore.ru/assets/10_11zon-Pn-JmgJc.webp";
const _imports_11 = "/Fasadstore.ru/assets/11_11zon-B54fgArj.webp";
const _imports_12 = "/Fasadstore.ru/assets/20231010_115608_11zon-BLxse0d-.webp";
const _imports_13 = "/Fasadstore.ru/assets/20231010_115545_11zon-XtvsSvJk.webp";
const _imports_14 = "/Fasadstore.ru/assets/IMG_0514_11zon-YO9Ab3i9.webp";
const _imports_15 = "/Fasadstore.ru/assets/VW-Varshavka1_b_11zon-7KKjRYJu.webp";
const _imports_16 = "/Fasadstore.ru/assets/varshavskoe-OvquGhHb.webp";
const _imports_17 = "/Fasadstore.ru/assets/S6000462_11zon-VlYaT7o7.webp";
const _imports_18 = "/Fasadstore.ru/assets/yar_1b_11zon-79VPXfiI.webp";
const _imports_19 = "/Fasadstore.ru/assets/123-8hGKn60i.webp";
const _imports_20 = "/Fasadstore.ru/assets/1_11zon-R3ZNWBKa.webp";
const _imports_21 = "/Fasadstore.ru/assets/S6002984_11zon-bvIPW_yf.webp";
const _imports_22 = "/Fasadstore.ru/assets/S6002998_11zon-1c-LqeAc.webp";
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation, Pagination]
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-3ce9a59e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "objects" };
const _hoisted_2 = { class: "objects_container" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "objects_title" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "gradient-text" }, "2008-2013")
], -1));
const _hoisted_4 = { class: "objects_body" };
const _hoisted_5 = { class: "objects_body_item" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: ""
}, null, -1));
const _hoisted_8 = { class: "objects_body_item" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  alt: ""
}, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  alt: ""
}, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_4,
  alt: ""
}, null, -1));
const _hoisted_12 = { class: "objects_body_item" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  alt: ""
}, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_6,
  alt: ""
}, null, -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_7,
  alt: ""
}, null, -1));
const _hoisted_16 = { class: "objects_body_item" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_8,
  alt: ""
}, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_9,
  alt: ""
}, null, -1));
const _hoisted_19 = { class: "objects_body_item" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_10,
  alt: ""
}, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_11,
  alt: ""
}, null, -1));
const _hoisted_22 = { class: "objects_body_item" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_12,
  alt: ""
}, null, -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_13,
  alt: ""
}, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_14,
  alt: ""
}, null, -1));
const _hoisted_26 = { class: "objects_body_item" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_15,
  alt: ""
}, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_16,
  alt: ""
}, null, -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_17,
  alt: ""
}, null, -1));
const _hoisted_30 = { class: "objects_body_item" };
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_18,
  alt: ""
}, null, -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_19,
  alt: ""
}, null, -1));
const _hoisted_33 = { class: "objects_body_item" };
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_20,
  alt: ""
}, null, -1));
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_21,
  alt: ""
}, null, -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_22,
  alt: ""
}, null, -1));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_12, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_14
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_16, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_18
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_19, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_20
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_21
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_22, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_23
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_24
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_25
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_26, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_27
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_28
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_29
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_30, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_31
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_32
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
        createBaseVNode("div", _hoisted_33, [
          createVNode(_component_swiper, {
            class: "swiper",
            modules: $setup.modules,
            navigation: "",
            pagination: { clickable: true, dynamicBullets: true },
            loop: true
          }, {
            default: withCtx(() => [
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_34
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_35
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, { class: "slide" }, {
                default: withCtx(() => [
                  _hoisted_36
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modules"])
        ])
      ])
    ])
  ]);
}
const Objects = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3ce9a59e"]]);
const _sfc_main = {
  components: {
    NavbarElement,
    Objects,
    Footer
  },
  setup() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavbarElement = resolveComponent("NavbarElement");
  const _component_Objects = resolveComponent("Objects");
  const _component_Footer = resolveComponent("Footer");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_NavbarElement),
    createVNode(_component_Objects),
    createVNode(_component_Footer)
  ]);
}
const ObjectsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-61c11da5"]]);
export {
  ObjectsView as default
};
