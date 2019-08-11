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
import qckhnhSm from './imgs/qckhnh-sm.png'
import qckhnhLg from './imgs/qckhnh-lg.png'
import omsSm from './imgs/oms-sm.png'
import omsLg from './imgs/oms-lg.png'

import coldbrewSvg from './icons/coldbrew.svg'
import dreamyGardenSvg from './icons/dreamy-garden.svg'
import innoteqCrmSvg from './icons/innoteq-crm.svg'
import innoteqPosSvg from './icons/innoteq-pos.svg'
import ipeedySvg from './icons/ipeedy.svg'
import qckhnhSvg from './icons/qckhnh.svg'
import omsSvg from './icons/oms.svg'

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
    title: 'QTSC OMS',
    path: '/qtsc-oms',
    offsetY: 0,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
      {
        Icon: ReduxIcon,
        title: 'Redux'
      },
      {
        Icon: Google,
        title: 'Google Calendar API'
      },
    ],
    url: '#',
    imageLg: omsLg,
    imageSm: omsSm,
    logo: omsSvg,
    intro: 'Operations Management Suite mobile for Quang Trung Software City.',
    subtitle: 'QTSC\'s Operations Management Suite mobile',
    description: '<p>A client project I made at <b>Hisoft</b> company in late 2017.</p>',
    textColor: '#333333',
    theme: '#FFB8B8',
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
    description: '<p>TODO: description</p>',
    theme: '#2D3446',
    textColor: '#fff'
  },
  {
    title: 'Dreamy Garden',
    path: '/dreamy-garden',
    offsetY: 10,
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
    description: '<p>A hobby project made in Tet holiday 2019.</p>',
    theme: '#F1EAE2',
    textColor: '#3B3739',
  },
  {
    title: 'qckhnh.com',
    path: '/qckhnh',
    offsetY: 20,
    logo: qckhnhSvg,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
    ],
    url: 'https://qckhnh.com/',
    imageLg: qckhnhLg,
    imageSm: qckhnhSm,
    intro: 'My writings about tech and life.',
    subtitle: 'My writings about tech and life.',
    description: '<p>Built on top of <a href="https://qckhnh.com/tutorials/jamstack-va-tuong-lai-cua-static-web-applications/" target="_blank">JAMStack</a> using <b>Gatsby</b> and <b>Netlify CMS</b>, deployed on <b>Netlify</b>.</p>',
    theme: '#ffffff',
    textColor: '#333333',
  },
  {
    title: 'Innoteq CRM',
    path: '/innoteq-crm',
    offsetY: 20,
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
    description: '<p>TODO: description</p>',
    textColor: '#333',
    theme: '#F0F2F5',
  },
  {
    title: 'Ipeedy',
    path: '/ipeedy',
    offsetY: 20,
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
    description: '<p>TODO: description</p>',
    textColor: '#ffffff',
    theme: '#3023AE',
  },
]