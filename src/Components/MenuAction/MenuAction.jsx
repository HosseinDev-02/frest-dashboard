import {BiDotsVerticalRounded, BiEdit, BiTrash} from "react-icons/bi";
import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function MenuAction({deleteHandler, editHandler, link, className}) {
    const [show, setShow] = useState(false)
    return (
        <div className={`h-full w-full flex items-center justify-start ${className}`}>
            <div className='relative'>
                        <span onClick={() => setShow(prevState => !prevState)} className='cursor-pointer flex items-center justify-center h-full'>
                        <BiDotsVerticalRounded size='20px'/>
                    </span>
                <div
                    className={`flex flex-col gap-3 bg-white absolute top-full right-0 z-50 shadow-sm px-4 py-2 rounded ${show ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    {
                        link ? (
                            <Link to={link} className='cursor-pointer'>
                            <BiEdit size='16px'/>
                        </Link>
                        ) : (
                            <span onClick={() => editHandler()} className='cursor-pointer'>
                            <BiEdit size='16px'/>
                        </span>
                        )
                    }
                    <span onClick={() => deleteHandler()} className='cursor-pointer'>
                            <BiTrash size='16px'/>
                        </span>
                </div>
            </div>
        </div>
    )
}