export default function PriceSectionHeader({ title, caption }) {
    return (
        <div className='flex flex-col gap-6 items-center text-center'>
            <h1 className='font-Estedad-Medium text-title text-3xl'>
                {title}
            </h1>
            <span className='font-IranYekan-Medium text-2sm'>
                            {caption}
                        </span>
        </div>
    )
}