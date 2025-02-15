import {BiUser} from "react-icons/bi";

export default function UserTeamBox({ logo, role, title, members }) {
    return (
        <div className='flex items-start justify-between'>
            <div className='flex items-center gap-4'>
                <div className='w-[38px] h-[38px] rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src={logo} alt={title}/>
                </div>
                <div className='flex flex-col items-start font-IranYekan-Medium text-wrap'>
                    <span className='text-title text-2sm'>{title}</span>
                    <span className='text-muted text-2xs'>{members} عضو </span>
                </div>
            </div>
            <div
                className={`flex items-center justify-center rounded py-[5px] px-[9px] text-xs font-IranYekan-Medium shrink-0 ${role === 'توسعه دهنده' ? 'bg-red/15 text-red' : role === 'پشتیبانی' ? 'bg-blue/15 text-blue' : role === 'طراح' ? 'bg-cyan/15 text-cyan' : 'bg-secondary/15 text-secondary'}`}>
                {role}
            </div>
        </div>
    )
}