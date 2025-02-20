export const rules = [
    {
        id: 1,
        title: 'مدیر',
        userCount: 4,
        members: [
            '/images/avatars/1.png',
            '/images/avatars/4.png',
            '/images/avatars/9.png',
            '/images/avatars/10.png',
            '/images/avatars/12.png',
        ],
        ruleAccess: [
            {
                id: 1,
                title: 'مدیریت کاربر',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 2,
                title: 'مدیریت محتوا',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 3,
                title: 'مدیریت اختلافات',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 4,
                title: 'مدیریت پایگاه داده',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 5,
                title: 'مدیریت مالی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 6,
                title: 'گزارش نویسی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 7,
                title: 'کنترل API',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 8,
                title: 'مدیریت مخزن',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 9,
                title: 'حقوق و دستمزد',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        title: 'کاربر',
        userCount: 8,
        members: [
            '/images/avatars/4.png',
            '/images/avatars/5.png',
            '/images/avatars/6.png',
            '/images/avatars/10.png',
            '/images/avatars/14.png',
        ],
        ruleAccess: [
            {
                id: 1,
                title: 'مدیریت کاربر',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 2,
                title: 'مدیریت محتوا',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 3,
                title: 'مدیریت اختلافات',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 4,
                title: 'مدیریت پایگاه داده',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 5,
                title: 'مدیریت مالی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 6,
                title: 'گزارش نویسی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 7,
                title: 'کنترل API',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 8,
                title: 'مدیریت مخزن',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 9,
                title: 'حقوق و دستمزد',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        title: 'مدرس',
        userCount: 12,
        members: [
            '/images/avatars/5.png',
            '/images/avatars/4.png',
            '/images/avatars/9.png',
            '/images/avatars/2.png',
            '/images/avatars/1.png',
        ],
        ruleAccess: [
            {
                id: 1,
                title: 'مدیریت کاربر',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 2,
                title: 'مدیریت محتوا',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 3,
                title: 'مدیریت اختلافات',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 4,
                title: 'مدیریت پایگاه داده',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 5,
                title: 'مدیریت مالی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 6,
                title: 'گزارش نویسی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 7,
                title: 'کنترل API',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 8,
                title: 'مدیریت مخزن',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 9,
                title: 'حقوق و دستمزد',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
        ]
    },
    {
        id: 4,
        title: 'دانشجو',
        userCount: 22,
        members: [
            '/images/avatars/5.png',
            '/images/avatars/9.png',
            '/images/avatars/12.png',
            '/images/avatars/14.png',
            '/images/avatars/10.png',
        ],
        ruleAccess: [
            {
                id: 1,
                title: 'مدیریت کاربر',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 2,
                title: 'مدیریت محتوا',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 3,
                title: 'مدیریت اختلافات',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 4,
                title: 'مدیریت پایگاه داده',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 5,
                title: 'مدیریت مالی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 6,
                title: 'گزارش نویسی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 7,
                title: 'کنترل API',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 8,
                title: 'مدیریت مخزن',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 9,
                title: 'حقوق و دستمزد',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
        ]
    },
    {
        id: 5,
        title: 'ادمین',
        userCount: 9,
        members: [
            '/images/avatars/2.png',
            '/images/avatars/12.png',
            '/images/avatars/6.png',
            '/images/avatars/5.png',
            '/images/avatars/4.png',
        ],
        ruleAccess: [
            {
                id: 1,
                title: 'مدیریت کاربر',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 2,
                title: 'مدیریت محتوا',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 3,
                title: 'مدیریت اختلافات',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: true
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: true
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: true
                    },
                ]
            },
            {
                id: 4,
                title: 'مدیریت پایگاه داده',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 5,
                title: 'مدیریت مالی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 6,
                title: 'گزارش نویسی',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 7,
                title: 'کنترل API',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 8,
                title: 'مدیریت مخزن',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
            {
                id: 9,
                title: 'حقوق و دستمزد',
                accessLevel: [
                    {
                        id: 1,
                        title: 'خواندن',
                        status: false
                    },
                    {
                        id: 2,
                        title: 'نوشتن',
                        status: false
                    },
                    {
                        id: 3,
                        title: 'ایجاد کردن',
                        status: false
                    },
                ]
            },
        ]
    },
]
export const ruleAccess = [
    {
        id: 1,
        title: 'مدیریت کاربر',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 2,
        title: 'مدیریت محتوا',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 3,
        title: 'مدیریت اختلافات',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 4,
        title: 'مدیریت پایگاه داده',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 5,
        title: 'مدیریت مالی',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 6,
        title: 'گزارش نویسی',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 7,
        title: 'کنترل API',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 8,
        title: 'مدیریت مخزن',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
    {
        id: 9,
        title: 'حقوق و دستمزد',
        accessLevel: [
            {
                id: 1,
                title: 'خواندن',
                status: false
            },
            {
                id: 2,
                title: 'نوشتن',
                status: false
            },
            {
                id: 3,
                title: 'ایجاد کردن',
                status: false
            },
        ]
    },
]