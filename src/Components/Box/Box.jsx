
export default function Box({ children, className }) {
    return (
        <div className='p-[22px] rounded shadow shadow-black/16 bg-white h-full'>
            {
                children
            }
        </div>
    )
}