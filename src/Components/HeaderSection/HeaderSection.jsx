export default function HeaderSection({ title, caption }) {
    return (
    <div>
        <h1 className='text-2xl font-IranYekan-Medium text-title mb-6'>
            {title}
        </h1>
        <p className='font-IranYekan-Medium text-2sm leading-[30px] max-w-[512px] w-full'>
            {caption}
        </p>
    </div>
    )
}