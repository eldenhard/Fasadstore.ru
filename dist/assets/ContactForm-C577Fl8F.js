import { _ as _export_sfc, B as ButtonPurple, f as resolveComponent, a as openBlock, c as createElementBlock, b as createBaseVNode, g as createVNode, w as withCtx, h as createTextVNode, d as createStaticVNode, p as pushScopeId, e as popScopeId } from "./index-dYP1f3qd.js";
const _imports_0 = "/Fasadstore.ru/assets/zamer-SESB6M3P.jpg";
const _sfc_main = {
  components: { ButtonPurpleVue: ButtonPurple },
  setup() {
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-19228903"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "block" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "left_side" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "header_container" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "text_description" }, [
    /* @__PURE__ */ createTextVNode(" Закажите бесплатный выезд "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" инженера-замерщика и обсудите "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" все вопросы лично ")
  ])
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_6 = { class: "input_block" };
const _hoisted_7 = { action: "" };
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="form__group field" data-v-19228903><input type="input" class="form__field" placeholder="Имя" name="name" id="name" required data-v-19228903><label for="name" class="form__label" data-v-19228903> Имя </label></div><br data-v-19228903><div class="form__group field" data-v-19228903><input type="input" class="form__field" placeholder="Телефон" name="name" id="password" required data-v-19228903><label for="password" class="form__label" data-v-19228903> Телефон </label></div><div class="form__group" data-v-19228903><input type="checkbox" class="form-check-input" id="checkbox" data-v-19228903><label for="checkbox" class="form-check-label" style="color:rgb(204, 204, 204);" data-v-19228903> Согласие на обработку персональных данных</label></div>', 4);
const _hoisted_12 = { class: "form__group" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("section", { class: "right_side" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "img_container" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: ""
    })
  ])
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ButtonPurpleVue = resolveComponent("ButtonPurpleVue");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("section", _hoisted_3, [
        _hoisted_4,
        _hoisted_5,
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("form", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_ButtonPurpleVue, { style: { "width": "100%" } }, {
                default: withCtx(() => [
                  createTextVNode("Отправить заявку")
                ]),
                _: 1
              })
            ])
          ]),
          _hoisted_13
        ])
      ]),
      _hoisted_14
    ])
  ]);
}
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19228903"]]);
export {
  ContactForm as default
};
