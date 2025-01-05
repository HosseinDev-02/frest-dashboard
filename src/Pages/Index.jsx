import Symbols from "../Symbols";
import {useEffect, useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/md";
import {FaRegCalendarAlt} from "react-icons/fa";
import {RiFileUserLine} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
import {
    BiHomeCircle,
    BiGrid,
    BiFoodMenu,
    BiUser,
    BiDollar,
    BiCheckShield,
    BiSearchAlt,
    BiMoon,
    BiGridAlt,
    BiBell,
    BiX,
    BiPlusCircle
} from "react-icons/bi";
import {Link} from "react-router-dom";

export default function Index() {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(true)
    const [showTransactionsSubmenu, setShowTransactionsSubmenu] = useState(false)
    const [showRulesSubmenu, setShowRulesSubmenu] = useState(false)
    const [showUserProfileSubmenu, setShowUserProfileShow] = useState(false)
    const [showPanelSetting, setShowPanelSetting] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)
    const [showWidgets, setShowWidgest] = useState(false)


    useEffect(() => {

        const keyDownHandler = (e) => {
            if(e.ctrlKey && e.key === '/') {
                e.preventDefault()
                setShowSearchBox(prevState => !prevState)
            }
        }
        window.addEventListener('keydown', keyDownHandler)

        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }
    }, []);

    return (
        <>

            <Symbols/>

            <div className='flex items-start'>
                {/* Side Bar */}
                <div
                    className={`bg-[#182535] min-h-screen transition-all duration-300 relative ${sidebarIsOpen ? 'w-64' : 'w-20'}`}>
                    {/*  SideBar Logo  */}
                    <a className='sidebar-logo sticky top-0 left-0 right-0 bg-[#182535] gap-2 h-16 flex items-center justify-start pr-6 pl-5'
                       href="#">
                        <svg className='w-7 h-7'>
                            <use href='#logo'></use>
                        </svg>
                        {
                            sidebarIsOpen && (
                                <span className='font-IranYekan-Bold text-3xl text-white'>فرست</span>
                            )
                        }
                    </a>
                    {/*  SideBar Open Button  */}
                    <button onClick={() => setSidebarIsOpen(prevState => !prevState)}
                            className='w-8 h-8 rounded-l-xl bg-blue text-white flex items-center text-xl justify-center absolute -left-8 top-4 z-20'>
                        {
                            sidebarIsOpen ? (
                                <MdKeyboardArrowRight/>
                            ) : (
                                <MdKeyboardArrowLeft/>
                            )
                        }
                    </button>
                    <div
                        className={`${sidebarIsOpen ? 'w-64' : 'w-20'} mt-2.5 overflow-hidden transition-all duration-300`}>
                        <ul className='flex flex-col gap-0.5 font-IranYekan-Medium text-2sm text-[#bec5cc] px-[15px]'>
                            <Link to='/dashboard'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md bg-blue text-white'>
                                <BiHomeCircle className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    داشبورد
                                </span>
                            </Link>
                            <Link to='/calendar'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md'>
                                <FaRegCalendarAlt className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    تقویم
                                </span>
                            </Link>
                            <Link to='/task-board'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md'>
                                <BiGrid className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    تخته وظایف
                                </span>
                            </Link>
                            <li className={`overflow-hidden transition-all duration-300 ${showTransactionsSubmenu ? 'bg-[#212e3d] h-[216px]' : 'h-[42px]'} rounded-md`}>
                                <button onClick={() => setShowTransactionsSubmenu(prevState => !prevState)}
                                        className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${!showTransactionsSubmenu && 'hover:bg-[#2a3645]'} rounded-md`}>
                                    <span className='flex items-center gap-2'>
                                <BiFoodMenu className='shrink-0' size='20px'/>
                                    <span
                                        className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        صورتحساب
                                    </span>
                                </span>
                                    <MdKeyboardArrowLeft className='shrink-0' size='20px'/>
                                </button>
                                <ul className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    لیست
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    پیش نمایش
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    ویرایش
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    افزودن
                                </span>
                                    </Link>
                                </ul>
                            </li>
                            <Link to='/users'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md'>
                                <BiUser className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    کاربران
                                </span>
                            </Link>
                            <Link to='/pricing'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md'>
                                <BiDollar className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    قیمت گذاری
                                </span>
                            </Link>
                            <li className={`overflow-hidden transition-all duration-300 ${showRulesSubmenu ? 'bg-[#212e3d] h-32' : 'h-[42px]'} rounded-md`}>
                                <button onClick={() => setShowRulesSubmenu(prevState => !prevState)}
                                        className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${!showRulesSubmenu && 'hover:bg-[#2a3645]'} rounded-md`}>
                                    <span className='flex items-center gap-2'>
                                <BiCheckShield className='shrink-0' size='20px'/>
                                    <span
                                        className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        نقش‌ها و مجوزها
                                    </span>
                                </span>
                                    <MdKeyboardArrowLeft className='shrink-0' size='20px'/>
                                </button>
                                <ul className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span>
                                    نقش‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span>
                                    مجوزها
                                </span>
                                    </Link>
                                </ul>
                            </li>
                            <li className={`overflow-hidden transition-all duration-300 ${showUserProfileSubmenu ? 'bg-[#212e3d] h-[216px]' : 'h-[42px]'} rounded-md`}>
                                <button onClick={() => setShowUserProfileShow(prevState => !prevState)}
                                        className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${!showUserProfileSubmenu && 'hover:bg-[#2a3645]'} rounded-md`}>
                                    <span className='flex items-center gap-2'>
                                <RiFileUserLine className='shrink-0' size='20px'/>
                                    <span
                                        className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        پروفایل کاربر
                                    </span>
                                </span>
                                    <MdKeyboardArrowLeft className='shrink-0' size='20px'/>
                                </button>
                                <ul className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span>
                                    پروفایل
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span>
                                    پروژه‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span>
                                    تیم‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span>
                                    اتصالات
                                </span>
                                    </Link>
                                </ul>
                            </li>
                            <li className={`overflow-hidden transition-all duration-300 ${showPanelSetting ? 'bg-[#212e3d] h-[260px]' : 'h-[42px]'} rounded-md`}>
                                <button onClick={() => setShowPanelSetting(prevState => !prevState)}
                                        className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${!showPanelSetting && 'hover:bg-[#2a3645]'} rounded-md`}>
                                    <span className='flex items-center gap-2'>
                                <IoSettingsOutline className='shrink-0' size='20px'/>
                                    <span
                                        className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        تنظیمات حساب
                                    </span>
                                </span>
                                    <MdKeyboardArrowLeft className='shrink-0' size='20px'/>
                                </button>
                                <ul className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    حساب
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    امنیت
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    صورتحساب و پلن‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    اعلان‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span
                                            className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    اتصالات
                                </span>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full pl-8 pr-10 relative'>
                    {/*Dashboard Header  */}
                    <div className='h-16 flex items-center justify-between w-full'>
                        {/* Search Btn */}
                        <a onClick={(event) => {
                            event.preventDefault()
                            setShowSearchBox(prevState => !prevState)
                        }} className='flex items-center gap-2 text-[#677788]' href="#">
                            <BiSearchAlt size='24px'/>
                            <span className='text-2sm font-IranYekan-Medium text-muted flex gap-0.5'>
                                جستجو
                                <span>
                                    (Ctrl+/)
                                </span>
                            </span>
                        </a>
                        {/*  Sidebar Search Box  */}
                        <div className={`absolute left-0 right-0 transition-all duration-300 ${showSearchBox ? 'top-0' : '-top-[60px]'} py-2.5 px-8 z-10 bg-white`}>
                            <form className='flex items-center h-10 text-[#677788]' action="#">
                                <input className='outline-none w-full h-full font-IranYekan-Bold text-2sm py-2 pr-8' placeholder='جستجو...' type="text"/>
                                <button onClick={() => setShowSearchBox(false)} className='flex items-center justify-center p-2 shrink-0'>
                                    <BiX size='24px'/>
                                </button>
                            </form>
                        </div>
                        <div className='flex items-center'>
                            <a className='flex items-center justify-center w-10 h-10 text-[#677788]' href="#">
                                <BiMoon size='24px'/>
                            </a>
                            <a className='flex items-center justify-center w-10 h-10 text-[#677788] relative' href="#">
                                <span onClick={(e) => {
                                    e.preventDefault()
                                    setShowWidgest(prevState => !prevState)
                                }} className='flex items-center justify-center cursor-pointer'>
                                    <BiGridAlt size='24px'/>
                                </span>
                                <div
                                    className={`absolute left-0 top-full w-[352px] transition-all duration-300 rounded-md overflow-hidden shadow-[0_0.25rem_1rem_rgba(147,158,170,0.45)] ${showWidgets ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <div
                                        className='sticky top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b border-b-[#d4d8dd]'>
                                        <span className='font-Estedad-Medium text-lg'>
                                            میانبرها
                                        </span>
                                        <span className='flex items-center justify-center cursor-pointer'>
                                            <BiPlusCircle size='24px'/>
                                        </span>
                                    </div>
                                    <div id='widgets-wrapper' className='grid grid-cols-2 overflow-y-auto h-[440px]'>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <FaRegCalendarAlt size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                تقویم
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                قرارهای ملاقات
                                            </span>
                                        </Link>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <BiFoodMenu size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                برنامه صورتحساب
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                مدیریت حساب&zwnj;ها
                                            </span>
                                        </Link>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <BiCheckShield size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                مدیریت نقش&zwnj;ها
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                مجوز&zwnj;ها
                                            </span>
                                        </Link>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <IoSettingsOutline size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                تنظیمات
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                تنظیمات حساب
                                            </span>
                                        </Link>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <FaRegCalendarAlt size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                تقویم
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                قرارهای ملاقات
                                            </span>
                                        </Link>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <BiFoodMenu size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                برنامه صورتحساب
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                مدیریت حساب&zwnj;ها
                                            </span>
                                        </Link>
                                        <Link
                                            className='flex flex-col odd:border-b odd:border-b-[#d4d8dd] odd:border-l odd:border-l-[#d4d8dd] even:border-b even:border-b-[#d4d8dd] items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
                                            to='#'>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                <BiCheckShield size='20px'/>
                                            </span>
                                            <h6 className='text-[#677788] font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                                                مدیریت نقش&zwnj;ها
                                            </h6>
                                            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                مجوز&zwnj;ها
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </a>
                            <div className='flex items-center justify-center w-10 h-10 text-[#677788] relative'>
                                <BiBell size='24px'/>
                                <span
                                    className='bg-red text-white w-4 h-4 rounded-full flex items-center justify-center absolute top-1 left-1 font-IranYekan-Bold text-[9px]'>5</span>
                            </div>
                            <a className='flex items-center justify-center w-10 h-10 mr-2.5 text-[#677788] relative overflow-hidden'
                               href="#">
                                <img className='w-full h-full object-cover rounded-full' src="/images/avatars/1.png"
                                     alt="user profile"/>
                                <span
                                    className='bg-success w-3 h-3 rounded-full border-2 border-white flex items-center justify-center absolute bottom-0 right-0 font-IranYekan-Bold'></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}