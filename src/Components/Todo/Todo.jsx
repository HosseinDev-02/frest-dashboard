import Box from "../Box/Box";
import {BiChat, BiPaperclip} from "react-icons/bi";
import {useSortable} from "@dnd-kit/sortable";
import Members from "../Members/Members";
import { CSS } from "@dnd-kit/utilities";

export default function Todo({todo, id}) {
    const {attributes, listeners, setNodeRef, transform, transition} =
        useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform) || "none",
        transition: transition || "none",
    }

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}
             className='p-4 rounded shadow shadow-black/16 bg-white h-full !cursor-move'>
            <div className='flex items-center justify-start mb-3'>
                <h6 style={{
                    backgroundColor: `${todo?.label?.color.replace(')', ',15%)').replace('rgb', 'rgba')}`,
                    color: `${todo?.label?.color}`
                }} className='text-xs rounded-xl font-IranYekan-Bold py-1 px-2'>
                    {todo?.label?.title}
                </h6>
            </div>
            <div dangerouslySetInnerHTML={{__html: todo?.content}}>

            </div>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex items-center gap-3'>
                    <div className='flex items-center gap-1 text-2sm font-IranYekan-Medium'>
                        <BiPaperclip size='18px'/>
                        {todo?.attachments}
                    </div>
                    <div className='flex items-center gap-1 text-2sm font-IranYekan-Medium'>
                        <BiChat size='18px'/>
                        {todo?.comments}
                    </div>
                </div>
                <Members data={todo?.members}/>
            </div>
        </div>
    );
}