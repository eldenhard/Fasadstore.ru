export interface SchemaOrgOptions {
    type: 'Organization' | 'Product' | 'BreadcrumbList'
    data: Record<string, unknown>
}

export function useSchemaOrg(options: SchemaOrgOptions): void {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': options.type,
        ...options.data
    }

    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(jsonLd)
            }
        ]
    })
}
