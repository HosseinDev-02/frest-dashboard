import Box from "../../Components/Box/Box";
import {
    BiAdjust,
    BiChat,
    BiCheck, BiChevronDown, BiChevronUp, BiCustomize,
    BiDetail, BiDownArrowCircle, BiEdit,
    BiEnvelope,
    BiFlag, BiInfoCircle, BiListUl,
    BiLogoGithub,
    BiLogoReact, BiPaperPlane,
    BiPhone,
    BiStar, BiTrash, BiTrendingUp,
    BiUser
} from "react-icons/bi";
import TimeActivityBox from "../../Components/TimeActivityBox/TimeActivityBox";
import UserBox from "../../Components/UserBox/UserBox";
import * as React from "react";
import Input from "../../Components/Input/Input";
import MyPagination from "../../Components/MyPagination/MyPagination";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import {projects as initialRows} from "../../Utils/Projects";
import Members from "../../Components/Members/Members";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import MenuAction from "../../Components/MenuAction/MenuAction";
import UserInfoBox from "../../Components/UserInfoBox/UserInfoBox";


const rowHeight = 77
const rowHeaderHeight = 57
const paginationHeight = 70

export default function UserProfileSetting() {
    const [rows, setRows] = useState(initialRows)
    const [columns, setColumns] = useState([
        {
            field: 'name',
            headerName: 'نام',
            headerClassName: 'column-header-css-style column-header-customer-css',
            cellClassName: 'column-css-style column-customer-css',
            renderCell: params => (
                <UserBox captionSize={13} title={params.row.title} img={params.row.icon} caption={params.row.date} imgSize={38}/>
            )
        },
        {
            field: 'leader',
            headerName: 'رهبر',
            headerClassName: 'column-header-css-style column-header-leader-css',
            cellClassName: 'column-css-style column-leader-css',
        },
        {
            field: 'team',
            headerName: 'تیم',
            headerClassName: 'column-header-css-style column-header-teams-css',
            cellClassName: 'column-css-style column-teams-css',
            renderCell: params => (
                <Members data={params.row.members}/>
            )
        },
        {
            field: 'status',
            headerName: 'وضعیت',
            headerClassName: 'column-header-css-style column-header-progress-css',
            cellClassName: 'column-css-style column-progress-css',
            renderCell: params => (
                <div className='flex items-center gap-2 w-full'>
                    <ProgressBar className='w-full' color='rgb(90,141,238)' percent={params.row.status}/>
                    <span className='font-IranYekan-Medium text-2sm shrink-0'>{params.row.status}</span>
                </div>
            )
        },
        {
            field: 'menu',
            headerName: 'عمل ها',
            cellClassName: 'column-css-style max-w-[100px] align-middle !overflow-visible',
            headerClassName: 'column-header-css-style max-w-[100px] column-header-action-css',
            editable: false,
            sortable: false,
            renderCell: params => (
                <>
                    <MenuAction className='!justify-center'  {...params}/>
                </>
            )
        },
    ])
    const [paginationModal, setPaginationModal] = useState({
        page: 0,
        pageSize: 4
    })
    const [selectedRows, setSelectedRows] = useState([])

    const getTableHeight = () => {
        return Math.min(rows.length, paginationModal.pageSize) * rowHeight + rowHeaderHeight + paginationHeight
    }

    const CustomCheckBox = (props) => {
        return (
            <Input inputProps={props.inputProps} inputClassName={`${!isSelectedAll() && props.inputProps.name === "select_all_rows" ? 'checked:!bg-minus' : 'checked:!bg-checked'} checked:bg-blue checked:border-blue checked:!bg-checked`} onChange={props.onChange} className='!justify-center !items-center' type='checkbox' checked={props.checked}/>
        )
    }

    const isSelectedAll = () => selectedRows.length === paginationModal.pageSize

    const rowSelectionHandler = value => {
        if(value.length) {
            setSelectedRows(value.filter(item => item !== 5))
        }
    }


    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 items-start gap-6'>
            <div className='lg:col-span-4 space-y-6'>
                {/*  User About Me Section  */}
                <Box>
                    <div>
                        <div>
                            <h6 className='font-IranYekan-Medium text-muted text-2xs'>
                                درباره
                            </h6>
                            <ul className='font-IranYekan-Medium text-2sm mt-4 flex flex-col gap-4'>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiUser size='18px'/>
                                    نام کامل:
                                </span>
                                    <span>
                                    جان اسنو
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiCheck size='18px'/>
                                    وضعیت:
                                </span>
                                    <span>
                                    فعال
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiStar size='18px'/>
                                    نقش:
                                </span>
                                    <span>
                                    توسعه دهنده
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiFlag size='18px'/>
                                    کشور:
                                </span>
                                    <span>
                                    ایران
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiDetail size='18px'/>
                                    زبان‌ها:
                                </span>
                                    <span>
                                    انگلیسی
                                </span>
                                </li>
                            </ul>
                        </div>
                        <div className='my-6'>
                            <h6 className='font-IranYekan-Medium text-muted text-2xs'>
                                تماس
                            </h6>
                            <ul className='font-IranYekan-Medium text-2sm mt-4 flex flex-col gap-4'>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiPhone size='18px'/>
                                    تماس:
                                </span>
                                    <span>
                                    (123) 456-7890
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiChat size='18px'/>
                                    تلگرام:
                                </span>
                                    <span>
                                    john.doe
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiEnvelope size='18px'/>
                                    ایمیل:
                                </span>
                                    <span>
                                        john.doe@example.com
                                </span>
                                </li>
                            </ul>
                        </div>
                        <div className='my-6'>
                            <h6 className='font-IranYekan-Medium text-muted text-2xs'>
                                تیم ها
                            </h6>
                            <ul className='font-IranYekan-Medium text-2sm mt-4 flex flex-col gap-4'>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiLogoGithub className='text-blue' size='18px'/>
                                    توسعه دهنده پنل مدیریت
                                </span>
                                    <span>
                                        (126 عضو)
                                </span>
                                </li>
                                <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiLogoReact className='text-cyan' size='18px'/>
                                    توسعه دهنده React
                                </span>
                                    <span>
                                    (98 عضو)
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Box>
                {/*  User Overview Section  */}
                <Box>
                    <div>
                        <h6 className='font-IranYekan-Medium text-muted text-2xs'>
                            نمای کلی
                        </h6>
                        <ul className='font-IranYekan-Medium text-2sm mt-4 flex flex-col gap-4'>
                            <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiCheck size='18px'/>
                                    وظیفه تدوین شده:
                                </span>
                                <span>
                                    13.5k
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiCustomize size='18px'/>
                                    پروژه تدوین شده:
                                </span>
                                <span>
                                    146
                                </span>
                            </li>
                            <li className='flex items-center gap-2'>
                                <span className='flex items-center gap-2 font-IranYekan-Bold'>
                                    <BiUser size='18px'/>
                                    اتصالات:
                                </span>
                                <span>
                                    897
                                </span>
                            </li>
                        </ul>
                    </div>
                </Box>
            </div>
            <div className='lg:col-span-8 space-y-6'>
                {/*  User Activity Section  */}
                <Box>
                    <div>
                        <div className='flex items-center gap-2'>
                            <BiListUl size='28px'/>
                            <h4 className='font-IranYekan-Medium text-lg text-title'>
                                خط زمانی فعالیت
                            </h4>
                        </div>
                        <div className='flex flex-col gap-[28px] border-r border-zinc my-6'>
                            <TimeActivityBox className='!pr-12' shapeColor='rgb(90,141,238)' date='امروز'
                                             title='ملاقات با مشتری' caption='ملاقات برای پروژه با استیو در 10:15 ق.ظد'>
                                <UserBox img='/images/avatars/2.png' title='بیل گیتس (مشتری)'
                                         caption='بنیان‌گذار مایکروسافت' titleSize={15} imgSize={38} captionSize={15}/>
                            </TimeActivityBox>
                            <TimeActivityBox className='!pr-12' shapeColor='rgb(253,126,20)' title='ایجاد یک پروژه جدید برای مشتری' date='2 روز قبل'
                                             caption='لورم ایپسوم متن ساختگی با تولید'>
                            </TimeActivityBox>
                            <TimeActivityBox className='!pr-12' shapeColor='rgb(90,141,238)' date='12 دقیقه قبل' title='لورم ایپسوم متن ساختگی با تولید' caption='ارسال شده از طرف تونی استارک'>
                                <div className='flex items-center gap-4'>
                                    <a className='flex items-center gap-2' href="#">
                                        <span className='w-5 h-5 flex items-center justify-center'>
                                            <img className='w-full h-full object-cover' src="/images/icons/pdf.png"
                                                 alt="logo_icon"/>
                                        </span>
                                        <span className='font-IranYekan-Bold text-2sm'>راهنمای برنامه</span>
                                    </a>
                                    <a className='flex items-center gap-2' href="#">
                                        <span className='w-5 h-5 flex items-center justify-center'>
                                            <img className='w-full h-full object-cover' src="/images/icons/doc.png"
                                                 alt="logo_icon"/>
                                        </span>
                                        <span className='font-IranYekan-Bold text-2sm'>نتایج برسی ها</span>
                                    </a>
                                </div>
                            </TimeActivityBox>
                            <TimeActivityBox lastItem={true} className='!pr-12' shapeColor='rgb(57,218,138)' title='ایجاد یک پروژه جدید برای مشتری' date='2 روز قبل'
                                             caption='لورم ایپسوم متن ساختگی با تولید'>
                            </TimeActivityBox>
                        </div>
                    </div>
                </Box>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                    {/*  User Connections Section  */}
                    <Box>
                        <div>
                            <h4 className='font-IranYekan-Medium text-lg text-title'>
                                خط زمانی فعالیت
                            </h4>
                            <div className='flex flex-col gap-4 my-6'>
                                <UserInfoBox title='استیو راجرز' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>45 اتصال</span>} image='/images/avatars/1.png'
                                                   active={false}/>
                                <UserInfoBox title='اولیور کوئین' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>124 اتصال</span>} image='/images/avatars/4.png'
                                                   active={true}/>
                                <UserInfoBox connected={true} title='امیلیا کلارک' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>1.2k اتصال</span>} image='/images/avatars/6.png'
                                                   active={true}/>
                                <UserInfoBox title='بیل گیتس' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>89 اتصال</span>} image='/images/avatars/10.png'
                                                   active={false}/>
                                <UserInfoBox connected={true} title='دیوید بکهام' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>2.32k اتصال</span>} image='/images/avatars/14.png'
                                                   active={false}/>
                            </div>
                            <div className='text-center'>
                                <a className='font-IranYekan-Medium text-2sm text-blue' href="#">
                                    مشاهده همه اتصالات
                                </a>
                            </div>
                        </div>
                    </Box>
                    {/*  User Team Section  */}
                    <Box>
                        <div>
                            <h4 className='font-IranYekan-Medium text-lg text-title'>
                                تیم ها
                            </h4>
                            <div className='flex flex-col gap-4 my-6'>
                                <UserInfoBox title='توسعه دهندگان React' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>72 عضو</span>} renderShape={() => <span className='text-xs font-IranYekan-Medium rounded px-2 py-1 bg-red/15 text-red'>توسعه دهنده</span>} image='/images/icons/react-label.png'/>
                                <UserInfoBox title='تیم پشتیبانی' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>122 عضو</span>} renderShape={() => <span className='text-xs font-IranYekan-Medium rounded px-2 py-1 bg-blue/15 text-blue'>پشتیبانی</span>} image='/images/icons/support-label.png'/>
                                <UserInfoBox title='طراحان UI' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>86 عضو</span>} renderShape={() => <span className='text-xs font-IranYekan-Medium rounded px-2 py-1 bg-cyan/15 text-cyan'>طراح</span>} image='/images/icons/figma-label.png'/>
                                <UserInfoBox title='توسعه دهندگان Vue.js' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>46 عضو</span>} renderShape={() => <span className='text-xs font-IranYekan-Medium rounded px-2 py-1 bg-secondary/15 text-secondary'>توسعه دهنده</span>} image='/images/icons/vue-label.png'/>
                                <UserInfoBox title='بازاریابی دیجیتال' renderCaption={() => <span className='text-2xs text-muted font-IranYekan-Medium'>187 عضو</span>} renderShape={() => <span className='text-xs font-IranYekan-Medium rounded px-2 py-1 bg-success/15 text-success'>بازاریابی</span>} image='/images/icons/twitter-label.png'/>
                            </div>
                            <div className='text-center'>
                                <a className='font-IranYekan-Medium text-2sm text-blue' href="#">
                                    مشاهده همه تیم ها
                                </a>
                            </div>
                        </div>
                    </Box>
                </div>
                {/*  User Projects Section  */}
                <Box className='!h-auto'>
                    <div className=''>
                        {/*  User Projects Table Header  */}
                        <div className='flex items-center justify-between py-4'>
                            <h4 className='text-title text-lg font-IranYekan-Medium'>
                                پروژه ها
                            </h4>
                            <div className='font-IranYekan-Medium text-2sm flex items-center gap-1'>
                                <span>جستجو:</span>
                                <Input type='text' placeholder='جستجو...'/>
                            </div>
                        </div>
                        {/*  User Projects Table  */}
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
                                onRowSelectionModelChange={rowSelectionHandler}
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
                                    },
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
                                    ),
                                    baseCheckbox: CustomCheckBox
                                }}
                                sortingOrder={['asc', 'desc']}
                                paginationModel={paginationModal}
                                onPaginationModelChange={setPaginationModal}
                                rows={rows}
                                columns={columns}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}