export type PFiles = {
  id: number;
  name: string;
  status: string;
  profileUrl: string;
};

export const PFiles: PFiles[] = [
  {
    id: 1,
    name: 'Ali El Abbassi',
    status: 'alive',
    profileUrl:
      'https://melmagazine.com/wp-content/uploads/2021/01/Gigachad-1024x427.jpg',
  },
  {
    id: 2,
    name: 'Napolean Bonaparte',
    status: 'dead',
    profileUrl:
      'https://blog.napoleon-cologne.fr/wp-content/uploads/2021/04/bicentenaire-napoleon-bonaparte-mort.jpg',
  },
  {
    id: 3,
    name: 'Leonardo Davinci',
    status: 'dead',
    profileUrl:
      'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYzNzc3OTA0MzAyMzY4NTkz/da_vinci_promo.jpg',
  },
  {
    id: 4,
    name: 'Messi',
    status: 'alive',
    profileUrl:
      'https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=72bbae118ff1631bcc0d1f837159a727',
  },
];

export type MainDashboardCardData = {
  imageURL: string;
  title: string;
  appName: string;
};

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
];

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
];

export type Task = {
  title: string;
  content: string;
};
export type Service = {
  id: number;
  patientId: number;
  serviceType: string;
  tasks: Task[];
};

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
];
