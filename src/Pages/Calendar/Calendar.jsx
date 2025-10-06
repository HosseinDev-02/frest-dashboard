import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Box from "../../Components/Box/Box";
import Input from "../../Components/Input/Input";
import { useEffect, useRef, useState } from "react";
import DatePicker, { Calendar as ReactCalendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import Content from "../../Components/Content/Content";

const formatter = new Intl.DateTimeFormat("fa-IR", { month: "numeric" });
const monthName = formatter.format(new Date());

export default function Calendar() {
    const [showEventLabels, setShowEventLabels] = useState(false);
    const [eventLabelSelected, setEventLabelSelected] = useState({
        title: "کسب و کار",
        color: "rgb(var(--color-blue))",
    });
    const [showGuests, setShowGuests] = useState(false);
    const [selectedGuests, setSelectedGuests] = useState([]);
    const guestRef = useRef();
    const [showAddEventContent, setShowAddEventContent] = useState(false);
    const [weekDays, setWeekDays] = useState([
        "شنبه",
        "یک",
        "دو",
        "سه",
        "چهار",
        "پنج",
        "جمعه",
    ]);
    const [checkedItems, setCheckedItems] = useState(new Set());
    const [selectAll, setSelectAll] = useState(false);
    const [calendarYear, setCalendarYear] = useState(1403);
    const [calendarMonth, setCalendarMonth] = useState(
        +convertPersianNumbersToEnglish(monthName)
    );
    const [dataCalendar, setDataCalendar] = useState({});
    const [eventTitle, setEventTitle] = useState("");
    const [eventLabel, setEventLabel] = useState({});
    const [eventStart, setEventStart] = useState({});
    const [eventEnd, setEventEnd] = useState({});
    const [daysOfMonth, setDaysOfMonth] = useState([]);
    const [events, setEvents] = useState([
        {
            title: "play with my brother",
            label: { title: "شخصی", color: "rgb(90, 141, 238)" },
            start: { day: "9", month: "12", year: "1403" },
            end: { day: "13", month: "12", year: "1403" },
        },
    ]);
    const [eventLabels, setEventLabels] = useState([
        {
            id: 1,
            title: "کسب و کار",
            color: "rgb(90, 141, 238)",
            backgroundColor: "rgba(90, 141, 238, 8%)",
        },
        {
            id: 2,
            title: "شخصی",
            color: "rgb(255, 91, 92)",
            backgroundColor: "rgba(255, 91, 92, 8%)",
        },
        {
            id: 3,
            title: "خانواده",
            color: "rgb(253, 126, 20)",
            backgroundColor: "rgba(253, 126, 20, 8%)",
        },
        {
            id: 4,
            title: "تعطیلات",
            color: "rgb(57, 218, 138)",
            backgroundColor: "rgba(57, 218, 138, 8%)",
        },
        {
            id: 5,
            title: "سایر",
            color: "rgb(0, 207, 221)",
            backgroundColor: "rgba(0, 207, 221, 8%)",
        },
    ]);
    const getApiCalendar = () => {
        fetch(
            `https://persian-calendar-api.sajjadth.workers.dev/?year=${calendarYear}&month=${calendarMonth}`
        )
            .then((res) => res.json())
            .then((data) => {
                setDataCalendar(data);
                setDaysOfMonth(data.days);
            });
    };

    useEffect(() => {
        getApiCalendar();
        document.addEventListener("mousedown", handleClickOutside); // when user clicked outside of guest menu closed it

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [calendarYear, calendarMonth]);

    let result = [];
    let daysOfMonthCopy = daysOfMonth?.slice();
    while (daysOfMonthCopy?.length) {
        result.push(daysOfMonthCopy.splice(0, 7));
    }

    function addGuestHandler(name) {
        if (selectedGuests.length) {
            let isOnList = selectedGuests.some((guest) => guest === name);
            if (!isOnList) {
                setSelectedGuests((prevState) => [...prevState, name]);
            }
        } else {
            setSelectedGuests((prevState) => [...prevState, name]);
        }
    }

    const handleClickOutside = (event) => {
        if (guestRef.current && !guestRef.current.contains(event.target)) {
            setShowGuests(false);
        }
    };

    const handelSelectAll = () => {
        if (selectAll) {
            setCheckedItems(new Set());
        } else {
            // میاد ای دی ایتم ها رو میگیره و درون ست ذخیره میکنه
            const allDs = new Set([1, 2, 3, 4, 5]);
            setCheckedItems(allDs);
        }
        setSelectAll((prevState) => !prevState);
    };

    const checkboxHandleCheck = (item) => {
        // پر کردن ایتم های چک شده درون ست
        const updatedCheckedItems = new Set(checkedItems);

        // اگر ایتم چگ شده بود غیر فعال می کنه اگر نبود فعال میکنه
        // با استفاده از ای دی ایتم میاد چک میکنه که ایا وجود داره یا نه اگر داشت حذف میکنه از ست و اگرم نداشت داخل ست اد میکنه
        if (updatedCheckedItems.has(item)) {
            updatedCheckedItems.delete(item);
        } else {
            updatedCheckedItems.add(item);
        }

        setCheckedItems(updatedCheckedItems);
        // چک میکنه که اگر همه ایتم ها انتخاب شده بود همه رو فعال کنه
        setSelectAll(updatedCheckedItems.size === 6);
    };

    const CustomButtons = ({ direction, handleClick, disable }) => {
        return (
            <span
                onClick={handleClick}
                className={`flex items-center justify-center rounded-full border border-blue text-blue w-6 h-6 ${
                    disable ? "cursor-default" : "cursor-pointer"
                }`}
            >
                {direction === "left" ? (
                    <BiChevronRight size="18px" />
                ) : (
                    <BiChevronLeft size="18px" />
                )}
            </span>
        );
    };

    const calendarNextMonthHandler = () => {
        if (calendarMonth === 12) {
            setCalendarMonth(1);
            setCalendarYear((prevState) => prevState + 1);
        } else {
            setCalendarMonth((prevState) => prevState + 1);
        }
        console.log(dataCalendar.header.jalali);
    };

    const calendarPreviousMonthHandler = () => {
        if (calendarMonth === 1) {
            setCalendarMonth(12);
            setCalendarYear((prevState) => prevState - 1);
        } else {
            setCalendarMonth((prevState) => prevState - 1);
        }
        console.log(dataCalendar.header.jalali);
    };

    function convertPersianNumbersToEnglish(input) {
        const persianToEnglishMap = {
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
        };

        return input.replace(/[۰-۹]/g, (char) => persianToEnglishMap[char]);
    }

    const addNewEvent = () => {
        console.log({
            title: eventTitle,
            label: eventLabel,
            start: eventStart,
            end: eventEnd,
        });
        setEvents((prevState) => [
            ...prevState,
            {
                title: eventTitle,
                label: eventLabel,
                start: eventStart,
                end: eventEnd,
            },
        ]);
        setShowAddEventContent(false);
    };

    const getDayEvents = (day) => {
        return events.filter((event) => {
            if (
                convertPersianNumbersToEnglish(day) >= +event.start.day &&
                convertPersianNumbersToEnglish(day) <= +event.end.day &&
                calendarMonth >= +event.start.month &&
                calendarMonth <= +event.end.month
            ) {
                return event;
            }
        });
    };

    const isStartOfEvent = (day) => {
        return events.some(
            (event) => +convertPersianNumbersToEnglish(day) === +event.start.day
        );
    };

    return (
        <div className="container">
            <div className="flex flex-col-reverse lg:flex-row gap-y-6">
                {/*  Calendar Right Side Wrapper  */}
                <div className="lg:basis-1/5">
                    {/*  Add Event Button  */}
                    <Box className="shadow-none rounded-none !h-auto">
                        <PrimaryButton
                            title="افزودن رویداد"
                            icon="BiPlus"
                            iconSize="20px"
                            onClick={() => setShowAddEventContent(true)}
                        />
                    </Box>
                    {/*  Add Event Wrapper  */}
                    <Content
                        clickHandler={() => setShowAddEventContent(false)}
                        title="افزودن رویداد"
                        showContent={showAddEventContent}
                        setShowContent={setShowAddEventContent}
                        className='overflow-auto'
                    >
                        <Input
                            onChange={(event) =>
                                setEventTitle(event.target.value)
                            }
                            type="text"
                            label="عنوان"
                            placeholder="عنوان رویداد"
                        />
                        {/* Event Label SelectBox */}
                        <Input
                            type="selectbox"
                            label="برچسب"
                            showContent={showEventLabels}
                            setShowContent={setShowEventLabels}
                            selectedItem={eventLabelSelected}
                        >
                            <ul className="bg-white flex flex-col rounded-b overflow-hidden">
                                {eventLabels.map((label) => (
                                    <li
                                        onClick={() => {
                                            setEventLabelSelected(label);
                                            setEventLabel(label);
                                            setShowEventLabels(false);
                                        }}
                                        style={{
                                            backgroundColor:
                                                label.title ===
                                                eventLabelSelected.title
                                                    ? label.backgroundColor
                                                    : "",
                                        }}
                                        className={`flex items-center gap-2 w-full h-9 px-3 transition-colors ${
                                            label.title !==
                                                eventLabelSelected.title &&
                                            "hover:bg-gray-50"
                                        } cursor-pointer`}
                                    >
                                        <span
                                            style={{
                                                backgroundColor: label.color,
                                            }}
                                            className="rounded-full w-2.5 h-2.5"
                                        ></span>
                                        <span className="font-IranYekan-Medium text-2sm text-inherit">
                                            {label.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Input>
                        {/* Event Begin Date */}
                        <DatePicker
                            format="YYYY/MM/DD - HH:mm"
                            formattingIgnoreList={["Time", "Date"]}
                            value={new Date()}
                            calendar={persian}
                            locale={persian_fa}
                            render={<Input type="text" label="تاریخ شروع" />}
                            plugins={[
                                <TimePicker position="bottom" hideSeconds />,
                            ]}
                            containerClassName="w-full"
                            onChange={(event) => {
                                setEventStart({
                                    day: event.day,
                                    month: event.month.number,
                                    year: event.year,
                                });
                            }}
                        />
                        {/* Event End Date */}
                        <DatePicker
                            format="YYYY/MM/DD - HH:mm"
                            formattingIgnoreList={["Time", "Date"]}
                            value={new Date()}
                            calendar={persian}
                            locale={persian_fa}
                            render={<Input type="text" label="تاریخ پایان" />}
                            plugins={[
                                <TimePicker position="bottom" hideSeconds />,
                            ]}
                            containerClassName="w-full"
                            onChange={(event) => {
                                setEventEnd({
                                    day: event.day,
                                    month: event.month.number,
                                    year: event.year,
                                });
                            }}
                        />
                        {/*  Event All Day CheckBox  */}
                        <label className="inline-flex justify-start items-center gap-2 h-10">
                            <input className="peer sr-only" type="checkbox" />
                            <div className="inline-block cursor-pointer h-5 before:shadow-xxs before:shadow-black/20 w-10 bg-[#e9ecee] relative rounded-xl before:w-3 before:h-3 before:bg-white before:absolute before:left-0 before:transition-all before:translate-x-[24px] before:rounded-full before:top-0 before:bottom-0 before:my-auto peer-checked:before:bg-background border-2 border-transparent peer-checked:before:translate-x-[4px] peer-checked:bg-blue peer-focus:border-2 peer-focus:border-zinc transition-all box-content"></div>
                            <span className="font-IranYekan-Bold text-2sm">
                                تمام روز
                            </span>
                        </label>
                        {/*  Event URL Input  */}
                        <Input
                            type="text"
                            placeholder="https://wwww.google.com"
                            label="آدرس URL رویداد"
                        />
                        {/*  Event Guests Input  */}

                        <div ref={guestRef} className="relative w-full">
                            <div className="flex items-start flex-col gap-2 w-full">
                                <span
                                    className={`font-IranYekan-Medium text-xs`}
                                >
                                    افزودن مهمانان
                                </span>
                                <div className="w-full rounded border border-zinc font-IranYekan-Medium text-2sm flex items-center flex-wrap">
                                    {selectedGuests.length !== 0 && (
                                        <div className="w-full flex items-center gap-1 shrink-0 flex-wrap p-2">
                                            {selectedGuests.map((guest) => (
                                                <span
                                                    key={guest}
                                                    className="bg-blue/20 rounded px-2 py-1 shrink-0"
                                                >
                                                    {guest}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <input
                                        onFocus={() => setShowGuests(true)}
                                        type="text"
                                        placeholder="انتخاب"
                                        className={`${
                                            selectedGuests.length !== 0
                                                ? "w-auto"
                                                : "w-full"
                                        } h-10 rounded focus:border-blue outline-none placeholder:transition-all placeholder:duration-300 focus:placeholder:pr-2 px-4 transition-all duration-300 font-IranYekan-Medium text-2sm placeholder:text-muted`}
                                    />
                                </div>
                            </div>
                            {/*  Guests Content */}
                            <div
                                className={`bg-white absolute top-full left-0 right-0 shadow-md shadow-[#939eaa73] transition-all rounded-b h-[200px] overflow-y-auto ${
                                    showGuests
                                        ? "visible opacity-100"
                                        : "invisible opacity-0"
                                }`}
                            >
                                <ul className="bg-white flex flex-col rounded-b overflow-hidden">
                                    <li
                                        onClick={() =>
                                            addGuestHandler("تونی استارک")
                                        }
                                        className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                                    >
                                        <span className="rounded-full w-[26px] h-[26px] overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/avatars/10.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-IranYekan-Medium text-2sm text-inherit">
                                            تونی استارک
                                        </span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            addGuestHandler("پیتر پارکر")
                                        }
                                        className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                                    >
                                        <span className="rounded-full w-[26px] h-[26px] overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/avatars/5.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-IranYekan-Medium text-2sm">
                                            پیتر پارکر
                                        </span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            addGuestHandler("استیو راجرز")
                                        }
                                        className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                                    >
                                        <span className="rounded-full w-[26px] h-[26px] overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/avatars/1.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-IranYekan-Medium text-2sm">
                                            استیو راجرز
                                        </span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            addGuestHandler("اولیویر کویین")
                                        }
                                        className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                                    >
                                        <span className="rounded-full w-[26px] h-[26px] overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/avatars/2.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-IranYekan-Medium text-2sm">
                                            اولیویر کویین
                                        </span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            addGuestHandler("بروس وین")
                                        }
                                        className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                                    >
                                        <span className="rounded-full w-[26px] h-[26px] overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/avatars/6.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-IranYekan-Medium text-2sm">
                                            بروس وین
                                        </span>
                                    </li>
                                    <li
                                        onClick={() =>
                                            addGuestHandler("کلینت بارتون")
                                        }
                                        className={`flex items-center gap-2 w-full h-10 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}
                                    >
                                        <span className="rounded-full w-[26px] h-[26px] overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover"
                                                src="/images/avatars/4.png"
                                                alt=""
                                            />
                                        </span>
                                        <span className="font-IranYekan-Medium text-2sm">
                                            کلینت بارتون
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*  Event Location Input  */}
                        <Input
                            type="text"
                            placeholder="موقعیت را وارد کنید"
                            label="مکان"
                        />

                        {/*  Event Description Input  */}
                        <Input type="textarea" label="توضیحات" placeholder="" />

                        {/*  Event Footer Buttons  */}

                        <div className="flex gap-4">
                            <PrimaryButton
                                onClick={addNewEvent}
                                title="افزودن"
                            />
                            <SecondaryButton
                                onClick={() => setShowAddEventContent(false)}
                                title="انصراف"
                            />
                        </div>
                    </Content>
                    {/*  Right Side Calendar  */}
                    <Box className="shadow-none rounded-none border-y border-y-zinc !h-auto flex items-center justify-center">
                        <ReactCalendar
                            calendar={persian}
                            locale={persian_fa}
                            className="!shadow-none !font-IranYekan-Bold"
                            monthYearSeparator=" "
                            renderButton={<CustomButtons />}
                            weekDays={weekDays}
                            // months={months}
                        />
                    </Box>

                    {/*   Calendar Events Filtering   */}
                    <Box className="shadow-none rounded-none !h-auto text-center lg:text-right">
                        <h6 className="font-IranYekan-Bold text-muted text-xs">
                            فیلتر
                        </h6>
                        <div className="mt-6">
                            <ul className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4">
                                <li className="flex items-center gap-2">
                                    <Input
                                        checked={selectAll}
                                        onChange={handelSelectAll}
                                        className="!w-auto"
                                        type="checkbox"
                                        inputClassName="checked:bg-blue checked:border-blue"
                                    />
                                    <span className="font-IranYekan-Medium text-2sm">
                                        مشاهده همه
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Input
                                        checked={checkedItems.has(1)}
                                        onChange={() => checkboxHandleCheck(1)}
                                        className="!w-auto"
                                        type="checkbox"
                                        inputClassName="checked:bg-red checked:border-red"
                                    />
                                    <span className="font-IranYekan-Medium text-2sm">
                                        شخصی
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Input
                                        checked={checkedItems.has(2)}
                                        onChange={() => checkboxHandleCheck(2)}
                                        className="!w-auto"
                                        type="checkbox"
                                        inputClassName="checked:bg-blue checked:border-blue"
                                    />
                                    <span className="font-IranYekan-Medium text-2sm">
                                        کسب و کار
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Input
                                        checked={checkedItems.has(3)}
                                        onChange={() => checkboxHandleCheck(3)}
                                        className="!w-auto"
                                        type="checkbox"
                                        inputClassName="checked:bg-orange checked:border-orange"
                                    />
                                    <span className="font-IranYekan-Medium text-2sm">
                                        خانواده
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Input
                                        checked={checkedItems.has(4)}
                                        onChange={() => checkboxHandleCheck(4)}
                                        className="!w-auto"
                                        type="checkbox"
                                        inputClassName="checked:bg-success checked:border-success"
                                    />
                                    <span className="font-IranYekan-Medium text-2sm">
                                        تعطیلات
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Input
                                        checked={checkedItems.has(5)}
                                        onChange={() => checkboxHandleCheck(5)}
                                        className="!w-auto"
                                        type="checkbox"
                                        inputClassName="checked:bg-cyan checked:border-cyan"
                                    />
                                    <span className="font-IranYekan-Medium text-2sm">
                                        سایر
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Box>
                </div>
                {/*  Calendar Left Side Wrapper  */}
                <div className="lg:basis-4/5 flex flex-col">
                    {/* Calendar Header */}
                    <Box className="shadow-none rounded-none !h-auto">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            {/*  Calendar Selection Month  */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        className="text-title"
                                        onClick={calendarPreviousMonthHandler}
                                    >
                                        <BiChevronRight size="24px" />
                                    </button>
                                    <button
                                        className="text-title"
                                        onClick={calendarNextMonthHandler}
                                    >
                                        <BiChevronLeft size="24px" />
                                    </button>
                                </div>
                                <h5 className="font-IranYekan-Medium text-lg text-title">
                                    {dataCalendar?.header?.jalali}
                                </h5>
                            </div>
                            {/*  Calendar Selection Items  */}
                            <ul className="flex rounded overflow-hidden child:cursor-pointer">
                                <li className="flex px-[18px] py-2 bg-blue text-white font-IranYekan-Medium text-2sm">
                                    ماه
                                </li>
                                <li className="flex px-[18px] py-2 bg-blue/15 text-blue font-IranYekan-Medium hover:bg-blue hover:text-white transition-colors duration-300 text-2sm">
                                    هفته
                                </li>
                                <li className="flex px-[18px] py-2 bg-blue/15 text-blue font-IranYekan-Medium hover:bg-blue hover:text-white transition-colors duration-300 text-2sm">
                                    روز
                                </li>
                                <li className="flex px-[18px] py-2 bg-blue/15 text-blue font-IranYekan-Medium hover:bg-blue hover:text-white transition-colors duration-300 text-2sm">
                                    لیست
                                </li>
                            </ul>
                        </div>
                    </Box>
                    {/*  Calendar Content  */}
                    <div className="bg-white w-full h-full">
                        <table className="w-full h-full text-2sm font-IranYekan-Medium table-fixed">
                            <thead>
                                <tr className="child:border-t child:border-r child:border-zinc child:py-1">
                                    <th>شنبه</th>
                                    <th>
                                        <span className="hidden md:inline">
                                            یک شنبه
                                        </span>
                                        <span className="inline md:hidden">
                                            1 ش
                                        </span>
                                    </th>
                                    <th>
                                        <span className="hidden md:inline">
                                            دو شنبه
                                        </span>
                                        <span className="inline md:hidden">
                                            2 ش
                                        </span>
                                    </th>
                                    <th>
                                        <span className="hidden md:inline">
                                            سه شنبه
                                        </span>
                                        <span className="inline md:hidden">
                                            3 ش
                                        </span>
                                    </th>
                                    <th>
                                        <span className="hidden md:inline">
                                            جهارشنبه
                                        </span>
                                        <span className="inline md:hidden">
                                            4 ش
                                        </span>
                                    </th>
                                    <th>
                                        <span className="hidden md:inline">
                                            پنجشنبه
                                        </span>
                                        <span className="inline md:hidden">
                                            5 ش
                                        </span>
                                    </th>
                                    <th>جمعه</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.length !== 0 &&
                                    result.map((row, index) => (
                                        <tr key={index}>
                                            {row.map((item, index) => {
                                                return (
                                                    <td
                                                        key={index}
                                                        className="border-t border-r border-zinc"
                                                    >
                                                        <div className="min-h-[100px] h-full">
                                                            <div className="p-2">
                                                                <a href="#">
                                                                    {!item.disabled &&
                                                                        item.day
                                                                            .jalali}
                                                                </a>
                                                            </div>
                                                            {
                                                                <div
                                                                    className={`${
                                                                        isStartOfEvent(
                                                                            item
                                                                                .day
                                                                                .jalali
                                                                        ) &&
                                                                        "pr-1"
                                                                    } flex flex-col gap-1.5 relative`}
                                                                >
                                                                    {getDayEvents(
                                                                        item.day
                                                                            .jalali
                                                                    ).map(
                                                                        (
                                                                            event,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <div
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    style={{
                                                                                        backgroundColor: `${event.label.color
                                                                                            .replace(
                                                                                                ")",
                                                                                                ",15%)"
                                                                                            )
                                                                                            .replace(
                                                                                                "rgb",
                                                                                                "rgba"
                                                                                            )}`,
                                                                                        color: `${event.label.color}`,
                                                                                    }}
                                                                                    className="px-3 flex items-center justify-start text-center h-12 relative font-IranYekan-Bold text-blue text-sm rounded-sm"
                                                                                >
                                                                                    {isStartOfEvent(
                                                                                        item
                                                                                            .day
                                                                                            .jalali
                                                                                    ) && (
                                                                                        <>
                                                                                            <span
                                                                                                style={{
                                                                                                    backgroundColor: `${event.label.color}`,
                                                                                                }}
                                                                                                className={`absolute right-0 h-full w-[3px] bottom-0 top-0 rounded-r`}
                                                                                            ></span>
                                                                                            <span className="line-clamp-2">
                                                                                                {
                                                                                                    event.title
                                                                                                }
                                                                                            </span>
                                                                                        </>
                                                                                    )}
                                                                                </div>
                                                                            );
                                                                        }
                                                                    )}
                                                                </div>
                                                            }
                                                        </div>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
