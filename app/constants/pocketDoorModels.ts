export interface SpecItem {
  label: string
  value: string
}

export interface SpecGroup {
  title: string
  items: SpecItem[]
}

export interface CoatingItem {
  title: string
  description: string
  image: string
  alt: string
}

export interface HandleColor {
  name: string
  colorHex: string
}

export interface FeatureItem {
  image: string
  alt: string
  text: string
}

export interface PocketDoorModel {
  seoTitle: string
  seoDescription: string
  schemaName: string
  title: string
  subtitle: string
  heroDescription: string
  heroImage: string
  heroAlt: string
  systemImage: string
  systemAlt: string
  specs: SpecGroup[]
  coatings: CoatingItem[]
  handleDescription: string
  handleImage: string
  handleAlt: string
  handleColors: HandleColor[]
  handleColorsNote: string
  usageTitle: string
  usageDescription: string
  usageImage: string
  usageAlt: string
  warmNote: string
  videoUrl: string
  contactText: string
  /** BF73-specific */
  isFolding?: boolean
  foldingIntro?: string
  foldingFeatures?: FeatureItem[]
  foldingDoorImage?: string
  foldingDoorAlt?: string
  foldingDoorNote?: string
  maxWidth?: string
  maxHeight?: string
  maxPanels?: string
  protectionFeatures?: FeatureItem[]
  protectionClass?: string
}

