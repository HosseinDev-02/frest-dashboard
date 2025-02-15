import {BiDotsVerticalRounded, BiMenu, BiStar} from "react-icons/bi";
import Members from "../Members/Members";
import Box from "../Box/Box";

export default function TeamBox(props) {

    const skillColorCondition = skill => {
        return ` ${(skill === 'توییتر' || skill === 'REACT') && 'text-blue bg-blue/15'} 
        ${(skill === 'VUE.JS' || skill === 'SKETCH' || skill === 'HTML') && 'text-orange bg-orange/15'}
        ${(skill === 'توسعه دهنده' || skill === 'XD') && 'text-red bg-red/15'}
        ${(skill === 'HUBILO' || skill === 'فتوشاپ' || skill === 'ایمیل') && 'text-success bg-success/15'}
        ${(skill === 'CSS' || skill === 'ZENDESK') && 'text-cyan bg-cyan/15'}
        ${(skill === 'فیگما') && 'text-secondary bg-secondary/15'}
        `
    }
    const { icon, members, skills, title, caption } = props
    return (
        <Box>
            <div className='flex flex-col justify-between h-full'>
                {/*  Team Box Header  */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-full overflow-hidden flex items-center justify-center'>
                            <img className='w-full h-full object-cover' src={icon} alt={title}/>
                        </div>
                        <span className='font-IranYekan-Bold text-lg'>
                        {title}
                    </span>
                    </div>
                    <div className='flex items-center gap-1'>
                    <span>
                        <BiStar size='18px'/>
                    </span>
                        <span>
                        <BiDotsVerticalRounded size='18px'/>
                    </span>
                    </div>
                </div>
                {/*  Team Box Caption  */}
                <p className='my-4 font-IranYekan-Medium text-2sm leading-loose'>
                    {caption}
                </p>
                {/*  Team Box Footer  */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <Members data={members}/>
                        <span className='font-IranYekan-Medium text-2sm text-muted'>
                        {members?.length}+
                    </span>
                    </div>
                    <div className='flex items-center gap-1'>
                        {
                            skills?.map((skill, index) => (
                                <span key={index + 1} className={`font-IranYekan-Medium text-xs rounded-[0.1875rem] px-[9px] py-1 ${skillColorCondition(skill)}`}>
                                {skill}
                            </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Box>
    )
}