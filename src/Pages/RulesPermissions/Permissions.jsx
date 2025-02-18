import HeaderSection from "../../Components/HeaderSection/HeaderSection";
import Input from "../../Components/Input/Input";
import {DataGrid} from "@mui/x-data-grid";
import MyPagination from "../../Components/MyPagination/MyPagination";
import {
    BiAdjust,
    BiChevronDown,
    BiChevronUp,
    BiDownArrowCircle, BiEdit,
    BiInfoCircle,
    BiPaperPlane, BiTrash,
    BiTrendingUp
} from "react-icons/bi";
import React, {useState} from "react";
import {rules} from "../../Utils/Rules";
import {invoicesData, invoicesStatus as invoices} from "../../Utils/Invoices";
import MenuAction from "../../Components/MenuAction/MenuAction";
import {Link} from "react-router-dom";
import permissions from "../../Utils/Permissions";
import PrimaryButton from "../../Components/Buttons/PrimaryButton/PrimaryButton";

const skillColorCondition = skill => {
    return ` ${skill === 'سرپرست' && 'text-blue bg-blue/15'} 
    ${skill === 'مدیر' && 'text-orange bg-orange/15'} 
    ${skill === 'کاربران' && 'text-success bg-success/15'} 
    ${skill === 'پشتیبانی' && 'text-cyan bg-cyan/15'} 
    ${skill === 'کاربر محدود' && 'text-red bg-red/15'} 
        `
}

export default function Permissions() {

    const [rows, setRows] = useState(permissions)
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
                    <MenuAction  {...params}/>
                </>
            )
        },
        {
            field: 'title',
            headerName: 'نام',
            headerClassName: 'column-header-css-style',
            cellClassName: 'column-css-style',
        },
        {
            field: 'rules',
            headerName: 'اختصاص یافته به',
            headerClassName: 'column-header-css-style column-header-issueDate-css',
            cellClassName: 'column-css-style column-issueDate-css',
            renderCell: params => (
                <ul className='flex items-center gap-1'>
                    {
                        params.row.rules.map(rule => (
                            <li className={`rounded py-1 px-2 text-xs font-IranYekan-Medium ${skillColorCondition(rule)}`}>
                                {rule}
                            </li>
                        ))
                    }
                </ul>
            )
        },
        {
            field: 'createdAt',
            headerName: 'تاریخ ایجاد',
            headerClassName: 'column-header-css-style column-header-debt-css',
            cellClassName: 'column-css-style !text-caption column-debt-css',
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
                    <span className='text-caption cursor-pointer'>
                        <BiEdit size='18px'/>
                    </span>
                    <span className='text-caption cursor-pointer'>
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


    return (
        <div>
            <HeaderSection title='لیست مجوزها'
                           caption='هر دسته (پایه، حرفه‌ای و کسب و کار) شامل چهار نقش از پیش تعریف شده زیر می‌باشد.'/>
            <div className='bg-white mt-6 h-full'>
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
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        <div className='font-IranYekan-Medium text-2sm flex items-center gap-1'>
                            <span>جستجو:</span>
                            <Input type='text' placeholder='جستجو...'/>
                        </div>
                        <PrimaryButton title='افزودن مجوز' className='!w-auto'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <DataGrid
                        sx={{
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
                                width: '100% !important'
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