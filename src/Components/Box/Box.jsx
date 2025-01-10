
export default function Box({ children }) {
    return (
        <div className='p-[22px] rounded shadow shadow-black/16'>
            {
                children
            }
        </div>
    )
}