export default function Members({ data, imgSize }){
    return (
        <div
            className='relative flex'>
            {
                data.map((item, index) => (
                    <a key={index + 1} style={{ width: `${imgSize ? imgSize : 24}px`, height: `${imgSize ? imgSize : 24}` }} className={`flex items-center justify-center rounded-full border-2 border-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50 ${index !== 0 && '-mr-3'}`}
                       href="#">
                        <img className='w-full h-full object-cover' src={item}
                             alt="member_name"/>
                    </a>
                ))
            }
        </div>
    )
}