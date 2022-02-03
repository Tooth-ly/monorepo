export type PFiles = {
  id: number
  name: string
  status: string
}

export const PFiles: PFiles[] = [
  {
    id: 1,
    name: 'Ali El Abbassi',
    status: 'alive',
  },
  {
    id: 2,
    name: 'Napolean Bonaparte',
    status: 'dead',
  },
  {
    id: 3,
    name: 'Leonardo Davinci',
    status: 'dead',
  },
  {
    id: 4,
    name: 'Messi',
    status: 'alive',
  },
]

export type MainDashboardCardData = {
  imageURL: string
  title: string
  appName: string
}

export const NotificationData = [
  {
    id: 0,
    title: 'Madison Beer',
    content: 'Madison Beer has followed you on twitter',
  },
  {
    id: 1,
    title: 'Madison Beer',
    content: 'Madison Beer has followed you on instagram',
  },
  {
    id: 2,
    title: 'Madison',
    content: 'Madison Beer has subscribed to your Youtube channel',
  },
  {
    id: 3,
    title: 'Madison Beer',
    content: `Madison Beer has sucked your dick and now you're in heaven`,
  },
]

export const MainDashboardCardData: MainDashboardCardData[] = [
  {
    imageURL: '/folder-solid.svg',
    title: 'PFiles',
    appName: 'pfiles',
  },
  {
    imageURL: '/baby-solid.svg',
    title: 'HR',
    appName: 'hr',
  },
  {
    imageURL: '/brain-solid.svg',
    title: 'Knowledge',
    appName: 'knowledge',
  },
]

export type Task = {
  title: string
  content: string
}
export type Service = {
  id: number
  patientId: number
  serviceType: string
  tasks: Task[]
}

export const ServicesData: Service[] = [
  {
    id: 0,
    patientId: 2,
    serviceType: 'Done',
    tasks: [
      {
        title: 'wash the dishes',
        content: 'wash the dishes bro das it',
      },
      {
        title: 'yeet',
        content: 'yeeeeeeeeeeeeeeeeeeeeeeeeeeet',
      },
    ],
  },
  {
    patientId: 2,
    id: 1,
    serviceType: 'New',
    tasks: [
      {
        title: 'jerk off',
        content: 'jerk off bro das it',
      },
    ],
  },
]
