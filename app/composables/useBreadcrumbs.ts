export interface BreadcrumbItem {
    label: string
    to?: string
}

const breadcrumbLabels: Record<string, string> = {
    '/': 'Главная',
    '/about': 'О компании',
    '/contacts': 'Контакты',
    '/objects': 'Объекты',
    '/windows': 'Окна',
    '/windows/classic': 'Классические',
    '/windows/panorama': 'Панорамные',
    '/windows/hidden': 'Скрытая створка',
    '/doors': 'Двери',
    '/doors/hd': 'HD-двери',
    '/doors/classic': 'Классические',
    '/doors/balcony': 'Балконные'
}

export function useBreadcrumbs(): ComputedRef<BreadcrumbItem[]> {
    const route = useRoute()

    return computed(() => {
        const path = route.path

        // Пустой массив для главной страницы
        if (path === '/') return []

        const segments = path.split('/').filter(Boolean)
        const items: BreadcrumbItem[] = [{ label: 'Главная', to: '/' }]

        let currentPath = ''
        segments.forEach((_, index) => {
            currentPath += `/${segments[index]}`
            const label = breadcrumbLabels[currentPath] || segments[index]
            const isLast = index === segments.length - 1

            items.push(isLast ? { label } : { label, to: currentPath })
        })

        return items
    })
}
