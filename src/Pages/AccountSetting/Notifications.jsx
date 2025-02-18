import Input from "../../Components/Input/Input";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import React, {useState} from "react";

export default function Notifications() {

    const [selectedTimeSend, setSelectedTimeSend] = useState({id: 1, title: 'فقط زمانی که آنلاین هستم'})
    const [showTimeSends, setShowTimeSends] = useState(false)
    const [timeSends, setTimeSends] = useState([
        {id: 1, title: 'فقط زمانی که آنلاین هستم'},
        {id: 2, title: 'هر زمان'},
    ])

    const onChangeHandler = () => {
        console.log(
            'Logged From Checkbox Input Component'
        )
    }

    return (
        <div className='shadow shadow-black/10 rounded bg-white'>
            <div className='p-[22px]'>
                <h3 className='font-Estedad-Medium text-lg text-title mb-6'>
                    تنظیمات اعلان ها
                </h3>
                <p className='font-IranYekan-Medium text-2sm'>
                    برای نمایش اعلان‌ها به اجازه مرورگر شما نیاز داریم. درخواست مجوز
                </p>
            </div>
            <div className='overflow-auto w-full'>
                <table
                    className='w-full font-IranYekan-Medium text-2sm text-title border-b border-zinc min-w-[600px]'>
                    <thead className='text-xs'>
                    <tr className='child:px-6 child:py-3'>
                        <th className='w-6/12 text-right'>نوع</th>
                        <th className='w-2/12'>ایمیل</th>
                        <th className='w-2/12'>مرورگر</th>
                        <th className='w-2/12'>برنامه</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='child:px-6 child:py-3 odd:bg-[#f8f9fa] even:bg-white'>
                        <td>
                            جدید برای شما
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                    </tr>
                    <tr className='child:px-6 child:py-3 odd:bg-[#f8f9fa] even:bg-white'>
                        <td>
                            فعالیت حساب
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                    </tr>
                    <tr className='child:px-6 child:py-3 odd:bg-[#f8f9fa] even:bg-white'>
                        <td>
                            یک مرورگر جدید برای ورود استفاده شد
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                    </tr>
                    <tr className='child:px-6 child:py-3 odd:bg-[#f8f9fa] even:bg-white'>
                        <td>
                            یک دستگاه جدید متصل شد
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} checked
                                   className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)} className='justify-center items-center'
                                   inputClassName=' checked:bg-blue checked:text-white' type='checkbox'/>
                        </td>
                        <td>
                            <Input onChange={(event) => onChangeHandler(event)}
                                   inputClassName='checked:bg-blue checked:text-white'
                                   className='justify-center items-center' type='checkbox'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='p-[22px] sm:w-1/2'>
                <h4 className='text-title font-IranYekan-Medium text-2sm mb-4'>
                    چه زمانی باید به شما اعلان ارسال کنیم؟
                </h4>
                <Input className='!shrink-0'
                       setShowContent={setShowTimeSends} showContent={showTimeSends}
                       type='selectbox'
                       placeholder={selectedTimeSend !== null && selectedTimeSend.title}>
                    <ul className='bg-white flex flex-col rounded-b child:shrink-0'>
                        {
                            timeSends.map(time => (
                                <li key={time.id} onClick={() => {
                                    setSelectedTimeSend(time)
                                    setShowTimeSends(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer ${selectedTimeSend?.title === time.title && 'bg-blue text-white'}`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{time.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </Input>
                <div className='flex gap-3 mt-6'>
                    <PrimaryButton title='ذخیره تغییرات' className='!w-auto'/>
                    <SecondaryButton title='انصراف' className='!w-auto'/>
                </div>
            </div>
        </div>
    )
}