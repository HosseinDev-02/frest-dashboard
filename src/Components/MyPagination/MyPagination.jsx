import Pagination from "@mui/material/Pagination";
import {GridPagination} from "@mui/x-data-grid";
import '../../custom-styleSheet/custom-pagination.css'
function CustomPagination(props) {
    let {page, onPageChange, className, count, rowsPerPage} = props
    return (
        <>
            <Pagination
                color="primary"
                className={className}
                page={page + 1}
                count={Math.ceil(count / rowsPerPage)}
                onChange={(event, newPage) => {
                    onPageChange(event, newPage - 1);
                }}
                renderItem={(params) => (
                    <button
                        className={`text-caption bg-[#eeeff1] px-3 md:px-4 py-1.5 md:py-2 ${params.type === 'page' ? '' : 'mx-2 rounded'} ${Math.ceil(count / rowsPerPage) === params.page ? 'rounded-l' : ''} ${params.page === 1 ? 'rounded-r' : ''} ${params.selected ? '!bg-blue !scale-[1.1] !rounded !text-white' : ''} ${params.disabled ? '!text-black/30' : ''} ${!params.disabled && !params.selected ? 'transition-all duration-300 hover:bg-[#dce0e4]' : ''}`} {...params}>
                            <span className='text-2sm font-IranYekan-Medium inline-block min-w-2'>
                                {
                                    params.type === 'next' ? 'بعدی' : params.type === 'previous' ? 'قبلی' : params.page
                                }
                            </span>
                    </button>
                )}
            />
        </>
    );
}
export default function MyPagination(props) {
    return <GridPagination sx={{

    }} labelRowsPerPage='' ActionsComponent={CustomPagination} {...props} />;
}