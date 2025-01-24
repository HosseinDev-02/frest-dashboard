export default function Input({
                                  placeholder,
                                  label,
                                  type,
                                  inputClassName,
                                  labelClassName,
                                  value,
                                  onChange,
                                  onFocus,
                                  onBlur,
                                  ref,
                                  children,
                                  checked,
    className
                              }) {
    return (
        <>
            {
                type === 'text' ? (
                    <div className='flex items-start flex-col gap-2 w-full'>
                        <span className={`font-IranYekan-Medium text-xs ${labelClassName}`}>{label}</span>
                        <input ref={ref} onBlur={onBlur} value={value} onChange={onChange} onFocus={onFocus}
                               type={type} placeholder={placeholder}
                               className={`w-full h-10 rounded border border-zinc focus:border-blue outline-none placeholder:transition-all placeholder:duration-300 focus:placeholder:pr-2 px-4 transition-all focus:shadow-xs duration-300 font-IranYekan-Medium text-2sm placeholder:text-muted ${inputClassName}`}/>
                    </div>
                ) : type === 'textarea' ? (
                    <div className='flex items-start flex-col gap-2 w-full'>
                        <span className={`font-IranYekan-Medium text-xs ${labelClassName}`}>{label}</span>
                        <textarea placeholder={placeholder}
                                  className={`w-full h-24 rounded border border-zinc focus:border-blue outline-none placeholder:transition-all placeholder:duration-300 focus:placeholder:pr-2 p-4 transition-all focus:shadow-xs duration-300 font-IranYekan-Medium text-2sm placeholder:text-muted ${inputClassName}`}>
                        </textarea>
                    </div>
                ) : (
                    <div className={`flex items-start flex-col gap-2 w-full ${className}`}>
                        {label && <span className={`font-IranYekan-Medium text-xs ${labelClassName}`}>{label}</span>}
                        <input checked={checked} onChange={onChange}
                               className={`shrink-0 w-[18px] h-[18px] appearance-none border checked:bg-check border-[#bec5cc] cursor-pointer rounded ${inputClassName}`}
                               type="checkbox"/>
                    </div>
                )
            }
        </>
    )
}