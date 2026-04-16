export interface ProductTab {
  label: string
  to: string
}

export const WINDOW_PRODUCT_TABS: ProductTab[] = [
  { label: 'Окна классические', to: '/windows/classic' },
  { label: 'Окна панорамные', to: '/windows/panorama' },
  { label: 'Скрытая створка', to: '/windows/hidden' }
]

export const DOOR_PRODUCT_TABS: ProductTab[] = [
  { label: 'HD-двери', to: '/doors/hd' },
  { label: 'Балконные', to: '/doors/balcony' },
  { label: 'Классические', to: '/doors/classic' }
]

export const POCKET_DOOR_PRODUCT_TABS: ProductTab[] = [
  { label: 'SL160', to: '/pocket-doors/sl160' },
  { label: 'BF73', to: '/pocket-doors/bf73' },
  { label: 'SL130', to: '/pocket-doors/sl130' }
]
