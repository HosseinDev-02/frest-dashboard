import {Link, Outlet, useLocation} from "react-router-dom";
import React from "react";
import {BiCalendarAlt, BiGridAlt, BiGroup, BiLinkAlt, BiMap, BiPen, BiUser} from "react-icons/bi";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";

export default function UserProfile() {

    const locationObj = useLocation()

    return (
        <div className='container'>
            {/*  User Profile BreadCrumb  */}
            <div className='mb-6'>
                <ul className='flex text-2xl'>
                    <li className='relative px-4 text-muted'>
                        <span>پروفایل کاربر</span>
                    </li>
                    <li className='relative px-2'>
                        <span
                            className='before:absolute before:content-["/"] before:-right-2 text-title font-IranYekan-Medium before:top-1'>
                            {
                                locationObj.pathname.includes('profile') ? 'پروفایل' : locationObj.pathname.includes('connections') ? 'اتصالات' : locationObj.pathname.includes('projects') ? 'پروژه ها' : locationObj.pathname.includes('team') ? 'تیم' : ''
                            }
                        </span>
                    </li>
                </ul>
            </div>
            {/*  User Profile Header  */}
            <div className='shadow shadow-black/10 rounded overflow-hidden'>
                <div className='flex items-center justify-center h-[150px] sm:h-[250px]'>
                    <img className='w-full h-full object-cover' src="/images/profile-banner.png" alt="profile banner"/>
                </div>
                <div className='px-6 pb-6 bg-white flex flex-col items-center sm:items-start sm:flex-row gap-6'>
                    <div
                        className='w-[120px] h-[120px] flex items-center justify-center rounded overflow-hidden border-[5px] border-white shrink-0 -mt-8'>
                        <img className='w-full h-full object-cover' src="/images/avatars/2.png" alt="user image"/>
                    </div>
                    <div className='flex flex-col md:flex-row items-center sm:items-start md:items-end w-full justify-between gap-6 sm:pt-6'>
                        <div className='flex flex-col items-center sm:items-start justify-between gap-6'>
                            <span className='font-IranYekan-Medium text-2xl'>
                                جان اسنو
                            </span>
                            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4 text-2sm font-IranYekan-Bold'>
                                <div className='flex items-center gap-1'>
                                    <BiPen size='18px'/>
                                    <span>طراح UX</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiMap size='18px'/>
                                    <span>شهر تبریز</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <BiCalendarAlt size='18px'/>
                                    <span>عضویت در فروردین 1400</span>
                                </div>
                            </div>
                        </div>
                        <PrimaryButton title='متصل' iconSize='18px' icon='BiUserCheck' className='!w-auto'/>
                    </div>
                </div>
            </div>

            {/*  User Profile Menu  */}
            <ul className='flex flex-col sm:flex-row items-center font-IranYekan-Medium text-2sm my-6'>
                <Link to={'profile'} className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full sm:w-auto cursor-pointer ${locationObj.pathname.includes('profile') && 'bg-blue text-white'}`}>
                    <BiUser size='20px'/>
                    <span>پروفایل</span>
                </Link>
                <Link to={'projects'} className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full sm:w-auto cursor-pointer ${locationObj.pathname.includes('projects') && 'bg-blue text-white'}`}>
                    <BiGridAlt size='20px'/>
                    <span>پروژه ها</span>
                </Link>
                <Link to={'team'} className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full sm:w-auto cursor-pointer ${locationObj.pathname.includes('team') && 'bg-blue text-white'}`}>
                    <BiGroup size='20px'/>
                    <span>تیم ها</span>
                </Link>
                <Link to={'connections'} className={`rounded py-2 px-[22px] flex items-center justify-center gap-1 w-full sm:w-auto cursor-pointer ${locationObj.pathname.includes('connections') && 'bg-blue text-white'}`}>
                    <BiLinkAlt size='20px'/>
                    <span>اتصلالات</span>
                </Link>
            </ul>

            {/*  User Profile Content  */}

            <Outlet/>
        </div>
    )
}