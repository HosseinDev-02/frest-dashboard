export default function Members({ data }){
    return (
        <div
            className='relative flex'>
            {
                data.map((item, index) => (
                    <a key={index + 1} className={`flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50 ${index !== 0 && '-mr-3'}`}
                       href="#">
                        <img className='w-full h-full object-cover' src={item}
                             alt="member_name"/>
                    </a>
                ))
            }
            {/*<a className='flex items-center justify-center rounded-full border-2 border-white w-6 h-6 overflow-hidden -mr-3 transition-all duration-300 hover:-translate-y-2 hover:z-50 hover:shadow-md hover:shadow-secondary/50'*/}
            {/*   href="#">*/}
            {/*    <img className='w-full h-full object-cover' src="/images/avatars/4.png"*/}
            {/*         alt="member_name"/>*/}
            {/*</a>*/}
        </div>
    )
}