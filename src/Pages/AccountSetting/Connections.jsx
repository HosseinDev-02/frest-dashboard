import Box from "../../Components/Box/Box";
import UserConnectionBox from "../../Components/UserConnectionBox/UserConnectionBox";
import Input from "../../Components/Input/Input";
import {useState} from "react";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";

const connectedAccounts = [
    {
        id: 1,
        title: 'گوگل',
        caption: 'تقویم و مخاطبین',
        icon: '/images/icons/google.png',
        status: true
    },
    {
        id: 2,
        title: 'اسلک',
        caption: 'ارتباطات',
        icon: '/images/icons/slack.png',
        status: false
    },
    {
        id: 3,
        title: 'گیت هاب',
        caption: 'مخازن گیت خود را مدیریت کنید',
        icon: '/images/icons/github.png',
        status: true
    },
    {
        id: 4,
        title: 'میل چیمپ',
        caption: 'خدمات بازاریابی ایمیل',
        icon: '/images/icons/mailchimp.png',
        status: true
    },
    {
        id: 5,
        title: 'آسانا',
        caption: 'ارتباطات',
        icon: '/images/icons/asana.png',
        status: false
    },
]

const socialAccounts = [
    {
        id: 1,
        title: 'فیسبوک',
        icon: '/images/icons/facebook.png',
        isActive: false
    },
    {
        id: 2,
        title: 'توییتر',
        icon: '/images/icons/twitter.png',
        isActive: true,
        link: 'twitter.com/GRID_LAND',
        username: '@GRID_LAND'
    },
    {
        id: 3,
        title: 'اینستاگرام',
        icon: '/images/icons/instagram.png',
        isActive: true,
        link: 'instagram.com/GRID_LAND',
        username: '@GRID_LAND'
    },
    {
        id: 4,
        title: 'دریبل',
        icon: '/images/icons/dribbble.png',
        isActive: false
    },
    {
        id: 5,
        title: 'بی هانس',
        icon: '/images/icons/behance.png',
        isActive: false
    },
]

export default function Connections() {

    const [userConnectedAccounts, setUserConnectedAccounts] = useState(connectedAccounts)
    const [userSocialAccounts, setUserSocialAccounts] = useState(socialAccounts)

    const onChangeHandler = itemID => {
        let updatedItems = userConnectedAccounts.map(item => {
            if(item.id === itemID) {
                item.status = !item.status
            }
            return item
        })
        setUserConnectedAccounts(updatedItems)
        console.log(updatedItems)
    }

    return (
        <div className='grid grid-cols-2 gap-6'>
            <Box>
                <div className='flex flex-col items-start'>
                    <h3 className='font-IranYekan-Medium text-lg text-title mb-[22px]'>
                        حساب های متصل
                    </h3>
                    <span className='font-IranYekan-Medium text-2sm inline-block mb-4'>
                        محتوا را از حساب های متصل بر روی سایت خود نمایش دهید.
                </span>
                </div>
                <div className='flex flex-col gap-6'>
                    {
                        userConnectedAccounts.map(item => (
                            <UserConnectionBox title={item.title} img={item.icon} caption={item.caption} renderButton={() => (
                                <Input onChange={() => onChangeHandler(item.id)} checked={item.status} checkIcon='BiCheck' uncheckIcon='BiX' type='checkbox'/>
                            )}/>
                        ))
                    }
                </div>
            </Box>

            <Box>
                <div className='flex flex-col items-start'>
                    <h3 className='font-IranYekan-Medium text-lg text-title mb-[22px]'>
                        حساب های اجتماعی
                    </h3>
                    <span className='font-IranYekan-Medium text-2sm inline-block mb-4'>
                        محتوا را از حساب های اجتماعی بر روی سایت خود نمایش دهید
                </span>
                </div>
                <div className='flex flex-col gap-6'>
                    {
                        userSocialAccounts.map(item => (
                            <UserConnectionBox title={item.title} img={item.icon} connection
                                               renderCaption={() => (
                                                   <>
                                                       {
                                                           item.isActive ? (
                                                               <a className='font-IranYekan-Medium text-2sm text-blue'
                                                                  href={item.link}>{item.username}</a>
                                                           ) : (
                                                               <span className='font-IranYekan-Medium text-2sm'>
                                                                    متصل نشده
                                                               </span>
                                                           )
                                                       }
                                                   </>
                                               )}
                                               renderButton={() => (
                                                   <>
                                                       {
                                                           item.isActive ? (
                                                               <PrimaryButton iconSize={20} className='!bg-red/10 !text-red !w-[38px] !h-[38px] !shadow-none !opacity-100 hover:!bg-red hover:!text-white' icon='BiTrashAlt'/>
                                                           ) : (
                                                               <SecondaryButton iconSize={20} className='!w-[38px] !h-[38px]' icon='BiLinkAlt'/>
                                                           )
                                                       }
                                                   </>
                                               )}/>
                        ))
                    }
                </div>
            </Box>
        </div>
    )
}