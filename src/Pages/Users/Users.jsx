import Box from "../../Components/Box/Box";
import Input from "../../Components/Input/Input";
import {useEffect, useState} from "react";
import MyDataTable from "../../Components/MyDataTable/MyDataTable";
import {users as usersData} from "../../Utils/Users";
import UserInfoBox from "../../Components/UserInfoBox/UserInfoBox";


const CustomCaptionForBox = ({ title, percent, caption, percentColor }) => {
    return (
        <div className='flex flex-col items-start gap-2 font-IranYekan-Medium text-2xs mt-2'>
            <div className='flex items-center gap-2'>
                <span className='text-2xl text-title'>{title}</span>
                <span className={`!font-IranYekan-Bold ${percent < 0 ? 'text-red' : 'text-success'}`} style={{ color: percentColor}}>({percent < 0 ? '-' : '+'}{percent}%)</span>
            </div>
            <span className='font-IranYekan-Bold'>{caption}</span>
        </div>
    )
}


export default function Users() {

    const [filteredUsers, setFilteredUsers] = useState(null)
    const [users, setUsers] = useState(usersData)

    const [userRoles, setUserRoles] = useState([
        {id: 4, title: 'نویسنده'},
        {id: 5, title: 'نگهدارنده'},
        {id: 6, title: 'ویرایشگر'},
    ])
    const [plans, setPlans] = useState([
        {id: 2, title: 'تیم'},
        {id: 3, title: 'سازمانی'},
        {id: 4, title: 'شرکتی'},
        {id: 5, title: 'پایه'},
    ])
    const [statuses, setStatuses] = useState([
        {id: 2, title: 'درانتظار'},
        {id: 3, title: 'فعال'},
        {id: 4, title: 'غیررفعال'},
    ])
    const [showUserRoles, setShowUserRoles] = useState(false)
    const [selectedRole, setSelectedRole] = useState(null)

    const [showStatuses, setShowStatuses] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState(null)

    const [showUserPlans, setShowUserPlans] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(null)

    useEffect(() => {
        const hasFilter = selectedRole !== null || selectedStatus !== null || selectedPlan !== null;
        let newFilteredItems = hasFilter ? users.filter(user => {
            return (
                (selectedPlan === null || user.project.includes(selectedPlan.title)) &&
                (selectedRole === null || user.role.includes(selectedRole.title)) &&
                (selectedStatus === null || user.status === convertStatusToNumber(selectedStatus.title))
            )
        }) : []
        setFilteredUsers(newFilteredItems)
    }, [selectedStatus, selectedPlan, selectedRole]);

    const convertStatusToNumber = (value) => {
        if (value === 'غیرفعال') {
            return -1
        } else if (value === 'درانتظار') {
            return 0
        } else {
            return 1
        }
    }

    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <UserInfoBox icon='BiUser' iconSize={24} iconClassName='!w-auto !h-auto !p-2' className='bg-white p-[22px] shadow shadow-black/15 rounded' title='جلسه' renderCaption={() => <CustomCaptionForBox title='21459' percent={29} caption='مجموع کاربران' />}/>

                <UserInfoBox  icon='BiUserPlus' iconSize={24} iconClassName='!w-auto !h-auto !p-2 !bg-red/15 !text-red' className='bg-white p-[22px] shadow shadow-black/15 rounded' title='کاربران ویژه' renderCaption={() => <CustomCaptionForBox title='4567' percent={18} caption='تحلیل هفته اخیر' />}/>

                <UserInfoBox  icon='BiGroup' iconSize={24} iconClassName='!w-auto !h-auto !p-2 !bg-success/15 !text-success' className='bg-white p-[22px] shadow shadow-black/15 rounded' title='کاربران فعال' renderCaption={() => <CustomCaptionForBox title='19860' percent={-14} caption='تحلیل هفته اخیر' />}/>

                <UserInfoBox  icon='BiUserVoice' iconSize={24} iconClassName='!w-auto !h-auto !p-2 !bg-orange/15 !text-orange' className='bg-white p-[22px] shadow shadow-black/15 rounded' title='کاربران در انتظار' renderCaption={() => <CustomCaptionForBox title='21459' percent={42} caption='تحلیل هفته اخیر' />}/>
            </div>
            <div className='mt-6'>
                <Box className='border-b border-zinc rounded-none'>
                    <h3 className='font-IranYekan-Bold mb-[22px] text-lg text-title'>
                        فیلتر جستجو
                    </h3>
                    <div className='py-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <Input selectedItem={selectedRole} setShowContent={setShowUserRoles}
                               showContent={showUserRoles} type='selectbox' placeholder={`${selectedRole?.title || 'انتخاب نقش'}`}>
                            <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                <li onClick={() => {
                                    setSelectedRole(null)
                                    setShowUserRoles(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب نقش</span>
                                </li>
                                {
                                    userRoles.map(role => (
                                        <li key={role.id} onClick={() => {
                                            setSelectedRole(role)
                                            setShowUserRoles(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{role.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                        <Input selectedItem={selectedPlan} setShowContent={setShowUserPlans}
                               showContent={showUserPlans} type='selectbox'
                               placeholder={`${selectedPlan?.title || 'انتخاب طرح'}`}>
                            <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                <li onClick={() => {
                                    setSelectedPlan(null)
                                    setShowUserPlans(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب طرح</span>
                                </li>
                                {
                                    plans.map(plan => (
                                        <li key={plan.id} onClick={() => {
                                            setSelectedPlan(plan)
                                            setShowUserPlans(false)
                                        }}
                                            className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>{plan.title}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Input>
                        <Input selectedItem={selectedStatus} setShowContent={setShowStatuses}
                               showContent={showStatuses} type='selectbox'
                               placeholder={`${selectedStatus?.title || 'انتخاب وضعیت'}`}>
                            <ul className='bg-white flex flex-col rounded-b overflow-hidden'>
                                <li onClick={() => {
                                    setSelectedStatus(null)
                                    setShowStatuses(false)
                                }}
                                    className={`flex items-center gap-2 w-full h-9 px-3 transition-colors hover:bg-gray-50 cursor-pointer`}>
                                            <span
                                                className='font-IranYekan-Medium text-2sm text-inherit'>انتخاب وضعیت</span>
                                </li>
                                {
                                    statuses.map(status => (
                                        <li key={status.id} onClick={() => {
                                            setSelectedStatus(status)
                                            setShowStatuses(false)
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
                </Box>
                {/*<MyDataTable filteredUsers={filteredUsers}/>*/}
            </div>
        </div>
    )
}