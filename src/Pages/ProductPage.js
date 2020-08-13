import React from 'react';
import {Container,Button,Row,Col,InputGroup,FormControl, ListGroup,Image,CardDeck, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import SideBar from '../components/SideBar';

const product = [
    {
        id: 1,
        first:'ecoTRON T',
        second: 'Электронные термостаты',
        link:'/et',
        type: 'Тип: 70.1050',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294972403.png?downsize=*:475px'
    },
    {
        id: 2,
        first: 'ecoTRON M',
        second: 'Электронные термостаты',
        link:'/et',
        type: 'Тип: 70.1060',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979651.png?downsize=*:475px'
    },
     {
        id: 3,
         first: 'safetyM TB/TW',
        second: 'Электронные термостаты',
        link:'/et',
         type: 'Тип: 70.1160',
         imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294985174.png?downsize=*:475px'
    },
    {
        id: 4,
        first: 'JUMO MAERA S25',
        second: 'Уровень',
        link:'/uroven',
        type:'Тип: 40.1015',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976981.png?downsize=*:475px'
    },
    {
        id: 5,
        first: 'JUMO MAERA S26',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.2090',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976517.png?downsize=*:475px'
    },
    {
        id: 6,
        first: 'JUMO MAERA F27',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.4391',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28700.png?downsize=*:475px'
    },
    {
        id: 7,
        first: 'JUMO MAERA S28',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.4392',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976985.png?downsize=*:475px'
    },
    {
        id: 8,
        first: 'JUMO dTrans p33',
        second: 'Уровень',
        link:'/uroven',
        type: 'Тип: 40.4753',
        imgSrc:'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28702.png?downsize=*:475px'
    },
    {
        id: 9,
        first: 'JUMO dTRANS p02 DELTA',
        second: 'Расход',
        link: '/rashod',
        type: 'Тип: 40.4382',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987380.png?downsize=*:475px'
    },
    {
        id: 10,
        first: 'JUMO SVS 3000',
        second: 'Программное обеспечение',
        link: '/po',
        type: 'Тип: 70.0755',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28731.png?downsize=*:475px'
      },
    {
        id: 11,
        first: 'Измерительные преобразователи относительной влажности',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996284.png?downsize=*:475px'
        },
    {
        id: 12,
        first: 'Искробезопасные измерительные преобразователи относительной влажности',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7025',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979684.png?downsize=*:475px'
        },
     {
        id: 13,
         first: 'Измерительные преобразователи относительной влажности(промышленная серия)',
         second: 'Влажность',
         link: '/vlazhnost',
         type: 'Тип: 90.7023',
         imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981083.png?downsize=*:475px'
        },
    {
        id: 14,
        first: 'Измерительные преобразователи относительной влажности (с гигрометрическими полимерными волокнами) и температуры',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7031',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996338.png?downsize=*:475px'
         },
    {
        id: 15,
        first: 'Гигростаты',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7032',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28867.png?downsize=*:475px'
        },
    {
        id: 16,
        first: 'Измерительные преобразователи относительной влажности (с емкостным сенсором)',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7027',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987301.png?downsize=*:475px'
        },
    {
        id: 17,
        first: 'Измерительные преобразователи относительной влажности  температуры и концентрации CO2',
        second: 'Влажность',
        link: '/vlazhnost',
        type: 'Тип: 90.7021',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988425.png?downsize=*:475px'
       },
    {
        id: 18,
        first: 'Термостаты для щитового монтажа',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.2010',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979383.png?downsize=*:475px'
    },
    {
        id: 19,
        first: 'Встраиваемый термостат',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.2026',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294985877.png?downsize=*:475px'
    },
    {
        id: 20,
        first: 'Термостат наружного монтажа',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.3021',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28715.png?downsize=*:475px'
    },
    {
        id: 21,
        first: 'Термостат поверхностного монтажа',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.3026',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28716.png?downsize=*:475px'
    },
    {
        id: 22,
        first: 'Вентиляционный термостат',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.4514',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967366.png?downsize=*:475px'
       },
    {
        id: 23,
        first: 'JUMO exTHERM-AT',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.5055',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28722.png?downsize=*:475px'
    },
    {
        id: 24,
        first: 'Встроенные термостаты EM до 500°C',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.2021',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28712.png?downsize=*:475px'
    },
    {
        id: 25,
        first: 'Встраиваемый термостат',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.3051',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28777.png?downsize=*:475px'
    },
    {
        id: 26,
        first: 'JUMO heatTHERM – AT',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.3070',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28719.png?downsize=*:475px'
    },
    {
        id: 27,
        first: 'JUMO frostTHERM-AT/-DR',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.4100',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28720.png?downsize=*:475px'
    },
    {
        id: 28,
        first: 'Термостат дымовых газов',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.1540',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967373.png?downsize=*:475px'
    },
    {
        id: 29,
        first: 'JUMO heatTHERM',
        second: 'Термостаты',
        link: '/termostaty',
        type: 'Тип: 60.2031',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28713.png?downsize=*:475px'
    },
    {
        id: 30,
        first: 'JUMO TYA-432-45',
        second: 'Тиристорные модули',
        link: '/tm',
        type: 'Тип: 70.9010',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294989599.png?downsize=*:475px'
    },
    {
        id: 31,
        first: 'JUMO TYA-432-100',
        second: 'Тиристорные модули',
        link: '/tm',
        type: 'Тип: 70.9020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28744.png?downsize=*:475px'
    },
    {
        id: 32,
        first: 'JUMO TYA 201',
        second: 'Тиристорные модули',
        link: '/tm',
        type: 'Тип: 70.9061',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980107.png?downsize=*:475px'
    },
    {
        id: 33,
        first: 'JUMO TYA 202',
        second: 'Тиристорные модули',
        link: '/tm',
        type: 'Тип: 70.9062',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980108.png?downsize=*:475px'
    },
    {
        id: 34,
        first: 'Барьер искробезопасности',
        second: 'Блок питания',
        link: '/bp',
        type: 'Тип: 70.7530',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995355.png?downsize=*:475px'
    },
    {
        id: 35,
        first: 'Сетевой блок питания',
        second: 'Блок питания',
        link: '/bp',
        type: 'Тип: 70.7500',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969740.png?downsize=*:475px'
    },
    {
        id: 36,
        first: 'JUMO dTRANS T01 / Т01Т',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип:70.7010',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28739.png?downsize=*:475px'
    },
    {
        id: 37,
        first: 'JUMО dTRANS T02',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип: 70.7020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28740.png?downsize=*:475px'
    },
    {
        id: 38,
        first: 'JUMО dTRANS T03 J, B, T',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип:70.7030',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28741.png?downsize=*:475px'
    },
    {
        id: 39,
        first: 'JUMO dTRANS T04',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип: 70.7040',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970772.png?downsize=*:475px'
    },
    {
        id: 40,
        first: 'JUMO Wtrans B',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип: 70.7060',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28742.png?downsize=*:475px'
    },
    {
        id: 41,
        first: 'JUMO dTRANS T05',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип: 70.7050',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981272.png?downsize=*:475px'
    },
    {
        id: 42,
        first: 'JUMO dTRON 304/308/316',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип:70.3041',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28734.png?downsize=*:475px'
    },
    {
        id: 43,
        first: 'JUMO DICON 400/500',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип: 70.3570',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28839.png?downsize=*:475px'
    },
    {
        id: 44,
        first: 'JUMO DICON 401/501',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип:70.3580',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28839.png?downsize=*:475px'
    },
    {
        id: 45,
        first: 'JUMO IMAGO 500',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип: 70.3590',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976711.png?downsize=*:475px'
    },
    {
        id: 46,
        first: 'JUMO IMAGO F3000',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип: 70.0101',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28730.png?downsize=*:475px'
    },
    {
        id: 47,
        first: 'JUMO iTRON DR 100',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип:70.2060',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294968193.png?downsize=*:475px'
    },
    {
        id: 48,
        first: 'JUMO eTRON M100',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип:70.1061',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986313.png?downsize=*:475px'
    },
    {
        id: 49,
        first: 'JUMO Quantrol LC100/LC200/LC300',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип: 70.2030',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294983726.png?downsize=*:475px'
    },
    {
        id: 50,
        first: 'JUMO LOGOSCREEN fd',
        second: 'Регистраторы',
        link: '/registratory',
        type: 'Тип:70.6585',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981336.png?downsize=*:475px'
    },
    {
        id: 51,
        first: 'JUMO LOGOSCREEN nt',
        second: 'Регистраторы',
        link: '/registratory',
        type: 'Тип: 70.6581',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294971454.png?downsize=*:475px'
    },
    {
        id: 52,
        first: 'JUMO di eco',
        second: 'Индикаторы',
        link: '/indicatory',
        type: 'Тип:70.1540',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987382.png?downsize=*:475px'
    },
    {
        id: 53,
        first: 'JUMO di 32/di 08',
        second: 'Индикаторы',
        link: '/indicatory',
        type: 'Тип: 70.1530',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28732.png?downsize=*:475px'
    },
    {
        id: 54,
        first: 'JUMO di 308',
        second: 'Индикаторы',
        link: '/indicatory',
        type: 'Тип:70.1550',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294978189.png?downsize=*:475px'
    },
    {
        id: 55,
        first: 'JUMO TDA-300 und JUMO TDA-3000',
        second: 'Индикаторы',
        link: '/indicatory',
        type: 'Тип: 70.2540',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970847.png?downsize=*:475px'
    },
    {
        id: 56,
        first: 'Термометр стрелочный биметаллический',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип:60.8001',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987980.png?downsize=*:475px'
    },
    {
        id: 57,
        first: 'Термометр стрелочный биметаллический',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип: 60.8002',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987980.png?downsize=*:475px'
    },
    {
        id: 58,
        first: 'Термометр стрелочный',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип:60.8003',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995673.png?downsize=*:475px'
    },
    {
        id: 59,
        first: 'Термометр стрелочный',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип: 60.8005',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981779.png?downsize=*:475px'
    }, {
        id: 60,
        first: 'Температурный переключатель',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип:60.8301',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988131.png?downsize=*:475px'
    }, {
        id: 61,
        first: 'Контактный стрелочный термометр',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип: 60.8425',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28727.png?downsize=*:475px'
    }, {
        id: 62,
        first: 'MICROSTAT-M',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип:60.8501',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28728.png?downsize=*:475px'
    }, {
        id: 63,
        first: 'Контактный показывающий термометр',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип:60.8520',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294992642.png?downsize=*:475px'
    }, {
        id: 64,
        first: 'Контактный показывающий термометр',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип: 60.8523',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977735.png?downsize=*:475px'
    }, {
        id: 65,
        first: 'MICROSTAT и стрелочного контактного термометра',
        second: 'Стрелочные термометры',
        link: '/termometry',
        type: 'Тип:60.8730',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995825.png?downsize=*:475px'
    }, {
        id: 66,
        first: 'Термометр сопротивления для учета тепла с присоединительной головкой, допуск РТВ',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2424',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995081.png?downsize=*:475px'
    },
    {
        id: 67,
        first: 'Термометр сопротивления для пищевой и фармацевтической промышленности',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2810',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988585.png?downsize=*:475px'
    },
    {
        id: 68,
        first: 'JUMO PROCESStemp Термометр сопротивления для технологических процессов с Ех (ATEX)-допуском',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2820',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294968861.png?downsize=*:475px'
    },
    {
        id: 69,
        first: 'Вставной термометр сопротивления с герметичным исполнением для водяного пара',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2830',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981087.png?downsize=*:475px'
    },
    {
        id: 70,
        first: 'JUMO CANtrans T',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2910',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987368.png?downsize=*:475px'
    },
    {
        id: 71,
        first: 'JUMO Dtrans T100',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2815',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294989181.png?downsize=*:475px'
    },
    {
        id: 72,
        first: 'JUMO Wtrans RF-series',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2931',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981422.png?downsize=*:475px'
    },
    {
        id: 73,
        first: 'JUMO Wtrans',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2930',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987361.png?downsize=*:475px'
    },
    {
        id: 74,
        first: 'Термометры сопротивления комнатного, наружного и канального исполнения',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2520',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294989458.png?downsize=*:475px'
    },
    {
        id: 75,
        first: 'JUMO Etemp B',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2023',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996924.png?downsize=*:475px'
    },
    {
        id: 76,
        first: 'JUMO VIBROtemp Винчивающийся термометр',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2040',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294989666.png?downsize=*:475px'
    },
    {
        id: 77,
        first: 'JUMO Etemp B',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2123',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995822.png?downsize=*:475px'
    },
    {
        id: 78,
        first: 'Ввинчивающийся термометр',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2044',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967932.png?downsize=*:475px'
    },
    {
        id: 79,
        first: 'Вставной термометр сопротивления с присоединительной головкой формы J',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2130',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294971837.png?downsize=*:475px'
    },
    {
        id: 80,
        first: 'Вставной термометр сопротивления с присоединительной головкой формы В',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2120',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976184.png?downsize=*:475px'
    },
    {
        id: 81,
        first: 'Вставной термометр сопротивления с присоединительным проводом для солнечных батарей',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2153',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982850.png?downsize=*:475px'
    },
    {
        id: 82,
        first: 'Ввинчивающийся термометр с присоединительной головкой формы В',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967928.png?downsize=*:475px'
    },
    {
        id: 83,
        first: 'Ввинчивающийся термометр сопротивления для учета тепла ',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2434',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995081.png?downsize=*:475px'
    },
    {
        id: 84,
        first: 'Термометры сопротивления в оболочке согласно DIN EN 60 751',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2210',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987354.png?downsize=*:475px'
    },
    {
        id: 85,
        first: 'JUMO FOODtemp ',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2350',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970927.png?downsize=*:475px'
    },
    {
        id: 86,
        first: 'Термометры сопротивления ',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2425',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294993003.png?downsize=*:475px'
    },
    {
        id: 87,
        first: 'Вставной термометр сопротивления для учета тепла с присоединительным проводом ',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2435',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294993004.png?downsize=*:475px'
    },
    {
        id: 88,
        first: 'Вставной термометр сопротивления с байонетным присоединением',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2190',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980820.png?downsize=*:475px'
    },
    {
        id: 89,
        first: 'Устройство контроля температуры',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2721',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976572.png?downsize=*:475px'
    },
    {
        id: 90,
        first: 'Датчик уровня и температуры для автотранспорта',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип:90.2880',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987367.png?downsize=*:475px'
    },
    {
        id: 91,
        first: 'Поверхностный термометр сопротивления',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2550',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988318.png?downsize=*:475px'
    },
    {
        id: 92,
        first: 'JUMO DELOS T',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2940',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987646.png?downsize=*:475px'
    },
    {
        id: 93,
        first: 'Ввинчивающийся термометр сопротивления с присоединительными проводами',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2050',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977397.png?downsize=*:475px'
    },
    {
        id: 94,
        first: 'Вставной термометр сопротивления с присоединительными проводами',
        second: 'Термометры сопротивления',
        link: '/termometry',
        type: 'Тип: 90.2150',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988563.png?downsize=*:475px'
    },
    {
        id: 95,
        first: 'Ввинчивающийся термоэлемент с присоединительной головкой формы В',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967928.png?downsize=*:475px'
    },
    {
        id: 96,
        first: 'Ввинчивающийся термоэлемент с присоединительной головкой формы J',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1030',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982448.png?downsize=*:475px'
    },
    {
        id: 97,
        first: 'Ввинчивающийся термоэлемент с компенсационным проводом',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1050',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977397.png?downsize=*:475px'
    },
    {
        id: 98,
        first: 'Ввинчивающийся термоэлемент для измерения температуры расплава',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1090',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987370.png?downsize=*:475px'
    },
    {
        id: 99,
        first: 'Вставной термоэлемент с присоединительной головкой',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1110',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976996.png?downsize=*:475px'
    },
    {
        id: 100,
        first: 'Вставной термоэлемент с компенсационным проводом',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1090',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988563.png?downsize=*:475px'
    },
    {
        id: 101,
        first: 'Вставной термоэлемент с присоединительной головкой ',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1120',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976184.png?downsize=*:475px'
    },
    {
        id: 102,
        first: 'Вставной термоэлемент с байонетным присоединением',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1190',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980820.png?downsize=*:475px'
    },
    {
        id: 103,
        first: 'Термоэлемент для технологических процессов с Ex-допуском ',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1820',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976996.png?downsize=*:475px'
    },
    {
        id: 104,
        first: 'Термоэлементы в оболочке согласно DIN 43 710 и DIN EN 60 584',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1210',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987354.png?downsize=*:475px'
    },
    {
        id: 105,
        first: 'Игольчатый термоэлемент ',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1350',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294970927.png?downsize=*:475px'
    },
    {
        id: 106,
        first: 'Термопары, аттестованные согласно DIN 14597 (DIN 3440)',
        second: 'Термопары',
        link: '/termometry',
        type: 'Тип: 90.1060',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976725.png?downsize=*:475px'
    },
    {
        id: 107,
        first: 'Оборудование для монтажа температурных датчиков',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.2440',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986530.png?downsize=*:475px'
    },
    {
        id: 108,
        first: 'Присоединительные головки и цоколи',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9715',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967560.png?downsize=*:475px'
    },
    {
        id: 109,
        first: 'Компенсационный и присоединительный провода',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9735',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976728.png?downsize=*:475px'
    },
    {
        id: 110,
        first: 'Измерительные вставки для ввинчивающихся термоэлементов ',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9740',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976726.png?downsize=*:475px'
    },
    {
        id: 111,
        first: 'Термопары согласно DIN 43 732',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9744',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976727.png?downsize=*:475px'
    },
    {
        id: 112,
        first: 'Штуцерные присоединения и фланцы',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9750',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980757.png?downsize=*:475px'
    },
    {
        id: 113,
        first: 'Ввинчивающиеся и приварные защитные гильзы',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9710',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977503.png?downsize=*:475px'
    },
    {
        id: 114,
        first: 'Разъемы',
        second: 'Термометры: Принадлежности',
        link: '/termometry',
        type: 'Тип: 90.9760',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294994077.png?downsize=*:475px'
    },
    {
        id: 115,
        first: 'JUMO dTRANS pH 02',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2551',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28683.png?downsize=*:475px'
    },
    {
        id: 116,
        first: 'JUMO dTRANS AS 02',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2553',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28685.png?downsize=*:475px'
    },
    {
        id: 117,
        first: 'Двухпроводной измерительный преобразователь',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2701',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294968882.png?downsize=*:475px'
    },
    {
        id: 118,
        first: 'Портативные рН-метры',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2710',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28688.png?downsize=*:475px'
    },
    {
        id: 119,
        first: 'JUMO AQUIS 500 pH',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2560',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294984464.png?downsize=*:475px'
    },
    {
        id: 120,
        first: 'JUMO dTRANS pH 03',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2723',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995392.png?downsize=*:475px'
    },
    {
        id: 121,
        first: 'JUMO AQUIS touch S',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип:  20.2581',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/24182.png?downsize=*:475px'
    },
    {
        id: 122,
        first: 'JUMO AQUIS touch P',
        second: 'pH и редокс-потенциал',
        link: '/analitika',
        type: 'Тип: 20.2580',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294984316.png?downsize=*:475px'
    },
    {
        id: 123,
        first: 'JUMO CTI-500',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип:  20.2755',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28690.png?downsize=*:475px'
    },
    {
        id: 124,
        first: 'JUMO CTI-750',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип: 20.2756',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987242.png?downsize=*:475px'
    },
    {
        id: 125,
        first: 'JUMO dTRANS CR 02',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип: 20.2552',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28684.png?downsize=*:475px'
    },
    {
        id: 126,
        first: 'ecoTRANS Lf 01/02',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип: 20.2731',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294994180.png?downsize=*:475px'
    },
    {
        id: 127,
        first: 'JUMO dTRANS CR 02',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип: 20.2732',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977456.png?downsize=*:475px'
    },
    {
        id: 128,
        first: 'JUMO AQUIS 500 CR',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип: 20.2565',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982834.png?downsize=*:475px'
    },
    {
        id: 129,
        first: 'JUMO AQUIS 500 Ci',
        second: 'Удельная электропроводность',
        link: '/analitika',
        type: 'Тип: 20.2566',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982834.png?downsize=*:475px'
    },
    {
        id: 130,
        first: 'JUMO dTRANS O2 01',
        second: 'Концентрация растворенного кислорода',
        link: '/analitika',
        type: 'Тип: 20.2610',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28686.png?downsize=*:475pxx'
    },
    {
        id: 131,
        first: 'JUMO AQUIS 500 RS',
        second: 'Концентрация растворенного кислорода',
        link: '/analitika',
        type: 'Тип: 20.2569',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987743.png?downsize=*:475px'
    },
    {
        id: 132,
        first: 'JUMO ecoLine O-DO',
        second: 'Концентрация растворенного кислорода',
        link: '/analitika',
        type: 'Тип: 20.2613',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294983568.png?downsize=*:475px'
    },
    {
        id: 133,
        first: 'JUMO ecoLine / JUMO BlackLine',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1005',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28677.png?downsize=*:475px'
    },
    {
        id: 134,
        first: 'JUMO tecLine pH / JUMO tecLine Rd',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1020',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976291.png?downsize=*:475px'
    },
    {
        id: 135,
        first: 'JUMO LabLine pH / JUMO LabLine Rd',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1030',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28681.png?downsize=*:475px'
    },
    {
        id: 136,
        first: 'JUMO BlackLine CR-GT/-EC/-GS',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2922',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28695.png?downsize=*:475px'
    },
    {
        id: 137,
        first: 'ecoLine Lf-PVC',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2923',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28696.png?downsize=*:475px'
    },
    {
        id: 138,
        first: 'JUMO tecLine CR',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2924',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28697.png?downsize=*:475px'
    },
    {
        id: 139,
        first: 'tecLine Lf-GT',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2925',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967315.png?downsize=*:475px'
    },
    {
        id: 140,
        first: 'Ионоселективный сенсор',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1040',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28682.png?downsize=*:475px'
    },
    {
        id: 141,
        first: 'JUMO LF-4C',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2930',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28698.png?downsize=*:475px'
    },
    {
        id: 142,
        first: 'JUMO tecLine Ci',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2941',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986766.png?downsize=*:475px'
    },
    {
        id: 143,
        first: 'JUMO tecLine Ci-S',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2942',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986228.png?downsize=*:475px'
    },
    {
        id: 144,
        first: 'ISFET pH-электрод',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2941',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294983052.png?downsize=*:475px'
    },
    {
        id: 145,
        first: 'JUMO ecoLine Ci',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2943',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979972.png?downsize=*:475px'
    },
    {
        id: 146,
        first: 'Стеклянные рН-метрические электроды JUMO',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1081',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294975501.png?downsize=*:475px'
    },
    {
        id: 147,
        first: 'Одинарные/двойные редокс-электроды JUMO',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1082',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995827.png?downsize=*:475px'
    },
    {
        id: 148,
        first: 'Электроды сравнения JUMO',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.1083',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294975501.png?downsize=*:475px'
    },
    {
        id: 149,
        first: 'JUMO tecLine Cl2',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2630',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294993981.png?downsize=*:475px'
    },
    {
        id: 150,
        first: 'JUMO tecLine TC',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип:20.2631',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294993981.png?downsize=*:475px'
    },
    {
        id: 151,
        first: 'JUMO tecLine ClO2, JUMO tecLine O3',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2634',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294993981.png?downsize=*:475px'
    },
    {
        id: 152,
        first: 'JUMO tecLine H2O2, JUMO tecLine PAA',
        second: 'Электроды и сенсоры для электрохимических величин',
        link: '/analitika',
        type: 'Тип: 20.2636',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294993981.png?downsize=*:475px'
    },
    {
        id: 153,
        first: 'Проточная арматура',
        second: 'Защитная арматура',
        link: '/analitika',
        type: 'Тип: 20.2810',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28691.png?downsize=*:475px'
    },
    {
        id: 154,
        first: 'Погружная арматура',
        second: 'Защитная арматура',
        link: '/analitika',
        type: 'Тип: 20.2820',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28692.png?downsize=*:475px'
    },
    {
        id: 155,
        first: 'Арматура со шлюзовым устройством',
        second: 'Защитная арматура',
        link: '/analitika',
        type: 'Тип: 20.2822',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28693.png?downsize=*:475px'
    },
    {
        id: 156,
        first: 'Арматура для технологических процессов',
        second: 'Защитная арматура',
        link: '/analitika',
        type: 'Тип: 20.2825',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28694.png?downsize=*:475px'
    },
    {
        id: 157,
        first: 'Погружная арматура для технологических процессов',
        second: 'Защитная арматура',
        link: '/analitika',
        type: 'Тип: 20.2821',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28692.png?downsize=*:475px'
    },
    {
        id: 158,
        first: 'Пневматическая шлюзовая арматура',
        second: 'Защитная арматура',
        link: '/analitika',
        type: 'Тип:  20.2823',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982898.png?downsize=*:475px'
    },
    {
        id: 159,
        first: 'Принадлежности для сенсоров',
        second: 'Аналитика: Принадлежности',
        link: '/analitika',
        type: 'Тип:  20.2990',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969851.png?downsize=*:475px'
    },
    {
        id: 160,
        first: 'Преобразователь импеданса ',
        second: 'Аналитика: Принадлежности',
        link: '/analitika',
        type: 'Тип:  20.2995',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294992641.png?downsize=*:475px'
    },
    {
        id: 161,
        first: 'Имитаторы и калибровочные адаптеры ',
        second: 'Аналитика: Принадлежности',
        link: '/analitika',
        type: 'Тип:  20.2711',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28689.png?downsize=*:475px'
    },
    {
        id: 162,
        first: 'Компенсационный термометр JUMO ',
        second: 'Аналитика: Принадлежности',
        link: '/analitika',
        type: 'Тип: 20.1085',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969591.png?downsize=*:475px'
    },
    {
        id: 163,
        first: 'JUMO MIDAS',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:  40.1001',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969730.png?downsize=*:475px'
    },
    {
        id: 164,
        first: 'JUMO MIDAS HP',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.1005',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28766.png?downsize=*:475px'
    },
    {
        id: 165,
        first: 'JUMO MIDAS SI',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.1006',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294969724.png?downsize=*:475px'
    },
    {
        id: 166,
        first: 'JUMO MIDAS DP 10',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.1050',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981903.png?downsize=*:475px'
    },
    {
        id: 167,
        first: 'JUMO dTRANS p31',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.2050',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979618.png?downsize=*:475px'
    },
    {
        id: 168,
        first: 'JUMO dTRANS p32',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.2051',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967836.png?downsize=*:475px'
    },
    {
        id: 169,
        first: 'JUMO CANtrans p Keramik',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.2055',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982943.png?downsize=*:475px'
    },
    {
        id: 170,
        first: 'JUMO CANtrans p',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.2056',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982943.png?downsize=*:475px'
    },
    {
        id: 171,
        first: 'JUMO CANtrans pT',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.2057',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982943.png?downsize=*:475px'
    },
    {
        id: 172,
        first: 'Преобразователь давления и разности давлений',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.4304',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967335.png?downsize=*:475px'
    },
    {
        id: 173,
        first: 'Преобразователь давления для малых диапазонов',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.4327',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967325.png?downsize=*:475px'
    },
    {
        id: 174,
        first: 'JUMO dTRANS p30',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.4366',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979587.png?downsize=*:475px'
    },
    {
        id: 175,
        first: 'JUMO 4 ADM-35',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.4450',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294974089.png?downsize=*:475px'
    },
    {
        id: 176,
        first: 'Температурный зонд',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.4452',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28701.png?downsize=*:475px'
    },
    {
        id: 177,
        first: 'JUMO DELOS SI',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип: 40.5052',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986646.png?downsize=*:475px'
    },
    {
        id: 178,
        first: 'JUMO MIDAS C08',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.1002',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294979614.png?downsize=*:475px'
    },
    {
        id: 179,
        first: 'JUMO MIDAS S05',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.1010',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294982268.png?downsize=*:475px'
    },
    {
        id: 180,
        first: 'Многодиапазонный преобразователь давления',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.2005',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294978184.png?downsize=*:475px'
    },
    {
        id: 181,
        first: 'Показывающий преобразователь давления',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.4312',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28699.png?downsize=*:475px'
    },
    {
        id: 182,
        first: 'JUMO MIDAS С18 SW',
        second: 'Преобразователи давления аналоговые',
        link: '/davlenie',
        type: 'Тип:40.1012',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294980741.png?downsize=*:475px'
    },
    {
        id: 183,
        first: 'JUMO dTRANS p02',
        second: 'Преобразователи давления интеллектуальные',
        link: '/davlenie',
        type: 'Тип:40.4385',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987670.png?downsize=*:475px'
    },
    {
        id: 184,
        first: 'JUMO dTRANS p02 KERAMIK',
        second: 'Преобразователи давления интеллектуальные',
        link: '/davlenie',
        type: 'Тип:40.4387',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294967887.png?downsize=*:475px'
    },
    {
        id: 185,
        first: 'JUMO dTRANS p20',
        second: 'Преобразователи давления интеллектуальные',
        link: '/davlenie',
        type: 'Тип:40.3025',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294976989.png?downsize=*:475px'
    },
    {
        id: 186,
        first: 'JUMO dTRANS p20 Ex d',
        second: 'Преобразователи давления интеллектуальные',
        link: '/davlenie',
        type: 'Тип:40.3026',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294983342.png?downsize=*:475px'
    },
    {
        id: 187,
        first: 'JUMO dTRANS p02 DELTA',
        second: 'Преобразователи давления интеллектуальные',
        link: '/davlenie',
        type: 'Тип:40.4382',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987380.png?downsize=*:475px'
    },
    {
        id: 188,
        first: 'JUMO dTRANS p20 DELTA',
        second: 'Преобразователи давления интеллектуальные',
        link: '/davlenie',
        type: 'Тип:40.3022',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294981188.png?downsize=*:475px'
    },
    {
        id: 189,
        first: 'Маностат',
        second: ' Реле давления',
        link: '/davlenie',
        type: 'Тип:40.4201',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294973228.png?downsize=*:475px'
    },
    {
        id: 190,
        first: 'JUMO DELOS SI',
        second: ' Реле давления',
        link: '/davlenie',
        type: 'Тип:40.5052',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294986646.png?downsize=*:475px'
    },
    {
        id: 191,
        first: 'Манометры из нержавеющей стали',
        second: 'Манометры',
        link: '/davlenie',
        type: 'Тип:40.4110',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28699.png?downsize=*:475px'
    },
    {
        id: 192,
        first: 'Преобразователь давления с индикацией',
        second: 'Манометры',
        link: '/davlenie',
        type: 'Тип:40.4312',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28699.png?downsize=*:475px'
    },
    {
        id: 193,
        first: 'JUMO PEKA',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9711',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294977681.png?downsize=*:475px'
    },
    {
        id: 194,
        first: 'Мембранный разделитель',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9772',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28704.png?downsize=*:475px'
    },
    {
        id: 195,
        first: 'Мембранный разделитель',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9774',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28705.png?downsize=*:475px'
    },
    {
        id: 196,
        first: 'Мембранный разделитель',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9776',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28707.png?downsize=*:475px'
    },
    {
        id: 197,
        first: 'Мембранный разделитель',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип: 40.9778',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28711.png?downsize=*:475px'
    },
    {
        id: 198,
        first: 'Мембранный разделитель',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9784',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28708.png?downsize=*:475px'
    },
    {
        id: 199,
        first: 'Мембранный разделитель',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9786',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28709.png?downsize=*:475px'
    },
    {
        id: 200,
        first: 'Принадлежности для средств измерения давления',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9700',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28707.png?downsize=*:475px'
    },
    {
        id: 201,
        first: 'Вентильные блоки',
        second: 'Давление: Принадлежности',
        link: '/davlenie',
        type: 'Тип:40.9706',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995824.png?downsize=*:475px'
    },
    {
        id: 202,
        first: 'dira VIEW 104/108/116/132',
        second: 'Индикаторы',
        link: '/indicatory',
        type: 'Тип:70.1510',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294994602.png?downsize=*:475px'
    },
    {
        id: 203,
        first: 'diraTRON 104/108/116/132',
        second: 'Индикаторы',
        link: '/indicatory',
        type: 'Тип:70.2110',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294994574.png?downsize=*:475px'
    },
    {
        id: 204,
        first: 'DICON touch',
        second: 'Регуляторы',
        link: '/regulyatory',
        type: 'Тип:70.3571',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294987239.png?downsize=*:475px'
    },
    {
        id: 205,
        first: 'JUMO LOGOSCREEN 600',
        second: 'Регистраторы',
        link: '/registratory',
        type: 'Тип:70.6520',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294988939.png?downsize=*:475px'
    },
    {
        id: 206,
        first: 'JUMO LOGOSCREEN 601',
        second: 'Регистраторы',
        link: '/registratory',
        type: 'Тип:70.6521',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294996612.png?downsize=*:475px'
    },
    {
        id: 207,
        first: 'JUMO LOGOSCREEN 700',
        second: 'Регистраторы',
        link: '/registratory',
        type: 'Тип:70.6530',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO-pictures/4294995814.png?downsize=*:475px'
    },
    {
        id: 208,
        first: 'JUMO dTRANS T07',
        second: 'Температурные преобразователи',
        link: '/tp',
        type: 'Тип:70.7080',
        imgSrc: 'https://content-us-7.content-cms.com/e06fbe62-9b29-495e-977f-be1ceb82e8f8/dxdam/cumulusAssets/JUMO/28743.png?downsize=*:475px'
    },

   
]


function searchingFor(term) {
    return function (x) {
        return x.first.toLowerCase().includes(term.toLowerCase()) || x.second.toLowerCase().includes(term.toLowerCase()) ||
            x.type.toLowerCase().includes(term.toLowerCase()) || !term;
        
    }
}


class ProductPage extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            product: product, 
            item: '',

        }
        
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event) {
        this.setState({ item: event.target.value })
    }
    
    render(){
        const { item, product } = this.state;
    
    return (
        <div >
            <ScrollToTop smooth />
                <Container fluid={false}>
                <CardDeck style={{width:"100%"}}>
                    
                        <div style={{top:"0"}}>
                  <SideBar/>
                    </div>
                
                    <Card ml="auto" style={{
                        backgroundColor: "rgba(0,0,0,0)",
                        borderColor: "rgba(0,0,0,0)",marginBottom:"2rem"}}>
                  
                        <h1 style={{ textAlign: "center", color: "#233048",marginTop:"2rem" }}>Все товары</h1>
                            
                        <InputGroup className="mt-3" style={{ marginTop: "2rem", marginBottom: "2rem" }} 
                        type="text" id="input" onChange={this.searchHandler} value={item}>
                            <FormControl style={{ borderColor: "#50e3c2" }}
                                placeholder="Найти товар" 
                                
                            />
                           
                            <InputGroup.Append>
                                <Button style={{ color: "#203367", backgroundColor: "#50e3c2", borderColor:"#50e3c2"}}
                                    onChange={this.searchHandler}>Поиск</Button>
                            </InputGroup.Append>
                        </InputGroup>

                         
                        <ListGroup style={{ border: "1px solid #203367"}} >
                            <ListGroup.Item > 
                                {product.filter(searchingFor(item)).map(product =>
                                    <div key={product.id}>
                             
                                    <Row>
                                       <Col>
                                      <Image style={{width:"100px",height:"100px"}} 
                                                 alt="Image"   src={product.imgSrc}/>
                                        </Col>
                                        <Col>
                                                <h4 style={{ color: "#203367" }}>{product.second}</h4>
                                                <h5 style={{ color: "#203367" }}>{product.first}</h5>
                                                <h5 style={{color:"#203367"}}>{product.type}</h5>
                                                
                                                <br></br>
                                                <br></br>
                                                
                                        </Col>
                                        
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col>
                                        </Col>
                                            
                                            <Col></Col>
                                            <Col >
                                                <Link to={product.link} >   <Button style={{
                                                    color: "#203367", backgroundColor: "#50e3c2", borderColor: "#50e3c2",
                                                    width: "100px", fontSize: "12px"
                                                }}>
                                                    Подробнее</Button></Link>
                                            </Col>
                                    </Row>
                                        <hr style={{ border: "0.5px solid #203367" }} /> 
                                    </div>
                                )
                               }
                                 </ListGroup.Item>
                         
                        </ListGroup>
                    </Card>
                </CardDeck>
                
            </Container>
           
        </div>
    );
    }
};

export default ProductPage;