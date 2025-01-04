import Symbols from "../Symbols";
import {useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/md";
import {FaRegCalendarAlt} from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import {BiHomeCircle, BiGrid, BiFoodMenu, BiUser, BiDollar, BiCheckShield, BiSearchAlt} from "react-icons/bi";
import {Link} from "react-router-dom";

export default function Index() {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(true)
    const [showTransactionsSubmenu, setShowTransactionsSubmenu] = useState(false)
    const [showRulesSubmenu, setShowRulesSubmenu] = useState(false)
    const [showUserProfileSubmenu, setShowUserProfileShow] = useState(false)
    const [showPanelSetting, setShowPanelSetting] = useState(false)

    return (
        <>

            <Symbols/>

            <div>
                {/* Side Bar */}
                <div
                    className={`bg-[#182535] min-h-screen transition-all duration-300 relative ${sidebarIsOpen ? 'w-64' : 'w-20'}`}>
                    {/*  SideBar Logo  */}
                    <a className='sidebar-logo sticky top-0 left-0 right-0 bg-[#182535] gap-2 h-16 flex items-center justify-start pr-6 pl-5' href="#">
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
                            className='w-8 h-8 rounded-l-xl bg-blue text-white flex items-center text-xl justify-center absolute -left-8 top-4'>
                        {
                            sidebarIsOpen ? (
                                <MdKeyboardArrowRight/>
                            ) : (
                                <MdKeyboardArrowLeft/>
                            )
                        }
                    </button>
                    <div className={`${sidebarIsOpen ? 'w-64' : 'w-20'} mt-2.5 overflow-hidden transition-all duration-300`}>
                        <ul className='flex flex-col gap-0.5 font-IranYekan-Medium text-2sm text-[#bec5cc] px-[15px]'>
                            <Link to='#'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md bg-[#2a3645]'>
                                <BiHomeCircle className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    داشبورد
                                </span>
                            </Link>
                            <Link to='#'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md'>
                                <FaRegCalendarAlt className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    تقویم
                                </span>
                            </Link>
                            <Link to='#'
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
                                    <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        صورتحساب
                                    </span>
                                </span>
                                    <MdKeyboardArrowLeft className='shrink-0' size='20px'/>
                                </button>
                                <ul className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    لیست
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    پیش نمایش
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    ویرایش
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className='flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md'>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    افزودن
                                </span>
                                    </Link>
                                </ul>
                            </li>
                            <Link to='#'
                                  className='flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 hover:bg-[#2a3645] rounded-md'>
                                <BiUser className='shrink-0' size='20px'/>
                                <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    کاربران
                                </span>
                            </Link>
                            <Link to='#'
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
                                    <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
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
                                    <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
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
                                    <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                        تنظیمات حساب
                                    </span>
                                </span>
                                    <MdKeyboardArrowLeft className='shrink-0' size='20px'/>
                                </button>
                                <ul className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    حساب
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    امنیت
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    صورتحساب و پلن‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    اعلان‌ها
                                </span>
                                    </Link>
                                    <Link to='#'
                                          className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md`}>
                                        <span className='bg-[#bec5cc] rounded-full w-1.5 h-1.5'></span>
                                        <span className={`sidebar-menu-text ${sidebarIsOpen ? 'opacity-100' : 'opacity-0'}`}>
                                    اتصالات
                                </span>
                                    </Link>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className=''>
                {/*  Dashboard Header  */}
                {/*    <div>*/}
                {/*        <a className='flex items-center gap-2' href="#">*/}
                {/*            <BiSearchAlt size='24px'/>*/}
                {/*            <span className='text-2sm font-IranYekan-Medium text-muted'>*/}
                {/*                جستجو*/}
                {/*                <span>*/}
                {/*                    (Ctrl+/)*/}
                {/*                </span>*/}
                {/*            </span>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                </div>
            </div>

        </>
    )
}