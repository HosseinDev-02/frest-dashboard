import {BiChevronDown, BiChevronLeft, BiChevronRight, BiPlus, BiX} from "react-icons/bi";
import Box from "../../Components/Box/Box";
import Input from "../../Components/Input/Input";
import {useEffect, useRef, useState} from "react";
import DatePicker, {Calendar as ReactCalendar} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Overlay from "../../Components/Overlay/Overlay";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";

export default function Calendar() {
    const [showEventLabels, setShowEventLabels] = useState(false)
    const [eventLabelSelected, setEventLabelSelected] = useState({title: 'کسب و کار', color: 'rgb(var(--color-blue))'})
    const [showGuests, setShowGuests] = useState(false)
    const [selectedGuests, setSelectedGuests] = useState([])
    const guestRef = useRef()
    const [showAddEventContent, setShowAddEventContent] = useState(false)
    const [weekDays, setWeekDays] = useState(['شنبه', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه'])
    const [checkedItems, setCheckedItems] = useState(new Set())
    const [selectAll, setSelectAll] = useState(false)

    function addGuestHandler(name) {
        if (selectedGuests.length) {
            let isOnList = selectedGuests.some(guest => guest === name)
            if (!isOnList) {
                setSelectedGuests(prevState => [...prevState, name])
            }
        } else {
            setSelectedGuests(prevState => [...prevState, name])
        }
    }

    const handleClickOutside = (event) => {
        if (guestRef.current && !guestRef.current.contains(event.target)) {
            setShowGuests(false)
        }
        // console.log(guestRef.current.contains(event.target))
    }

    const handelSelectAll = () =>  {
        if(selectAll) {
            setCheckedItems(new Set())
        }else {
            // میاد ای دی ایتم ها رو میگیره و درون ست ذخیره میکنه
            const allDs = new Set([1, 2, 3, 4, 5])
            setCheckedItems(allDs)
        }
        setSelectAll(prevState => !prevState)
        console.log(checkedItems)
    }

    const checkboxHandleCheck = (item) => {
        // پر کردن ایتم های چک شده درون ست
        const updatedCheckedItems = new Set(checkedItems)
        console.log(updatedCheckedItems)

        // اگر ایتم چگ شده بود غیر فعال می کنه اگر نبود فعال میکنه
        // با استفاده از ای دی ایتم میاد چک میکنه که ایا وجود داره یا نه اگر داشت حذف میکنه از ست و اگرم نداشت داخل ست اد میکنه
        if(updatedCheckedItems.has(item)){
            updatedCheckedItems.delete(item)
        }else {
            updatedCheckedItems.add(item)
        }

        setCheckedItems(updatedCheckedItems)
        // چک میکنه که اگر همه ایتم ها انتخاب شده بود همه رو فعال کنه
        setSelectAll(updatedCheckedItems.size === 6)
    }

    const CustomButtons = ({ direction, handleClick, disable }) => {
        return (
            <span onClick={handleClick} className={`flex items-center justify-center rounded-full border border-blue text-blue w-6 h-6 ${disable ? 'cursor-default' : 'cursor-pointer'}`}>
                {
                    direction === 'left' ? (
                        <BiChevronRight size='18px'/>
                    ) : (
                        <BiChevronLeft size='18px'/>
                    )
                }
            </span>
        )
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside) // when user clicked outside of guest menu closed it

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, []);

    return (
        <div className='container'>
            <div className='flex items-start'>
                {/*  Calendar Right Side Wrapper  */}
                <div className='basis-1/5'>
                    {/*  Add Event Button  */}
                    <Box className='shadow-none rounded-none border-b border-b-zinc'>
                        <PrimaryButton title='افزودن رویداد' icon='BiPlus' iconSize='20px' onClick={() => setShowAddEventContent(true)}/>
                    </Box>
                    {/*  Add Event Wrapper  */}
                    <div
                        className={`fixed transition-all duration-300 top-0 bottom-0 w-[400px] bg-white z-[1200] ${showAddEventContent ? 'left-0' : '-left-[400px]'}`}>
                        {/*  Add Event Wrapper Header  */}
                        <div className='flex items-center justify-between px-6 py-5 border-b border-b-zinc'>
                            <h6 className='font-IranYekan-Bold text-2sm'>
                                افزودن رویداد
                            </h6>
                            <span onClick={() => setShowAddEventContent(false)} className='cursor-pointer text-muted flex items-center justify-center'>
                                <BiX size='24px'/>
                            </span>
                        </div>
                        {/*  Add Event Wrapper Body  */}
                        <div className='p-6 flex flex-col items-start gap-4'>
                            <Input type='text' label='عنوان' placeholder='عنوان رویداد'/>
                            {/* Event Label SelectBox */}
                            <div className='relative w-full'>
                                <div className='flex items-start flex-col gap-2'>
                                    <span className='font-IranYekan-Medium text-xs'>
                                    برچسب
                                </span>
                                    <button onClick={() => setShowEventLabels(prevState => !prevState)}
                                            className='flex items-center justify-between w-full h-10 rounded border border-zinc px-3'>
                                    <span className='flex items-center gap-2'>
                                        <span style={{backgroundColor: eventLabelSelected.color}}
                                              className='rounded-full w-2.5 h-2.5'></span>
                                        <span
                                            className='font-IranYekan-Medium text-2sm'>{eventLabelSelected.title}</span>
                                    </span>
                                        <span className='text-muted'>
                                            <BiChevronDown size='20px'/>
                                        </span>
                                    </button>
                                </div>
                                <div
                                    className={`bg-white absolute top-full left-0 right-0 shadow-md shadow-[#939eaa73] transition-all rounded-b ${showEventLabels ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                    <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                        <li onClick={() => {
                                            setEventLabelSelected({title: 'کسب و کار', color: 'rgb(var(--color-blue))'})
                                            setShowEventLabels(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors ${eventLabelSelected.title === 'کسب و کار' ? 'bg-blue/[8%]' : 'hover:bg-gray-50'} cursor-pointer`}>
                                            <span className='rounded-full bg-blue w-2.5 h-2.5'></span>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>کسب و کار</span>
                                        </li>
                                        <li onClick={() => {
                                            setEventLabelSelected({title: 'شخصی', color: 'rgb(var(--color-red))'})
                                            setShowEventLabels(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors ${eventLabelSelected.title === 'شخصی' ? 'bg-red/[8%]' : 'hover:bg-gray-50'} cursor-pointer`}>
                                            <span className='rounded-full bg-red w-2.5 h-2.5'></span>
                                            <span className='font-IranYekan-Medium text-2sm'>شخصی</span>
                                        </li>
                                        <li onClick={() => {
                                            setEventLabelSelected({title: 'خانواده', color: 'rgb(var(--color-orange))'})
                                            setShowEventLabels(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors ${eventLabelSelected.title === 'خانواده' ? 'bg-orange/[8%]' : 'hover:bg-gray-50'} cursor-pointer`}>
                                            <span className='rounded-full bg-orange w-2.5 h-2.5'></span>
                                            <span className='font-IranYekan-Medium text-2sm'>خانواده</span>
                                        </li>
                                        <li onClick={() => {
                                            setEventLabelSelected({
                                                title: 'تعطیلات',
                                                color: 'rgb(var(--color-success))'
                                            })
                                            setShowEventLabels(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors ${eventLabelSelected.title === 'تعطیلات' ? 'bg-success/[8%]' : 'hover:bg-gray-50'} cursor-pointer`}>
                                            <span className='rounded-full bg-success w-2.5 h-2.5'></span>
                                            <span className='font-IranYekan-Medium text-2sm'>تعطیلات</span>
                                        </li>
                                        <li onClick={() => {
                                            setEventLabelSelected({title: 'سایر', color: 'rgb(var(--color-cyan))'})
                                            setShowEventLabels(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors ${eventLabelSelected.title === 'سایر' ? 'bg-cyan/[8%]' : 'hover:bg-gray-50'} cursor-pointer`}>
                                            <span className='rounded-full bg-cyan w-2.5 h-2.5'></span>
                                            <span className='font-IranYekan-Medium text-2sm'>سایر</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Event Begin Date */}
                            <DatePicker
                                format="YYYY/MM/DD - HH:mm"
                                formattingIgnoreList={["Time", "Date"]}
                                value={new Date()}
                                calendar={persian}
                                locale={persian_fa}
                                render={<Input type='text' label='تاریخ شروع'/>}
                                plugins={[
                                    <TimePicker position="bottom" hideSeconds/>
                                ]}
                                containerClassName='w-full'
                            />
                            {/* Event End Date */}
                            <DatePicker
                                format="YYYY/MM/DD - HH:mm"
                                formattingIgnoreList={["Time", "Date"]}
                                value={new Date()}
                                calendar={persian}
                                locale={persian_fa}
                                render={<Input type='text' label='تاریخ پایان'/>}
                                plugins={[
                                    <TimePicker position="bottom" hideSeconds/>
                                ]}
                                containerClassName='w-full'
                            />
                            {/*  Event All Day CheckBox  */}
                            <label
                                className="inline-flex justify-start items-center gap-2 h-10">
                                <input
                                    className="peer sr-only"
                                    type="checkbox"
                                />
                                <div
                                    className="inline-block cursor-pointer h-5 before:shadow-xxs before:shadow-black/20 w-10 bg-[#e9ecee] relative rounded-xl before:w-3 before:h-3 before:bg-white before:absolute before:left-0 before:transition-all before:translate-x-[24px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:before:bg-background border-2 border-transparent peer-checked:before:translate-x-[4px] peer-checked:bg-blue peer-focus:border-2 peer-focus:border-zinc transition-all box-content"></div>
                                <span className="font-IranYekan-Bold text-2sm">
                                        تمام روز
                                    </span>
                            </label>
                            {/*  Event URL Input  */}
                            <Input
                                type='text'
                                placeholder='https://wwww.google.com'
                                label='آدرس URL رویداد'
                            />
                            {/*  Event Guests Input  */}

                            <div ref={guestRef} className='relative w-full'>
                                <div className='flex items-start flex-col gap-2 w-full'>
                                    <span className={`font-IranYekan-Medium text-xs`}>افزودن مهمانان</span>
                                    <div
                                        className='w-full rounded border border-zinc font-IranYekan-Medium text-2sm flex items-center flex-wrap'>
                                        {
                                            selectedGuests.length !== 0 && (
                                                <div className='w-full flex items-center gap-1 shrink-0 flex-wrap p-2'>
                                                    {
                                                        selectedGuests.map(guest => (
                                                            <span key={guest}
                                                                  className='bg-blue/20 rounded px-2 py-1 shrink-0'>
                                                                {guest}
                                                            </span>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                        <input onFocus={() => setShowGuests(true)} type='text'
                                               placeholder='انتخاب'
                                               className={`${selectedGuests.length !== 0 ? 'w-auto' : 'w-full'} h-10 rounded focus:border-blue outline-none placeholder:transition-all placeholder:duration-300 focus:placeholder:pr-2 px-4 transition-all duration-300 font-IranYekan-Medium text-2sm placeholder:text-muted`}/>
                                    </div>
                                </div>
                                {/*  Guests Content */}
                                <div
                                    className={`bg-white absolute top-full left-0 right-0 shadow-md shadow-[#939eaa73] transition-all rounded-b h-[200px] overflow-y-auto ${showGuests ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                                    <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                        <li
                                            onClick={() => addGuestHandler('تونی استارک')}
                                            className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span className='rounded-full w-[26px] h-[26px] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src="/images/avatars/10.png"
                                                     alt=""/>
                                            </span>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>تونی استارک</span>
                                        </li>
                                        <li
                                            onClick={() => addGuestHandler('پیتر پارکر')}
                                            className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span className='rounded-full w-[26px] h-[26px] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src="/images/avatars/5.png"
                                                     alt=""/>
                                            </span>
                                            <span className='font-IranYekan-Medium text-2sm'>پیتر پارکر</span>
                                        </li>
                                        <li
                                            onClick={() => addGuestHandler('استیو راجرز')}
                                            className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span className='rounded-full w-[26px] h-[26px] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src="/images/avatars/1.png"
                                                     alt=""/>
                                            </span>
                                            <span className='font-IranYekan-Medium text-2sm'>استیو راجرز</span>
                                        </li>
                                        <li
                                            onClick={() => addGuestHandler('اولیویر کویین')}
                                            className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span className='rounded-full w-[26px] h-[26px] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src="/images/avatars/2.png"
                                                     alt=""/>
                                            </span>
                                            <span className='font-IranYekan-Medium text-2sm'>اولیویر کویین</span>
                                        </li>
                                        <li
                                            onClick={() => addGuestHandler('بروس وین')}
                                            className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span className='rounded-full w-[26px] h-[26px] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src="/images/avatars/6.png"
                                                     alt=""/>
                                            </span>
                                            <span className='font-IranYekan-Medium text-2sm'>بروس وین</span>
                                        </li>
                                        <li
                                            onClick={() => addGuestHandler('کلینت بارتون')}
                                            className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span className='rounded-full w-[26px] h-[26px] overflow-hidden'>
                                                <img className='w-full h-full object-cover' src="/images/avatars/4.png"
                                                     alt=""/>
                                            </span>
                                            <span className='font-IranYekan-Medium text-2sm'>کلینت بارتون</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*  Event Location Input  */}
                            <Input
                                type='text'
                                placeholder='موقعیت را وارد کنید'
                                label='مکان'
                            />

                            {/*  Event Description Input  */}
                            <Input type='textarea' label='توضیحات' placeholder=''/>

                            {/*  Event Footer Buttons  */}

                            <div className='flex gap-4'>
                                <PrimaryButton title='افزودن'/>
                                <SecondaryButton onClick={() => setShowAddEventContent(false)} title='انصراف'/>
                            </div>
                        </div>
                    </div>
                    {/*  Add Event Show Overlay  */}
                    <Overlay className='!bg-black/50 !z-[1199]' setShow={() => setShowAddEventContent(false)}
                             show={showAddEventContent}/>
                {/*  Right Side Calendar  */}
                    <Box className='shadow-none rounded-none border-b border-b-zinc'>
                        <ReactCalendar
                            calendar={persian}
                            locale={persian_fa}
                            className='!shadow-none !font-IranYekan-Bold'
                            monthYearSeparator=" "
                            renderButton={<CustomButtons/>}
                            weekDays={weekDays}
                            // months={months}
                        />
                    </Box>

                {/*   Calendar Events Filtering   */}
                    <Box className='shadow-none rounded-none'>
                        <h6 className='font-IranYekan-Bold text-muted text-xs'>
                            فیلتر
                        </h6>
                        <div className='mt-6'>
                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-2'>
                                    <Input checked={selectAll} onChange={handelSelectAll} className='!w-auto' type='checkbox' inputClassName='checked:bg-blue checked:border-blue'/>
                                    <span className='font-IranYekan-Medium text-2sm'>مشاهده همه</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Input checked={checkedItems.has(1)} onChange={() => checkboxHandleCheck(1)} className='!w-auto' type='checkbox' inputClassName='checked:bg-red checked:border-red'/>
                                    <span className='font-IranYekan-Medium text-2sm'>شخصی</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Input checked={checkedItems.has(2)} onChange={() => checkboxHandleCheck(2)} className='!w-auto' type='checkbox' inputClassName='checked:bg-blue checked:border-blue'/>
                                    <span className='font-IranYekan-Medium text-2sm'>کسب و کار</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Input checked={checkedItems.has(3)} onChange={() => checkboxHandleCheck(3)} className='!w-auto' type='checkbox' inputClassName='checked:bg-orange checked:border-orange'/>
                                    <span className='font-IranYekan-Medium text-2sm'>خانواده</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Input checked={checkedItems.has(4)} onChange={() => checkboxHandleCheck(4)} className='!w-auto' type='checkbox' inputClassName='checked:bg-success checked:border-success'/>
                                    <span className='font-IranYekan-Medium text-2sm'>تعطیلات</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <Input checked={checkedItems.has(5)} onChange={() => checkboxHandleCheck(5)} className='!w-auto' type='checkbox' inputClassName='checked:bg-cyan checked:border-cyan'/>
                                    <span className='font-IranYekan-Medium text-2sm'>سایر</span>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </div>
                {/*  Calendar Left Side Wrapper  */}
                <div className='basis-4/5'></div>
            </div>
        </div>
    )
}