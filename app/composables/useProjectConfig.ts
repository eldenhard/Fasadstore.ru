export interface SiteConfig {
    siteName: string
    siteUrl: string
    defaultTitle: string
    defaultDescription: string
    defaultOgImage: string
    locale: string
    companyName: string
    companyPhone: string
    companyEmail: string
    companyAddress: string
}

const siteConfig: SiteConfig = {
    siteName: 'Алюминиевые Системы',
    siteUrl: 'https://fasadstore.ru',
    defaultTitle: 'Алюминиевые системы Алютех',
    defaultDescription: 'Производство и установка алюминиевых окон и дверей в Москве',
    defaultOgImage: '/images/slider/first.webp',
    locale: 'ru_RU',
    companyName: 'Алюминиевые Системы',
    companyPhone: '+7(495) 765-50-26',
    companyEmail: '7655026@mail.ru',
    companyAddress: 'Москва, Россия'
}

export function useProjectConfig(): SiteConfig {
    return siteConfig
}
