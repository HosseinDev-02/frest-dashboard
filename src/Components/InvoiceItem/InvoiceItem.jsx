import Input from "../Input/Input";
import React, {useState} from "react";
import {BiCog, BiX} from "react-icons/bi";

export default function InvoiceItem ({ mainInvoiceData, removeItemHandler  }) {
    const [showContent, setShowContent] = useState(false)
    const [items, setItems] = useState([
        {id: 1, title: 'طراحی برنامه'},
        {id: 2, title: 'سفارشی سازی برنامه'},
        {id: 3, title: 'قالب ABC'},
        {id: 4, title: 'توسعه برنامه'}
    ])
    const [selectedItem, setSelectedItem] = useState(null)
    return (
        <div>
            <div className='flex justify-between rounded border border-zinc'>
                <div className='grid w-full grid-cols-1 md:grid-cols-12 gap-6 p-4 relative'>
                    {/*  Invoice mainInvoiceData Header  */}
                    <div className='absolute left-0 right-0 -top-6 w-full hidden md:grid grid-cols-12 gap-6 px-4 font-IranYekan-Medium text-2sm'>
                        <div className='col-span-6'>مورد</div>
                        <div className='col-span-3'>هزینه</div>
                        <div className='col-span-2'>تعداد</div>
                        <div className='col-span-1'>قیمت</div>
                    </div>
                    <div className='md:col-span-6 flex flex-col gap-2 items-start md:block'>
                        <span className='font-IranYekan-Medium text-2sm md:hidden'>مورد</span>
                        <div className='w-full'>
                            <Input className='!w-auto !shrink-0 min-w-52'
                                   setShowContent={setShowContent} showContent={showContent}
                                   type='selectbox'
                                   placeholder={mainInvoiceData?.title || (selectedItem !== null ? selectedItem.title : 'انتخاب مورد')}>
                                <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                    <li onClick={() => {
                                        setSelectedItem(null)
                                        setShowContent(false)
                                    }}
                                        className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب مورد</span>
                                    </li>
                                    {
                                        items.map(mainInvoiceData => (
                                            <li key={mainInvoiceData.id} onClick={() => {
                                                setSelectedItem(mainInvoiceData)
                                                setShowContent(false)
                                            }}
                                                className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{mainInvoiceData.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Input>
                            <Input value={mainInvoiceData?.description || null} inputClassName='!h-20' placeholder='اطلاعات مورد' type='textarea'/>
                        </div>
                    </div>
                    <div className='md:col-span-3 space-y-6 md:space-y-0'>
                        <div className='flex flex-col gap-2 items-start font-IranYekan-Medium text-2sm'>
                            <span className='md:hidden'>هزینه</span>
                            <Input value={mainInvoiceData?.total?.toLocaleString() || null} type='text' placeholder='00'/>
                        </div>
                        <div className='flex flex-col items-start gap-1 text-2sm font-IranYekan-Medium'>
                            <span className='md:hidden'>تعداد</span>
                            <div className='flex gap-1 mt-2'>
                                <span>تخفیف:</span>
                                <span>%0</span>
                            </div>
                        </div>
                    </div>
                    <Input value={mainInvoiceData?.count || null} type='number' placeholder='1' className='md:col-span-2' label='قیمت'
                           labelClassName='md:hidden !font-IranYekan-Medium !text-2sm'/>
                    <div className='font-IranYekan-Medium text-2sm flex flex-col gap-2'>
                        <span className='md:hidden'>
                            قیمت
                        </span>
                        <div
                            className='md:col-span-1 flex md:flex-col items-center gap-x-1 md:items-start'>
                            <span>{mainInvoiceData?.price || '24,000'}</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center p-2 border-r border-zinc text-muted'>
                <span onClick={removeItemHandler} className='cursor-pointer'>
                    <BiX size='20px'/>
                </span>
                    <span className='cursor-pointer'>
                    <BiCog size='20px'/>
                </span>
                </div>
            </div>
        </div>
    )
}