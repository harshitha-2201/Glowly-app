import lipstick4 from '../../assets/lipstick/lip4.jpg'
import lipstick41 from '../../assets/lipstick/lip4.1.jpg'
import lipstick42 from '../../assets/lipstick/lip4.2.jpg'
import lipstick43 from '../../assets/lipstick/lip4.3.jpg'

import serem1 from '../../assets/serem/serem1.jpg'
import serem12 from '../../assets/serem/serem1.1.jpg'
import serem13 from '../../assets/serem/serem1.2.jpg'
import serem14 from '../../assets/serem/serem1.3.jpg'

import foundation1 from '../../assets/foundation/foundation1.jpg'
import foundation12 from '../../assets/foundation/foundation1.1.jpg'
import foundation13 from '../../assets/foundation/foundation1.2.jpg'


import moisturizer1 from '../../assets/moisturizer/moisturizer1.webp'
import moisturizer11 from '../../assets/moisturizer/moisturizer1.1.jpg'
import moisturizer12 from '../../assets/moisturizer/moisturizer1.2.jpg'


import foundation2 from '../../assets/foundation/foundation2.jpg'
import foundation21 from '../../assets/foundation/foundation2.1.jpg'
import foundation22 from '../../assets/foundation/foundation2.2.jpg'


import lipstick2 from '../../assets/lipstick/lip2.webp'
import lipstick21 from '../../assets/lipstick/lip2.1.jpg'
import lipstick22 from '../../assets/lipstick/lip2.2.jpg'

import serem2 from '../../assets/serem/serem2.jpg'
import serem21 from '../../assets/serem/serem2.1.jpg'
import serem22 from '../../assets/serem/serem2.2.jpg'

import moisturizer2 from '../../assets/moisturizer/moisturizer2.webp'
import moisturizer21 from '../../assets/moisturizer/moisturizer2.1.jpg'
import moisturizer22 from '../../assets/moisturizer/moisturizer2.2.jpg'


import foundation3 from '../../assets/foundation/foundation3.jpg'
import foundation31 from '../../assets/foundation/foundation3.1.jpg'
import foundation32 from '../../assets/foundation/foundation3.2.jpg'


import lipstick3 from '../../assets/lipstick/lip3.jpg'
import lipstick31 from '../../assets/lipstick/lip3.1.jpg'
import lipstick32 from '../../assets/lipstick/lip3.2.jpg'
import lipstick33 from '../../assets/lipstick/lip3.3.jpg'

import serem3 from '../../assets/serem/serem3.webp'
import serem31 from '../../assets/serem/serem3.1.jpg'
import serem32 from '../../assets/serem/serem3.2.jpg'

import moisturizer3 from '../../assets/moisturizer/moisturizer3.webp'
import moisturizer31 from '../../assets/moisturizer/moisturizer3.1.jpg'
import moisturizer32 from '../../assets/moisturizer/moisturizer3.2.jpg'


import foundation4 from '../../assets/foundation/foundation4.jpg'
import foundation41 from '../../assets/foundation/foundation4.1.jpg'
import foundation42 from '../../assets/foundation/foundation4.2.jpg'

import lipstick1 from '../../assets/lipstick/lip1.jpg'
import lipstick11 from '../../assets/lipstick/lip1.2.jpg'
import lipstick12 from '../../assets/lipstick/lip1.3.jpg'

import serem4 from '../../assets/serem/serem4.jpg'
import serem41 from '../../assets/serem/serem4.1.jpg'
import serem42 from '../../assets/serem/serem4.2.jpg'

import moisturizer4 from '../../assets/moisturizer/moisturizer4.jpg'
import moisturizer41 from '../../assets/moisturizer/moisturizer4.1.jpg'
import moisturizer42 from '../../assets/moisturizer/moisturizer4.2.jpg'


