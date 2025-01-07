import {Link} from "react-router-dom";

export default function WidgetBox({children, title, caption, href}) {
    return (
        <Link
            className='flex flex-col odd:border-b odd:border-b-zinc odd:border-l odd:border-l-zinc even:border-b even:border-b-zinc items-center justify-center p-6 transition-colors duration-300 hover:bg-gray-50'
            to={`${href ? href : '#'}`}>
                                            <span
                                                className='w-12 h-12 rounded-full flex items-center justify-center bg-[#e7ebef] text-secondary'>
                                                {
                                                    children
                                                }
                                            </span>
            <h6 className='text-caption font-IranYekan-Bold text-2sm/7 mt-2 mb-1'>
                {title}
            </h6>
            <span className='text-xs font-IranYekan-Bold text-muted'>
                                                {caption}
                                            </span>
        </Link>
    )
}