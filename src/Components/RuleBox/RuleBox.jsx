import Box from "../Box/Box";
import Members from "../Members/Members";
import {BiCopy, BiX} from "react-icons/bi";
import Input from "../Input/Input";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import Overlay from "../Overlay/Overlay";
import React, {useEffect, useRef, useState} from "react";

export default function RuleBox({ userCount, title, members, ruleAccess  }) {
    console.log(ruleAccess)
    const [showEditRuleContent, setShowEditRuleContent] = useState(false)
    const addNewUserWrapper = useRef(null)
    const [selectedAll, setSelectedAll] = useState(false)
    const [userAccessRule, setUserAccessRule] = useState(ruleAccess)

    const addNewUserWrapperClickHandler = (event) => {
        if (addNewUserWrapper.current.className === event.target.className) {
            setShowEditRuleContent(false)
        }
    }

    const selectedAllHandler = () => {
        if(selectedAll) {
            setUserAccessRule(prevUserAccessRule => prevUserAccessRule.map(userAccess => {
                userAccess.accessLevel.map(access => access.status = false)
                return userAccess
            }))
            setSelectedAll(false)
        } else {
            setUserAccessRule(prevUserAccessRule => prevUserAccessRule.map(userAccess => {
                userAccess.accessLevel.map(access => access.status = true)
                return userAccess
            }))
            setSelectedAll(true)
        }
    }

    const selectHandler = (userAccessID, accessID) => {
        setUserAccessRule(prevUserAccessRule => prevUserAccessRule.map(userAccess => {
            if (userAccess.id === userAccessID) {
                userAccess.accessLevel.map(access => {
                    if (access.id === accessID) {
                        access.status = !access.status
                        return access
                    }
                })
                return userAccess
            }
            return userAccess
        }))

    }

    useEffect(() => {
        let allAccess = userAccessRule.every(userAccess => userAccess.accessLevel.every(access => access.status === true))
        if(allAccess) {
            setSelectedAll(true)
        }else {
            setSelectedAll(false)
        }
    }, [userAccessRule])

    return (
        <Box>
            <div className='flex items-center justify-between'>
                <div className='font-IranYekan-Medium text-2sm'>
                    {userCount} کاربر در مجموع
                </div>
                <Members imgSize={32} data={members}/>
            </div>
            <div className='flex items-end justify-between mt-6'>
                <div className='flex flex-col items-start gap-2'>
                    <h3 className='text-title text-2xl font-IranYekan-Medium'>
                        {title}
                    </h3>
                    <span onClick={() => setShowEditRuleContent(true)} className='text-blue text-2xs font-IranYekan-Bold cursor-pointer'>
                        ویرایش نقش
                    </span>
                </div>
                <span>
                    <BiCopy size='20px'/>
                </span>
            </div>

            {/*   Add New Rule Wrapper   */}
            <div onClick={addNewUserWrapperClickHandler} ref={addNewUserWrapper}
                 className={`fixed inset-0 overflow-auto flex justify-center z-[1200] w-full h-full transition-all duration-300 ${showEditRuleContent ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className='max-w-[800px] w-full bg-white rounded min-h-screen my-4'>
                    {/*  Add Event Wrapper Header  */}
                    <div className={`flex items-center justify-end px-6 py-5`}>
                                        <span onClick={() => setShowEditRuleContent(false)}
                                              className='cursor-pointer text-muted flex items-center justify-center'>
                                <BiX size='24px'/>
                            </span>
                    </div>
                    <div className='p-6 md:p-[72px] bg-white'>
                        <div
                            className='flex flex-col items-center gap-4 justify-center text-center mb-6'>
                            <h3 className='text-2xl font-Estedad-Medium text-title'>
                                ویرایش نقش
                            </h3>
                            <span className='font-IranYekan-Medium text-2sm'>
                                        مجوزهای نقش را تنظیم کنید
                                    </span>
                        </div>
                        <div className='mb-6 pb-4'>
                            <Input type='text' label='نام نقش' placeholder='نام نقش را وارد کنید'/>
                        </div>
                        <h4 className='text-title font-IranYekan-Medium text-lg'>
                            مجوزهای نقش
                        </h4>
                        <div className='w-full overflow-auto mt-6'>
                            <table className='w-full font-IranYekan-Medium text-2sm min-w-[580px]'>
                                <thead className='text-right'>
                                <tr className='child:py-2.5 child:pl-6 border-b border-zinc'>
                                    <th className='w-2/12'>
                                        دسترسی مدیریت
                                    </th>
                                    <th className='w-1/12'>
                                        <div className='flex items-center justify-start gap-2'>
                                            <Input checked={selectedAll} onChange={selectedAllHandler}
                                                   className='!w-auto' type='checkbox'/>
                                            <span className=''>
                                                            انتخاب همه
                                                        </span>
                                        </div>
                                    </th>
                                    <th className='w-1/12'></th>
                                    <th className='w-1/12'></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    userAccessRule?.map(userAccess => (
                                        <tr key={userAccess.id}
                                            className='child:py-2.5 child:pl-6 border-b border-zinc'>
                                            <td>
                                                {userAccess.title}
                                            </td>
                                            {
                                                userAccess?.accessLevel.map(access => (
                                                    <td key={access.id}>
                                                        <div
                                                            className='flex items-center justify-start gap-2'>
                                                            <Input checked={access.status}
                                                                   onChange={() => selectHandler(userAccess.id, access.id)}
                                                                   className='!w-auto'
                                                                   type='checkbox'/>
                                                            <span>
                                                            {access.title}
                                                        </span>
                                                        </div>
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-6 flex gap-6 justify-center'>
                            <PrimaryButton className='!w-auto' title='ویرایش'/>
                            <SecondaryButton onClick={() => setShowEditRuleContent(false)} title='انصراف'/>
                        </div>
                    </div>
                </div>
            </div>
            <Overlay show={showEditRuleContent} setShow={() => setShowEditRuleContent(false)}
                     className='!bg-black/50 !z-[1199]'/>
        </Box>
    )
}