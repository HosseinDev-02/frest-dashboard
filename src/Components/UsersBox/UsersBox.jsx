import * as Icons from "react-icons/bi";
import Box from "../Box/Box";

export default function UsersBox({ title, count, percent, caption, icon, iconColor }) {

    const Icon = Icons[icon]
    const mainBgColor = iconColor.replace(')', ', 15%').replace('rgb', 'rgba')  //rgb(255, 255, 255)

    return (
        <Box className='!w-full'>
            <div className='flex items-start justify-between'>
                <div className='flex flex-col items-start'>
                    <h6 className='text-2sm font-IranYekan-Medium'>
                        {title}
                    </h6>
                    <div className='flex gap-2 items-end my-2'>
                    <span className='font-IranYekan-Bold text-title text-xl'>
                        {count.toLocaleString()}
                    </span>
                        <span className={`font-IranYekan-Bold ${percent > 0 ? 'text-success' : 'text-red'} text-2xs`}>
                        ({percent > 0 && '+'}{percent}%)
                    </span>
                    </div>
                    <span className='text-2xs font-IranYekan-Bold'>
                    {caption}
                </span>
                </div>
                <div style={{ backgroundColor: mainBgColor, color: iconColor }} className='text-blue bg-blue/20 h-10 w-10 flex items-center justify-center rounded'>
                    <Icon size='24px'/>
                </div>
            </div>
        </Box>
    )
}