const images = [
    {
        id: 1,
        src: lipstick4,
        alt: "Image 1",
        title : "Matt-Lipstick",
        description : "Lipstick is makeup that makes your lips look darker",
        price : "$50",
        rating : "3",
        imageSlider :[
            {
               id : 1,
               src : lipstick41 ,
               alt : 'sliderIMage1',
            },
            {
                id : 2,
                src : lipstick42 ,
                alt : 'sliderIMage2',
             },
             {
                id : 3,
                src : lipstick43 ,
                alt : 'sliderIMage3',
             },
        ],
    },
    {
        id: 2,
        src: serem1,
        alt: "Image 1",
        title : "Serem",
        description : "skincare product that is designed to deliver highly concentrated active ingredients to the skin",
        price : "$12",
        rating : "4",
        imageSlider :[
            {
               id : 1,
               src : serem12 ,
               alt : 'sliderIMage1',
            },
            {
                id : 2,
                src : serem13 ,
                alt : 'sliderIMage2',
             },
             {
                id : 3,
                src : serem14 ,
                alt : 'sliderIMage3',
             },
        ],

    },
    {
      id: 3,
      src: foundation1,
      alt: "Image 1",
      title : "foundation",
      description : "the act of founding, setting up, establishing",
      price : "$20",
      rating : "2",

      imageSlider :[
          {
             id : 1,
             src : foundation12 ,
             alt : 'sliderIMage1',
          },
          {
              id : 2,
              src : foundation13 ,
              alt : 'sliderIMage2',
           },
       ],  
    },

{
    id: 4,
    src: moisturizer1,
    alt: "Image 1",
    title : "Moisturizer",
    description : "evidence that one moisturizer is better than another. Moisturisers can improve skin comfort ",
    price : "$30",
    rating : "4",

    imageSlider :[
        {
           id : 1,
           src : moisturizer11 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : moisturizer12 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 5,
    src: foundation2,
    alt: "Image 1",
    title : "foundation",
    description : "the act of founding, setting up, establishing,",
    price : "$25",
    rating : "3",

    imageSlider :[
        {
           id : 1,
           src : foundation21 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : foundation22 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 6,
    src: lipstick2,
    alt: "Image 1",
    title : "lipstick",
    description : "Lipstick is makeup that makes your lips look darker, redder, or shinier.",
    price : "$20",
    rating : "5",

    imageSlider :[
        {
           id : 1,
           src : lipstick21 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : lipstick22 ,
            alt : 'sliderIMage2',
         },

    ],
},
{
    id: 7,
    src: serem2,
    alt: "Image 1",
    title : "serem",
    description : "skincare product that is designed to deliver highly concentrated active ingredients to the skin.",
    price : "$5",
    rating : "3",

    imageSlider :[
        {
           id : 1,
           src : serem21 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : serem22 ,
            alt : 'sliderIMage2',
         },

    ],
},
{
    id: 8,
    src: moisturizer2,
    alt: "Image 1",
    title : "moisturizer",
    description : "evidence that one moisturizer is better than another. Moisturisers ",
    price : "$12",
    rating : "5",

    imageSlider :[
        {
           id : 1,
           src : moisturizer21 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : moisturizer22 ,
            alt : 'sliderIMage2',
         },

    ],
},
{
    id: 9,
    src: foundation3,
    alt: "Image 1",
    title : "foundation",
    description : "the act of founding, setting up, establishing,",
    price : "$50",
    rating : "3",

    imageSlider :[
        {
           id : 1,
           src : foundation31 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : foundation32 ,
            alt : 'sliderIMage2',
         },

    ],
},
{
    id: 10,
    src: lipstick3,
    alt: "Image 1",
    title : "lipstick",
    description : "Lipstick is makeup that makes your lips look darker, redder, or shinier.",
    price : "$24",
    rating : "2",

    imageSlider :[
        {
           id : 1,
           src : lipstick31 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : lipstick32 ,
            alt : 'sliderIMage2',
         },
         {
            id : 3,
            src : lipstick33 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 11,
    src: serem3,
    alt: "Image 1",
    title : "serem",
    description : "skincare product that is designed to deliver highly concentrated active ingredients to the skin.",
    price : "$8",
    rating : "2",

    imageSlider :[
        {
           id : 1,
           src : serem31 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : serem32 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 12,
    src: moisturizer3,
    alt: "Image 1",
    title : "moisturizer",
    description : "evidence that one moisturizer is better than another. Moisturisers ",
    price : "$30",
    rating : "4",

    imageSlider :[
        {
           id : 1,
           src : moisturizer31 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : moisturizer32 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 13,
    src: foundation4,
    alt: "Image 1",
    title : "foundation",
    description : "the act of founding, setting up, establishing,",
    price : "$12",
    rating : "4",

    imageSlider :[
        {
           id : 1,
           src : foundation41 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : foundation42 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 14,
    src: lipstick1,
    alt: "Image 1",
    title : "lipstick",
    description : "Lipstick is makeup that makes your lips look darker, redder, or shinier.",
    price : "$30",
    rating : "3",

    imageSlider :[
        {
           id : 1,
           src : lipstick11 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : lipstick12 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 15,
    src: serem4,
    alt: "Image 1",
    title : "serem4",
    description : "skincare product that is designed to deliver highly concentrated active ingredients to the skin.",
    price : "$15",
    rating : "5",

    imageSlider :[
        {
           id : 1,
           src : serem41 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : serem42 ,
            alt : 'sliderIMage2',
         },
    ],
},
{
    id: 16,
    src: moisturizer4,
    alt: "Image 1",
    title : "moisturizer4",
    description : "evidence that one moisturizer is better than another. Moisturisers ",
    price : "$10",
    rating : "2",

    imageSlider :[
        {
           id : 1,
           src : moisturizer41 ,
           alt : 'sliderIMage1',
        },
        {
            id : 2,
            src : moisturizer42 ,
            alt : 'sliderIMage2',
         },
    ],
},













  ];

  export default images