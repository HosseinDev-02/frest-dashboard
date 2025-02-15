import Box from "../../Components/Box/Box";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import React, {useEffect, useState} from "react";
import Input from "../../Components/Input/Input";
import {Link} from "react-router-dom";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePicker from "react-multi-date-picker";
import InvoiceItem from "../../Components/InvoiceItem/InvoiceItem";

export default function AddInvoice() {
    const [payments, setPayments] = useState([
        {id: 1, title: 'حساب بانکی'},
        {id: 2, title: 'پی پال'},
        {id: 3, title: 'کارت اعتباری'},
        {id: 4, title: 'انتقال UPI'},
    ])
    const [selectedPayment, setSelectedPayment] = useState({id: 1, title: 'حساب بانکی'})
    const [showPayments, setShowPayments] = useState(false)
    const [checkedPaymentTerm, setCheckedPaymentTerm] = useState(true)
    const [checkedCustomerNotes, setCheckedCustomerNotes] = useState(false)
    const [checkedSmallPayment, setCheckedSmallPayment] = useState(false)

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
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-24 !w-full md:!w-auto'>
                                    <span
                                        className='font-IranYekan-Medium text-2xl text-title justify-self-start md:justify-self-end self-center'>صورتحساب #</span>
                                    <div
                                        className='bg-[#e9ecee] px-3 py-2 font-IranYekan-Medium text-2sm rounded border border-zinc max-w-[150px] w-full'>
                                        <span>3247</span>
                                    </div>
                                    <span
                                        className='font-IranYekan-Medium text-2sm justify-self-start md:justify-self-end self-center'>تاریخ</span>
                                    <DatePicker
                                        format="YYYY/MM/DD"
                                        formattingIgnoreList={["Date"]}
                                        value={new Date()}
                                        calendar={persian}
                                        locale={persian_fa}
                                        render={<Input type='text'/>}
                                        plugins={[
                                            <TimePicker position="bottom" hideSeconds/>
                                        ]}
                                        containerClassName='w-full max-w-[150px]'
                                    />
                                    <span
                                        className='font-IranYekan-Medium text-2sm justify-self-start md:justify-self-end self-center'>تاریخ سررسید</span>
                                    <DatePicker
                                        format="YYYY/MM/DD"
                                        formattingIgnoreList={["Date"]}
                                        value={new Date()}
                                        calendar={persian}
                                        locale={persian_fa}
                                        render={<Input type='text'/>}
                                        plugins={[
                                            <TimePicker position="bottom" hideSeconds/>
                                        ]}
                                        containerClassName='w-full max-w-[150px]'
                                    />
                                </div>
                            </div>
                        </Box>
                        {/*  Invoice Detail  */}
                        <Box className='!shadow-none !rounded-none border-b border-zinc'>
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
                        {/*  Invoice Items  */}
                        <Box className='!shadow-none !rounded-none border-b border-zinc'>
                            <div className='flex flex-col gap-10 py-6'>
                                <InvoiceItem/>
                            </div>
                            <PrimaryButton className='!inline-flex !w-auto' title='افزودن مورد'/>
                        </Box>
                        {/*  Invoice Footer   */}
                        <Box className='!shadow-none !rounded-none'>
                            <div className='flex flex-col gap-6 md:flex-row justify-between border-b border-zinc pb-10'>
                                <div className='md:w-1/2'>
                                    <div className='flex items-center gap-10 mb-4'>
                                        <span className='font-IranYekan-Medium text-2sm'>
                                            فروشنده:
                                        </span>
                                        <Input type='text' placeholder='جان اسنو'/>
                                    </div>
                                    <Input type='text' placeholder='از کسب و کار شما متشکریم'/>
                                </div>
                                <div className='inline-grid grid-cols-1'>
                                    <ul className='grid grid-cols-1 gap-1 text-2sm leading-[30px] font-IranYekan-Medium'>
                                        <li className='flex items-center justify-between gap-10'>
                                            <span>جمع جزء:</span>
                                            <span className='font-IranYekan-Bold'>0 ریال</span>
                                        </li>
                                        <li className='flex items-center justify-between gap-10'>
                                            <span>تخفیف:</span>
                                            <span className='font-IranYekan-Bold'>0 ریال</span>
                                        </li>
                                        <li className='flex items-center justify-between gap-10'>
                                            <span>مالیات:</span>
                                            <span className='font-IranYekan-Bold'>0 ریال</span>
                                        </li>
                                    </ul>
                                    <div className='bg-zinc w-full h-px my-4'></div>
                                    <div className='flex items-center justify-between font-IranYekan-Medium text-2sm leading-[30px]'>
                                        <span>جمع کل:</span>
                                        <span className='font-IranYekan-Bold'>0 ریال</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <Input labelClassName='!font-IranYekan-Bold' placeholder='یادداشت صورتحساب' label='یادداشت:' type='textarea' inputClassName='!h-20'/>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <Box>
                        <div className='flex flex-col gap-4'>
                            <PrimaryButton className='!font-IranYekan-Medium' icon='BiPaperPlane'
                                           title='ارسال صورتحساب'/>
                            <SecondaryButton className='!font-IranYekan-Medium' title='پیشنمایش'/>
                            <SecondaryButton className='!font-IranYekan-Medium' title='ذخیره'/>
                        </div>
                    </Box>
                    <div className='mt-6'>
                        <div>
                            <h6 className='font-IranYekan-Medium text-2sm mb-2'>
                                پذیرش پرداخت از طریق
                            </h6>
                            <div>
                            <Input className='!w-auto !shrink-0 min-w-52'
                                       setShowContent={setShowPayments} showContent={showPayments}
                                       type='selectbox'
                                       placeholder={selectedPayment.title}>
                                    <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                        {
                                            payments.map(payment => (
                                                <li key={payment.id} onClick={() => {
                                                    setSelectedPayment(payment)
                                                    setShowPayments(false)
                                                }}
                                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{payment.title}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </Input>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Input label='شرایط پرداخت'
                                   onChange={(event) => setCheckedPaymentTerm(event.target.checked)}
                                   checked={checkedPaymentTerm} type='checkbox' checkIcon='BiCheck' uncheckIcon='BiX'/>
                            <Input label='یادداشت های مشتری'
                                   onChange={(event) => setCheckedCustomerNotes(event.target.checked)}
                                   checked={checkedCustomerNotes} type='checkbox' checkIcon='BiCheck'
                                   uncheckIcon='BiX'/>
                            <Input label='خرد پرداخت' onChange={(event) => setCheckedSmallPayment(event.target.checked)}
                                   checked={checkedSmallPayment} type='checkbox' checkIcon='BiCheck' uncheckIcon='BiX'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}