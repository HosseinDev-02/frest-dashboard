import Input from "../../Components/Input/Input";
import {
    BiAdjust,
    BiChevronDown,
    BiChevronUp,
    BiCog, BiDownArrowCircle,
    BiEdit, BiInfoCircle, BiPaperPlane,
    BiPieChartAlt,
    BiTrash, BiTrendingUp
} from "react-icons/bi";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";
import {DataGrid} from "@mui/x-data-grid";
import React, {useEffect, useState} from "react";
import MyPagination from "../../Components/MyPagination/MyPagination";
import {invoicesData, invoicesStatus as invoices} from '../../Utils/Invoices'
import {styled, Tooltip, tooltipClasses, Typography} from "@mui/material";
import MenuAction from "../../Components/MenuAction/MenuAction";
import {users} from "../../Utils/Users";
import {Link} from "react-router-dom";

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

export default function InvoiceList() {
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
            headerClassName: 'column-header-css-style column-header-id-css !max-w-[90px] !w-full',
            cellClassName: 'column-css-style column-id-css !max-w-[90px] !w-full',
        },
        {
            field: 'status',
            headerName: '',
            headerClassName: 'column-header-css-style column-header-status-css !max-w-[90px] !w-full',
            cellClassName: 'column-css-style column-status-css !max-w-[90px] !w-full',
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
            headerClassName: 'column-header-css-style column-header-customer-css',
            cellClassName: 'column-css-style column-customer-css',
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
            headerClassName: 'column-header-css-style column-header-total-css',
            cellClassName: 'column-css-style column-total-css',
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
            headerClassName: 'column-header-css-style column-header-issueDate-css',
            cellClassName: 'column-css-style column-issueDate-css',
        },
        {
            field: 'debt',
            headerName: 'مبلغ',
            headerClassName: 'column-header-css-style column-header-debt-css',
            cellClassName: 'column-css-style !text-caption column-debt-css',
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
            headerClassName: 'column-header-css-style action-column-header-css !max-w-[90px] !w-full',
            cellClassName: 'column-css-style action-column-css !max-w-[90px] !w-full',
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
        <div className='container'>
            <div className='mb-6'>
                <ul className='flex text-2xl'>
                    <li className='relative px-4 text-muted'>
                        <span>صورتحساب</span>
                    </li>
                    <li className='relative px-2'>
                        <span
                            className='before:absolute before:content-["/"] before:-right-2 text-title font-IranYekan-Medium before:top-1'>لیست</span>
                    </li>
                </ul>
            </div>
            <div className='bg-white'>
                <div className='flex flex-col gap-4 md:flex-row items-center justify-between px-[22px] py-4'>
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
                <div className='flex flex-col'>
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
                                position: 'static !important'
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
                                justifyContent: 'space-between !important'
                            },
                            '.css-8t0cmw .MuiDataGrid-columnHeaders': {
                                width: '100% !important'
                            },
                            '.css-kq69vq .MuiDataGrid-columnHeaders': {
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
                                labelDisplayedRows: ({from, count, to}) => `نمایش ${from} تا ${to} از ${count} ردیف`,
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
    )
}