import {
    BiBell,
    BiCalendarAlt,
    BiDetail,
    BiGridAlt,
    BiGroup,
    BiLinkAlt,
    BiLockAlt,
    BiMap,
    BiPen,
    BiUser
} from "react-icons/bi";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import {Link, Outlet, useLocation} from "react-router-dom";
import React from "react";

export default function AccountSetting() {

    const locationObj = useLocation()
    const { pathname } = locationObj
    const urlParam = pathname.replace('/account-setting/', '')
    console.log(urlParam)


    return (
        <div className='container'>
            {/*  User Profile BreadCrumb  */}
            <div className='mb-6'>
                <ul className='flex text-2xl'>
                    <li className='relative px-4 text-muted'>
                        <span>تنظیمات حساب</span>
                    </li>
                    <li className='relative px-2'>
                        <span
                            className='before:absolute before:content-["/"] before:-right-2 text-title font-IranYekan-Medium before:top-1'>
                            حساب
                        </span>
                    </li>
                </ul>
            </div>

            {/*  User Profile Menu  */}
            <ul className='flex flex-col md:flex-row items-center font-IranYekan-Medium text-2sm my-6'>
                <Link to={'account'}
                      className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full md:w-auto cursor-pointer ${urlParam.includes('account') && 'bg-blue text-white'}`}>
                    <BiUser size='20px'/>
                    <span>حساب</span>
                </Link>
                <Link to={'security'}
                      className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full md:w-auto cursor-pointer ${urlParam.includes('security') && 'bg-blue text-white'}`}>
                    <BiLockAlt size='20px'/>
                    <span>امنیت</span>
                </Link>
                <Link to={'plans'}
                      className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full md:w-auto cursor-pointer ${urlParam.includes('plans') && 'bg-blue text-white'}`}>
                    <BiDetail size='20px'/>
                    <span>صورتحساب و پلن ها</span>
                </Link>
                <Link to={'notifications'}
                      className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full md:w-auto cursor-pointer ${urlParam.includes('notifications') && 'bg-blue text-white'}`}>
                    <BiBell size='20px'/>
                    <span>اعلان ها</span>
                </Link>
                <Link to={'connections'}
                      className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full md:w-auto cursor-pointer ${urlParam.includes('connections') && 'bg-blue text-white'}`}>
                    <BiLinkAlt size='20px'/>
                    <span>اتصلالات</span>
                </Link>
            </ul>

            {/*  User Profile Content  */}

            <Outlet/>
        </div>
    )
}