import Box from "../Box/Box";
import {BiChat, BiDotsVerticalRounded} from "react-icons/bi";
import ProgressBar from "../ProgressBar/ProgressBar";
import Members from "../Members/Members";

export default function ProjectBox({icon, title, caption, customerName, startDate, endDate, totalPrice, received, leftDays, totalTime, goneTime ,tasksDone , completePercent, tasks, members, comments }) {

    const formaterNumber = number => {
        return new Intl.NumberFormat('en', {
            notation: 'compact'
        }).format(number)
    }

    return (
        <Box className='!p-0'>
            <div className='font-IranYekan-Medium text-2sm'>
                {/*  Project Box Content  */}
                <div>
                    {/*  Content Header  */}
                    <div className='flex flex-wrap gap-4 items-start justify-between p-[22px]'>
                        <div className='flex flex-wrap items-start gap-4'>
                            <div className='w-[38px] h-[38px] flex flex-wrap gap-4 items-center justify-center rounded-full overflow-hidden'>
                                <img className='w-full h-full object-cover' src={icon} alt={title}/>
                            </div>
                            <div className='flex flex-wrap flex-col gap-2'>
                                <span className='text-title text-lg'>{title}</span>
                                <div className='flex flex-wrap items-center gap-1'>
                                    <span className='text-title'>مشتری:</span>
                                    <span className='font-IranYekan-Regular'>{customerName}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <BiDotsVerticalRounded size='18px'/>
                        </div>
                    </div>
                    {/*  Content Body  */}
                    <div className='pb-[22px] px-[22px] border-b border-zinc'>
                        <div className='flex flex-wrap gap-4 justify-between mb-4'>
                            <div className='rounded bg-gray-50 flex flex-wrap flex-col items-start gap-2 p-2'>
                                <div className='flex flex-wrap gap-1'>
                                    <div className='flex flex-wrap items-center gap-1 text-title'>
                                        <span>{formaterNumber(totalPrice)}</span>
                                        <span>تومان</span>
                                    </div>
                                    <span>/</span>
                                    <div className='flex flex-wrap items-center gap-1 font-IranYekan-Regular'>
                                        <span>{formaterNumber(received)}</span>
                                        <span>تومان</span>
                                    </div>
                                </div>
                                <span className='font-IranYekan-Regular'>
                                    کل بودجه
                                </span>
                            </div>
                            <div className='flex flex-wrap flex-col justify-center gap-2'>
                                <div className='flex flex-wrap items-center gap-1'>
                                    <span className='text-title'>تاریخ شروع:</span>
                                    <span className='font-IranYekan-Regular'>{startDate}</span>
                                </div>
                                <div className='flex flex-wrap items-center gap-1'>
                                    <span className='text-title'>تاریخ تحویل:</span>
                                    <span className='font-IranYekan-Regular'>{endDate}</span>
                                </div>
                            </div>
                        </div>
                        <p className='leading-loose'>
                            {caption}
                        </p>
                    </div>
                </div>
                {/*  Project Box Footer  */}
                <div className='p-[22px]'>
                    {/*  Project Times  */}
                    <div className='flex flex-wrap gap-4 items-center justify-between mb-4'>
                        <div className='flex flex-wrap items-center gap-1'>
                            <span className='text-title'>تمام ساعت ها:</span>
                            <span>{totalTime} / {goneTime}</span>
                        </div>
                        <div className='text-xs px-[9px] py-[3px] rounded flex flex-wrap items-center gap-1 justify-center bg-red/15 text-red'>
                            <span>{leftDays}</span>
                            <span>روز باقی مانده</span>
                        </div>
                    </div>
                    {/*  Project Process  */}
                    <div className='flex flex-wrap flex-col gap-2'>
                        <div className='flex flex-wrap items-center gap-4 justify-between text-2xs font-IranYekan-Bold'>
                            <div className='flex flex-wrap items-center gap-1'>
                                <span>وظیفه:</span>
                                <span>{tasks}/{tasksDone}</span>
                            </div>
                            <div className='flex flex-wrap items-center gap-1'>
                                <span>{completePercent}</span>
                                <span>تکمیل شده</span>
                            </div>
                        </div>
                        <ProgressBar height={8} color='rgb(90,141,238)' percent={completePercent}/>
                    </div>
                    {/*  Project Members & Comments  */}
                    <div className='flex flex-wrap gap-4 items-center justify-between mt-4'>
                        <div className='flex flex-wrap items-center gap-1 text-2xs font-IranYekan-Bold'>
                            <Members data={members}/>
                            <span>{members.length} عضو </span>
                        </div>
                        <div className='flex flex-wrap items-center gap-1'>
                            <BiChat size='18px'/>
                            <span>{comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}