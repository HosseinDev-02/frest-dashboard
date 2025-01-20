import * as Icons from "react-icons/bi";

export default function ProgressBar({title, value, icon, color, bgColor, percent, height}) {

    const Icon = Icons[icon]

    return (
        <div className='flex items-center gap-4'>
            {
                Icon && (
                    <div style={{backgroundColor: bgColor, color: color}}
                         className='flex items-center justify-center rounded-full w-8 h-8 shrink-0'>
                        <Icon size='18px'/>
                    </div>
                )
            }
            <div className='w-full'>
                <div className='flex items-center justify-between mb-2'>
                    <span className='font-IranYekan-Bold text-caption text-2sm'>{title}</span>
                    {value && <span className='font-IranYekan-Bold text-2sm text-muted'>{value}</span>}
                </div>
                <div style={{height: `${height ? height : '6'}px`}} className={`w-full bg-gray-light rounded`}>
                    <div style={{backgroundColor: color, width: percent}} className='h-full rounded'></div>
                </div>
            </div>
        </div>
    )
}