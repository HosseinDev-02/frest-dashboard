import {useDroppable} from "@dnd-kit/core";

export default function TodoContainer({id, children}) {
    const {setNodeRef} = useDroppable({id});
    return (
        <div
            ref={setNodeRef}
            className='w-[260px] shrink-0'
        >
            <div className='p-[15px]'>
                <h3 className='font-IranYekan-Bold text-title text-lg'>
                    {id === 'progressing' && 'درحال پیشرفت'}
                    {id === 'checking' && 'درحال بازبینی'}
                    {id === 'done' && 'انجام شده'}
                </h3>
            </div>
            <div className='flex flex-col gap-4 '>
                {children}
            </div>
        </div>
    );
}