export interface PocketDoorModel {
  seoTitle: string
  seoDescription: string
  schemaName: string
  title: string
  subtitle: string
  heroDescription: string
  heroImage: string
  heroAlt: string
  overviewTitle: string
  overviewDescription: string
  overviewImage: string
  overviewAlt: string
  benefits: string[]
  details: Array<{
    image: string
    alt: string
    text: string
  }>
  gallery: Array<{
    image: string
    alt: string
  }>
}

export const POCKET_DOOR_MODELS: Record<'sl160' | 'bf73' | 'sl130', PocketDoorModel> = {
  sl160: {
    seoTitle: 'Подъемно-раздвижная система ALUTECH SL160 — АлюПроект',
    seoDescription:
      'ALUTECH SL160 — алюминиевая подъемно-раздвижная система для широких светопрозрачных проемов, террас и панорамного остекления.',
    schemaName: 'Подъемно-раздвижная система ALUTECH SL160',
    title: 'SL160',
    subtitle: 'Подъемно-раздвижная система ALUTECH для больших панорамных проемов',
    heroDescription:
      'SL160 подходит для частных домов, террас и пространств, где важны широкий световой проем, плавное скольжение створок и чистая современная геометрия алюминиевого профиля.',
    heroImage: '/images/pocket-doors/sl160-system-card.webp',
    heroAlt: 'Сечение раздвижной системы ALUTECH SL160',
    overviewTitle: 'Система для широких проемов и выхода на террасу',
    overviewDescription:
      'Модель SL160 логично использовать там, где нужно объединить интерьер с улицей, получить максимум естественного света и сохранить аккуратный внешний вид узлов примыкания.',
    overviewImage: '/images/pocket-doors/sliding-system-interior.jpg',
    overviewAlt: 'Раздвижная система в интерьере частного дома',
    benefits: [
      'Панорамное остекление без тяжеловесного визуального эффекта.',
      'Алюминиевый профиль подходит для интенсивной ежедневной эксплуатации.',
      'Удобный сценарий для террас, веранд и просторных гостиных.',
      'Современный внешний вид с аккуратными узлами и порогами.'
    ],
    details: [
      {
        image: '/images/pocket-doors/sl160-vertical-section.png',
        alt: 'Вертикальное сечение SL160',
        text: 'Сечение профиля помогает оценить посадку стеклопакета и архитектуру системы.'
      },
      {
        image: '/images/pocket-doors/sliding-system-threshold.jpg',
        alt: 'Порог раздвижной системы',
        text: 'Низкий и аккуратный порог делает переход между помещением и улицей удобнее.'
      },
      {
        image: '/images/pocket-doors/sliding-door-handle-detail.png',
        alt: 'Ручка раздвижной двери',
        text: 'Фурнитура и ручки подчеркивают минималистичный характер системы.'
      }
    ],
    gallery: [
      {
        image: '/images/pocket-doors/sliding-system-pool.jpg',
        alt: 'Панорамное остекление у бассейна'
      },
      {
        image: '/images/pocket-doors/panoramic-sliding-living-room.jpg',
        alt: 'Панорамная раздвижная система в жилом интерьере'
      },
      {
        image: '/images/pocket-doors/sliding-opening-example.webp',
        alt: 'Пример полностью открытого проема'
      }
    ]
  },
  bf73: {
    seoTitle: 'Раздвижная система ALUTECH BF73 — АлюПроект',
    seoDescription:
      'ALUTECH BF73 — алюминиевая система для гибкой организации широких стеклянных проемов в частных и коммерческих интерьерах.',
    schemaName: 'Раздвижная система ALUTECH BF73',
    title: 'BF73',
    subtitle: 'Система ALUTECH для гибкого раскрытия стеклянного проема',
    heroDescription:
      'BF73 стоит рассматривать в проектах, где важны свет, удобство прохода и возможность сделать границу между интерьером и улицей максимально открытой и легкой визуально.',
    heroImage: '/images/pocket-doors/bf73-system-card.webp',
    heroAlt: 'Сечение раздвижной системы ALUTECH BF73',
    overviewTitle: 'Для частных домов, террас и общественных пространств',
    overviewDescription:
      'Система хорошо работает в сценариях с широкими проходами и активной зоной использования. Алюминиевый профиль помогает сохранить жесткость конструкции и современный внешний вид.',
    overviewImage: '/images/pocket-doors/bifold-system-showroom.jpg',
    overviewAlt: 'Светопрозрачная система BF73 в шоуруме',
    benefits: [
      'Подходит для проектов с широким раскрытием проема.',
      'Добавляет свет и визуально расширяет интерьер.',
      'Алюминий хорошо сочетается с современной архитектурой и крупными стеклянными поверхностями.',
      'Уместна и в частных домах, и в общественных пространствах.'
    ],
    details: [
      {
        image: '/images/pocket-doors/sliding-opening-example.webp',
        alt: 'Пример открытого проема BF73',
        text: 'Когда створки убраны, проем воспринимается открытым и свободным.'
      },
      {
        image: '/images/pocket-doors/sliding-door-handle-detail.png',
        alt: 'Деталь ручки BF73',
        text: 'Минималистичная фурнитура поддерживает современный образ системы.'
      },
      {
        image: '/images/pocket-doors/sliding-system-threshold.jpg',
        alt: 'Порог BF73',
        text: 'Проработка узла порога влияет и на эстетику, и на удобство прохода.'
      }
    ],
    gallery: [
      {
        image: '/images/pocket-doors/bifold-system-showroom.jpg',
        alt: 'BF73 в пространстве шоурума'
      },
      {
        image: '/images/pocket-doors/sliding-system-interior.jpg',
        alt: 'Раздвижная система в частном интерьере'
      },
      {
        image: '/images/pocket-doors/sliding-system-pool.jpg',
        alt: 'Панорамное остекление с выходом во двор'
      }
    ]
  },
  sl130: {
    seoTitle: 'Раздвижная система ALUTECH SL130 — АлюПроект',
    seoDescription:
      'ALUTECH SL130 — алюминиевая раздвижная система для современных жилых пространств, террас и светопрозрачных перегородок.',
    schemaName: 'Раздвижная система ALUTECH SL130',
    title: 'SL130',
    subtitle: 'Компактная раздвижная система ALUTECH с аккуратным современным профилем',
    heroDescription:
      'SL130 подходит для тех случаев, где нужно сохранить визуальную легкость конструкции, получить современный внешний вид и рационально использовать пространство рядом с проемом.',
    heroImage: '/images/pocket-doors/sl130-system-card.png',
    heroAlt: 'Сечение раздвижной системы ALUTECH SL130',
    overviewTitle: 'Рациональное решение для современных интерьеров',
    overviewDescription:
      'Система хорошо работает в жилых пространствах, на террасах и в проектах, где нужен компактный, аккуратный и понятный по архитектуре раздвижной узел.',
    overviewImage: '/images/pocket-doors/panoramic-sliding-living-room.jpg',
    overviewAlt: 'Раздвижная система SL130 в жилом интерьере',
    benefits: [
      'Современная минималистичная эстетика алюминиевого профиля.',
      'Подходит для жилых комнат, террас и светопрозрачных перегородок.',
      'Экономит пространство рядом с проемом за счет раздвижного принципа работы.',
      'Хорошо сочетается с панорамными форматами остекления.'
    ],
    details: [
      {
        image: '/images/pocket-doors/sl130-frame-section.png',
        alt: 'Сечение рамы SL130',
        text: 'Сечение помогает понять, как система работает в зоне рамы и стеклопакета.'
      },
      {
        image: '/images/pocket-doors/sl130-threshold-section.png',
        alt: 'Сечение порога SL130',
        text: 'Узел порога важен для удобства прохода и аккуратной интеграции в интерьер.'
      },
      {
        image: '/images/pocket-doors/sliding-track-detail.png',
        alt: 'Деталь направляющей SL130',
        text: 'Направляющая и роликовая часть формируют плавность движения створки.'
      }
    ],
    gallery: [
      {
        image: '/images/pocket-doors/sl130-frame-section-detail.png',
        alt: 'Дополнительная деталь профиля SL130'
      },
      {
        image: '/images/pocket-doors/sliding-system-interior.jpg',
        alt: 'Применение SL130 в интерьере'
      },
      {
        image: '/images/pocket-doors/sliding-opening-example.webp',
        alt: 'Пример открытого проема со светопрозрачной системой'
      }
    ]
  }
}
