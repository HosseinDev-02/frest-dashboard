import * as Icons from "react-icons/bi";
import {BiUser} from "react-icons/bi";

export default function UserInfoBox({renderShape, title, caption, renderCaption, image, connected, captionClassName, className, icon, iconSize, iconClassName}) {
    let Icon;
    Icon = Icons[icon]

    return (
        <div className={`flex items-start justify-between bg-white ${className}`}>
            <div className='flex items-center gap-4'>
                {
                    image && (
                        <div className='w-[38px] h-[38px] rounded-full overflow-hidden'>
                            <img className='w-full h-full object-cover' src={image} alt={title}/>
                        </div>
                    )
                }
                <div className='flex flex-col items-start font-IranYekan-Medium text-wrap'>
                    <span className='text-title text-2sm'>{title}</span>
                    {
                        renderCaption ? (
                            <>
                                {renderCaption()}
                            </>
                        ) : (
                            <span className={`text-muted text-2xs ${captionClassName}`}>
                                {caption}
                            </span>
                        )
                    }
                </div>
            </div>
            {
                renderShape ? (
                    <>
                        {
                            renderShape()
                        }
                    </>
                ) : (
                    <div
                        className={`flex items-center justify-center rounded w-[30px] h-[30px] shrink-0 ${connected ? 'bg-blue text-white' : 'bg-blue/15 text-blue'} ${iconClassName}`}>
                        {
                            icon ? (
                                <Icon size={iconSize}/>
                            ) : (
                                <BiUser size='20px'/>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}