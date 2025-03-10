import Box from "../../Components/Box/Box";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import React, {useEffect, useState} from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Input from "../../Components/Input/Input";
import {countries as userCountries} from "../../Utils/Users";
import {invoicesData, invoicesStatus as invoices} from "../../Utils/Invoices";
import MenuAction from "../../Components/MenuAction/MenuAction";
import {
    BiAdjust, BiChevronDown,
    BiChevronUp,
    BiDownArrowCircle,
    BiEdit,
    BiInfoCircle,
    BiPaperPlane,
    BiTrash,
    BiTrendingUp
} from "react-icons/bi";
import {Link} from "react-router-dom";
import {DataGrid} from "@mui/x-data-grid";
import MyPagination from "../../Components/MyPagination/MyPagination";
import {styled, Tooltip, tooltipClasses} from "@mui/material";

const HtmlTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} placement='top' classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'rgb(69,70,82)',
        color: 'white',
        maxWidth: 220,
        fontSize: '15px',
        fontFamily: 'IranYekan Bold !important',
        padding: '12px'
    },
}));


export default function Plans() {

    const [countries, setCountries] = useState(userCountries)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [showCountries, setShowCountries] = useState(false)

    const [rows, setRows] = useState(invoicesData)
    const [columns, setColumns] = useState([
        {
            field: 'menu',
            headerName: '',
            cellClassName: 'mobile-action-column-css !max-w-[50px] !w-full',
            headerClassName: 'mobile-action-header-column-css !max-w-[50px] !w-full',
            editable: false,
            sortable: false,
            renderCell: params => (
                <>
                    <MenuAction deleteHandler={() => removeInvoiceHandler(params.row.id)} link={`/invoice/edit/${params.row.id}`}  {...params}/>
                </>
            )
        },
        {
            field: 'id',
            headerName: 'شناسه',
            headerClassName: 'column-header-css-style !max-w-[90px] !w-full',
            cellClassName: 'column-css-style !max-w-[90px] !w-full',
        },
        {
            field: 'status',
            headerName: '',
            headerClassName: 'column-header-css-style !max-w-[90px] !w-full',
            cellClassName: 'column-css-style !max-w-[90px] !w-full',
            renderCell: params => (
                <HtmlTooltip
                    title={
                        <div className='flex flex-col items-center text-center gap-1'>
                            <h6>{params.row.status}</h6>
                            <span> موجودی : {params.row.debt.toLocaleString()}</span>
                            <span> تاریخ سررسید : {params.row.issueDate}</span>
                        </div>
                    }
                >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        params.row.status === 'ارسال شده' ? (
                            'text-[#69809a] bg-[#e7ebef]'
                        ) : params.row.status === 'دریافت شده' ? (
                            'bg-cyan/15 text-cyan'
                        ) : params.row.status === 'تاریخ سررسید گذشته' ? (
                            'bg-red/15 text-red'
                        ) : (
                            'bg-success/15 text-success'
                        )
                    }`}>
                    {
                        params.row.status === 'ارسال شده' ? (
                            <BiPaperPlane size='18px'/>
                        ) : params.row.status === 'دریافت شده' ? (
                            <BiDownArrowCircle size='18px'/>
                        ) : params.row.status === 'تاریخ سررسید گذشته' ? (
                            <BiInfoCircle size='18px'/>
                        ) : (
                            <BiAdjust size='18px'/>
                        )
                    }
                </span>
                </HtmlTooltip>
            ),
            renderHeader: params => (
                <BiTrendingUp size='18px'/>
            )
        },
        {
            field: 'customer',
            headerName: 'مشتری',
            headerClassName: 'column-header-css-style',
            cellClassName: 'column-css-style',
            renderCell: params => (
                <div className='flex items-center gap-4'>
                    <img className='w-8 h-8 rounded-full' src={params.row.img} alt={params.row.firstName}/>
                    <div className='flex flex-col items-start'>
                        <span className='leading-6 text-2sm'>{params.row.name}</span>
                        <span className='leading-6 text-xs text-muted'>{params.row.company}</span>
                    </div>
                </div>
            )
        },
        {
            field: 'total',
            headerName: 'جمع',
            headerClassName: 'column-header-css-style',
            cellClassName: 'column-css-style',
            renderCell: params => (
                <div className='flex items-center flex-col lg:flex-row gap-1 leading-6'>
                    <span>{params.row.total.toLocaleString()}</span>
                    <span>ریال</span>
                </div>
            )
        },
        {
            field: 'issueDate',
            headerName: 'تاریخ صدور',
            headerClassName: 'column-header-css-style',
            cellClassName: 'column-css-style',
        },
        {
            field: 'debt',
            headerName: 'مبلغ',
            headerClassName: 'column-header-css-style',
            cellClassName: 'column-css-style !text-caption',
            renderCell: params => {
                return (
                    <div
                        className={`flex flex-col lg:flex-row gap-1 items-center leading-6 ${params.row.debt === 0 ? 'text-xs px-2 py-1 bg-success/15 text-success' : ''}`}>
                        {
                            params.row.debt === 0 ? (
                                ' پرداخت شده'
                            ) : (
                                <>
                                    <span>{params.row.debt.toLocaleString()}</span>
                                    <span>ریال</span>
                                </>
                            )
                        }
                    </div>
                )
            }
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'عمل ها',
            sortable: false,
            headerClassName: 'column-header-css-style !max-w-[90px] !w-full',
            cellClassName: 'column-css-style !max-w-[90px] !w-full',
            renderCell: (params) => (
                <div className='flex items-center gap-1'>
                    <Link to={`/invoice/edit/${params.row.id}`} className='text-caption cursor-pointer'>
                        <BiEdit size='18px'/>
                    </Link>
                    <span onClick={() => removeInvoiceHandler(params.row.id)} className='text-caption cursor-pointer'>
                        <BiTrash size='18px'/>
                    </span>
                </div>
            ),
        }
    ])
    const [paginationModal, setPaginationModal] = useState({
        page: 0,
        pageSize: 6
    })
    const [rowCounts, setRowCounts] = useState([2, 4, 6, 8])
    const [showRowCounts, setShowRowCounts] = useState(false)
    const [showInvoicesStatus, setShowInvoicesStatus] = useState(false)
    const [invoicesStatus, setInvoicesStatus] = useState(invoices)
    const [selectedStatus, setSelectedStatus] = useState(null)

    const removeInvoiceHandler = invoiceID => {
        setRows(prevState => prevState.filter(invoice => invoice.id !== invoiceID))
    }

    const searchInvoiceHandler = value => {
        if (value) {
            let filteredRows = invoicesData.filter(invoice => invoice.name.includes(value))
            if (filteredRows.length) {
                setRows(filteredRows)
            } else {
                setRows(invoicesData)
            }
        } else {
            setRows(invoicesData)
        }
    }

    useEffect(() => {
        if(selectedStatus) {
            let filteredInvoices = invoicesData.filter(invoice => invoice.status === selectedStatus.title)
            if(filteredInvoices.length) {
                setRows(filteredInvoices)
            }
        }else {
            setRows(invoicesData)
        }
    }, [selectedStatus]);

    return (
        <div>
            <Box>
                <div>
                    <h4 className='text-lg text-title font-Estedad-Medium mb-[22px]'>
                        پلن کنونی
                    </h4>
                    <div className='flex flex-col md:flex-row md:items-start gap-6'>
                        <div className='w-full md:w-auto md:basis-1/2'>
                            <div className='font-IranYekan-Medium text-2sm flex flex-col items-start gap-3 mb-8'>
                                <span className='text-title font-IranYekan-Bold'>پلن کنونی شما استاندارد است</span>
                                <span>یک شروع ساده برای همه</span>
                            </div>
                            <div className='font-IranYekan-Medium text-2sm flex flex-col items-start gap-3 mb-8'>
                                <span className='text-title font-IranYekan-Bold'>فعال تا 25 اردیبهشت 1401</span>
                                <span>ما پس از انقضای اشتراک برای شما یک اعلان ارسال می کنیم</span>
                            </div>
                            <div className='font-IranYekan-Medium text-2sm flex flex-col items-start gap-3 mb-8'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-title font-IranYekan-Bold'>199,000 تومان در ماه</span>
                                    <span
                                        className='text-blue py-1 px-2 rounded bg-blue/10 text-xs font-IranYekan-Bold'>
                                    محبوب
                                </span>
                                </div>
                                <span>پلن استاندارد برای کسب و کار های کوچک تا متوسط</span>
                            </div>
                            <div className='flex gap-4'>
                                <PrimaryButton className='!w-auto' title='ارتقای پلن'/>
                                <SecondaryButton title='لغو اشتراک'/>
                            </div>
                        </div>
                        <div className='w-full md:w-auto md:basis-1/2'>
                            <div
                                className='px-5 py-3 rounded bg-orange/10 font-IranYekan-Medium text-2sm text-yellow flex flex-col items-start gap-1 leading-[30px] mb-4'>
                        <span>
                            توجه شما مورد نیاز است!
                        </span>
                                <p>
                                    پلن شما نیازمند ارتقا است
                                </p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between font-IranYekan-Bold text-2sm'>
                                    <span>روز</span>
                                    <span>24 از 30 روز</span>
                                </div>
                                <ProgressBar height={12} color='rgb(90,141,238)' percent='60%'/>
                                <span className='text-2sm font-IranYekan-Medium'> 6 روز باقی مانده تا پلن شما نیازمند ارتقا باشد</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <Box className='mt-6'>
                <div>
                    <h4 className='font-Estedad-Medium text-title text-lg mb-[22px]'>
                        روش های پرداخت
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <div className='flex items-center gap-4 mb-4'>
                                <label htmlFor='atm-input' className='flex items-center gap-2 cursor-pointer'>
                                    <input id='atm-input' name='payment-type' type='radio'
                                           className='peer/atm sr-only'/>
                                    <div
                                        className='relative w-4 h-4 rounded-full bg-gray-50 peer-checked/atm:bg-blue flex items-center justify-center after:bg-white outline outline-2 peer-checked/atm:outline-zinc outline-transparent after:w-1.5 after:h-1.5 after:rounded-full after:absolute after:content-[""] after:m-auto peer-checked/atm:after:opacity-100 after:opacity-0 transition-all duration-300'>
                                    </div>
                                    <span className='font-IranYekan-Medium text-2sm select-none'>
                                    کارت اعتباری/Debit/ATM
                                </span>
                                </label>
                                <label htmlFor='paypal-input' className='flex items-center gap-2 cursor-pointer'>
                                    <input defaultChecked={true} id='paypal-input' name='payment-type' type='radio'
                                           className='peer/paypal sr-only'/>
                                    <div
                                        className='relative w-4 h-4 rounded-full bg-gray-50 peer-checked/paypal:bg-blue flex items-center justify-center after:bg-white outline outline-2 peer-checked/paypal:outline-zinc outline-transparent after:w-1.5 after:h-1.5 after:rounded-full after:absolute after:content-[""] after:m-auto peer-checked/paypal:after:opacity-100 after:opacity-0 transition-all duration-300'>
                                    </div>
                                    <span className='font-IranYekan-Medium text-2sm select-none'>
                                    حساب پی‌پال
                                </span>
                                </label>
                            </div>
                            <Input label='شماره کارت' type='text' placeholder='6102 4658 2534 9857'/>
                            <div className='grid grid-cols-12 gap-6 mt-4'>
                                <Input className='col-span-12 md:col-span-6' label='نام' type='text' placeholder='جان اسنو'/>
                                <Input className='col-span-6 md:col-span-3' label='تاریخ انقضا' type='text' placeholder='YY/MM'/>
                                <Input className='col-span-6 md:col-span-3' label='کد CVV' type='text' placeholder='653'/>
                            </div>
                            <div className='flex items-center gap-2 mt-4'>
                                <Input type='checkbox' checkIcon='BiCheck' uncheckIcon='BiX' checked={true}/>
                                <span className='font-IranYekan-Medium text-2sm'>
                                    ذخیره کارت برای پرداخت های بعدی؟
                                </span>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <PrimaryButton className='!w-auto' title='ذخیره تغییرات'/>
                                <SecondaryButton title='انصراف'/>
                            </div>
                        </div>
                        <div>
                            <span className='inline-block mb-4 font-IranYekan-Medium text-2sm text-title'>کارت های من</span>
                            <div className='flex flex-col gap-4'>
                                <div className='rounded bg-gray-50 p-4'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div>
                                            <img src="/images/icons/mastercard.png" alt=""/>
                                        </div>
                                        <div className='flex gap-3'>
                                            <PrimaryButton
                                                className='!w-auto !shadow-none !opacity-100 !bg-blue/10 !text-blue hover:!bg-blue hover:!text-white'
                                                title='ویرایش'/>
                                            <SecondaryButton title='حذف'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <div
                                            className='font-IranYekan-Medium text-2sm flex flex-col items-start leading-[30px]'>
                                            <div className='flex items-center flex-wrap gap-4'>
                                                <span>استیو راجرز</span>
                                                <span
                                                    className='text-xs font-IranYekan-Medium bg-blue/10 rounded px-2 py-1 text-blue'>
                                                اصلی
                                            </span>
                                            </div>
                                            <span>∗∗∗∗ ∗∗∗∗ 9856</span>
                                        </div>
                                        <span className='font-IranYekan-Bold text-2xs leading-[30px]'>
                                        تاریخ انقضای کارت 1401/12
                                    </span>
                                    </div>
                                </div>
                                <div className='rounded bg-gray-50 p-4'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div>
                                            <img src="/images/icons/visa.png" alt=""/>
                                        </div>
                                        <div className='flex gap-3'>
                                            <PrimaryButton
                                                className='!w-auto !shadow-none !opacity-100 !bg-blue/10 !text-blue hover:!bg-blue hover:!text-white'
                                                title='ویرایش'/>
                                            <SecondaryButton title='حذف'/>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-end'>
                                        <div
                                            className='font-IranYekan-Medium text-2sm flex flex-col items-start leading-[30px]'>
                                            <span>پیتر پارکر</span>
                                            <span>∗∗∗∗ ∗∗∗∗ 5896</span>
                                        </div>
                                        <span className='font-IranYekan-Bold text-2xs leading-[30px]'>
                                        تاریخ انقضای کارت 1403/11
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
            <Box className='mt-6'>
                <div>
                    <h4 className='font-Estedad-Medium text-title text-lg mb-[22px]'>
                        روش های پرداخت
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <Input type='text' placeholder='PIXINVENT' label='نام شرکت'/>
                        <Input type='text' placeholder='john.doe@example.com' label='ایمیل صورتحساب'/>
                        <Input type='text' placeholder='شناسه مالیاتی را وارد کنید' label='شناسه مالیاتی'/>
                        <Input type='text' placeholder='شماره VAT را وارد کنید' label='شماره VAT'/>
                        <Input type='text' placeholder='202 555 0111' label='موبایل'/>
                        <Input className='!shrink-0'
                               label='کشور'
                               setShowContent={setShowCountries} showContent={showCountries}
                               type='selectbox'
                               placeholder={selectedCountry !== null ? selectedCountry.title : 'انتخاب کشور'}>
                            <ul className='bg-white flex flex-col rounded-b h-[180px] overflow-auto child:shrink-0'>
                                <li onClick={() => {
                                    setSelectedCountry(null)
                                    setShowCountries(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب</span>
                                </li>
                                {
                                    countries.map(country => (
                                        <li key={country.id} onClick={() => {
                                            setSelectedCountry(country)
                                            setShowCountries(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{country.name}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                    </div>
                    <div className='mt-6'>
                        <Input type='text' placeholder='آدرس قبض' label='آدرس صورتحساب'/>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                            <Input type='text' placeholder='آذربایجان شرقی' label='استان'/>
                            <Input type='text' placeholder='231465' label='کد پستی'/>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <PrimaryButton className='!w-auto' title='ذخیره تغییرات'/>
                        <SecondaryButton title='انصراف'/>
                    </div>
                </div>
            </Box>
            <div className='bg-white rounded shadow shadow-black/10 mt-6'>
                <div className='p-[22px]'>
                    <h4 className='font-Estedad-Medium text-title text-lg'>
                        تاریخچه صورتحساب
                    </h4>
                </div>
                <div className='bg-white'>
                    <div className='flex flex-col gap-4 md:flex-row items-center justify-between px-[22px] py-4 border-t border-zinc'>
                        <div className='flex items-center gap-4'>
                            <Input className='!w-auto' selectedItem={paginationModal.pageSize}
                                   setShowContent={setShowRowCounts}
                                   showContent={showRowCounts} type='selectbox' placeholder={paginationModal.pageSize}>
                                <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                    {
                                        rowCounts.map(count => (
                                            <li key={count} onClick={() => {
                                                setPaginationModal(prevState => {
                                                    return {
                                                        page: prevState.page,
                                                        pageSize: count
                                                    }
                                                })
                                                setShowRowCounts(false)
                                            }}
                                                className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{count}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Input>
                            <PrimaryButton link='/invoice/add' titleClassName='hidden md:inline'
                                           className='!px-2' icon='BiPlus'
                                           title='ایجاد صورتحساب' iconSize='20px'/>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <Input onChange={(event) => searchInvoiceHandler(event.target.value)} className='!w-auto'
                                   inputClassName='!min-w-[200px]' type='text'
                                   placeholder='جستجو...'/>
                            <div className='flex items-center gap-4'>
                                <Input className='!w-auto !shrink-0 min-w-52'
                                       setShowContent={setShowInvoicesStatus} showContent={showInvoicesStatus}
                                       type='selectbox'
                                       placeholder={selectedStatus !== null ? selectedStatus.title : 'انتخاب وضعیت'}>
                                    <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                        <li onClick={() => {
                                            setSelectedStatus(null)
                                            setShowInvoicesStatus(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب وضعیت</span>
                                        </li>
                                        {
                                            invoicesStatus.map(status => (
                                                <li key={status.id} onClick={() => {
                                                    setSelectedStatus(status)
                                                    setShowInvoicesStatus(false)
                                                }}
                                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{status.title}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </Input>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-auto'>
                        <DataGrid
                            sx={{
                                '.css-wqp0ve': {
                                    fontFamily: 'IranYekan Bold !important',
                                    fontSize: '15px !important',
                                    color: 'rgb(var(--color-muted)) !important'
                                },
                                '.MuiDataGrid-columnSeparator': {
                                    display: 'none'
                                },
                                '.MuiDataGrid-columnHeaderTitleContainer': {
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                },
                                '.MuiDataGrid-filler': {
                                    display: 'none'
                                },
                                '.MuiDataGrid-cellEmpty': {
                                    display: 'none'
                                },
                                '.css-1gak8h1-MuiToolbar-root-MuiTablePagination-toolbar': {
                                    justifyContent: 'space-between',
                                    flexDirection: 'column',
                                    padding: '16px 24px !important',
                                    gap: '16px'
                                },
                                '.css-1wtxofq-MuiTablePagination-spacer': {
                                    display: 'none'
                                },
                                '.css-11cfq65-MuiTablePagination-displayedRows': {
                                    fontFamily: 'IranYekan Bold',
                                    fontsize: '15px',
                                    color: 'rgb(var(--color-muted))'
                                },
                                '.MuiDataGrid-row': {
                                    height: 'auto !important',
                                    minHeight: 'none !important',
                                    maxHeight: 'none !important',
                                    width: '100% !important',
                                },
                                '.css-1vouojk': {
                                    height: 'auto !important',
                                    minHeight: 'none !important',
                                    maxHeight: 'none !important',
                                    width: '100% !important',
                                    position: 'static !important',
                                    overflow: 'hidden'
                                },
                                '.css-aymtem-MuiDataGrid-virtualScrollerContent': {
                                    flexBasis: 'auto !important',
                                    width: 'auto !important'
                                },
                                '.css-11dqcl8-MuiDataGrid-virtualScrollerRenderZone': {
                                    width: '100% !important',
                                    position: 'static'
                                },
                                '.MuiDataGrid-cell:focus': {
                                    outline: 'none !important'
                                },
                                '.MuiDataGrid-row:hover': {
                                    backgroundColor: 'transparent !important'
                                },
                                '.css-1gtv474-MuiDataGrid-columnHeaders': {
                                    width: '100% !important'
                                },
                                '.css-16z8vpz': {
                                    display: 'none !important'
                                },
                                '.css-1vigakz-MuiDataGrid-virtualScroller': {
                                    overflow: 'visible !important'
                                },
                                '.css-1f63zk': {
                                    display: 'none !important'
                                },
                                '.css-l45izh': {
                                    padding: '16px !important',
                                    justifyContent: 'space-between !important',
                                    flexWrap: 'wrap',
                                    gap: '20px'
                                },
                                '.css-8t0cmw .MuiDataGrid-columnHeaders': {
                                    width: '100% !important'
                                },
                                '.css-1t374vw': {
                                    width: '100% !important'
                                },
                                '.css-1xdhyk6': {
                                    width: 'auto !important'
                                }
                            }}
                            disableRowSelectionOnClick
                            disableColumnFilter
                            disableColumnResize
                            disableColumnMenu
                            editMode="row"
                            pagination
                            initialState={{
                                pagination: {paginationModel: paginationModal},
                                sorting: {
                                    sortModel: [
                                        {
                                            field: 'id',
                                            sort: 'asc',
                                        },
                                    ],
                                },
                            }}
                            localeText={{
                                MuiTablePagination: {
                                    labelDisplayedRows: ({
                                                             from,
                                                             count,
                                                             to
                                                         }) => `نمایش ${from} تا ${to} از ${count} ردیف`,
                                }
                            }}
                            slots={{
                                pagination: MyPagination,
                                columnHeaderSortIcon: event => (
                                    <div style={{display: 'flex', flexDirection: 'column', color: 'blue'}}>
                                    <span className={`${event.direction === 'asc' ? 'text-dark' : 'text-gray'}`}>
                                        <BiChevronUp size='18px'/>
                                    </span>
                                        <span className={`${event.direction === 'desc' ? 'text-dark' : 'text-gray'}`}>
                                        <BiChevronDown size='18px'/>
                                    </span>
                                    </div>
                                )
                            }}
                            sortingOrder={['asc', 'desc']}
                            paginationModel={paginationModal}
                            onPaginationModelChange={setPaginationModal}
                            rows={rows}
                            columns={columns}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}