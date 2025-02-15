import Box from "../Box/Box";
import Members from "../Members/Members";
import {BiCopy} from "react-icons/bi";

export default function RuleBox({ userCount, title, members,  }) {
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
                    <span className='text-blue text-2xs font-IranYekan-Bold'>
                        ویرایش نقش
                    </span>
                </div>
                <span>
                    <BiCopy size='20px'/>
                </span>
            </div>
        </Box>
    )
}