import {useEffect, useState} from "react";
import {BiCheck} from "react-icons/bi";

export default function TimeActivityBox({ date, title, children, shapeColor, caption, lastItem, className}) {
    const [shadowColor, setShadowColor] = useState(null)

    useEffect(() => {
        if(shapeColor) {
            setShadowColor(shapeColor.replace(')', ',20%)').replace('rgb', 'rgba'))
        }
    }, []);
    return (
        <div className={`px-6 relative ${className}`}>
            <span style={{backgroundColor: shapeColor, boxShadow: `0 0 0 3px ${shadowColor}`}} className='absolute w-3 h-3 rounded-full -right-1.5 top-0'></span>
            <div className='flex items-center justify-between mb-2 flex-wrap gap-4'>
                <h4 className='font-IranYekan-Bold text-2sm text-title'>
                    {title}
                </h4>
                <span className='font-IranYekan-Bold text-2xs text-muted'>
                                            {date}
                                        </span>
            </div>
            <span className='font-IranYekan-Medium text-2sm mb-3 inline-block'>
                {caption}
                                        </span>
            {
                children
            }
            {
                lastItem && (
                    <span
                        className='flex items-center justify-center absolute top-full -right-2 w-4 h-4 rounded-full border-2 border-zinc text-zinc content-check bg-white'>
                <BiCheck size='12px'/>
            </span>
                )
            }
        </div>
    )
}