import Input from "../../Components/Input/Input";
import React, {useState} from "react";
import {BiCheck, BiChevronDown, BiChevronLeft, BiSolidStar, BiStar, BiSubdirectoryLeft, BiX} from "react-icons/bi";
import PriceBox from "../../Components/PriceBox/PriceBox";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import PriceSectionHeader from "../../Components/PriceSectionHeader/PriceSectionHeader";
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";

const basicPlanFeatures = [
    {id: 1, title: 'تا 10 کاربر', isActive: true},
    {id: 2, title: '150+ اجزاء', isActive: true},
    {id: 3, title: 'پشتیبانی پایه در گیت‌هاب', isActive: true},
    {id: 4, title: 'به‌روزرسانی‌های ماهانه', isActive: false},
    {id: 5, title: 'یکپارچه سازی', isActive: false},
    {id: 6, title: 'پشتیبانی کامل', isActive: false},
]
const primaryPlanFeatures = [
    {id: 1, title: 'تا 10 کاربر', isActive: true},
    {id: 2, title: '150+ اجزاء', isActive: true},
    {id: 3, title: 'پشتیبانی پایه در گیت‌هاب', isActive: true},
    {id: 4, title: 'به‌روزرسانی‌های ماهانه', isActive: true},
    {id: 5, title: 'یکپارچه سازی', isActive: false},
    {id: 6, title: 'پشتیبانی کامل', isActive: false},
]
const organizationalPlanFeatures = [
    {id: 1, title: 'تا 10 کاربر', isActive: true},
    {id: 2, title: '150+ اجزاء', isActive: true},
    {id: 3, title: 'پشتیبانی پایه در گیت‌هاب', isActive: true},
    {id: 4, title: 'به‌روزرسانی‌های ماهانه', isActive: true},
    {id: 5, title: 'یکپارچه سازی', isActive: true},
    {id: 6, title: 'پشتیبانی کامل', isActive: true},
]

const questions = [
    {
        id: 1,
        title: 'چه چیزی برای محدودیت 100 پاسخ به حساب می آید؟',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای',
        shortName: 'panel1'
    },
    {
        id: 2,
        title: 'پرداخت ها را چگونه پردازش می کنید؟',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که',
        shortName: 'panel2'
    },
    {
        id: 3,
        title: 'چه روش‌های پرداختی را می پذیرید؟',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
        shortName: 'panel3'
    },
    {
        id: 4,
        title: 'آیا ضمانت بازگشت وجه دارید؟',
        caption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها',
        shortName: 'panel4'
    },
    {
        id: 5,
        title: 'من سوالات بیشتری دارم. از کجا می توانم کمک بگیرم؟',
        caption: 'لطفا تماس بگیرید با ما در صورت داشتن سوالی دیگر. ما آماده راهنمایی هستیم!',
        shortName: 'panel5'
    },
]


