import Box from "../../Components/Box/Box";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import Input from "../../Components/Input/Input";
import React, {useState} from "react";
import {countries as userCountries} from "../../Utils/Users";

const languages = [
    {id: 1, title: 'انگلیسی'},
    {id: 2, title: 'ایتالیایی'},
    {id: 3, title: 'فرانسوی'},
    {id: 4, title: 'پرتغالی'},
]

const currencyUnit = [
    {id: 1, title: 'دلار'},
    {id: 2, title: 'یورو'},
    {id: 3, title: 'پوند'},
    {id: 4, title: 'بیتکوین'},
]

const timeZone = [
    {id: 1, title: '(GMT-12:00) خط زمانی بین المللی غربی'},
    {id: 2, title: '(GMT-09:00) آلاسکا'},
    {id: 3, title: '(GMT-11:00) جزیره میدوی'},
    {id: 4, title: '(GMT-10:00) هاوایی'},
    {id: 5, title: '(GMT-08:00) آمریکا و کانادا'},
    {id: 6, title: '(GMT-08:00) کالیفرنیا'},
    {id: 7, title: '(GMT-07:00) آریزونا'},
]


export default function Account() {
    const [countries, setCountries] = useState(userCountries)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [showCountries, setShowCountries] = useState(false)

    const [selectedLanguage, setSelectedLanguage] = useState(null)
    const [showLanguages, setShowLanguages] = useState(false)

    const [selectedUnit, setSelectedUnit] = useState(null)
    const [showUnits, setShowUnits] = useState(false)

    const [selectedTimeZone, setSelectedTimeZone] = useState(null)
    const [showTimeZone, setShowTimeZone] = useState(false)


    return (
        <div>
            <div className='bg-white rounded shadow shadow-black/10'>
                {/*  Account Header  */}
                <div className='border-b border-zinc p-[22px]'>
                    <h3 className='text-lg font-Estedad-Medium text-title'>
                        جزئیات پروفایل
                    </h3>
                    <div className='flex items-center gap-6 pt-[22px]'>
                        <div className='w-[100px] h-[100px] flex items-center justify-center rounded overflow-hidden'>
                            <img className='w-full h-full object-cover' src="/images/avatars/1.png" alt="user image"/>
                        </div>
                        <div className='flex flex-col items-start gap-6'>
                            <div className='flex gap-3'>
                                <PrimaryButton titleClassName='hidden md:inline' icon='BiUpload' iconClassName='md:hidden' title='ارسال تصویر جدید'/>
                                <SecondaryButton titleClassName='hidden md:inline' icon='BiReset' iconClassName='md:hidden' title='بازنشانی'/>
                            </div>
                            <span className='font-IranYekan-Medium text-2sm'>
                             فایل‌های JPG، GIF یا PNG مجاز هستند. حداکثر اندازه فایل 800KB.
                         </span>
                        </div>
                    </div>
                </div>
                {/*  Account User Infos  */}
                <div className='p-[22px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <Input type='text' placeholder='جان' label='نام'/>
                        <Input type='text' placeholder='اسنو' label='نام خانوادگی'/>
                        <Input type='text' placeholder='john.doe@example.com' label='ایمیل'/>
                        <Input type='text' placeholder='مایکروسافت' label='سازمان'/>
                        <Input type='text' placeholder='202 555 0111' label='شماره تلفن'/>
                        <Input type='text' placeholder='آدرس' label='آدرس'/>
                        <Input type='text' placeholder='آذربایجان شرقی' label='استان'/>
                        <Input type='text' placeholder='395467234' label='کدپستی'/>
                        <Input className='!shrink-0'
                               label='کشور'
                               setShowContent={setShowCountries} showContent={showCountries}
                               type='selectbox'
                               placeholder={selectedCountry !== null ? selectedCountry.title : 'انتخاب کشور'}>
                            <ul className='bg-white flex flex-col rounded-b h-[180px] overflow-auto child:shrink-0'>
                                <li onClick={() => {
                                    setSelectedCountry(null)
                                    setShowCountries(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب</span>
                                </li>
                                {
                                    countries.map(country => (
                                        <li key={country.id} onClick={() => {
                                            setSelectedCountry(country)
                                            setShowCountries(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{country.name}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                        <Input className='!shrink-0'
                               label='زبان'
                               setShowContent={setShowLanguages} showContent={showLanguages}
                               type='selectbox'
                               placeholder={selectedLanguage !== null ? selectedLanguage.title : 'انتخاب زبان'}>
                            <ul className='bg-white flex flex-col rounded-b child:shrink-0'>
                                <li onClick={() => {
                                    setSelectedLanguage(null)
                                    setShowLanguages(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب</span>
                                </li>
                                {
                                    languages.map(language => (
                                        <li key={language.id} onClick={() => {
                                            setSelectedLanguage(language)
                                            setShowLanguages(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{language.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                        <Input className='!shrink-0'
                               label='ناحیه زمانی'
                               setShowContent={setShowTimeZone} showContent={showTimeZone}
                               type='selectbox'
                               placeholder={selectedTimeZone !== null ? selectedTimeZone.title : 'انتخاب ناحیه زمانی'}>
                            <ul className='bg-white flex flex-col rounded-b child:shrink-0'>
                                <li onClick={() => {
                                    setSelectedTimeZone(null)
                                    setShowTimeZone(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب ناحیه زمانی</span>
                                </li>
                                {
                                    timeZone.map(item => (
                                        <li key={item.id} onClick={() => {
                                            setSelectedTimeZone(item)
                                            setShowTimeZone(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{item.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                        <Input className='!shrink-0'
                               label='واحد پولی'
                               setShowContent={setShowUnits} showContent={showUnits}
                               type='selectbox'
                               placeholder={selectedUnit !== null ? selectedUnit.title : 'انتخاب واحد پول'}>
                            <ul className='bg-white flex flex-col rounded-b child:shrink-0'>
                                <li onClick={() => {
                                    setSelectedUnit(null)
                                    setShowUnits(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب</span>
                                </li>
                                {
                                    currencyUnit.map(item => (
                                        <li key={item.id} onClick={() => {
                                            setSelectedUnit(item)
                                            setShowUnits(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{item.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <PrimaryButton className='!w-auto' title='ذخیره تغییرات'/>
                        <SecondaryButton title='انصراف'/>
                    </div>
                </div>
            </div>
            {/*  Account Footer  */}
            <Box className='mt-6'>
                <div>
                    <h3 className='text-lg font-Estedad-Medium text-title mb-[22px]'>
                        حذف حساب
                    </h3>
                    <div className='px-5 py-3 rounded bg-orange/10 font-IranYekan-Medium text-2sm text-yellow flex flex-col items-start gap-1 leading-[30px] mb-4'>
                        <span>
                            آیا از حذف حساب خود اطمینان دارید؟
                        </span>
                        <p>
                            در صورتی که حساب خود را حذف کنید، بازگشتی وجود نخواهد داشت. لطفا مطمئن باشید.
                        </p>
                    </div>
                    <Input className='!flex-row-reverse justify-end !items-center' labelClassName='!font-IranYekan-Medium !text-2sm' type='checkbox' label='من غیرفعال کردن حساب خود را تایید می‌کنم'/>

                    <PrimaryButton className='!bg-red !w-auto mt-4' title='غیرفعال کردن حساب'/>
                </div>
            </Box>
        </div>
    )
}