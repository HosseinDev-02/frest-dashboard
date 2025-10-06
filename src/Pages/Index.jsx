import Symbols from "../Symbols";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
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
    BiPlusCircle,
    BiEnvelopeOpen,
    BiCreditCard,
    BiSupport,
    BiHelpCircle,
    BiPowerOff,
    BiMenu,
} from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";
import WidgetBox from "../Components/WidgetBox/WidgetBox";
import NotificationBox from "../Components/NotificationBox/NotificationBox";
import Overlay from "../Components/Overlay/Overlay";
import { Loader } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Index() {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
    const [showTransactionsSubmenu, setShowTransactionsSubmenu] =
        useState(false);
    const [showRulesSubmenu, setShowRulesSubmenu] = useState(false);
    const [showUserProfileSubmenu, setShowUserProfileSubmenu] = useState(false);
    const [showPanelSetting, setShowPanelSetting] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [showWidgets, setShowWidgets] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [headerShadow, setHeaderShadow] = useState(false);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "تبریک می‌گوییم کلارک",
            caption: "شما پیام جدید از ناتالی دارید",
            img: "/images/avatars/1.png",
            time: "1 ساعت قبل",
            seen: false,
        },
        {
            id: 2,
            title: "پیام جدید",
            caption: "برنامه پروژه مدیریت شما پذیرفته شد.",
            img: "/images/avatars/2.png",
            time: "2 ساعت و 49 دقیقه پیش",
            seen: true,
        },
        {
            id: 3,
            title: "هورا! شما سفارش جدید دارید",
            caption: "شما پیام جدید از ناتالی دارید",
            img: "/images/avatars/4.png",
            time: "12 ساعت قبل",
            seen: false,
        },
        {
            id: 4,
            title: "برنامه مورد تایید قرار گرفت",
            caption: "برنامه پروژه مدیریت شما پذیرفته شد.",
            img: "/images/avatars/5.png",
            time: "دیروز",
            seen: true,
        },
        {
            id: 5,
            title: "گزارش ماهانه ایجاد شد",
            caption: "شما پیام جدید از ناتالی دارید",
            img: "/images/avatars/6.png",
            time: "2 روز پیش",
            seen: false,
        },
    ]);
    const [loading, setLoading] = useState(true);
    const widgetsWrapper = useRef(null);
    const notificationsWrapper = useRef(null);

    const location = useLocation();
    const { pathname } = location;

    console.log(pathname);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            if (window.scrollY > 40) {
                setHeaderShadow(true);
            } else {
                setHeaderShadow(false);
            }
        });

        const keyDownHandler = (e) => {
            if (e.ctrlKey && e.key === "/") {
                e.preventDefault();
                setShowSearchBox((prevState) => !prevState);
            }
        };
        window.addEventListener("keydown", keyDownHandler);
        // وقتی کل صفحه (تمام عکس‌ها و فونت‌ها) لود شد
        const handleLoad = () => setLoading(false);
        const handleDomReady = () => setLoading(false);

        window.addEventListener("load", handleLoad);
        document.addEventListener("DOMContentLoaded", handleDomReady);

        // fallback بعد از 5 ثانیه
        const timer = setTimeout(() => setLoading(false), 5000);

        return () => {
            window.removeEventListener("load", handleLoad);
            document.removeEventListener("DOMContentLoaded", handleDomReady);
            clearTimeout(timer);
        };
    }, []);

    const closeSubmenusHandler = () => {
        setShowTransactionsSubmenu(false);
        setShowRulesSubmenu(false);
        setShowUserProfileSubmenu(false);
        setShowPanelSetting(false);
    };

    return (
        <>
            <Symbols />

            <div className="flex bg-[#f3f4f4] min-h-screen">
                {/* Side Bar */}
                <div
                    className={`shrink-0 bg-[#182535] h-screen transition-all duration-300 fixed z-[1001] w-64 ${
                        openMenu ? "right-0" : "-right-64 xl:right-0"
                    } ${sidebarIsOpen ? "xl:w-64" : "xl:w-20"}`}
                >
                    {/*  SideBar Logo  */}
                    <a
                        className="sidebar-logo bg-[#182535] gap-2 h-16 flex items-center justify-between pr-6 pl-5"
                        href="#"
                    >
                        <span className="flex items-center justify-start gap-2">
                            <svg className="w-7 h-7 shrink-0">
                                <use href="#logo"></use>
                            </svg>
                            <span
                                className={`font-IranYekan-Bold text-3xl text-white ${
                                    sidebarIsOpen
                                        ? "xl:opacity-100"
                                        : "xl:opacity-0"
                                }`}
                            >
                                فرست
                            </span>
                        </span>
                        <span
                            onClick={() => {
                                setOpenMenu((prevState) => !prevState);
                                closeSubmenusHandler();
                            }}
                            className="flex xl:hidden items-center justify-center text-blue"
                        >
                            <BiX size="24px" />
                        </span>
                    </a>
                    {/*  SideBar Open Button  */}
                    <button
                        onClick={() => {
                            setSidebarIsOpen((prevState) => !prevState);
                            closeSubmenusHandler();
                        }}
                        className="w-8 h-8 rounded-l-xl bg-blue text-white hidden xl:flex items-center text-xl justify-center absolute -left-8 top-4 z-[1001]"
                    >
                        {sidebarIsOpen ? (
                            <MdKeyboardArrowRight />
                        ) : (
                            <MdKeyboardArrowLeft />
                        )}
                    </button>
                    {/* Sidebar Content */}
                    <div
                        className={`mt-2.5 overflow-hidden transition-all duration-300`}
                    >
                        <ul className="flex flex-col gap-0.5 font-IranYekan-Medium text-2sm text-[#bec5cc] px-[15px]">
                            <Link
                                to="/"
                                className={`flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 rounded-md ${
                                    pathname === "/"
                                        ? "bg-blue text-white"
                                        : "hover:bg-[#2a3645]"
                                }`}
                            >
                                <BiHomeCircle
                                    className="shrink-0"
                                    size="20px"
                                />
                                <span
                                    className={`sidebar-menu-text ${
                                        sidebarIsOpen
                                            ? "xl:opacity-100"
                                            : "xl:opacity-0"
                                    }`}
                                >
                                    داشبورد
                                </span>
                            </Link>
                            <Link
                                to="/calendar"
                                className={`flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 rounded-md ${
                                    pathname.includes("calendar")
                                        ? "bg-blue text-white"
                                        : "hover:bg-[#2a3645]"
                                }`}
                            >
                                <FaRegCalendarAlt
                                    className="shrink-0"
                                    size="20px"
                                />
                                <span
                                    className={`sidebar-menu-text ${
                                        sidebarIsOpen
                                            ? "xl:opacity-100"
                                            : "xl:opacity-0"
                                    }`}
                                >
                                    تقویم
                                </span>
                            </Link>
                            <Link
                                to="/task-board"
                                className={`flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 rounded-md ${
                                    pathname.includes("task-board")
                                        ? "bg-blue text-white"
                                        : "hover:bg-[#2a3645]"
                                }`}
                            >
                                <BiGrid className="shrink-0" size="20px" />
                                <span
                                    className={`sidebar-menu-text ${
                                        sidebarIsOpen
                                            ? "xl:opacity-100"
                                            : "xl:opacity-0"
                                    }`}
                                >
                                    تخته وظایف
                                </span>
                            </Link>
                            <li
                                className={`overflow-hidden transition-all duration-300 ${
                                    showTransactionsSubmenu
                                        ? "bg-[#212e3d] h-[174px]"
                                        : "h-[42px]"
                                } rounded-md`}
                            >
                                <button
                                    onClick={() =>
                                        setShowTransactionsSubmenu(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${
                                        !showTransactionsSubmenu &&
                                        "hover:bg-[#2a3645]"
                                    } rounded-md ${
                                        pathname.includes("invoice") &&
                                        "bg-blue text-white"
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <BiFoodMenu
                                            className="shrink-0"
                                            size="20px"
                                        />
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            صورتحساب
                                        </span>
                                    </span>
                                    <MdKeyboardArrowLeft
                                        className="shrink-0"
                                        size="20px"
                                    />
                                </button>
                                <ul
                                    className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}
                                >
                                    <Link
                                        to="/invoice/list"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes("invoice/list") &&
                                            "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            لیست
                                        </span>
                                    </Link>
                                    <Link
                                        to="/invoice/preview"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "invoice/preview"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            پیش نمایش
                                        </span>
                                    </Link>
                                    <Link
                                        to="/invoice/add"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes("invoice/add") &&
                                            "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            افزودن
                                        </span>
                                    </Link>
                                </ul>
                            </li>
                            <Link
                                to="/users"
                                className={`flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 rounded-md ${
                                    pathname.includes("users")
                                        ? "bg-blue text-white"
                                        : "hover:bg-[#2a3645]"
                                }`}
                            >
                                <BiUser className="shrink-0" size="20px" />
                                <span
                                    className={`sidebar-menu-text ${
                                        sidebarIsOpen
                                            ? "xl:opacity-100"
                                            : "xl:opacity-0"
                                    }`}
                                >
                                    کاربران
                                </span>
                            </Link>
                            <Link
                                to="/pricing"
                                className={`flex items-center gap-2 py-2.5 px-3.5 transition-colors duration-300 rounded-md ${
                                    pathname.includes("pricing")
                                        ? "bg-blue text-white"
                                        : "hover:bg-[#2a3645]"
                                }`}
                            >
                                <BiDollar className="shrink-0" size="20px" />
                                <span
                                    className={`sidebar-menu-text ${
                                        sidebarIsOpen
                                            ? "xl:opacity-100"
                                            : "xl:opacity-0"
                                    }`}
                                >
                                    قیمت گذاری
                                </span>
                            </Link>
                            <li
                                className={`overflow-hidden transition-all duration-300 ${
                                    showRulesSubmenu
                                        ? "bg-[#212e3d] h-32"
                                        : "h-[42px]"
                                } rounded-md`}
                            >
                                <button
                                    onClick={() =>
                                        setShowRulesSubmenu(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${
                                        !showRulesSubmenu &&
                                        "hover:bg-[#2a3645]"
                                    } rounded-md ${
                                        pathname.includes(
                                            "rules&permissions"
                                        ) && "bg-blue text-white"
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <BiCheckShield
                                            className="shrink-0"
                                            size="20px"
                                        />
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            نقش‌ها و مجوزها
                                        </span>
                                    </span>
                                    <MdKeyboardArrowLeft
                                        className="shrink-0"
                                        size="20px"
                                    />
                                </button>
                                <ul
                                    className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}
                                >
                                    <Link
                                        to="/rules&permissions/ruleList"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes("ruleList") &&
                                            "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span>نقش‌ها</span>
                                    </Link>
                                    <Link
                                        to="/rules&permissions/permissionList"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "permissionList"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span>مجوزها</span>
                                    </Link>
                                </ul>
                            </li>
                            <li
                                className={`overflow-hidden transition-all duration-300 ${
                                    showUserProfileSubmenu
                                        ? "bg-[#212e3d] h-[216px]"
                                        : "h-[42px]"
                                } rounded-md`}
                            >
                                <button
                                    onClick={() =>
                                        setShowUserProfileSubmenu(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${
                                        !showUserProfileSubmenu &&
                                        "hover:bg-[#2a3645]"
                                    } rounded-md ${
                                        pathname.includes("/user/") &&
                                        "bg-blue text-white"
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <RiFileUserLine
                                            className="shrink-0"
                                            size="20px"
                                        />
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            پروفایل کاربر
                                        </span>
                                    </span>
                                    <MdKeyboardArrowLeft
                                        className="shrink-0"
                                        size="20px"
                                    />
                                </button>
                                <ul
                                    className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}
                                >
                                    <Link
                                        to="/user/profile"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/user/profile"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span>پروفایل</span>
                                    </Link>
                                    <Link
                                        to="/user/projects"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/user/projects"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span>پروژه‌ها</span>
                                    </Link>
                                    <Link
                                        to="/user/team"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes("/user/team") &&
                                            "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span>تیم‌ها</span>
                                    </Link>
                                    <Link
                                        to="/user/connections"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/user/connections"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span>اتصالات</span>
                                    </Link>
                                </ul>
                            </li>
                            <li
                                className={`overflow-hidden transition-all duration-300 ${
                                    showPanelSetting
                                        ? "bg-[#212e3d] h-[260px]"
                                        : "h-[42px]"
                                } rounded-md`}
                            >
                                <button
                                    onClick={() =>
                                        setShowPanelSetting(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className={`py-2.5 pl-2.5 pr-3.5 flex items-center justify-between transition-colors duration-300 gap-10 w-full ${
                                        !showPanelSetting &&
                                        "hover:bg-[#2a3645]"
                                    } rounded-md ${
                                        pathname.includes("/account-setting") &&
                                        "bg-blue text-white"
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <IoSettingsOutline
                                            className="shrink-0"
                                            size="20px"
                                        />
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            تنظیمات حساب
                                        </span>
                                    </span>
                                    <MdKeyboardArrowLeft
                                        className="shrink-0"
                                        size="20px"
                                    />
                                </button>
                                <ul
                                    className={`child-hover:bg-[#2a3645] flex flex-col gap-0.5`}
                                >
                                    <Link
                                        to="/account-setting/account"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/account-setting/account"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            حساب
                                        </span>
                                    </Link>
                                    <Link
                                        to="/account-setting/security"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/account-setting/security"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            امنیت
                                        </span>
                                    </Link>
                                    <Link
                                        to="/account-setting/plans"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/account-setting/plans"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            صورتحساب و پلن‌ها
                                        </span>
                                    </Link>
                                    <Link
                                        to="/account-setting/notifications"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/account-setting/notifications"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            اعلان‌ها
                                        </span>
                                    </Link>
                                    <Link
                                        to="/account-setting/connections"
                                        className={`flex items-center gap-[15px] py-2.5 px-[21px] transition-colors duration-300 rounded-md ${
                                            pathname.includes(
                                                "/account-setting/connections"
                                            ) && "bg-[#2a3645]"
                                        }`}
                                    >
                                        <span className="bg-[#bec5cc] rounded-full w-1.5 h-1.5"></span>
                                        <span
                                            className={`sidebar-menu-text ${
                                                sidebarIsOpen
                                                    ? "xl:opacity-100"
                                                    : "xl:opacity-0"
                                            }`}
                                        >
                                            اتصالات
                                        </span>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`w-full px-4 lg:px-8 xl:pl-8 relative transition-all duration-300 ${
                        sidebarIsOpen ? "xl:pr-72" : "xl:pr-24"
                    }`}
                >
                    {/*Dashboard Header  */}
                    <div
                        className={`h-16 ${
                            headerShadow
                                ? "shadow-[6px_4px_30px_0_rgba(38,60,85,0.12)]"
                                : ""
                        } flex items-center justify-between bg-[#f3f4f4] fixed left-0 right-0 top-0 z-[1000] transition-all duration-300 px-4 xl:pl-8 xl:pr-10 ${
                            sidebarIsOpen ? "xl:right-64" : "xl:right-20"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            {/* Menu Button  */}
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    setOpenMenu((prevState) => !prevState);
                                    closeSubmenusHandler();
                                }}
                                className="flex xl:hidden items-center gap-2 text-caption"
                                href="#"
                            >
                                <BiMenu size="24px" />
                            </a>
                            {/* Sidebar Menu Overlay */}
                            <Overlay
                                show={openMenu}
                                setShow={() => {
                                    setOpenMenu((prevState) => !prevState);
                                    closeSubmenusHandler();
                                }}
                                className="bg-secondary/15 xl:hidden"
                            />
                            {/* Search Btn */}
                            <a
                                onClick={(event) => {
                                    event.preventDefault();
                                    setShowSearchBox((prevState) => !prevState);
                                }}
                                className="flex items-center gap-2 text-caption"
                                href="#"
                            >
                                <BiSearchAlt size="24px" />
                                <span className="text-2sm font-IranYekan-Medium text-muted hidden md:flex gap-0.5">
                                    جستجو
                                    <span>(Ctrl+/)</span>
                                </span>
                            </a>
                            {/*  Sidebar Search Box  */}
                            <div
                                className={`absolute left-0 right-0 transition-all duration-300 ${
                                    showSearchBox ? "top-0" : "-top-[60px]"
                                } py-2.5 px-8 z-10 bg-white`}
                            >
                                <form
                                    className="flex items-center h-10 text-caption"
                                    action="#"
                                >
                                    <input
                                        className="outline-none w-full h-full font-IranYekan-Bold text-2sm py-2 pr-8"
                                        placeholder="جستجو..."
                                        type="text"
                                    />
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setShowSearchBox(false);
                                        }}
                                        className="flex items-center justify-center p-2 shrink-0"
                                    >
                                        <BiX size="24px" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a
                                className="flex items-center justify-center w-10 h-10 text-caption"
                                href="#"
                            >
                                <BiMoon size="24px" />
                            </a>

                            {/* Widgets */}
                            <div className="flex items-center justify-center w-10 h-10 text-caption relative">
                                <span
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowWidgets(
                                            (prevState) => !prevState
                                        );
                                    }}
                                    className="flex items-center justify-center cursor-pointer"
                                >
                                    <BiGridAlt size="24px" />
                                </span>
                                {/* Widgets Content Wrapper */}
                                <div
                                    ref={widgetsWrapper}
                                    className={`fixed sm:absolute z-50 left-4 sm:left-0 top-16 sm:top-full right-4 sm:right-auto sm:w-[352px] bg-white transition-all duration-300 rounded-md overflow-hidden shadow-md shadow-[rgba(147,158,170,0.45)] ${
                                        showWidgets
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible"
                                    }`}
                                >
                                    <div className="sticky top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b border-b-zinc">
                                        <span className="font-Estedad-Medium text-lg">
                                            میانبرها
                                        </span>
                                        <span className="flex items-center justify-center cursor-pointer">
                                            <BiPlusCircle size="24px" />
                                        </span>
                                    </div>
                                    <div
                                        id="widgets-wrapper"
                                        className="grid grid-cols-2 overflow-y-auto h-[440px]"
                                    >
                                        <WidgetBox
                                            href="#"
                                            caption="قرارهای ملاقات"
                                            title="تقویم"
                                        >
                                            <FaRegCalendarAlt size="20px" />
                                        </WidgetBox>
                                        <WidgetBox
                                            href="#"
                                            caption="مدیریت حساب&zwnj;ها"
                                            title="برنامه صورتحساب"
                                        >
                                            <BiFoodMenu size="20px" />
                                        </WidgetBox>
                                        <WidgetBox
                                            href="#"
                                            caption="مجوز&zwnj;ها"
                                            title="مدیریت نقش&zwnj;ها"
                                        >
                                            <BiCheckShield size="20px" />
                                        </WidgetBox>
                                        <WidgetBox
                                            href="#"
                                            caption="تنظیمات حساب"
                                            title="تنظیمات"
                                        >
                                            <IoSettingsOutline size="20px" />
                                        </WidgetBox>
                                        <WidgetBox
                                            href="#"
                                            caption="قرارهای ملاقات"
                                            title="تقویم"
                                        >
                                            <FaRegCalendarAlt size="20px" />
                                        </WidgetBox>
                                    </div>
                                </div>
                            </div>
                            {/*  Widgets Overlay  */}
                            <Overlay
                                show={showWidgets}
                                setShow={() =>
                                    setShowWidgets((prevState) => !prevState)
                                }
                            />

                            {/* Notifications */}
                            <div className="flex items-center justify-center w-10 h-10 text-caption relative">
                                <span
                                    onClick={() =>
                                        setShowNotifications(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className="flex items-center justify-center cursor-pointer"
                                >
                                    <BiBell size="24px" />
                                    <span className="bg-red text-white w-4 h-4 rounded-full flex items-center justify-center absolute top-1 left-1 font-IranYekan-Bold text-[9px]">
                                        5
                                    </span>
                                </span>
                                {/* Notifications Content Wrapper */}
                                <div
                                    ref={notificationsWrapper}
                                    className={`fixed sm:absolute z-50 bg-white left-4 sm:left-0 top-16 sm:top-full right-4 sm:right-auto sm:w-[352px] transition-all duration-300 rounded-md overflow-hidden shadow-md shadow-[rgba(147,158,170,0.45)] ${
                                        showNotifications
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible"
                                    }`}
                                >
                                    <div className="sticky top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b border-b-zinc">
                                        <span className="font-Estedad-Medium text-lg">
                                            اعلان ها
                                        </span>
                                        <span className="flex items-center justify-center cursor-pointer">
                                            <BiEnvelopeOpen size="24px" />
                                        </span>
                                    </div>
                                    <div
                                        id="widgets-wrapper"
                                        className="flex flex-col divide-y divide-zinc overflow-y-auto h-[440px]"
                                    >
                                        {notifications.map((notification) => (
                                            <NotificationBox
                                                key={notification.id}
                                                notifications={notifications}
                                                setNotifications={
                                                    setNotifications
                                                }
                                                {...notification}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/*  Notifications Overlay  */}
                            <Overlay
                                show={showNotifications}
                                setShow={() =>
                                    setShowNotifications(
                                        (prevState) => !prevState
                                    )
                                }
                            />

                            {/*  Profile  */}
                            <div className="mr-2.5 text-caption relative py-2">
                                <div
                                    onClick={() =>
                                        setShowProfile(
                                            (prevState) => !prevState
                                        )
                                    }
                                    className="flex items-center justify-center w-10 h-10 cursor-pointer relative"
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-full"
                                        src="/images/avatars/1.png"
                                        alt="user profile"
                                    />
                                    <span className="bg-success w-3 h-3 rounded-full border-2 border-white flex items-center justify-center absolute bottom-0 right-0 font-IranYekan-Bold"></span>
                                </div>
                                {/* Profile Content */}
                                <div
                                    className={`absolute z-50 bg-white left-0 top-full w-[224px] transition-all duration-300 rounded-md overflow-hidden shadow-md shadow-[rgba(147,158,170,0.45)] ${
                                        showProfile
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible"
                                    }`}
                                >
                                    <div className="border-b border-b-zinc py-1">
                                        <Link
                                            to="#"
                                            className="flex items-center gap-4 px-4 py-2 transition-colors duration-300 hover:bg-gray-light"
                                        >
                                            <div className="w-10 h-10 relative">
                                                <img
                                                    className="w-full h-full object-cover rounded-full"
                                                    src="/images/avatars/1.png"
                                                    alt="user profile"
                                                />
                                                <span className="bg-success w-3 h-3 rounded-full border-2 border-white flex items-center justify-center absolute bottom-0 right-0 font-IranYekan-Bold"></span>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <h6 className="font-IranYekan-Medium text-2sm">
                                                    جان اسنو
                                                </h6>
                                                <span className="text-2xs font-IranYekan-Medium">
                                                    مدیر
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="border-b border-b-zinc py-1">
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <BiUser size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                پروفایل من
                                            </span>
                                        </Link>
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <IoSettingsOutline size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                تنظیمات
                                            </span>
                                        </Link>
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <BiCreditCard size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                صورتحساب
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="py-1 border-b border-b-zinc">
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <BiSupport size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                راهنمایی
                                            </span>
                                        </Link>
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <BiHelpCircle size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                سوالات متداول
                                            </span>
                                        </Link>
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <BiDollar size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                قیمت گذاری
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="py-1">
                                        <Link
                                            className="flex items-center gap-2 py-2 px-4 hover:bg-gray-light transition-colors duration-300"
                                            to="#"
                                        >
                                            <BiPowerOff size="18px" />
                                            <span className="font-IranYekan-Medium text-2sm">
                                                خروج
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*  Profile Overlay  */}
                            <Overlay
                                show={showProfile}
                                setShow={() =>
                                    setShowProfile((prevState) => !prevState)
                                }
                            />
                        </div>
                    </div>
                    {/*  Outlet Content  */}
                    <div className="py-24">
                        <Outlet />
                    </div>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 m-auto bg-[#182535]/90 flex items-center justify-center z-[1999]">
                    <Loader
                        emptyColor="rgb(var(--color-secondary))"
                        filledColor="rgb(var(--color-primary))"
                        className="page-loader"
                    />
                </div>
            )}
        </>
    );
}