export default function Pricing() {
    const [expanded, setExpanded] = useState(false);
    const [selectedPlanType, setSelectedPlanType] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='container'>
            <div className='rounded shadow shadow-black/16 bg-white'>
                {/*  Pricing Plan  */}
                <div className='py-12 px-[30px] bg-white'>
                    {/*  Pricing Plan Header  */}
                    <PriceSectionHeader
                        caption='با ما شروع کنید - گزینه‌ای عالی برای افراد و تیم‌ها. یک پلن اشتراک متناسب با نیازهای خود انتخاب کنید.'
                        title='پلن مناسب را برای سایت خود پیدا کنید'/>
                    {/*  Pricing Plan Content  */}
                    <div className='flex flex-col gap-12 items-center pt-20'>
                        {/*   Pricing Content Header   */}
                        <div className='relative inline-flex items-center justify-center'>
                            <div className='inline-flex items-center gap-2 font-IranYekan-Medium text-2sm'>
                                <span>ماهانه</span>
                                <Input type='checkbox' checkIcon='BiCheck' uncheckIcon='BiX' checked={selectedPlanType}
                                       onChange={() => setSelectedPlanType(prevState => !prevState)}/>
                                <span>سالانه</span>
                            </div>
                            {/*  Pricing Plan Type Caption  */}
                            <div className='absolute -left-[120px] -top-6 hidden sm:flex items-center gap-1'>
                                <span className='flex items-center justify-center'>
                                    <BiSubdirectoryLeft className='-rotate-90 text-muted' size='24px'/>
                                </span>
                                <div
                                    className='py-1.5 px-2.5 rounded-xl text-xs font-IranYekan-Bold bg-blue/15 text-blue text-nowrap'>
                                    دریافت 2 ماه رایگان
                                </div>
                            </div>
                        </div>
                        {/*  Pricing Content Items  */}
                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 w-full'>
                            {
                                selectedPlanType ? (
                                    <>
                                        <PriceBox
                                            title='برای شروع'
                                            caption='تمامی موارد پایه برای کسب و کار های در حال شروع'
                                            monthlyPrice={49}
                                            acitveFeatures={3}
                                            annualPrice={588}
                                            features={basicPlanFeatures}
                                        />
                                        <PriceBox
                                            title='حرفه‌ای / 15% تخفیف'
                                            caption='تمامی موارد پایه برای کسب و کار های در حال شروع'
                                            monthlyPrice={99}
                                            acitveFeatures={4}
                                            annualPrice={1188}
                                            isPopular={true}
                                            features={primaryPlanFeatures}

                                        />
                                        <PriceBox
                                            title='سازمان'
                                            caption='تمامی موارد پایه برای کسب و کار های در حال شروع'
                                            monthlyPrice={149}
                                            acitveFeatures={6}
                                            annualPrice={1788}
                                            features={organizationalPlanFeatures}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <PriceBox
                                            title='برای شروع'
                                            caption='تمامی موارد پایه برای کسب و کار های در حال شروع'
                                            monthlyPrice={99}
                                            acitveFeatures={3}
                                            features={basicPlanFeatures}
                                        />
                                        <PriceBox
                                            title='حرفه‌ای / 15% تخفیف'
                                            caption='تمامی موارد پایه برای کسب و کار های در حال شروع'
                                            monthlyPrice={199}
                                            acitveFeatures={4}
                                            isPopular={true}
                                            features={primaryPlanFeatures}
                                        />
                                        <PriceBox
                                            title='سازمان'
                                            caption='تمامی موارد پایه برای کسب و کار های در حال شروع'
                                            monthlyPrice={499}
                                            acitveFeatures={6}
                                            features={organizationalPlanFeatures}
                                        />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/*  Test Plan  */}
                <div className='bg-blue/[8%] px-4 md:px-[30px]'>
                    <div className='md:px-12 md:pt-6 p-12 flex flex-col md:flex-row items-center justify-between gap-6'>
                        <div className='w-full h-full max-w-[300px]'>
                            <img className='w-full h-full object-cover' src="/images/boy-working-light.png"
                                 alt="Plan Test"/>
                        </div>
                        <div
                            className="font-IranYekan-Medium flex flex-col items-center md:items-end mt-4 text-center md:text-right">
                            <h3 className='text-2xl text-blue'>
                                هنوز قانع نشده‌اید؟ با یک نسخه آزمایشی 14 روزه رایگان شروع کنید!
                            </h3>
                            <p className='text-lg my-4'>
                                شما دسترسی کامل به تمام امکانات به مدت 14 روز دریافت خواهید کرد.
                            </p>
                            <PrimaryButton className='!w-auto mt-4 md:my-12' title='شروع 14 روز آزمایش رایگان'/>
                        </div>
                    </div>
                </div>
                {/*  Plan Table  */}
                <div className='my-6 py-12 px-[30px] bg-white'>
                    <PriceSectionHeader title='یک پلن متناسب با خودتان را انتخاب کنید'
                                        caption='خیالتان راحت باشد، ما ضمانت بازگشت وجه 48 ساعته داریم!'/>
                    <div className='w-full mt-10 overflow-auto'>
                        <table className='w-full text-right text-nowrap min-w-[700px]'>
                            <thead className='font-IranYekan-Regular text-xs'>
                            <tr className='child:px-6 child:pb-3 border-b border-zinc'>
                                <th>
                                    <div className='flex flex-col items-start gap-4'>
                                        <span className='text-title text-lg'>
                                            ویژگی ها
                                        </span>
                                        <span>
                                            ویژگی هایی منحصر به فرد
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-col items-center gap-4'>
                                        <span className='text-title text-lg'>
                                            برای شروع
                                        </span>
                                        <span>
                                            رایگان
                                        </span>
                                    </div>
                                </th>
                                <th className='align-middle'>
                                    <div className='flex items-center justify-center'>
                                        <div className='inline-flex flex-col items-center gap-4 relative'>
                                        <span className='text-title text-lg'>
                                            حرفه ای
                                        </span>
                                            <span>
                                            49,000 تومان / ماه
                                        </span>
                                            <span
                                                className='rounded-full bg-yellow absolute right-full top-0 w-6 h-6 flex items-center justify-center'>
                                            <BiSolidStar className='text-white' size='14px'/>
                                        </span>
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className='flex flex-col items-center gap-4'>
                                        <span className='text-title text-lg'>
                                            سازمان
                                        </span>
                                        <span>
                                            99,000 تومان / ماه
                                        </span>
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className='font-IranYekan-Medium text-2sm'>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    14 روز آزمایش رایگان
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    بدون محدودیت کاربر
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    پشتیبانی محصول
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    یکپارچه سازی
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <span
                                            className='inlineflex items-center justify-center rounded font-IranYekan-Medium bg-blue/10 text-blue text-xs py-[5px] px-[9px]'>
                                        افزودنی موجود است
                                    </span>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    حذف نماد برند از جلو
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    پشتیبانی با ایمیل
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <span
                                            className='inlineflex items-center justify-center rounded font-IranYekan-Medium bg-blue/10 text-blue text-xs py-[5px] px-[9px]'>
                                        افزودنی موجود است
                                    </span>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    پشتیبانی و نگهداری فعال
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5 border-b border-zinc'>
                                <td>
                                    ذخیره داده به مدت 365 روز
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiX className='text-secondary' size='24px'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <BiCheck className='text-success' size='24px'/>
                                    </div>
                                </td>
                            </tr>
                            <tr className='child:px-6 child:py-3.5'>
                                <td>

                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <PrimaryButton title='انتخاب پلن'
                                                       className='!w-auto hover:!bg-blue hover:!text-white !bg-blue/10 !text-blue !shadow-none'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <PrimaryButton title='انتخاب پلن' className='!w-auto'/>
                                    </div>
                                </td>
                                <td>
                                    <div className='flex items-center justify-center'>
                                        <PrimaryButton title='انتخاب پلن'
                                                       className='!w-auto hover:!bg-blue hover:!text-white !bg-blue/10 !text-blue !shadow-none'/>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*  Plan Most Questions  */}
                <div className='bg-[#f2f2f6] py-12 px-4 md:p-12'>
                    <PriceSectionHeader title='سوالات متداول'
                                        caption='اجازه بدهید به دستیابی به جواب متداول ترین سوالاتی که ممکن است داشته باشید کمک کنیم.'/>
                    <div className='mt-10 flex flex-col gap-2 mb-4'>
                        {
                            questions.map(question => (
                                <Accordion key={question.id} expanded={expanded === question.shortName}
                                           sx={{
                                               '.css-1s841wo-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded': {
                                                   minHeight: '48px !important'
                                               },
                                               '.css-1wqf3nl-MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                                   transform: 'rotate(-90deg)',
                                                   color: 'rgb(90, 141, 238)'
                                               }
                                           }}
                                           onChange={handleChange(question.shortName)}
                                           className='before:!opacity-0 !shadow-none !text-caption !m-0'>
                                    <AccordionSummary
                                        expandIcon={<BiChevronLeft size='24px'/>}
                                        aria-controls={question.shortName}
                                        sx={{
                                            '.css-yfrx4k-MuiAccordionSummary-content.Mui-expanded': {
                                                margin: '0px !important'
                                            }
                                        }}
                                        className={`${expanded === question.shortName && '!m-0'}`}
                                    >
                                        <Typography className={`!shadow-none !font-IranYekan-Medium !m-0 !text-2sm ${expanded === question.shortName ? '!text-blue !m-0' : '!text-caption'}`}
                                                    component="span">
                                            {
                                                question.title
                                            }
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='!text-2sm !font-IranYekan-Medium'>
                                        {
                                            question.caption
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}