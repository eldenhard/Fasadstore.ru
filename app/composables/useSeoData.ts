export interface PageSeoData {
    title: string
    description: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogType?: 'website' | 'product'
}

const seoDataMap: Record<string, PageSeoData> = {
    '/': {
        title: 'АлюПроект — алюминиевые окна и двери в Москве',
        description: 'Производство и установка алюминиевых окон и дверей ALUTECH в Москве. Энергоэффективные конструкции, срок службы более 50 лет.',
        ogType: 'website'
    },
    '/about': {
        title: 'О компании АлюПроект — производство алюминиевых конструкций',
        description: 'АлюПроект — компания по производству и установке алюминиевых окон и дверей. Опыт работы, собственное производство, гарантия качества.'
    },
    '/contacts': {
        title: 'Контакты АлюПроект — адрес, телефон, карта',
        description: 'Свяжитесь с АлюПроект: адрес офиса в Москве, телефон, email. Карта проезда и форма обратной связи.'
    },
    '/objects': {
        title: 'Наши объекты — портфолио АлюПроект',
        description: 'Выполненные проекты по остеклению алюминиевыми конструкциями ALUTECH. Фотогалерея объектов АлюПроект.'
    },
    '/windows': {
        title: 'Алюминиевые окна ALUTECH — каталог АлюПроект',
        description: 'Каталог алюминиевых окон ALUTECH: классические, панорамные, со скрытой створкой. Энергоэффективность, безопасность, долговечность.',
        ogType: 'website'
    },
    '/windows/classic': {
        title: 'Классические алюминиевые окна — АлюПроект',
        description: 'Классические алюминиевые окна ALUTECH: ALT W62, W72, W77. Энергоэффективные, безопасные, срок службы более 50 лет.',
        ogType: 'product'
    },
    '/windows/panorama': {
        title: 'Панорамные алюминиевые окна — АлюПроект',
        description: 'Панорамные алюминиевые окна ALUTECH. Максимум света, отличная обзорность, визуальное увеличение пространства.',
        ogType: 'product'
    },
    '/windows/hidden': {
        title: 'Окна со скрытой створкой — АлюПроект',
        description: 'Алюминиевые окна со скрытой створкой ALUTECH ALT W72HS. На 20% больше площадь остекления, современный дизайн.',
        ogType: 'product'
    },
    '/doors': {
        title: 'Алюминиевые двери ALUTECH — каталог АлюПроект',
        description: 'Каталог алюминиевых дверей ALUTECH: HD крупноформатные, классические, балконные. Взломостойкость, теплоизоляция, долговечность.',
        ogType: 'website'
    },
    '/doors/hd': {
        title: 'HD-двери крупноформатные ALUTECH — АлюПроект',
        description: 'Крупноформатные HD-двери ALUTECH высотой до 3 м. Взломостойкость RC2, теплоизоляция, комфорт и безопасность.',
        ogType: 'product'
    },
    '/doors/classic': {
        title: 'Классические алюминиевые двери — АлюПроект',
        description: 'Классические алюминиевые двери ALUTECH. Повышенная шумо- и теплоизоляция, взломостойкость, долгий срок службы.',
        ogType: 'product'
    },
    '/doors/balcony': {
        title: 'Балконные (террасные) двери — АлюПроект',
        description: 'Балконные и террасные алюминиевые двери ALUTECH. Герметичность, взломостойкость RC2, минимальная высота порога 20 мм.',
        ogType: 'product'
    },
    '/pocket-doors': {
        title: 'Раздвижные алюминиевые системы ALUTECH — каталог АлюПроект',
        description: 'Каталог раздвижных систем ALUTECH: SL160, BF73 и SL130 для панорамных проемов, террас и современных жилых пространств.',
        ogType: 'website'
    },
    '/pocket-doors/sl160': {
        title: 'Подъемно-раздвижная система ALUTECH SL160 — АлюПроект',
        description: 'ALUTECH SL160 — алюминиевая подъемно-раздвижная система для широких панорамных проемов, террас и частных домов.',
        ogType: 'product'
    },
    '/pocket-doors/bf73': {
        title: 'Раздвижная система ALUTECH BF73 — АлюПроект',
        description: 'ALUTECH BF73 — алюминиевая система для широких светопрозрачных проемов в частных и коммерческих пространствах.',
        ogType: 'product'
    },
    '/pocket-doors/sl130': {
        title: 'Раздвижная система ALUTECH SL130 — АлюПроект',
        description: 'ALUTECH SL130 — компактная раздвижная алюминиевая система для современных интерьеров, террас и светопрозрачных перегородок.',
        ogType: 'product'
    }
}

/**
 * Возвращает SEO-данные для текущего маршрута и применяет мета-теги.
 * Вызывает useSeoMeta(), useCanonical(), useRobots() автоматически.
 */
export function useSeoData(): void {
    const route = useRoute()
    const config = useProjectConfig()
    const seo = seoDataMap[route.path]

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
