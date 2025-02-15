import Box from "../../Components/Box/Box";
import {Link} from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Input from "../../Components/Input/Input";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import InvoiceItem from "../../Components/InvoiceItem/InvoiceItem";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import React from "react";

export default function InvoicePreview() {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
                <div className='lg:col-span-9'>
                    <div>
                        {/* Invoice Header */}
                        <Box className='!shadow-none !rounded-none border-b border-zinc'>
                            <div className='flex flex-col md:flex-row gap-6 items-start justify-between p-4'>
                                {/* Invoice Header Right Side */}
                                <div>
                                    <Link className='flex items-center gap-2 mb-6' to='/'>
                                        <span className='flex items-center justify-center'>
                                            <svg className='w-6 h-6'>
                                                <use href='#logo'></use>
                                            </svg>
                                        </span>
                                        <span className='font-Estedad-Bold text-2xl text-title'>
                                            فرست
                                        </span>
                                    </Link>
                                    <div
                                        className='font-IranYekan-Medium text-2sm leading-[30px] flex flex-col items-start gap-1'>
                                        <p>
                                            تهران، خیابان تجریش، ساختمان فرشته
                                        </p>
                                        <p>
                                            طبقه 456، واحد 85 شرقی
                                        </p>
                                        <div dir='ltr'
                                             className='flex items-center gap-1 text-nowrap text-ellipsis overflow-hidden'>
                                            <span>+1 (123) 456 7891</span>
                                            <span>،</span>
                                            <span>+44 (876) 543 2198</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Invoice Header Left Side */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 !w-full md:!w-auto font-IranYekan-Medium text-2sm'>
                                    <span
                                        className='text-title justify-self-start md:justify-self-end self-center text-2xl'>صورتحساب</span>
                                    <span className='text-2xl'>#3247</span>

                                    <span
                                        className='justify-self-start md:justify-self-end self-center'>تاریخ:</span>
                                    <span>1403/02/21</span>
                                    <span
                                        className='justify-self-start md:justify-self-end self-center'>تاریخ سررسید:</span>
                                    <span>1403/04/08</span>
                                </div>
                            </div>
                        </Box>
                        {/*  Invoice Detail  */}
                        <Box className='!shadow-none !rounded-none'>
                            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                                <div className='font-IranYekan-Medium text-2sm'>
                                    <h6 className='text-title mb-6'>
                                        صورتحساب به:
                                    </h6>
                                    <div className='leading-[30px] flex flex-col gap-1 items-start'>
                                        <span>تونی استارک</span>
                                        <span>شرکت صنایع استارک</span>
                                        <span>تبریز، آبرسان، برج بلور، طبقه 85</span>
                                        <span>718-986-6062</span>
                                        <span>peakyFBlinders@gmail.com</span>
                                    </div>
                                </div>
                                <div className='font-IranYekan-Medium text-2sm'>
                                    <h6 className='text-title mb-6'>
                                        قبض به:
                                    </h6>
                                    <div className='leading-[30px] inline-grid grid-cols-2'>
                                        <div className='flex flex-col items-start gap-1 leading-[30px]'>
                                            <span>مجموع سررسید:</span>
                                            <span>نام بانک:</span>
                                            <span>کشور:</span>
                                            <span>IBAN:</span>
                                            <span>کد SWIFT:</span>
                                        </div>
                                        <div className='flex flex-col items-start gap-1 leading-[30px]'>
                                            <span>12,000,000 تومان</span>
                                            <span>بانک آمریکا</span>
                                            <span>ایالات متحده</span>
                                            <span>ETD95476213874685</span>
                                            <span>BR91905</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <div className='overflow-auto w-full bg-white'>
                            {/*  Invoice Items  */}
                            <div className='bg-white py-8 w-full min-w-[700px] lg:min-w-[1000px]'>
                                <table className='w-full text-right text-nowrap'>
                                    <thead className='font-IranYekan-Medium text-xs'>
                                    <tr className='child:px-6 child:h-10 border-y border-zinc'>
                                        <th>مورد</th>
                                        <th>توضیحات</th>
                                        <th>هزینه</th>
                                        <th>تعداد</th>
                                        <th>قیمت</th>
                                    </tr>
                                    </thead>
                                    <tbody className='font-IranYekan-Medium text-2sm'>
                                    <tr className='child:px-6 child:h-12 border-b border-zinc'>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                    </tr>
                                    <tr className='child:px-6 child:h-12 border-b border-zinc'>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                    </tr>
                                    <tr className='child:px-6 child:h-12 border-b border-zinc'>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                    </tr>
                                    <tr className='child:px-6 child:h-12 border-b border-zinc'>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                    </tr>
                                    <tr className='child:px-6 child:h-12 border-b border-zinc'>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            لورم ایپسوم متن ساختگی
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            32,000 تومان
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*  Invoice Footer   */}
                            <Box className='!shadow-none !rounded-none border-b border-zinc pb-10 w-full min-w-[700px] lg:min-w-[1000px]'>
                                <div className='flex gap-6 justify-between'>
                                    <div className='w-1/2'>
                                        <div className='flex items-center gap-4 mb-4 font-IranYekan-Medium text-2sm'>
                                        <span>
                                            فروشنده:
                                        </span>
                                            <span>
                                            املیا کلارک
                                        </span>
                                        </div>
                                        <span className='font-IranYekan-Medium text-2sm'>
                                        با تشکر از کسب و کار شما
                                    </span>
                                    </div>
                                    <div className='inline-grid grid-cols-1'>
                                        <ul className='grid grid-cols-2 gap-1 text-2sm leading-[30px] font-IranYekan-Medium'>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span>جمع جزء:</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span className='font-IranYekan-Bold'>154,000 تومان</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span>تخفیف:</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span className='font-IranYekan-Bold'>0 تومان</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span>مالیات:</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span className='font-IranYekan-Bold'>50,000 تومان</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span>جمع کل:</span>
                                            </li>
                                            <li className='flex items-center justify-between gap-10'>
                                                <span className='font-IranYekan-Bold'>204,000 تومان</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <Box className='!shadow-none !rounded-none'>
                            <div className='font-IranYekan-Medium text-2sm'>
                                <span className='font-IranYekan-Bold inline-block ml-2'>یادداشت :</span> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <Box>
                        <div className='flex flex-col gap-4'>
                            <PrimaryButton className='!font-IranYekan-Medium' icon='BiPaperPlane'
                                           title='ارسال صورتحساب'/>
                            <SecondaryButton className='!font-IranYekan-Medium' title='دریافت'/>
                            <SecondaryButton className='!font-IranYekan-Medium' title='چاپ'/>
                            <SecondaryButton className='!font-IranYekan-Medium' title='ویرایش صورتحساب'/>
                            <PrimaryButton className='!font-IranYekan-Medium' icon='BiDollar'
                                           title='افزودن پرداخت'/>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}