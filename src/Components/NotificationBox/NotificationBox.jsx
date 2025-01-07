import {BiX} from "react-icons/bi";
import {useState} from "react";

export default function NotificationBox({ notifications, setNotifications, title, id, caption, time, img, seen }) {

    const [isSaw, setIsSaw] = useState(seen)


    const removeNotificationHandler = notificationID => {
        let updatedNotifications = notifications.filter(notification => notification.id !== notificationID)
        setNotifications(updatedNotifications)
    }

    return (
        <div
            className='p-4 flex items-start gap-4 hover:bg-gray-light transition-colors duration-300 cursor-pointer group'>
                                            <span
                                                className='flex items-center justify-center rounded-full w-10 h-10 overflow-hidden shrink-0'>
                                                <img className='w-full h-full object-cover' src={img}
                                                     alt={title}/>
                                            </span>
            <div className='flex flex-col items-start gap-1 w-full'>
                <div className='flex items-center justify-between w-full'>
                    <h6 className='text-2sm/7 font-IranYekan-Medium text-title line-clamp-1'>
                        {title}
                    </h6>
                    <div className='w-5 h-5 flex items-center justify-center'>
                                                            <span onClick={() => setIsSaw(prevState => !prevState)}
                                                                className={`rounded-full w-2.5 h-2.5 transition-all duration-300 ${isSaw ? 'bg-secondary invisible opacity-0 group-hover:visible group-hover:opacity-100 ' : 'bg-blue'}`}></span>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <p className='text-2sm/7 font-IranYekan-Medium line-clamp-1'>
                        {
                            caption
                        }
                    </p>
                    <span onClick={() => removeNotificationHandler(id)} className='flex items-center justify-center opacity-0 invisible group-hover:visible group-hover:opacity-100'>
                                                    <BiX size='20px'/>
                                                </span>
                </div>
                <span className='text-2xs font-IranYekan-Medium text-muted'>
                                                    {
                                                        time
                                                    }
                                                </span>
            </div>
        </div>
    )
}