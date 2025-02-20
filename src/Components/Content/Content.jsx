import {BiX} from "react-icons/bi";
import Overlay from "../Overlay/Overlay";

export default function Content({ title, children, showContent, clickHandler, className, contentClassName, headerContentClassName }) {
    return (
        <>
            <div
                className={`fixed transition-all duration-300 top-0 bottom-0 w-full max-w-[400px] bg-white z-[1200] ${showContent ? 'left-0' : '-left-[400px]'} ${className}`}>
                {/*  Add Event Wrapper Header  */}
                <div className={`flex items-center justify-between px-6 py-5 border-b border-b-zinc ${headerContentClassName}`}>
                    <h6 className='font-IranYekan-Bold text-2sm'>
                        {title}
                    </h6>
                    <span onClick={clickHandler}
                          className='cursor-pointer text-muted flex items-center justify-center'>
                                <BiX size='24px'/>
                            </span>
                </div>
                {/*  Add Event Wrapper Body  */}
                <div className={`p-6 flex flex-col items-start gap-4 ${contentClassName}`}>
                    {
                        children
                    }
                </div>
            </div>
            <Overlay className='!bg-black/50 !z-[1199]' show={showContent} setShow={clickHandler}/>
        </>
    )
}