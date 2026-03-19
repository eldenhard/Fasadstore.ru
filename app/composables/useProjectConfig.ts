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
    siteName: 'АлюПроект',
    siteUrl: 'https://aluproject.ru',
    defaultTitle: 'АлюПроект — алюминиевые окна и двери',
    defaultDescription: 'Производство и установка алюминиевых окон и дверей в Москве',
    defaultOgImage: '/images/og-default.jpg',
    locale: 'ru_RU',
    companyName: 'АлюПроект',
    companyPhone: '+7(495) 765-50-26',
    companyEmail: 'info@aluproject.ru',
    companyAddress: 'Москва, Россия'
}

export function useProjectConfig(): SiteConfig {
    return siteConfig
}
