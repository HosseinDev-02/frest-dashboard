import {BiUser} from "react-icons/bi";

export default function UserConnectionBox({ img, active, title, connection  }) {
    return(
        <div className='flex items-start justify-between'>
            <div className='flex items-center gap-4'>
                <div className='w-[38px] h-[38px] rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={img} alt={title}/>
                </div>
                <div className='flex flex-col items-start font-IranYekan-Medium text-wrap'>
                    <span className='text-title text-2sm'>{title}</span>
                    <span className='text-muted text-2xs'>{connection} اتصال </span>
                </div>
            </div>
            <div className={`flex items-center justify-center rounded w-[30px] h-[30px] shrink-0 ${active ? 'bg-blue text-white' : 'bg-blue/15 text-blue'}`}>
                <BiUser size='20px'/>
            </div>
        </div>
    )
}