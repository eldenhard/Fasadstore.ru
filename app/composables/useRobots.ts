export interface RobotsOptions {
    index?: boolean
    follow?: boolean
}

export function useRobots(options?: RobotsOptions): void {
    const index = options?.index ?? true
    const follow = options?.follow ?? true

    const content = `${index ? 'index' : 'noindex'}, ${follow ? 'follow' : 'nofollow'}`

    useSeoMeta({ robots: content })
}
