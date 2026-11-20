export interface PageSeoData {
    title: string
    description: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogType?: 'website' | 'article'
}

const seoDataMap: Record<string, PageSeoData> = {
    '/': {
        title: 'Алюминиевые системы Алютех',
        description: 'Производство и установка алюминиевых окон и дверей ALUTECH в Москве. Энергоэффективные конструкции, срок службы более 50 лет.',
        ogType: 'website'
    },
    '/terraces': {
        title: 'Остекление террас и патио — Алюминиевые системы Алютех',
        description: 'Алюминиевое остекление террас, патио и беседок: порталы, двери, окна, складные системы и витражное остекление.',
        ogType: 'website'
    },
    '/about': {
        title: 'О компании Алюминиевые Системы — производство алюминиевых конструкций',
        description: 'Алюминиевые Системы — компания по производству и установке алюминиевых окон и дверей. Опыт работы, собственное производство, гарантия качества.'
    },
    '/contacts': {
        title: 'Контакты Алюминиевые Системы — адрес, телефон, карта',
        description: 'Свяжитесь с Алюминиевые Системы: адрес офиса в Москве, телефон, email. Карта проезда и контактная информация.'
    },
    '/objects': {
        title: 'Наши объекты — портфолио Алюминиевые Системы',
        description: 'Выполненные проекты по остеклению алюминиевыми конструкциями ALUTECH. Фотогалерея объектов Алюминиевые Системы.'
    },
    '/facades': {
        title: 'Фасадное остекление — Алюминиевые Системы',
        description: 'Фасадное остекление, структурные фасады и витражи для частных домов и коммерческих зданий.',
        ogType: 'website'
    },
    '/windows': {
        title: 'Алюминиевые окна ALUTECH — каталог Алюминиевые Системы',
        description: 'Каталог алюминиевых окон ALUTECH: классические, панорамные, со скрытой створкой. Энергоэффективность, безопасность, долговечность.',
        ogType: 'website'
    },
    '/windows/classic': {
        title: 'Классические алюминиевые окна — Алюминиевые Системы',
        description: 'Классические алюминиевые окна ALUTECH: ALT W62, W72, W77. Энергоэффективные, безопасные, срок службы более 50 лет.',
        ogType: 'website'
    },
    '/windows/panorama': {
        title: 'Панорамные алюминиевые окна — Алюминиевые Системы',
        description: 'Панорамные алюминиевые окна ALUTECH. Максимум света, отличная обзорность, визуальное увеличение пространства.',
        ogType: 'website'
    },
    '/windows/hidden': {
        title: 'Окна со скрытой створкой — Алюминиевые Системы',
        description: 'Алюминиевые окна со скрытой створкой ALUTECH ALT W72HS. На 20% больше площадь остекления, современный дизайн.',
        ogType: 'website'
    },
    '/doors': {
        title: 'Алюминиевые двери ALUTECH — каталог Алюминиевые Системы',
        description: 'Каталог алюминиевых дверей ALUTECH: HD крупноформатные, классические, балконные. Взломостойкость, теплоизоляция, долговечность.',
        ogType: 'website'
    },
    '/doors/hd': {
        title: 'HD-двери крупноформатные ALUTECH — Алюминиевые Системы',
        description: 'Крупноформатные HD-двери ALUTECH высотой до 3 м. Взломостойкость RC2, теплоизоляция, комфорт и безопасность.',
        ogType: 'website'
    },
    '/doors/classic': {
        title: 'Классические алюминиевые двери — Алюминиевые Системы',
        description: 'Классические алюминиевые двери ALUTECH. Повышенная шумо- и теплоизоляция, взломостойкость, долгий срок службы.',
        ogType: 'website'
    },
    '/doors/balcony': {
        title: 'Балконные (террасные) двери — Алюминиевые Системы',
        description: 'Балконные и террасные алюминиевые двери ALUTECH. Герметичность, взломостойкость RC2, минимальная высота порога 20 мм.',
        ogType: 'website'
    },
    '/sliding-doors': {
        title: 'Раздвижные алюминиевые системы ALUTECH — каталог Алюминиевые Системы',
        description: 'Каталог раздвижных систем ALUTECH: SL160, BF73 и SL130 для панорамных проемов, террас и современных жилых пространств.',
        ogType: 'website'
    },
    '/sliding-doors/sl160': {
        title: 'Подъемно-раздвижная система ALUTECH SL160 — Алюминиевые Системы',
        description: 'ALUTECH SL160 — алюминиевая подъемно-раздвижная система для широких панорамных проемов, террас и частных домов.',
        ogType: 'website'
    },
    '/sliding-doors/bf73': {
        title: 'Раздвижная система ALUTECH BF73 — Алюминиевые Системы',
        description: 'ALUTECH BF73 — алюминиевая система для широких светопрозрачных проемов в частных и коммерческих пространствах.',
        ogType: 'website'
    },
    '/sliding-doors/sl130': {
        title: 'Раздвижная система ALUTECH SL130 — Алюминиевые Системы',
        description: 'ALUTECH SL130 — компактная раздвижная алюминиевая система для современных интерьеров, террас и светопрозрачных перегородок.',
        ogType: 'website'
    }
}

/**
 * Возвращает SEO-данные для текущего маршрута и применяет мета-теги.
 * Вызывает useSeoMeta(), useCanonical(), useRobots() автоматически.
 */
export function useSeoData(): void {
    const route = useRoute()
    const config = useProjectConfig()
    const seo = seoDataMap[route.path.replace(/\/+$/, '') || '/']

    if (!seo) return

    useSeoMeta({
        title: seo.title,
        description: seo.description,
        ogTitle: seo.ogTitle || seo.title,
        ogDescription: seo.ogDescription || seo.description,
        ogType: seo.ogType || 'website',
        ogUrl: `${config.siteUrl}${route.path}`,
        ogLocale: config.locale,
        ogImage: seo.ogImage || config.defaultOgImage
    })

    useCanonical()
    useRobots()
}
