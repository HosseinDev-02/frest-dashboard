import Box from "../../Components/Box/Box";
import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import React, {useState} from "react";
import ApiBox from "../../Components/ApiBox/ApiBox";
import {BiLogoAndroid, BiLogoApple, BiLogoWindows, BiMobileAlt, BiWindows} from "react-icons/bi";

export default function Security() {

    const [apiList, setApiList] = useState([
        {
            id: 1,
            title: 'کنترل کامل'
        },
        {
            id: 2,
            title: 'ویرایش'
        },
        {
            id: 3,
            title: 'خواندن و اجرا'
        },
        {
            id: 4,
            title: 'لیست کردن محتویات پوشه'
        },
        {
            id: 5,
            title: 'فقط خواندن'
        },
        {
            id: 6,
            title: 'خواندن و نوشتن'
        },
    ])
    const [showApiList, setShowApiList] = useState(false)
    const [selectedApi, setSelectedApi] = useState(null)

    return (
        <div>
            {/*  Reset Password Section  */}
            <Box>
                <h3 className='font-Estedad-Medium text-title text-lg mb-[22px]'>
                    تغییر رمز
                </h3>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='md:w-1/2 pl-3'>
                        <Input label='رمز عبور کنونی' type='password' placeholder='...........'/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6'>
                        <Input label='رمز عبور جدید' type='password' placeholder='...........'/>
                        <Input label='تکرار رمز عبور جدید' type='password' placeholder='...........'/>
                    </div>
                </div>
                <div className='pt-6'>
                    <h5 className='text-2sm font-IranYekan-Medium mb-4 leading-[30px]'>
                        الزامات رمز عبور
                    </h5>
                    <ul className='flex flex-col items-start gap-3'>
                        <li className='flex items-center gap-3 font-IranYekan-Medium text-2sm'>
                            <span className='w-1.5 h-1.5 rounded-full bg-caption'></span>
                            <span>حداقل 8 کاراکتر - هرچه بیشتر، بهتر</span>
                        </li>
                        <li className='flex items-center gap-3 font-IranYekan-Medium text-2sm'>
                            <span className='w-1.5 h-1.5 rounded-full bg-caption'></span>
                            <span>حداقل یک کاراکتر با حرف کوچک</span>
                        </li>
                        <li className='flex items-center gap-3 font-IranYekan-Medium text-2sm'>
                            <span className='w-1.5 h-1.5 rounded-full bg-caption'></span>
                            <span>حداقل یک عدد، نماد یا کاراکتر فاصله</span>
                        </li>
                    </ul>
                </div>
                <div className='flex gap-3 mt-6'>
                    <PrimaryButton className='!w-auto' title='ذخیره تغییرات'/>
                    <SecondaryButton className='' title='انصراف'/>
                </div>
            </Box>
            {/*  Two-Step Verification Section  */}
            <Box className='mt-6'>
                <div className='font-IranYekan-Medium text-2sm'>
                    <h3 className='font-Estedad-Medium text-title text-lg mb-[22px]'>
                        تایید دو مرحله ای
                    </h3>
                    <div className='flex flex-col items-start gap-6'>
                        <span className='text-title'>
                        احراز هویت دو مرحله‌ای هنوز فعال نشده.
                    </span>
                        <p className=''>
                            احراز هویت دو مرحله‌ای یک لایه امنیتی بیشتر با الزام به وارد کردن بیش از یک رمز عبور برای
                            ورود به حساب شما اضافه میکند. <a className='text-blue'
                                                             href="#">آشنایی بیشتر.</a>
                        </p>
                        <PrimaryButton className='!w-auto' title='فعال سازی احراز هویت دو مرحله ای'/>
                    </div>
                </div>
            </Box>
            {/*  API Generation Section  */}
            <Box className='mt-6'>
                <h3 className='font-Estedad-Medium text-title text-lg mb-[22px]'>
                    ایجاد یک کلید API
                </h3>
                <div className='flex flex-col-reverse gap-y-6 items-center md:flex-row md:items-end'>
                    <div className='md:basis-5/12 font-IranYekan-Medium text-2sm w-full md:w-auto'>
                        <div className='flex flex-col gap-6'>
                            <Input className='!shrink-0'
                                   label='نوع کلید API که می‌خواهید ایجاد کنید را انتخاب کنید'
                                   setShowContent={setShowApiList} showContent={showApiList}
                                   type='selectbox'
                                   placeholder={selectedApi !== null ? selectedApi.title : 'انتخاب کنید'}>
                                <ul className='bg-white flex flex-col rounded-b child:shrink-0 max-h-[180px] overflow-auto'>
                                    <li onClick={() => {
                                        setSelectedApi(null)
                                        setShowApiList(false)
                                    }}
                                        className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب کنید</span>
                                    </li>
                                    {
                                        apiList.map(api => (
                                            <li key={api.id} onClick={() => {
                                                setSelectedApi(api)
                                                setShowApiList(false)
                                            }}
                                                className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{api.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Input>
                            <Input label='نام کلید API را وارد کنید' placeholder='کلید سرور I' type='text'/>
                            <PrimaryButton title='ایجاد کنید'/>
                        </div>
                    </div>
                    <div className='md:basis-7/12 flex items-start justify-around w-full md:w-auto'>
                        <img className='max-w-[300px] w-full h-full object-cover' src="/images/boy-working-light.png" alt="image"/>
                    </div>
                </div>
            </Box>
            {/*  API List Section  */}
            <Box className='mt-6'>
                <div>
                    <div className='mb-4'>
                    <h3 className='font-Estedad-Medium text-title text-lg mb-[22px]'>
                            لیست کلید API و دسترسی
                        </h3>
                        <p className='font-IranYekan-Medium text-2sm'>
                            یک کلید API یک رشته رمزگذاری شده ساده است که یک برنامه را بدون هیچ گونه اصلی شناسایی می کند.
                            آنها برای دسترسی به داده های عمومی به صورت ناشناس مفید هستند و برای مرتبط کردن درخواست های
                            API با پروژه شما برای سهمیه و صورتحساب استفاده می شوند.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <ApiBox title='کلید سرور 1' apiKey='23eaf7f0-f4f7-495e-8b86-fad3261282ac' type='دسترسی کامل' createdAt='28 فروردین 1401, 18:20 GMT+4:10'/>
                        <ApiBox title='کلید سرور 2' apiKey='bb98e571-a2e2-4de8-90a9-2e231b5e99' type='فقط خواندنی' createdAt='12 اردیبهشت 1401, 10:30 GMT+2:30'/>
                        <ApiBox title='کلید سرور 3' apiKey='2e915e59-3105-47f2-8838-6e46bf83b711' type='دسترسی کامل' createdAt='28 اردیبهشت 1401, 12:21 GMT+4:10'/>
                    </div>
                </div>
            </Box>
            {/*  Last Devices Section  */}
            <div className='bg-white rounded shadow shadow-black/10 mt-6'>
                <div className='p-[22px]'>
                    <h3 className='font-Estedad-Medium text-title text-lg'>
                        دستگاه‌های اخیر
                    </h3>
                </div>
                <div className='overflow-auto w-full'>
                    <table
                        className='w-full font-IranYekan-Medium text-2sm text-title border-b border-zinc min-w-[800px] table-fixed'>
                        <thead className='text-xs'>
                        <tr className='child:px-6 child:py-3 text-right border-y border-zinc'>
                            <th className='w-4/12'>مرورگر</th>
                            <th className='w-3/12'>دستگاه</th>
                            <th className='w-2/12'>مکان</th>
                            <th className='w-3/12'>فعالیت های اخیر</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='child:px-6 child:py-3 border-b border-zinc'>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <BiLogoWindows size='18px' className='text-cyan'/>
                                    <span>کروم روی ویندوز</span>
                                </div>
                            </td>
                            <td>
                                HP Spectre 360
                            </td>
                            <td>
                                سوییس
                            </td>
                            <td>
                                10 فروردین 1401 - 20:07
                            </td>
                        </tr>
                        <tr className='child:px-6 child:py-3 border-b border-zinc'>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <BiMobileAlt size='18px' className='text-red'/>
                                    <span>کروم روی آیفون</span>
                                </div>
                            </td>
                            <td>
                                iPhone 12x
                            </td>
                            <td>
                                استرالیا
                            </td>
                            <td>
                                13 فروردین 1401 - 10:10
                            </td>
                        </tr>
                        <tr className='child:px-6 child:py-3 border-b border-zinc'>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <BiLogoAndroid size='18px' className='text-success'/>
                                    <span> کروم روی اندروید</span>
                                </div>
                            </td>
                            <td>
                                Oneplus 9 Pro
                            </td>
                            <td>
                                دوبی
                            </td>
                            <td>
                                14 فروردین 1401 - 15:27
                            </td>
                        </tr>
                        <tr className='child:px-6 child:py-3 border-b border-zinc'>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <BiLogoApple size='18px' className='text-secondary'/>
                                    <span>سافاری روی آیفون</span>
                                </div>
                            </td>
                            <td>
                                Apple iMac
                            </td>
                            <td>
                                هندوستان
                            </td>
                            <td>
                                15 فروردین 1401 - 16:17
                            </td>
                        </tr>
                        <tr className='child:px-6 child:py-3 border-b border-zinc'>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <BiLogoWindows size='18px' className='text-cyan'/>
                                    <span>کروم روی ویندوز</span>
                                </div>
                            </td>
                            <td>
                                HP Spectre 360
                            </td>
                            <td>
                                سوییس
                            </td>
                            <td>
                                10 فروردین 1401 - 20:07
                            </td>
                        </tr>
                        <tr className='child:px-6 child:py-3 border-b border-zinc'>
                            <td>
                                <div className='flex items-center gap-4'>
                                    <BiMobileAlt size='18px' className='text-red'/>
                                    <span>کروم روی آیفون</span>
                                </div>
                            </td>
                            <td>
                                iPhone 12x
                            </td>
                            <td>
                                استرالیا
                            </td>
                            <td>
                                13 فروردین 1401 - 10:10
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}