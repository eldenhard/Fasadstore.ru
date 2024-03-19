import { _ as _export_sfc, r as ref, f as resolveComponent, a as openBlock, c as createElementBlock, h as createTextVNode, g as createVNode, b as createBaseVNode, B as ButtonPurple, w as withCtx, p as pushScopeId, e as popScopeId, o as onMounted, m as onBeforeUnmount, v as createBlock, x as createCommentVNode, d as createStaticVNode } from "./index-dYP1f3qd.js";
const _sfc_main$2 = {
  props: {
    field_name: {
      name: String
    }
  },
  setup() {
    let element = ref();
    return {
      element
    };
  }
};
const _hoisted_1$2 = { class: "flex flex-column gap-2" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("label", { for: "username" }, "Username", -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("small", { id: "username-help" }, "Enter your username to reset your password.", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputText = resolveComponent("InputText");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    createTextVNode(),
    _hoisted_3$2,
    createVNode(_component_InputText, {
      id: "username",
      modelValue: _ctx.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      "aria-describedby": "username-help"
    }, null, 8, ["modelValue"]),
    createTextVNode(),
    _hoisted_4$2,
    _hoisted_5$1
  ]);
}
const InputUIElement = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _imports_0 = "/Fasadstore.ru/assets/alum_window-Xw8His7z.png";
const _imports_1 = "/Fasadstore.ru/assets/alum_razd_door-X9xbNXQu.png";
const _imports_2 = "/Fasadstore.ru/assets/terrace-2X71dqDn.jpg";
const _imports_3 = "/Fasadstore.ru/assets/villa-ezXuALqy.png";
const _imports_4 = "/Fasadstore.ru/assets/alum_doors-3QXslBT6.jpg";
const _imports_5 = "/Fasadstore.ru/assets/winter_garden-rJSKNdLT.jpg";
const _imports_6 = "/Fasadstore.ru/assets/fasad-ASvyyLf6.png";
const _imports_7 = "/Fasadstore.ru/assets/wood-jT6Zskn3.jpg";
const _imports_8 = "/Fasadstore.ru/assets/garage_doors-anqpxoBR.png";
const _imports_9 = "/Fasadstore.ru/assets/window_pvh-mvs_hG1e.jpg";
const _imports_10 = "/Fasadstore.ru/assets/accessories-dYqSNIPz.png";
const _imports_11 = "/Fasadstore.ru/assets/double_glazing-Ir1RwSVH.png";
const _sfc_main$1 = {
  components: { ButtonPurple }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-5d6cdf08"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  class: "accordion",
  id: "accordionExample"
};
const _hoisted_2$1 = { class: "accordion-item" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingOne"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseOne",
    "aria-expanded": "true",
    "aria-controls": "collapseOne"
  }, " Алюминевые окна ")
], -1));
const _hoisted_4$1 = {
  id: "collapseOne",
  class: "accordion-collapse collapse show",
  "aria-labelledby": "headingOne",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_5 = { class: "accordion-body" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "Алюминевые окна"
}, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Окна премиум-класса теплые, созданные по индивидуальным заказам и сочетающие в себе стиль и надежность ", -1));
const _hoisted_8 = {
  class: "accordion",
  id: "accordionExample2"
};
const _hoisted_9 = { class: "accordion-item" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingTwo"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTwo",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo"
  }, " Алюминевые раздвижные двери ")
], -1));
const _hoisted_11 = {
  id: "collapseTwo",
  class: "accordion-collapse collapse show",
  "aria-labelledby": "headingTwo",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_12 = { class: "accordion-body" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: "Алюминевые раздвижные двер"
}, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Раздвижные двери для частных домов и коттеджей. Комфортное открывание. Максимальная площадь остекления ", -1));
const _hoisted_15 = {
  class: "accordion",
  id: "accordionExample3"
};
const _hoisted_16 = { class: "accordion-item" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingThree"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseThree",
    "aria-expanded": "false",
    "aria-controls": "collapseThree"
  }, " Остекление террас и балконов ")
], -1));
const _hoisted_18 = {
  id: "collapseThree",
  class: "accordion-collapse collapse show",
  "aria-labelledby": "headingThree",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_19 = { class: "accordion-body" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  alt: "Остекление террас и балконов"
}, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Портальные теплые конструкции для террас и веранд. Панорамное остекление в сдвижных и складывающихся системах ", -1));
const _hoisted_22 = { class: "accordion-item" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingFour"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseFour",
    "aria-expanded": "false",
    "aria-controls": "collapseFour"
  }, " Остекление котеджей ")
], -1));
const _hoisted_24 = {
  id: "collapseFour",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingFour",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_25 = { class: "accordion-body" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  alt: "Остекление котеджей"
}, null, -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Предлагаем все виды остекления для коттеджей и загородных домов под ключ ", -1));
const _hoisted_28 = { class: "accordion-item" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingFive"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseFive",
    "aria-expanded": "false",
    "aria-controls": "collapseFive"
  }, " Алюминевые двери ")
], -1));
const _hoisted_30 = {
  id: "collapseFive",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingFive",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_31 = { class: "accordion-body" };
const _hoisted_32 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_4,
  alt: "Алюминевые двери"
}, null, -1));
const _hoisted_33 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Двери АЛЮТЕХ придадут индивидуальность Вашему дому. Обладают повышенной тепло- и звукоизоляцией. ", -1));
const _hoisted_34 = { class: "accordion-item" };
const _hoisted_35 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingSix"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseSix",
    "aria-expanded": "false",
    "aria-controls": "collapseSix"
  }, " Зимние сады ")
], -1));
const _hoisted_36 = {
  id: "collapseSix",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingSix",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_37 = { class: "accordion-body" };
const _hoisted_38 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  alt: "Зимние сады"
}, null, -1));
const _hoisted_39 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Остекление зимних садов под ключ ", -1));
const _hoisted_40 = { class: "accordion-item" };
const _hoisted_41 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingSeven"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseSeven",
    "aria-expanded": "false",
    "aria-controls": "collapseSeven"
  }, " Остекление фасадов, витражи ")
], -1));
const _hoisted_42 = {
  id: "collapseSeven",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingSeven",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_43 = { class: "accordion-body" };
const _hoisted_44 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_6,
  alt: "Остекление фасадов, витражи"
}, null, -1));
const _hoisted_45 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Витражное (панорамное) остекление для сплошного многоэтажного остекления ", -1));
const _hoisted_46 = { class: "accordion-item" };
const _hoisted_47 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingEight"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseEight",
    "aria-expanded": "false",
    "aria-controls": "collapseEight"
  }, " Деревянные окна ")
], -1));
const _hoisted_48 = {
  id: "collapseEight",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingEight",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_49 = { class: "accordion-body" };
const _hoisted_50 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_7,
  alt: "Деревянные окна"
}, null, -1));
const _hoisted_51 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Окна из массива дуба, лиственницы, сосны. Дерево-алюминий и алюмо-дерево ", -1));
const _hoisted_52 = { class: "accordion-item" };
const _hoisted_53 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingNine"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseNine",
    "aria-expanded": "false",
    "aria-controls": "collapseNine"
  }, " Гаражные ворота ")
], -1));
const _hoisted_54 = {
  id: "collapseNine",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingNine",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_55 = { class: "accordion-body" };
const _hoisted_56 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_8,
  alt: "Гаражные ворота"
}, null, -1));
const _hoisted_57 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Гаражные секционные ворота – одно из самых популярных и современных решений, максимально удобны в эксплуатации ", -1));
const _hoisted_58 = { class: "accordion-item" };
const _hoisted_59 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingTen"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTen",
    "aria-expanded": "false",
    "aria-controls": "collapseTen"
  }, " Окна ПВХ ")
], -1));
const _hoisted_60 = {
  id: "collapseTen",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingTen",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_61 = { class: "accordion-body" };
const _hoisted_62 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_9,
  alt: "Окна ПВХ"
}, null, -1));
const _hoisted_63 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Немецкие пластиковые окна «Рехау» — гарантия качества, надежности ", -1));
const _hoisted_64 = { class: "accordion-item" };
const _hoisted_65 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingEleven"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseEleven",
    "aria-expanded": "false",
    "aria-controls": "collapseEleven"
  }, " Фурнитура ")
], -1));
const _hoisted_66 = {
  id: "collapseEleven",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingEleven",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_67 = { class: "accordion-body" };
const _hoisted_68 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_10,
  alt: "Фурнитура"
}, null, -1));
const _hoisted_69 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Широкий ассортимент ведущих производителей фурнитуры для алюминиевых окон и дверей ", -1));
const _hoisted_70 = { class: "accordion-item" };
const _hoisted_71 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", {
  class: "accordion-header",
  id: "headingTwelve"
}, [
  /* @__PURE__ */ createBaseVNode("button", {
    class: "accordion-button collapsed",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#collapseTwelve",
    "aria-expanded": "false",
    "aria-controls": "collapseTwelve"
  }, " Стеклопакеты ")
], -1));
const _hoisted_72 = {
  id: "collapseTwelve",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingTwelve",
  "data-bs-parent": "#accordionExample"
};
const _hoisted_73 = { class: "accordion-body" };
const _hoisted_74 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_11,
  alt: "Стеклопакеты"
}, null, -1));
const _hoisted_75 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-top": "4vh", "font-weight": "600" } }, " Виды стеклопакетов и их функциональность ", -1));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ButtonPurple = resolveComponent("ButtonPurple");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("div", _hoisted_2$1, [
        _hoisted_3$1,
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            _hoisted_7,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, [
        _hoisted_10,
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            _hoisted_13,
            _hoisted_14,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_15, [
      createBaseVNode("div", _hoisted_16, [
        _hoisted_17,
        createBaseVNode("div", _hoisted_18, [
          createBaseVNode("div", _hoisted_19, [
            _hoisted_20,
            _hoisted_21,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_22, [
        _hoisted_23,
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            _hoisted_26,
            _hoisted_27,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_28, [
        _hoisted_29,
        createBaseVNode("div", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            _hoisted_32,
            _hoisted_33,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_34, [
        _hoisted_35,
        createBaseVNode("div", _hoisted_36, [
          createBaseVNode("div", _hoisted_37, [
            _hoisted_38,
            _hoisted_39,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_40, [
        _hoisted_41,
        createBaseVNode("div", _hoisted_42, [
          createBaseVNode("div", _hoisted_43, [
            _hoisted_44,
            _hoisted_45,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_46, [
        _hoisted_47,
        createBaseVNode("div", _hoisted_48, [
          createBaseVNode("div", _hoisted_49, [
            _hoisted_50,
            _hoisted_51,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_52, [
        _hoisted_53,
        createBaseVNode("div", _hoisted_54, [
          createBaseVNode("div", _hoisted_55, [
            _hoisted_56,
            _hoisted_57,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_58, [
        _hoisted_59,
        createBaseVNode("div", _hoisted_60, [
          createBaseVNode("div", _hoisted_61, [
            _hoisted_62,
            _hoisted_63,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_64, [
        _hoisted_65,
        createBaseVNode("div", _hoisted_66, [
          createBaseVNode("div", _hoisted_67, [
            _hoisted_68,
            _hoisted_69,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_70, [
        _hoisted_71,
        createBaseVNode("div", _hoisted_72, [
          createBaseVNode("div", _hoisted_73, [
            _hoisted_74,
            _hoisted_75,
            createVNode(_component_ButtonPurple, { style: { "width": "100%" } }, {
              default: withCtx(() => [
                createTextVNode("Подробнее ➔")
              ]),
              _: 1
            })
          ])
        ])
      ])
    ])
  ]);
}
const DirectionWorkMobile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5d6cdf08"]]);
const _sfc_main = {
  components: { InputUIElement, DirectionWorkMobile },
  setup() {
    const date = ref();
    const isMobile = ref(window.innerWidth < 900);
    const handleResize = () => {
      isMobile.value = window.innerWidth < 900;
    };
    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });
    return {
      date,
      isMobile
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-3a50b331"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container-block" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "direction_description" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ")
], -1));
const _hoisted_3 = { class: "container_accordion" };
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<ul class="cards" style="margin-top:4%;" data-v-3a50b331><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_0 + '" class="card__image" alt="Алюминевые окна" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Алюминевые окна</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Окна премиум-класса теплые, созданные по индивидуальным заказам и сочетающие в себе стиль и надежность. </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_1 + '" class="card__image" alt="Алюминевые раздвижные двери" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Алюминевые раздвижные двери</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Раздвижные двери для частных домов и коттеджей. Комфортное открывание. Максимальная площадь остекления </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_2 + '" class="card__image" alt="Остекление террас и балконов" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Остекление террас и беседок</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Портальные теплые конструкции для террас и веранд. Панорамное остекление в сдвижных и складывающихся системах </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_3 + '" class="card__image" alt="Остекление котеджей" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Остекление котеджей</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Предлагаем все виды остекления для коттеджей и загородных домов под ключ </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_4 + '" class="card__image" alt="Алюминевые двери" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Алюминевые двери</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Двери АЛЮТЕХ придадут индивидуальность Вашему дому. Обладают повышенной тепло- и звукоизоляцией. </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_5 + '" class="card__image" alt="Зимние сады" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Зимние сады</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Остекление зимних садов под ключ </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_6 + '" class="card__image" alt="Остекление фасадов, витражи" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Остекление фасадов, витражи</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Витражное (панорамное) остекление для сплошного многоэтажного остекления </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_7 + '" class="card__image" alt="Деревянные окна" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Деревянные окна</h3><span class="card__status" data-v-3a50b331>Россия</span></div></div><p class="card__description" data-v-3a50b331> Окна из массива дуба, лиственницы, сосны. Дерево-алюминий и алюмо-дерево </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_8 + '" class="card__image" alt="Гаражные ворота" style="height:90% !important;" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Гаражные ворота</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Гаражные секционные ворота – одно из самых популярных и современных решений, максимально удобны в эксплуатации </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_9 + '" class="card__image" alt="Окна ПВХ" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Окна ПВХ</h3><span class="card__status" data-v-3a50b331>Рехау (REHAU)</span></div></div><p class="card__description" data-v-3a50b331> Немецкие пластиковые окна «Рехау» — гарантия качества, надежности </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_10 + '" class="card__image" alt="Фурнитура" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Фурнитура</h3><span class="card__status" data-v-3a50b331>Германия</span></div></div><p class="card__description" data-v-3a50b331> Широкий ассортимент ведущих производителей фурнитуры для алюминиевых окон и дверей </p></div></a></li><li data-v-3a50b331><a class="card" data-v-3a50b331><img src="' + _imports_11 + '" class="card__image" alt="Стеклопакеты" data-v-3a50b331><div class="card__overlay" data-v-3a50b331><div class="card__header" data-v-3a50b331><div class="card__header-text" data-v-3a50b331><h3 class="card__title" data-v-3a50b331>Стеклопакеты</h3><span class="card__status" data-v-3a50b331>Алютех (ALUTECH)</span></div></div><p class="card__description" data-v-3a50b331> Виды стеклопакетов и их функциональность </p></div></a></li></ul>', 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DirectionWorkMobile = resolveComponent("DirectionWorkMobile");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", _hoisted_3, [
      $setup.isMobile ? (openBlock(), createBlock(_component_DirectionWorkMobile, { key: 0 })) : createCommentVNode("", true)
    ]),
    _hoisted_4
  ]);
}
const DirectionWork = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3a50b331"]]);
export {
  DirectionWork as default
};