export const POCKET_DOOR_MODELS: Record<'sl160' | 'bf73' | 'sl130', PocketDoorModel> = {
  sl160: {
    seoTitle: 'Подъемно-раздвижные конструкции ALT SL160 — Алюминиевые Системы',
    seoDescription:
      'ALT SL160 — подъемно-раздвижные двери для остекления больших проемов. Створки до 440 кг, высота до 3400 мм.',
    schemaName: 'Подъемно-раздвижные конструкции ALT SL160',
    title: 'SL160',
    subtitle: 'Подъемно–раздвижные конструкции ALT SL160',
    heroDescription:
      'Подъемно-раздвижные двери — это решение для остекления больших проемов. Функциональность раздвижных дверей в способе открывания. Створки сдвигаются параллельно стене, тем самым экономя внутреннее пространство комнаты.',
    heroImage: '/images/sliding-doors/sliding-system-pool.jpg',
    heroAlt: 'Подъемно-раздвижные конструкции ALT SL160',
    systemImage: '/images/sliding-doors/sl160-system-card.webp',
    systemAlt: 'Сечение системы ALT SL160',
    specs: [
      {
        title: 'Размеры',
        items: [
          { label: 'Максимальная высота створки', value: '3400 мм' },
          { label: 'Возможная ширина створки', value: '3 250 мм' },
          { label: 'Максимальный вес створки', value: '440 кг' }
        ]
      },
      {
        title: 'Энергоэффективность',
        items: [
          { label: 'Толщина заполнения', value: '24–54 мм' },
          { label: 'Теплопроводность сечения: рама', value: 'Uf = 1,45 W/(m²·K)' }
        ]
      },
      {
        title: 'Комфорт',
        items: [
          { label: 'Водопроницаемость (ГОСТ 26602.2)', value: '1100 Па' },
          { label: 'Воздухопроницаемость (ГОСТ 26602.2)', value: 'Класс А' },
          { label: 'Сопр. ветровой нагрузке (ГОСТ 26602.5)', value: '2000 Па' },
          { label: 'Звукоизоляция (ГОСТ 22602.3)', value: 'до 40 дБ' }
        ]
      },
      {
        title: 'Безопасность',
        items: [
          { label: '', value: 'Возможно изготовление в противовзломном исполнении' }
        ]
      }
    ],
    coatings: [
      {
        title: 'Полимерное покрытие',
        description:
          'Доступ к 200 оттенкам в традиционном глянцевом или практичном матовом исполнении, а также с эффектом муар.',
        image: '/images/windows/finish-polymer.jpg',
        alt: 'Полимерное покрытие'
      },
      {
        title: 'Декорирование под дерево',
        description: 'Выбор тех, кто предпочитает природные мотивы.',
        image: '/images/windows/finish-wood.webp',
        alt: 'Декорирование под дерево'
      },
      {
        title: 'Анодирование',
        description:
          'Специальное решение, которое подчеркивает фактуру металла и продлевает срок его службы.',
        image: '/images/windows/finish-anodized.jpg',
        alt: 'Анодирование'
      }
    ],
    handleDescription:
      'Эргономичные ручки позволят без труда открывать и закрывать даже массивные створки. Представленная фурнитура устойчива к износу и небольшим механическим повреждениям.',
    handleImage: '/images/sliding-doors/sliding-door-handle-detail.png',
    handleAlt: 'Ручка раздвижной двери SL160',
    handleColors: [
      { name: 'Серебро', colorHex: '#C0C0C0' },
      { name: 'Белый', colorHex: '#FFFFFF' },
      { name: 'Чёрный', colorHex: '#222222' }
    ],
    handleColorsNote:
      'Чаще всего у нас заказывают ручки в базовых оттенках, которые подходят к интерьерам в любом стиле. Окраска фурнитуры в индивидуальные цвета возможна под заказ.',
    usageTitle: 'Раздвижные двери объединят гостиную с террасой',
    usageDescription:
      'Панорамные раздвижные двери просты в использовании. Их створки открываются и закрываются бесшумно и плавно. Порталы не требуют особого ухода. Вы сможете свободно передвигаться благодаря низкому порогу и широкому дверному проему.',
    usageImage: '/images/sliding-doors/panoramic-sliding-living-room.jpg',
    usageAlt: 'Раздвижные двери объединяют гостиную с террасой',
    warmNote: 'Панорамные раздвижные двери сохраняют в доме тепло даже морозной зимой.',
    videoUrl: 'https://rutube.ru/play/embed/0ef116c9afce3cea236c4a5986083755/',
    contactText:
      'ООО «Алюминиевые Системы» выполнило большое количество объектов с которыми вы можете ознакомиться в наших группах. Проконсультироваться по телефону +7(495)765-50-26, почта 7825600@mail.ru'
  },

  bf73: {
    seoTitle: 'Панорамные складные двери ALT BF73 (Гармошка) — Алюминиевые Системы',
    seoDescription:
      'ALT BF73 — алюминиевые складные панорамные двери для максимального раскрытия проема. Ширина до 16 м, до 14 створок.',
    schemaName: 'Панорамные складные двери ALT BF73',
    title: 'BF73',
    subtitle: 'Панорамные складные двери ALT BF73',
    heroDescription:
      'Алюминиевые раздвижные конструкции, которые позволяют освободить максимально большой проем. При открывании створки складываются поочередно одна к другой, смещаясь влево, вправо или в разные стороны.',
    heroImage: '/images/sliding-doors/bifold-system-showroom.jpg',
    heroAlt: 'Панорамные складные двери ALT BF73',
    systemImage: '/images/sliding-doors/bf73-system-card.webp',
    systemAlt: 'Сечение системы ALT BF73',
    isFolding: true,
    foldingIntro:
      'Складные панорамные двери BF73 (Гармошка) способны выдерживать большие механические нагрузки и попытки взлома. Они станут серьезной преградой на пути злоумышленников.',
    foldingFeatures: [
      {
        image: '/images/sliding-doors/sl160-vertical-section.png',
        alt: 'Заполнение толщина 44мм',
        text: 'Заполнение толщина 44 мм'
      },
      {
        image: '/images/sliding-doors/sliding-system-interior.jpg',
        alt: 'Замкнутая система уплотнителей',
        text: 'Замкнутая система уплотнителей'
      }
    ],
    foldingDoorImage: '/images/sliding-doors/sliding-opening-example.webp',
    foldingDoorAlt: 'Складные двери BF73 — крайняя створка как распашная дверь',
    foldingDoorNote: 'Крайнюю створку можно использовать как распашную дверь.',
    maxWidth: '16 метров',
    maxHeight: '3 метра',
    maxPanels: '14 штук',
    protectionFeatures: [
      {
        image: '/images/sliding-doors/sliding-system-threshold.jpg',
        alt: 'Защита от продувания',
        text: 'Защита от продувания — двухконтурная система уплотнителей'
      },
      {
        image: '/images/sliding-doors/sliding-track-detail.png',
        alt: 'Защита от протечек',
        text: 'Защита от протечек — вспененные вставки'
      }
    ],
    protectionClass: 'Класс А — воздухо- и водонепроницаемость.',
    specs: [
      {
        title: 'Размеры',
        items: [
          { label: 'Максимальная ширина', value: '16 метров' },
          { label: 'Максимальная высота', value: '3 метра' },
          { label: 'Количество створок', value: 'до 14 штук' },
          { label: 'Высота порога', value: '20 мм' }
        ]
      }
    ],
    coatings: [
      {
        title: 'Полимерное покрытие',
        description:
          'Доступ к 200 оттенкам в традиционном глянцевом или практичном матовом исполнении, а также с эффектом муар.',
        image: '/images/windows/finish-polymer.jpg',
        alt: 'Полимерное покрытие'
      },
      {
        title: 'Декорирование под дерево',
        description: 'Выбор тех, кто предпочитает природные мотивы.',
        image: '/images/windows/finish-wood.webp',
        alt: 'Декорирование под дерево'
      },
      {
        title: 'Анодирование',
        description:
          'Специальное решение, которое подчеркивает фактуру металла и продлевает срок его службы.',
        image: '/images/windows/finish-anodized.jpg',
        alt: 'Анодирование'
      }
    ],
    handleDescription:
      'Складные двери BF73 просты в использовании и не требуют особого ухода. Они незаменимы для организации безбарьерной среды.',
    handleImage: '/images/sliding-doors/sliding-door-handle-detail.png',
    handleAlt: 'Ручка складной двери BF73',
    handleColors: [
      { name: 'Серебро', colorHex: '#C0C0C0' },
      { name: 'Белый', colorHex: '#FFFFFF' },
      { name: 'Чёрный', colorHex: '#222222' }
    ],
    handleColorsNote:
      'Чаще всего у нас заказывают ручки в базовых оттенках, которые подходят к интерьерам в любом стиле. Окраска фурнитуры в индивидуальные цвета возможна под заказ.',
    usageTitle: '',
    usageDescription: '',
    usageImage: '',
    usageAlt: '',
    warmNote: '',
    videoUrl: 'https://rutube.ru/play/embed/0ef116c9afce3cea236c4a5986083755/',
    contactText:
      'ООО «Алюминиевые Системы» выполнило большое количество объектов с которыми вы можете ознакомиться в наших группах. Проконсультироваться по телефону +7(495)765-50-26, почта 7825600@mail.ru'
  },

  sl130: {
    seoTitle: 'Подъемно-раздвижные конструкции ALT SL130 — Алюминиевые Системы',
    seoDescription:
      'ALT SL130 — раздвижная система для частного строительства и общественных зданий. Выходы на террасы, балконы.',
    schemaName: 'Подъемно-раздвижные конструкции ALT SL130',
    title: 'SL130',
    subtitle: 'Подъемно–раздвижные конструкции ALT SL130',
    heroDescription:
      'Система ALT SL130 — данная конструкция предназначена для использования как в частном строительстве, так и в общественных зданиях. Она идеально подходит для создания выходов на террасы, балконы. Благодаря своей конструкции, система ALT SL130 обеспечивает широкий проход и не занимает лишнего места в помещении.',
    heroImage: '/images/sliding-doors/sl130-frame-section.png',
    heroAlt: 'Подъемно-раздвижные конструкции ALT SL130',
    systemImage: '/images/sliding-doors/sl130-system-card.png',
    systemAlt: 'Сечение системы ALT SL130',
    specs: [
      {
        title: 'Размеры',
        items: [
          { label: 'Максимальная высота створки', value: '2360 мм' },
          { label: 'Максимальная ширина створки', value: '—' },
          { label: 'Максимальный вес створки', value: '270 кг' }
        ]
      },
      {
        title: 'Энергоэффективность',
        items: [
          { label: 'Толщина заполнения', value: '24–42 мм' },
          { label: 'Теплопроводность сечения: рама', value: 'Uf = 2,23 W/(m²·K)' }
        ]
      },
      {
        title: 'Комфорт',
        items: [
          { label: 'Сопр. ветровой нагрузке (ГОСТ 26602.5)', value: '800 Па' },
          { label: 'Звукоизоляция (ГОСТ 22602.3)', value: 'до 40 дБ' }
        ]
      },
      {
        title: 'Безопасность',
        items: [
          { label: '', value: 'Возможно изготовление в противовзломном исполнении' }
        ]
      }
    ],
    coatings: [
      {
        title: 'Полимерное покрытие',
        description:
          'Доступ к 200 оттенкам в традиционном глянцевом или практичном матовом исполнении, а также с эффектом муар.',
        image: '/images/windows/finish-polymer.jpg',
        alt: 'Полимерное покрытие'
      },
      {
        title: 'Декорирование под дерево',
        description: 'Выбор тех, кто предпочитает природные мотивы.',
        image: '/images/windows/finish-wood.webp',
        alt: 'Декорирование под дерево'
      },
      {
        title: 'Анодирование',
        description:
          'Специальное решение, которое подчеркивает фактуру металла и продлевает срок его службы.',
        image: '/images/windows/finish-anodized.jpg',
        alt: 'Анодирование'
      }
    ],
    handleDescription:
      'Эргономичные ручки позволят без труда открывать и закрывать даже массивные створки. Представленная фурнитура устойчива к износу и небольшим механическим повреждениям.',
    handleImage: '/images/sliding-doors/sliding-door-handle-detail.png',
    handleAlt: 'Ручка раздвижной двери SL130',
    handleColors: [
      { name: 'Серебро', colorHex: '#C0C0C0' },
      { name: 'Белый', colorHex: '#FFFFFF' },
      { name: 'Чёрный', colorHex: '#222222' }
    ],
    handleColorsNote:
      'Чаще всего у нас заказывают ручки в базовых оттенках, которые подходят к интерьерам в любом стиле. Окраска фурнитуры в индивидуальные цвета возможна под заказ.',
    usageTitle: 'Раздвижные двери объединят гостиную с террасой',
    usageDescription:
      'Панорамные раздвижные двери просты в использовании. Их створки открываются и закрываются бесшумно и плавно. Порталы не требуют особого ухода. Вы сможете свободно передвигаться благодаря низкому порогу и широкому дверному проему.',
    usageImage: '/images/sliding-doors/panoramic-sliding-living-room.jpg',
    usageAlt: 'Раздвижные двери SL130 объединяют гостиную с террасой',
    warmNote: '',
    videoUrl: '',
    contactText:
      'ООО «Алюминиевые Системы» выполнило большое количество объектов с которыми вы можете ознакомиться в наших группах. Проконсультироваться по телефону +7(495)765-50-26, почта 7825600@mail.ru'
  }
}
