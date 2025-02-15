export let users = [
    {
        id: 1,
        firstName: 'استیو',
        lastName: 'راجرز',
        email: 'stive@gmail.com',
        role: 'نویسنده', // نویسنده - ویرایشگر - نگهدارنده - مشترک
        project: 'تیم', // تیم - شرکتی - پایه - سازمانی
        invoice: 'دستی - پی پال', // پرداخت خودکار - دستی - کارت ارتباطی - دستی پی پال
        status: 0,   // 0 => در انتظار 1 => فعال -1 => غیر فعال,
        img: '/images/avatars/1.png'
    },
    {
        id: 2,
        firstName: 'املیا',
        lastName: 'کلارک',
        email: 'emilia@gmail.com',
        role: 'ویرایشگر',
        project: 'پایه',
        invoice: 'دستی - پی پال',
        status: -1,
        img: '/images/avatars/2.png'
    },
    {
        id: 3,
        firstName: 'جان',
        lastName: 'اسنو',
        email: 'john@gmail.com',
        role: 'نگهدارنده',
        project: 'سازمانی',
        invoice: 'کارت ارعتباری',
        status: 0,
        img: '/images/avatars/4.png'
    },
    {
        id: 4,
        firstName: 'ایلان',
        lastName: 'ماسک',
        email: 'elan@gmail.com',
        role: 'ویرایشگر',
        project: 'شرکتی',
        invoice: 'پرداخت خودکار',
        status: 1,
        img: '/images/avatars/5.png'
    },
    {
        id: 5,
        firstName: 'بروس',
        lastName: 'وین',
        email: 'bros@gmail.com',
        role: 'نویسنده',
        project: 'سازمانی',
        invoice: 'دستی - پی پال',
        status: -1,
        img: '/images/avatars/6.png'
    },
    {
        id: 6,
        firstName: 'برد',
        lastName: 'پیت',
        email: 'brad@gmail.com',
        role: 'نگهدارنده',
        project: 'پایه',
        invoice: 'پرداخت خودکار',
        status: 1,
        img: '/images/avatars/9.png'
    },
    {
        id: 7,
        firstName: 'استیو',
        lastName: 'راجرز',
        email: 'stive@gmail.com',
        role: 'نویسنده', // نویسنده - ویرایشگر - نگهدارنده - مشترک
        project: 'تیم', // تیم - شرکتی - پایه - سازمانی
        invoice: 'دستی - پی پال', // پرداخت خودکار - دستی - کارت ارتباطی - دستی پی پال
        status: 0,   // 0 => در انتظار 1 => فعال -1 => غیر فعال,
        img: '/images/avatars/10.png'
    },
    {
        id: 8,
        firstName: 'املیا',
        lastName: 'کلارک',
        email: 'emilia@gmail.com',
        role: 'ویرایشگر',
        project: 'پایه',
        invoice: 'دستی - پی پال',
        status: -1,
        img: '/images/avatars/12.png'
    },
    {
        id: 9,
        firstName: 'جان',
        lastName: 'اسنو',
        email: 'john@gmail.com',
        role: 'نگهدارنده',
        project: 'سازمانی',
        invoice: 'کارت ارعتباری',
        status: -1,
        img: '/images/avatars/14.png'
    },
    {
        id: 10,
        firstName: 'جان',
        lastName: 'اسنو',
        email: 'john@gmail.com',
        role: 'نگهدارنده',
        project: 'سازمانی',
        invoice: 'کارت ارعتباری',
        status: 1,
        img: '/images/avatars/1.png'
    },
]
export let countries = [
    {id: 1, name: 'ایران'},
    {id: 2, name: 'آلمان'},
    {id: 3, name: 'فرانسه'},
    {id: 4, name: 'ایتالیا'},
    {id: 5, name: 'انگلیس'},
    {id: 6, name: 'آمریکا'},
    {id: 7, name: 'آرژانتین'},
    {id: 8, name: 'برزیل'},
    {id: 9, name: 'سوییس'},
    {id: 10, name: 'ترکیه'},
    {id: 11, name: 'امارات'},
    {id: 12, name: 'عربستان'},
    {id: 13, name: 'کانادا'},
    {id: 14, name: 'اسپانیا'},
    {id: 15, name: 'پرتغال'},
    {id: 16, name: 'نیجریه'},
    {id: 17, name: 'قزاقستان'},
    {id: 18, name: 'روسیه'},
    {id: 19, name: 'هلند'},
    {id: 20, name: 'اتریش'},
]
export let roles = [
    {id: 1, name: 'نویسنده'},
    {id: 2, name: 'نگهدارنده'},
    {id: 3, name: 'ویرایشگر'},
]

export let plans = [
    {id: 1, name: 'تیم'},
    {id: 2, name: 'سازمانی'},
    {id: 3, name: 'شرکتی'},
    {id: 4, name: 'پایه'},
]

export let statuses = [
    -1, 0, 1
]

export let images = [
    '/images/avatars/1.png',
    '/images/avatars/2.png',
    '/images/avatars/4.png',
    '/images/avatars/5.png',
    '/images/avatars/6.png',
    '/images/avatars/9.png',
    '/images/avatars/10.png',
    '/images/avatars/12.png',
    '/images/avatars/14.png',
]

export let invoices = [
    'دستی - پی پال',
    'پرداخت خودکار',
    'دستی - کارت اعتباری',
    'دستی - نقدی',
]