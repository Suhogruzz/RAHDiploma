// socials contact data
export const ContactsData = {
  phone: '+7 495 79 03 5 03',
  workdays: [
    {
      day: 'Ежедневно',
      hoursFrom: '09-00',
      hoursTo: '21-00',
    },
  ],
  email: 'office@bosanoga.ru',
  social: [
    {
      name: 'twitter',
      link: '/',
      img: '/img/socials/twitter.png',
    }, {
      name: 'vk',
      link: '/',
      img: '/img/socials/vk.png',
    }, {
      name: 'facebook',
      link: '/',
      img: '/img/socials/fb.png',
    },
  ],
};

// nav menu image and links
export const MenuData = {
  home: {
    img: '/img/header-logo.png',
    link: '/',
    title: 'Bosa Noga',
  },
  menuItems: [
    {
      id: 1,
      link: '/',
      title: 'Главная',
    }, {
      id: 2,
      link: '/catalog',
      title: 'Каталог',
    }, {
      id: 3,
      link: '/about',
      title: 'О магазине',
    }, {
      id: 4,
      link: '/contacts',
      title: 'Контакты',
    },
  ],
};

// payment options and logos in footer
export const PayData = [
  {
    id: 1,
    name: 'paypal',
    title: 'PayPal',
    img: '/img/payinfo/paypal.png',
  }, {
    id: 2,
    name: 'master-card',
    title: 'Master Card',
    img: '/img/payinfo/mastercard.png',
  }, {
    id: 3,
    name: 'visa',
    title: 'Visa',
    img: '/img/payinfo/visa.png',
  }, {
    id: 4,
    name: 'yandex',
    title: 'Яндекс.Кошелек',
    img: '/img/payinfo/yandex.png',
  }, {
    id: 5,
    name: 'webmoney',
    title: 'Web-Money',
    img: '/img/payinfo/webmoney.png',
  }, {
    id: 1,
    name: 'qiwi',
    title: 'QIWI',
    img: '/img/payinfo/qiwi.png',
  },
];

// api URLs for reducers
export const reducerNames = {
  reducersListData: [
    {
      name: 'topSales',
      url: 'api/top-sales',
    }, {
      name: 'categories',
      url: 'api/categories',
    }, {
      name: 'items',
      url: 'api/items',
    },
  ],

  reducersItemData: [
    {
      name: 'itemDetails',
      url: 'api/items/',
    },
  ],

  storageData: [
    {
      name: 'storage_cart',
      url: '',
    },
  ],

  postData: [
    {
      name: 'post_cart',
      url: 'api/order',
    },
  ],
};

// LocalHost URL
export const URL = {
  server: 'http://localhost:7070/',
};
