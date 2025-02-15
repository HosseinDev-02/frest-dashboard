import Box from "../Box/Box";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

export default function ConnectionBox({ img, username, job, skills, isConnected, projects, connections, tasks }) {

    const skillColorCondition = skill => {
        return ` ${(skill === 'REACT') && 'text-blue bg-blue/15'} 
        ${(skill === 'VUE.JS' || skill === 'SKETCH') && 'text-orange bg-orange/15'}
        ${(skill === 'XD' || skill === 'فتوشاپ' || skill === 'فیگما') && 'text-red bg-red/15'}
        ${(skill === 'C#' || skill === 'SQL') && 'text-success bg-success/15'}
        ${(skill === 'CSS' || skill === 'HTML') && 'text-cyan bg-cyan/15'}
        ${(skill === 'توییتر') && 'text-secondary bg-secondary/15'}
        `
    }

     return (
         <Box>
             <div>
                 {/*  User Connection infos  */}
                 <div className='flex flex-col items-center'>
                     <div className='w-[100px] h-[100px] flex items-center justify-center rounded-full overflow-hidden mb-4'>
                         <img className='w-full h-full object-cover' src={img} alt={username}/>
                     </div>
                     <div className='flex flex-col items-center gap-2 font-IranYekan-Medium'>
                         <span className='text-title text-lg'>
                             {username}
                         </span>
                         <span className='text-2sm'>
                             {job}
                         </span>
                     </div>
                     <ul className='flex gap-1 mt-4'>
                         {
                             skills.map((skill, index) => (
                                 <li key={index + 1} className={`font-IranYekan-Medium text-xs rounded-[0.1875rem] px-[9px] py-1 ${skillColorCondition(skill)}`}>
                                     {skill}
                                 </li>
                             ))
                         }
                     </ul>
                 </div>
                 {/*  User Connection states  */}
                 <div className='my-6 py-2 flex justify-around'>
                     <div className='flex flex-col items-center font-IranYekan-Medium gap-2'>
                         <span className='text-2xl text-title'>
                             {projects}
                         </span>
                         <span>
                             پروژه ها
                         </span>
                     </div>
                     <div className='flex flex-col items-center font-IranYekan-Medium gap-2'>
                         <span className='text-2xl text-title'>
                             {tasks}
                         </span>
                         <span>
                             وظایف
                         </span>
                     </div>
                     <div className='flex flex-col items-center font-IranYekan-Medium gap-2'>
                         <span className='text-2xl text-title'>
                             {connections}
                         </span>
                         <span>
                             اتصالات
                         </span>
                     </div>
                 </div>
                 {/*  User Connection Status  */}
                 <div className='flex justify-center gap-4'>
                     <PrimaryButton className={`!w-auto ${isConnected && '!bg-blue/15 !text-blue hover:!bg-blue hover:!text-white !opacity-100'}`} icon={`${isConnected ? 'BiUserPlus' : 'BiUserCheck'}`} title={`${isConnected ? 'متصل' : 'اتصال'}`}/>
                     <SecondaryButton iconSize={20} className='!py-2 !px-3' icon='BiEnvelope'/>
                 </div>
             </div>
         </Box>
     )
}