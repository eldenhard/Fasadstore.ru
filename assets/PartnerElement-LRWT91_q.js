import { g as getDocument, S as Swiper, a as SwiperSlide, P as Pagination } from "./navigation-uK2nMZwe.js";
import { _ as _export_sfc, a as openBlock, c as createElementBlock, d as createStaticVNode, f as resolveComponent, b as createBaseVNode, g as createVNode, w as withCtx, p as pushScopeId, e as popScopeId } from "./index-6smvt5xM.js";
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl)
      return;
    if (e.target !== swiper.wrapperEl)
      return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl)
      return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed)
        return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
      return;
    if (autoplayTimeLeft < 0)
      autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running)
      return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    const document = getDocument();
    if (document.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse")
      return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused)
      return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse")
      return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener("pointerenter", onPointerEnter);
    swiper.el.removeEventListener("pointerleave", onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = getDocument();
    document.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = getDocument();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
      return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode)
      resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createStaticVNode('<section class="strong_asides" data-v-c1e04158><div class="content_block" data-v-c1e04158><div class="left_aside" data-v-c1e04158><h4 data-v-c1e04158>Работаем с светопрозрачными конструкциями с 2008 года</h4><p data-v-c1e04158>Одна из крупнейших компаний специализрующиеся на установке панорамных окон в Москве и регионах. <br data-v-c1e04158> ООО «Алюминиевые ситемы» — компания полного цикла, которая выполняет все виды работ «под ключ» — от проектирования до монтажа и обслуживания систем. </p></div><div class="right_aside" data-v-c1e04158><p data-v-c1e04158>Почему стоит выбрать окна из алюминия?</p><div class="raiting" data-v-c1e04158><section class="alumanium" data-v-c1e04158><p data-v-c1e04158><strong style="color:#d683ce;" data-v-c1e04158>Алюминий</strong></p><span data-v-c1e04158>Срок службы: <strong style="color:#d683ce;" data-v-c1e04158>50 лет</strong></span><br data-v-c1e04158><span data-v-c1e04158>Экологичность: <strong data-v-c1e04158><span style="color:#d683ce;" data-v-c1e04158>Не выделяет</span> вредных веществ</strong></span><br data-v-c1e04158><span data-v-c1e04158>Поддерживает горение: <strong style="color:#d683ce;" data-v-c1e04158>Не поддерживает</strong></span><br data-v-c1e04158><br data-v-c1e04158><span data-v-c1e04158>Прочность: <meter value="1" data-v-c1e04158></meter></span><br data-v-c1e04158><span data-v-c1e04158>Стильный дизайн: <meter value="1" data-v-c1e04158></meter></span></section><section class="pvh" data-v-c1e04158><p data-v-c1e04158><strong style="color:#4285F4;" data-v-c1e04158>ПВХ</strong></p><span data-v-c1e04158>Срок службы: <strong style="color:#4285F4;" data-v-c1e04158>20 лет</strong></span><br data-v-c1e04158><span data-v-c1e04158>Экологичность: <strong data-v-c1e04158><span style="color:#4285F4;" data-v-c1e04158>Выделяет</span> формальдегид</strong></span><br data-v-c1e04158><span data-v-c1e04158>Поддерживает горение: <strong data-v-c1e04158>При горении выделяются <span style="color:#4285F4;" data-v-c1e04158>опасные вещества</span></strong></span><br data-v-c1e04158><br data-v-c1e04158><span data-v-c1e04158>Прочность: <meter value="0.4" class="pvh_meter" data-v-c1e04158></meter></span><br data-v-c1e04158><span data-v-c1e04158>Стильный дизайн: <meter value="0.5" class="pvh_meter" data-v-c1e04158></meter></span></section></div></div></div></section><section class="white_block" data-v-c1e04158><div class="content_grid_block" data-v-c1e04158><div class="ingineer" data-v-c1e04158><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#823D7B" class="bi bi-check2-all" viewBox="0 0 16 16" data-v-c1e04158><path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" data-v-c1e04158></path><path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" data-v-c1e04158></path></svg><p class="description" data-v-c1e04158>Инжиниринг фасадов зданий</p><p class="text" data-v-c1e04158>Наш конструкторский отдел готов спроектировать самые сложные конструкции</p></div><div class="ingineer" data-v-c1e04158><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#823D7B" class="bi bi-bank" viewBox="0 0 16 16" data-v-c1e04158><path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" data-v-c1e04158></path></svg><p class="description" data-v-c1e04158>Управление проектами</p><p class="text" data-v-c1e04158>Система управления будет с вами на всех этапах реализации проекта конструкции</p></div><div class="create" data-v-c1e04158><svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="#823D7B" class="bi bi-wrench-adjustable" viewBox="0 0 16 16" data-v-c1e04158><path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61" data-v-c1e04158></path><path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2" data-v-c1e04158></path></svg><p class="description" data-v-c1e04158>Монтаж изделий</p><p class="text" data-v-c1e04158>Монтажное подразделение компании выполняет весь комплекс работ в соответствии с ГОСТом </p></div><div class="support" data-v-c1e04158><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#823D7B" class="bi bi-universal-access-circle" viewBox="0 0 16 16" data-v-c1e04158><path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z" data-v-c1e04158></path><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" data-v-c1e04158></path></svg><p class="description" data-v-c1e04158>Постгарантийное обслуживание</p><p class="text" data-v-c1e04158>На все конструкции, установленные на объектах, мы предоставляем гарантию и сервисное обслуживание.</p></div></div></section><br data-v-c1e04158><br data-v-c1e04158>', 4);
