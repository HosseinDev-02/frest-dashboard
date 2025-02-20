import {BiCheck, BiCopy} from "react-icons/bi";
import {Alert} from "@mui/material";
import {useState} from "react";

export default function ApiBox({ title, apiKey, type, createdAt }) {

    const [apiCopiedSuccessfully, setApiCopiedSuccessfully] = useState(false)

    const copyAPIKeyHandler = () => {
        navigator.clipboard.writeText(apiKey)
        setApiCopiedSuccessfully(true)
        setTimeout(() => {
            setApiCopiedSuccessfully(false)
        }, 2000)
    }

    return (
        <>
            <div className='rounded bg-gray-50 p-4 font-IranYekan-Medium text-2sm'>
                <div className='flex items-center gap-4 mb-4'>
                    <h2 className='text-2xl text-title'>
                        {title}
                    </h2>
                    <span className='bg-blue/15 text-blue text-xs rounded font-IranYekan-Medium px-2 py-1'>
                    {type}
                </span>
                </div>
                <div className='flex items-center gap-4'>
                <span className='text-title'>
                    {apiKey}
                </span>
                    <span className='cursor-pointer' onClick={copyAPIKeyHandler}>
                    <BiCopy size='18px'/>
                </span>
                </div>
                <div className='mt-3'>
                    <span> ایجاد شده در {createdAt}</span>
                </div>
            </div>
            {
                <div className='fixed left-0 right-0 top-0 flex items-center justify-center z-[10000]'>
                    <Alert className={`!transition-all !duration-500 child:!m-0 !gap-1 ${apiCopiedSuccessfully ? '!opacity-100 !visible' : '!opacity-0 !invisible'}`} sx={{
                        bgcolor: 'rgba(90, 141, 238, 20%)',
                        color: 'rgb(90, 141, 238)',
                        fontFamily: 'IranYekan Medium'
                    }} icon={<BiCheck className='text-blue' size='18px'/>}>
                        کلید API با موفقیت کپی شد
                    </Alert>
                </div>
            }
        </>
    )
}