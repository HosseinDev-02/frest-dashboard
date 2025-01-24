import * as Icons from "react-icons/bi";

export default function PrimaryButton({onClick, title, className, icon, iconSize}) {
    let Icon;
    if(icon) {
        Icon = Icons[icon]
    }
    return (
        <button onClick={onClick}
                className={`flex items-center justify-center gap-1 text-white bg-blue h-10 w-full font-IranYekan-Bold text-2sm text-center rounded py-2 px-[22px] shadow-sm shadow-[#939eaa66] transition-all hover:shadow-md hover:shadow-[#939eaa73] duration-300 hover:opacity-80 ${className}`}>
            {
                icon && (
                    <Icon size={iconSize}/>
                )
            }
            {title}
        </button>
    )
}