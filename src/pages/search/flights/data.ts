import { FliterListItemType } from "../../../types";

export const fliterList: FliterListItemType[] = [
  {
    id: 1,
    title: "محدوده قیمت",
    type: "range",
    items: null,
    min: 2000000,
    max: 30000000,
  },
  {
    id: 2,
    title: "تعداد توقف",
    type: "checkbox",
    items: [
      {
        id: 1000,
        text1: "بدون توقف",
        text2: null,
        value: 0,
      },
      {
        id: 1001,
        text1: "یک توقف",
        text2: null,
        value: 1,
      },
      {
        id: 1002,
        text1: "بیش از ۲ توقف",
        text2: null,
        value: 2,
      },
    ],
    min: null,
    max: null,
  },
  {
    id: 3,
    title: "زمان حرکت",
    type: "checkbox",
    items: [
      {
        id: 1003,
        text1: "صبح",
        text2: "00 - 12",
        value: 1,
      },
      {
        id: 1004,
        text1: "عصر",
        text2: "12 - 18",
        value: 2,
      },
      {
        id: 1005,
        text1: "شب",
        text2: "18 - 00",
        value: 3,
      },
    ],
    min: null,
    max: null,
  },
  {
    id: 4,
    title: "کلاس پروازی",
    type: "checkbox",
    items: [
      {
        id: 1006,
        text1: "اکونومی",
        text2: null,
        value: 1,
      },
      {
        id: 1007,
        text1: "بیزینس",
        text2: null,
        value: 2,
      },
    ],
    min: null,
    max: null,
  },
  {
    id: 5,
    title: "نوع پرواز",
    type: "checkbox",
    items: [
      {
        id: 1008,
        text1: "پروازهای سیستمی",
        text2: null,
        value: 1,
      },
      {
        id: 1009,
        text1: "پروازهای چارتری",
        text2: null,
        value: 2,
      },
    ],
    min: null,
    max: null,
  },
  {
    id: 6,
    title: "ایرلاین ها",
    type: "checkbox",
    items: [
      {
        id: 1010,
        text1: "ماهان",
        text2: null,
        value: 1,
      },
      {
        id: 1011,
        text1: "آلیتالیا",
        text2: null,
        value: 2,
      },
      {
        id: 1012,
        text1: "لوفت‌هانزا",
        text2: null,
        value: 3,
      },
    ],
    min: null,
    max: null,
  },
];

export const sortList = [
  {
    id: 1,
    title: "ارزان‌ترین",
    value: "price-asc",
  },
  {
    id: 2,
    title: "گران‌ترین",
    value: "price-des",
  },
  {
    id: 3,
    title: "زودترین",
    value: "time-asc",
  },
  {
    id: 4,
    title: "دیرترین",
    value: "time-des",
  },
];
