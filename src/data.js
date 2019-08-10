import coldbrewSm from './imgs/coldbrew-sm.png'
import coldbrewLg from './imgs/coldbrew-lg.png'
import dreamyGardenSm from './imgs/dreamy-garden-sm.png'
import dreamyGardenLg from './imgs/dreamy-garden-lg.png'
import innoteqCrmSm from './imgs/innoteq-crm-sm.png'
import innoteqCrmLg from './imgs/innoteq-crm-lg.png'
import innoteqPosSm from './imgs/innoteq-pos-sm.png'
import innoteqPosLg from './imgs/innoteq-pos-lg.png'
import ipeedySm from './imgs/ipeedy-sm.png'
import ipeedyLg from './imgs/ipeedy-lg.png'

import coldbrewSvg from './icons/coldbrew.svg'
import dreamyGardenSvg from './icons/dreamy-garden.svg'
import innoteqCrmSvg from './icons/innoteq-crm.svg'
import innoteqPosSvg from './icons/innoteq-pos.svg'
import ipeedySvg from './icons/ipeedy.svg'

import { ReactComponent as ReactIcon } from './icons/react.svg'
import { ReactComponent as ReduxIcon } from './icons/redux.svg'
import { ReactComponent as Google } from './icons/google.svg'

export default [
  {
    title: 'Cold Brew',
    path: '/cold-brew',
    offsetY: 50,
    logo: coldbrewSvg,
    icons: [
      {
        Icon: Google,
        title: 'Google Vision APIs'
      },
      {
        Icon: ReactIcon,
        title: 'React Native'
      },
    ],
    url: 'https://coldbrewapp.com/',
    imageLg: coldbrewLg,
    imageSm: coldbrewSm,
    intro: 'Split bill, share with your friends and have fun.',
    subtitle: 'Split bill, share with your friends and have fun.',
    description: '<p>Base on <b>Mateusz Buczek</b>\'s Dribbble shot "<a href="https://dribbble.com/shots/5438599-Bill-splitting-app" rel="noopener nofollow" target="_blank">Bill splitting app</a>".</p><p>Cold Brew is built on top of React Native and using Google Vision API to process bill data.</p>',
    theme: '#D6893D',
    textColor: '#ffffff',
  },
  {
    title: 'Dreamy Garden',
    path: '/dreamy-garden',
    offsetY: 0,
    logo: dreamyGardenSvg,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
      {
        Icon: ReduxIcon,
        title: 'Redux'
      },
    ],
    url: 'https://dreamygarden.com/',
    imageLg: dreamyGardenLg,
    imageSm: dreamyGardenSm,
    intro: 'Another mobile app improves your sleep habits, except for it works this time!',
    subtitle: 'Improve your sleep habits!',
    description: '<p>Laborum Lorem consectetur aliqua ipsum aliquip incididunt officia mollit tempor deserunt in aliquip sunt. Consectetur aute veniam irure et deserunt ipsum proident laborum. Ad exercitation fugiat adipisicing minim esse sit non deserunt ad tempor. Esse occaecat ad ex incididunt aute occaecat aliquip esse exercitation magna. Eiusmod aliquip ullamco deserunt magna. Fugiat ea proident nostrud non ad eiusmod aute culpa nulla voluptate aliquip. Do incididunt nisi sunt excepteur ex occaecat aliqua exercitation esse consequat sint mollit aute veniam.</p>',
    theme: '#F1EAE2',
    textColor: '#3B3739',
  },
  {
    title: 'Innoteq POS',
    path: '/innoteq-pos',
    offsetY: 0,
    logo: innoteqPosSvg,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
      {
        Icon: ReduxIcon,
        title: 'Redux'
      },
    ],
    url: 'https://pos.innoteq.com/',
    imageLg: innoteqPosLg,
    imageSm: innoteqPosSm,
    intro: 'Manage restaurants, coffee shops and grocery stores make easy!',
    subtitle: 'Manage restaurants, coffee shops and grocery stores make easy!',
    description: '<p>Ullamco duis occaecat aliqua ex velit et eu cupidatat excepteur Lorem quis. Tempor ullamco sint sint qui reprehenderit incididunt ullamco nostrud. Fugiat sit quis veniam incididunt Lorem ex do aliqua veniam sunt sit aliqua anim. Lorem ipsum amet dolore laborum mollit fugiat incididunt commodo commodo. Commodo velit ea sint quis excepteur aliquip aliqua commodo dolore elit culpa. Enim quis fugiat excepteur consequat aute amet exercitation ipsum.</p>',
    theme: '#2D3446',
    textColor: '#fff'
  },
  {
    title: 'Innoteq CRM',
    path: '/innoteq-crm',
    offsetY: 40,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
    ],
    url: 'https://crm.innoteq.vn',
    imageLg: innoteqCrmLg,
    imageSm: innoteqCrmSm,
    logo: innoteqCrmSvg,
    intro: 'Effective customer relationship management solution.',
    subtitle: 'Effective customer relationship management solution.',
    description: '<p>Enim laborum eiusmod adipisicing ex culpa fugiat proident est mollit. Lorem nisi laborum Lorem cillum. Magna nulla aute occaecat commodo aliqua anim aliqua do amet voluptate labore proident ullamco mollit. Dolore esse nulla ullamco incididunt labore dolore. Laboris dolor culpa elit laborum voluptate ex. Occaecat fugiat reprehenderit cupidatat exercitation velit ipsum incididunt aute laborum aliquip.</p>',
    textColor: '#333',
    theme: '#F0F2F5',
  },
  {
    title: 'Ipeedy',
    path: '/ipeedy',
    offsetY: 40,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
    ],
    url: 'https://github.com/ipeedy',
    imageLg: ipeedyLg,
    imageSm: ipeedySm,
    logo: ipeedySvg,
    intro: 'Uber-like mobile app for selling small business.',
    subtitle: 'Market for the people, by the people!',
    description: '<p>Enim laborum eiusmod adipisicing ex culpa fugiat proident est mollit. Lorem nisi laborum Lorem cillum. Magna nulla aute occaecat commodo aliqua anim aliqua do amet voluptate labore proident ullamco mollit. Dolore esse nulla ullamco incididunt labore dolore. Laboris dolor culpa elit laborum voluptate ex. Occaecat fugiat reprehenderit cupidatat exercitation velit ipsum incididunt aute laborum aliquip.</p>',
    textColor: '#ffffff',
    theme: '#3023AE',
  },
]