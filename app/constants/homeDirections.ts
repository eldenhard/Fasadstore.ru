export interface HomeDirectionItem {
  title: string
  brand: string
  description: string
  image: string
  to?: string
}

export const HOME_DIRECTION_ITEMS: HomeDirectionItem[] = [
  {
    title: 'Алюминиевые окна',
    brand: 'Алютех (ALUTECH)',
    description:
      'Теплые алюминиевые окна по индивидуальным размерам с акцентом на надежность, свет и аккуратный внешний вид.',
    image: '/images/directions/aluminum-windows.png',
    to: '/windows'
  },
  {
    title: 'Алюминиевые раздвижные двери',
    brand: 'Алютех (ALUTECH)',
    description:
      'Раздвижные системы для частных домов и коттеджей с большим световым проемом и комфортным открыванием.',
    image: '/images/directions/sliding-doors.png',
    to: '/pocket-doors'
  },
  {
    title: 'Остекление террас и беседок',
    brand: 'Алютех (ALUTECH)',
    description:
      'Портальные теплые конструкции для террас и веранд с панорамным остеклением и современным профилем.',
    image: '/images/directions/terrace-glazing.jpg'
  },
  {
    title: 'Остекление коттеджей',
    brand: 'Алютех (ALUTECH)',
    description: 'Все виды остекления для коттеджей и загородных домов под ключ.',
    image: '/images/directions/cottage-glazing.png',
    to: '/cottages'
  },
  {
    title: 'Алюминиевые двери',
    brand: 'Алютех (ALUTECH)',
    description:
      'Алюминиевые двери с повышенной тепло- и звукоизоляцией для частных и коммерческих объектов.',
    image: '/images/directions/aluminum-doors.jpg',
    to: '/doors'
  },
  {
    title: 'Остекление фасадов и витражи',
    brand: 'Алютех (ALUTECH)',
    description:
      'Витражное и фасадное остекление для частных домов, коммерческих зданий и многоэтажных объектов.',
    image: '/images/directions/facade-glazing.png'
  }
]
