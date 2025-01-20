export default function UserBox({ img, title, caption, imgSize, titleSize, captionSize }) {
    return (
        <div className='flex items-center gap-4'>
            <div style={{width: `${imgSize ? imgSize : 56}px`, height: `${imgSize ? imgSize : 56}px`}}
                className='rounded-full overflow-hidden flex items-center justify-center w-14 h-14'>
                <img className='w-full h-full object-cover' src={img}
                     alt="person_one"/>
            </div>
            <div className='flex flex-col items-start gap-1'>
                <h3 style={{fontSize: `${titleSize ? titleSize : 16}px`}} className='font-IranYekan-Medium text-title text-lg'>
                    {title}
                </h3>
                <span style={{fontSize: `${captionSize ? captionSize : 16}px`}} className='font-IranYekan-Bold text-2xs text-muted'>
                                        {caption}
                                    </span>
            </div>
        </div>
    )
}