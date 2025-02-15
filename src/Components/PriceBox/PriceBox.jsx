import Box from "../Box/Box";
import {BiCheck, BiX} from "react-icons/bi";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function PriceBox({title, caption, monthlyPrice, annualPrice, isPopular, features}) {
    return (
        <Box className={`w-full ${isPopular ? '!border-2 !border-blue !shadow-blue/15' : 'border border-zinc !shadow-none'}`}>
            {/*  Price Header  */}
            <div className='border-b border-zinc'>
                <div className='mb-6 flex items-center justify-between'>
                    <h3 className='font-IranYekan-Medium text-title text-lg'>
                        {title}
                    </h3>
                    {
                        isPopular && (
                            <div
                                className='bg-blue text-white rounded-xl text-xs flex items-center justify-center font-IranYekan-Medium px-[9px] py-1'>
                                <span>محبوب</span>
                            </div>
                        )
                    }
                </div>
                <div className='flex items-end gap-1 font-IranYekan-Medium text-blue'>
                    <div className='text-4xl flex items-center gap-1'>{monthlyPrice} <span
                        className='text-3xl'>تومان</span></div>
                    <span className='text-lg text-muted'>/ ماهانه</span>
                </div>
                <div className='h-6 w-full mt-2'>
                    {
                        annualPrice && (
                            <div className='flex items-end gap-1 font-IranYekan-Bold text-muted text-2xs'>
                                <div className='flex items-center gap-1'>{annualPrice.toLocaleString()} تومان</div>
                                <span className=''>/ سال</span>
                            </div>
                        )
                    }
                </div>
                <p className='font-IranYekan-Medium text-2sm my-6'>
                    {caption}
                </p>
            </div>
            {/*  Price Content  */}
            <ul className='flex flex-col gap-4 mt-4 py-2 font-IranYekan-Medium text-2sm'>
                {
                    features.map(feature => (

                        <li key={feature.id} className='flex items-center gap-2'>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.isActive ? 'bg-blue/15 text-blue' : 'bg-[#e7ebef] text-caption'}`}>
                        {
                            feature.isActive ? (
                                <BiCheck size='18px'/>
                            ) : (
                                <BiX size='18px'/>
                            )
                        }
                    </span>
                            <span>
                         {feature.title}
                    </span>
                        </li>
                    ))
                }
            </ul>
            {/*  Price Button  */}
            <PrimaryButton className={`mt-5 ${!isPopular && '!bg-blue/15 !shadow-none !text-blue'}`} title='شروع کنید'/>
        </Box>
    )
}