const _hoisted_5$1 = [
  _hoisted_1$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("main", null, _hoisted_5$1);
}
const StrongAside = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c1e04158"]]);
const _imports_0 = "data:image/webp;base64,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";
const _imports_1 = "data:image/webp;base64,UklGRjQJAABXRUJQVlA4ICgJAACQLACdASrIAGQAPm02l0gkIyIhJlcY4IANiWJu4XHZrn+A8yeuf2bxgcinRn9m+4D3Y+c/97/U/ar/RP7N7Bvyp/sPcA/V3zOf1A9wH81/tf+c/YD4AfyD+if6n+3e8Z/Wv87/YPcZ/rfsA+QD+j/5brDv2g9iP9nPS9/cT4OP2y/aH4Gf5x/nP/fejP5jwr8PPo5Qg7U8QP7N4E/B/+Q9QL1d/hfC7/XO3brF/t/5F7AXrj9I76nUd/OWNYyPyMfR/7F+5v/cOtv+2Kuhh6YmN9F8C4sq74PmiS36GHoifUix3QMmXfgtrwuqob+6Jp+MZ238eh1GvVxh1uQwiK2C7vz8zQR20t+lPnruKEE3fpDER65P+PPG2O+mGrg+QqFqDW7mDtLholZcxq3i8KpFeGiXO+fjvKfHs3O1xyAFIohiNBDIbnTe6GLuAit78MvbXvjsbVoAZBBBbbpNXN9F8D0xMb6L4HpiY30RgAD+/4/cA6XXRIZI3KlplLrxUNqIQO9aGfS4X0Yn7hoPCWOp8iKGvrG67MTN1Wt9wNc84mC+fLhhlNF2LQcJHhZ9q39H5az2GaDZIYB1bfTQMOyw+UYxOUbATMAO+PLJCUImObILiMRo2g5QdMg3EFhlPjmMklE0aMjBGFj15t0FrsqvQbYH9+hfPanL9hWe96/RwjXddEcx+bRavw/2yOdoP/CCP9zgKDMlIb0Wp5/PT03geP29Er5Rr/tcnbBNyTbUpX0ZG8zwpjaIePYwpHa9/l6v62a3rsbtHitWGW4wv3SN4czcLo9f8AIiHGBUIijSyY2LOzxBulwGTWvu0q/hF5aIYw5HYAqorzsz19hgEpZiqYFzWwuj3QX4LUT42XkHkDT8hHvds3GkWl5A/W8m6CiDkYjxIPkUxxHqN6onnD6Je+EWe41bRyyC710jPKDM5L38vchbHxWdBaOCA77nDy5gJg05qdrptdrrMhCZxq7oitS8YgQD6QLUdyDLDikuF4BdzMMpe3ndA4W8VrCAC7D5+Q5Z2jKpTYtNYeKWaRBcEZVgXtJj95HC+zs+hLS37wPVxgQsS2KfJiicS4GYUOF8RDH6gYl/dNY8Vlttugm6C29+/aqbmjbJvXuqIs1vyMIJkONq+raVEVxEkffUOIH4rWqz1JILS0TSYnNPFjihBtz8dIvNM4Nk5Lj2rDrk9ilpUr9VH5z0Ba1sxOGs0h/kHDOwf/qjcwY9FxSNgAcSTgU7TLshgz9JZ9tL7yvwrVpOyvZ8nepJn1MCd1MCnp7R/V8EiUbrlLyNMnY610716Id7uQJ7PJzuEf6sQak0I1ahkhkTY40l3jUqtO/sHhLJeYyyzVWOH4HaauxMEBvkvsT+lh8NM+dAw062GxeGJ+AGK1VKVxhZsrTgCuWoBvLPIN95XoxfK9sXixr+GS6pt63APlwFuZxjeCVGyg0muu2B5oX6v7XDfL1HuKvmk7qn7wtV67eY3xB6TddL0GOxXPsq5pcMYEf2jE7RbB1HLp7eJp767nvD9DjcpK+BJAyzPX9Nj5g2LGDkZgbUFLuILD7yVjehE7oJPRaNdHF//9WlHG8SAyw+O3nkbwtHe6QaReIAJYUP95w4C0Iv+FuIDAw/zrwspzaTMkcUcWFlM1FV/cxsqVb8DZ18RrCq3bunf7g4R6a9H1xLyQnzrbU1XfraaCnTwGsGCxK5VJBpzvQ9K7BT1UKAGcQmeMTz9p7UShW67KejfGfqVPGYAJdtf/zha5+VxVi3ky3Q2hT84NYUZ5W1rmgPhHNfe3T7dNCxfAb46bL1cLgZW4y6NZ7S1GJMlkAxtKMtkUfz+Fqyg8fzwUt4pV9zytiLLI+TIMVWWXdEkTp0Q8SgwYqXnoikZZv1mLlmV/LBUcFc83qUieuIfzhXWvcSrisFAbhlXjd41Rxa7Wdgm8WaK24O/xjPOUGdIvjzzNTUPT6Hh1/2RL7UOFmHXijBDJGTzBaQkKVMjHjXk5kE4FY8oPz2L0vzk6ARDL/H+C9Y9NKSXHgQJnno/DgP352DJeVdh+oySGAlOFbFJSYcjwT0e+WkHy5VYmiprDQB7cyTzKY7ArAuauQmlQI5+lJl06fqYeglKAnETqyzNLE6y/0ldaVusmzK8uOSDB9jt8ZpfSoKv7fJEN3IXASF0sE5D22pIrwWhwFd7hI6QcoBcqH3o7M0xv8GaYolEBP3Tbs7yfBRkvUaWLnJeuf7pR/6rx5d0rl5Hka/WzX7iYUCH0+4jpivVZeYAQxHlFUOZB7Qh+tOVcddgVzDpRsfXdhXRIC75YfApQYdcUU0tCfvUh6Vj9yZAogIJOWlfxxkP5LDu17TrLKdU1bJka+PqmYLwWAp17GlGxt0h7mDyawI8nZeay2C+jmCFFs5cuO6P/7SH7Ln7iR3kIK+BTi4hiX8TrJXsD+MAA4DpyiQLwikO7C8W1ApehnDk0SL4JYECFBi6MBVWzk6TcTOFqPD7LqhUUR4de/Ham6iA4KJEBW/6LZIzdMXYIrh2VoIZ+ldcWn55EKd/eAB4z3EyS/LvRvTyidDjuaVbjNUdGUT+jY64Az+u0DdQ30QYQmKDs+6hFAAKVhiHxA08Ok23FjaKUfCKpy0J+AnJFYudGjEJioZLzr1U0tpeaBAyyvkU0CO3lzPAnX0VTwQUNpkd9yss0sL/E5e4F4cPCb9hg88UEEYd5RBuHIrhVIqdyz+oZrCR4hpdvuxLlzxqhADM9lT3Dc1zucFviEBQ8VWAG/EMTvPBC4JuQoOKzuJF/KiQgMZatdNgqU60pBUXV4WXlqnMEnz/yFYY9VfXmpWyzE01DkQhwQYKvy+d1mA7AwrKdKWnfo91AQpUQespRYfVYchwccY8f2vCvN7/3lXLO4cmvskK1ofQ4KkyD7vcPZhMid2abjwsEgXNcL0qGEPVRtq4EuKxjsZQBO4eCD7MbyP/LZj32bDgOh42tU96oTsuWiM9lU951yRbP6nnBskVfVsrSmqhh6vpdW8UEJW+eu/gUCJN5VFHOme/bWGk+6J8fDi6UEkJsCBIEvg6Y6HdCw+o0ysdaMkKSbKn164iSM1a+6ND+oJLglNc909+5pY+674K4MPlOx0gqwB43XuAQAAAAAA";
const _imports_2 = "/Fasadstore.ru/assets/aluteh-wdYoqUfD.webp";
const _imports_3 = "data:image/webp;base64,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";
const _imports_4 = "/Fasadstore.ru/assets/siegenia-BWfiy5vX.webp";
const _imports_5 = "data:image/webp;base64,UklGRtwKAABXRUJQVlA4TM8KAAAvx8AYAIU9/v/XKZG+wibW9i52cSvr2d2BXXTY3a3YnRt2dycWY/fZhQmYmIQsKc0QM/P64/f9/X4zGNd3Ef2fAP7v//9wnBqwO0D/nm0PVI5sCtC6J+DiK1Pe2bc7ICBg836jJkvA7oCAgM0HjTZ49igsLOxB+Dtx11FYeZCsiND7aeEaC5/ljVwhzR+pKUNIv423QUVhb28vurwT3YWyb+HKZT8dqE08kDjpknZ9lRewkzjGasqRlUq2iTKvXJ67duZtDW6KP/gbR5Jf6rgg+dk6It+KvPCpLF5TrqyMLapJuueNw1N2bDs4/bqah+IxytY6LttEiBkfAbNTh6xuE74sW9tiwOIvhBCf2Knd0FbI4csvv3T4wl6DWPTBMy4zTuwxjZUZ2voCE4X4fERQQtyt+XUlNzUVTECa8LcRBVTE4w8dvx6+lHk0cA2anJ+Om81YUewJ8r1f6foiRgYkuKvU0mfJfjdMZlNesOgwWRS50xeeWjA8Q5vjKCGSxorbqD/+RFe0BvCRiSuQvNNgMOw/Abxd0rh8kUV5LeFg90YVnJyc/lrPdWm4vuAZzZo0bj3jnoTQHQaDYVcQsLd9tb+Ur9FsUSI8PvIQjQqxqEdvetYDSL577U9gnU0sjjJ/uC2UxWC+nRBC9LdKnKYcbbEj7IXm9s+09OdlS6Ha/KliuVCOxFBUqH66GJ2KuQA95wE3zkeFHzwE2UVtwXKZs4VgSQX6CuloaxTP1ISdlmP2Qm++Cxr8XxUUWq8BSyTzDwjNU3U5XETZ5yjcfQBw/Bw0tckLmXhDiKTWfGGDHw5dvaB++cynGm4JeYmWLZzsJMIxS615aaHZyaxi5/yFNnFWjzgj6XuatCuQBsaNJgbbJLuC7JZKoe9U+lpDbz4NVSXFbwLEtJaIzWpCiG9ce3k7yMRmFWWZgeNGtVUZoquRpPtCHoeHHzq/8zE7HtLPJnSQnVJROg3eeHz1SdvJyyRzV0ifIU2QTdGyOhtI7y4bqWUxygDZV7pEkKJrK8KCz0Pm1JxlV6hjGz/ZXg0Om7GijVbbff3Nd186o1pXMknDbKTGYhIXDYORe0tEqq62in5fZaYHmoB5Z+dd4jvbdJbt13CEPKc3Or+er4wyBknK5KgFqRyRheuyfwqMFWe5wvavRg3c6vp2j7CNn+ycWits8aPjD+qOP1olJ/rGMkehpwqqf0h+ylYpna3yXPZSl/CXTAPKCCE6NjT9bKPmskdqK21R7GlmsnpGjL22pKCFnvV/KZNfqGsYorZV8n2Wyi+ovrGafYaiGqSXEMJOrJopbJPoIItXu2mTVDTn0xLkJfRrGKm2TU8ltQSriV/BX9hBmIMQ4psewkbHhLQBKvnDbOEYpylHaPhNaCz4y/i2ekbYLt56pYzMFPlgtRBC2AlbVZZNV/vyiU3iNeVqCBDyFqsOB0dD//eH2M4fwpvE7xVyG8wU8vvvTul0ykkcHyL3fY9UZGU70ioIaznEa5kh5C14h3IjHCQGVBu8R8RF87NVXwmrFQwnJycn22JK2FpeqL7Sc6N2nXr16lUblDe4J6SPVOLF+8R3h9CrTZQsVax48WJOJYXGFeg5L6QV84bp6aeS3Sq93iuFfWxjxdnouiqrnzeM5h8k+fcnQ+7dNkI+/v0gnHVdt8kXW7BavTxRJoVhEiG+K/9LKaE+5N1ylVSfn4iTniBbeL8m7xTVkU+WTGZFmdyxtqSr2sh3Yp7iE7cBvbo46iieLvlO31fVJj5BPUgi7gHHZM5qOUL6aYSmdCEtEAsZvho+7WrcJvk0nqKSzmprJXZpzJMUUYuUPdSUPaRg4cIFPxMiX/6vvlb/6utWwUhP7TdoPnQ6JBbNqbsMBsPBwBQgeufuPXv2bD6jxsGDBoPhwJEsTZZ9gQaD4cCxHICQPzwq/+zcZOyOCEjdH2gwBO5KYu0c5TG1W9PmzJkz57ccHu40GAz7T6tlHwg0GAL3Zmj6yLQgt6ioWvhXYIu1LIDl44quMVOvWOPlmMRx0R9F5rTkzNzUtxYsmzIPvQByUlPMYMpNTZHEHUk/nARYAEsumNNTMiXGtJSkLEhNydVkUTEpLAqLOTXFKDGmpiRlKywmmTlXLfP163QgKzUlyQjpKTlgMauYNZkkJowSU5Ym0wSPBiW9XR9sXg7QKiu7XhuPdsehRjv3pqcALpd/BBwu+BTwvYJbE4+2fa9AUGFvV78XuLt4N9yoocv30Yqs6j0UrWsDtHNx69jlKoQV8Xb1jFSs68PkokCm52NJ5sT2Xh4tXnL/a29XrzA6NfBqtBa6FE9V5DjMVNQeqfh8LBDUjpYXgT+bRGiywNHOwPL5iiqm9A5GHtdMphY8rZgN9Bg7EAio7AW0OoXrMzjjfJnzLVA2jCClcriaX615igO1BwLnhrtfBRrFwYkql7nXDDArVnVjWNlpkNXiiaTDEiA3i2stUDYNJsX5Pn3+ukOxpNZ44PSQlmFA8Sp34UINLtbJAs8t6A30BlYuUtQyZ3hCYpVE6gOVjHDdl/aPYPMK/1XQ/jRuoUCgC+c7SJrGQsVQNd+DvolAn4O9gX63AwYBjSOA/Z0IaYPq2p4M3tz/EtltnirWDUd+rYOkxXOoe49eh5pbIMF/tT/gGrNkNFDrehu4WA9mDWR+T2xjarhsQRcDVJw2rfZ2oN8Rfp8GG36jcaTkDpBWkVvFNi/ZbMZl+rJea1HveGnuPDg+70pneO5Obo04aBwOxDYmrMTmpavSVfpui+iARdbjBIQtX3ePkGKblq5LpfWojb1Wg++1uRtg45p9I+BqH7LqpIMzcydzvR7gM6lVurUWK2qaTTVWrqoFVN16cGaXXF43ghyXbDbM5IgX7ipJFbhVYteGPWaaLdpcJVaLwVzbTPvEE34w8iRMXajWkLDSuzduyVBbzcwpyLqdhCfrXfwIKbVr48402kzZUjUcfC9FtYVWbB8O4w7DuIVQPg2XVyGK6PxBWGnpXMBUAWOLNKb6Qz3A5QBjSvfz61d4I5tmgpeh92ncQoF9rTjfAWXTGNb6anANZMKeuyM47kdCMa+u3VuXg8YRwN4uhLRCdW1P+q3E1PBeZ8mCWQAbenKtHUqXJ+x2B98TuF47NIU1I3hbqHPXXg0qQfl4LnUNbQRQM94KBz2A85WBXW5kNIwg/udYakBOtdDkli/iYxKvNGbtFPizWcXTdHwOZ6rf53xLSb1HmKs+JC1D0iaQB569L3PUhz9mpcXEpndaT6MEOFXxBjddAItiVVd6LYcLHVuFKdJdTgCrO3OtpaTRZah/A6/j3GnvFcbKoYzYkhYTm978BGXjYLZ3a8DsHAVZOTr2dAKY23hy9xavSGnxDPzn02zSkFZrWTYGZY+byycB+8VtXHsOajEoFG4WnTxhZBBtH8LSIczZKOl8ADxrwJEetE0AOO+D68BBLXqGQEi56eNGP1Ws78Ow9cDkH8IVRHi1mfNb/encKz5lwqgbdLwFK4fR+Tg0GQprp+b6pAGc9KBuNGRWaAzk1H8D/it0JEeaAZJvhwLZr41gjCA7KckMUVmS2PjUGAvwykTi61gjgDkkODgkgdcZwCui4yVRbyEjFVKiiUD6mpSwuGwAc2hwcMhbxdtYohMBnpglEHU9KA4IDQ4OTiAyHSwviEzBkpoGibG5b5C+5M9sIOGl4pUF3sTq+L///yMxAA==";
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide,
    StrongAside
  },
  setup() {
    return {
      modules: [Pagination, Autoplay]
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-8c43d00d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container-block" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { align: "center" }, "ПРОДУКЦИЯ АЛЮТЕХ", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", {
  align: "center",
  style: { "color": "rgb(83, 83, 83)", "font-weight": "700", "padding": ".2% 2% 0" }
}, " Виды открывания и фурнитуры ", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("section", { class: "line_element" }, [
  /* @__PURE__ */ createBaseVNode("div"),
  /* @__PURE__ */ createBaseVNode("div"),
  /* @__PURE__ */ createBaseVNode("div")
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("section", { class: "three_photo" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "right_text" }, [
    /* @__PURE__ */ createBaseVNode("iframe", {
      width: "100",
      height: "150",
      src: "https://www.youtube.com/embed/IQgRz7pdrfc?si=Jh31k0fbGZZQcyRU",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right_text" }, [
    /* @__PURE__ */ createBaseVNode("iframe", {
      width: "100",
      height: "150",
      src: "https://www.youtube.com/embed/RkZb4nDh0wo?si=xBfEvrelFB0anSqv",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: ""
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "right_text" }, [
    /* @__PURE__ */ createBaseVNode("iframe", {
      width: "100",
      height: "100",
      src: "https://www.youtube.com/embed/dnljNeoMNbU?si=UDJC52SfagHLVPY9",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: ""
    })
  ])
], -1));
const _hoisted_6 = { class: "partners-section" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "direction_description" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "НАШИ ПАРТНЕРЫ"),
  /* @__PURE__ */ createBaseVNode("div", { class: "line" })
], -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "фапим"
}, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: "ворне"
}, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  alt: "алютех"
}, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_3,
  alt: "гиес"
}, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_4,
  alt: "сиениа"
}, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  alt: "доктор хан"
}, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  const _component_StrongAside = resolveComponent("StrongAside");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    createBaseVNode("section", _hoisted_6, [
      _hoisted_7,
      createVNode(_component_swiper, {
        class: "swiper",
        modules: $setup.modules,
        "slides-per-view": 2,
        "space-between": 10,
        pagination: { clickable: true },
        "grab-cursor": true,
        loop: true,
        breakpoints: {
          "950": {
            slidesPerView: 3,
            spaceBetween: 20
          },
          "1024": {
            slidesPerView: 5,
            spaceBetween: 30
          }
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        }
      }, {
        default: withCtx(() => [
          createVNode(_component_swiper_slide, { class: "slide" }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
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
          }),
          createVNode(_component_swiper_slide, { class: "slide" }, {
            default: withCtx(() => [
              _hoisted_12
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "slide" }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modules"])
    ]),
    createVNode(_component_StrongAside, { style: { "margin-top": "10%" } })
  ]);
}
const PartnerElement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8c43d00d"]]);
export {
  PartnerElement as default
};
