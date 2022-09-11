import WidgetsIcon from '@mui/icons-material/Widgets';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const InvoicesChip = () => {
    return (
        <div className={'bg-purple-box bg-contain  bg-no-repeat flex p-1 lg:p-5'}>
            <div className={'rounded-xl bg-[#6B34FE] w-8 h-8 lg:w-10 lg:h-10 items-center flex justify-center'}>
                <WidgetsIcon fontSize={'inherit'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-[53%] ml-1 lg:ml-5'}>
                <h1 className={'text-xxs lg:text-xs '}>Invoices</h1>
                <h1 className={'mt-1 lg:text-xl text-xs font-bold '}>1432</h1>
            </div>
        </div>
    )
}

export const ClientsChip = () => {
    return (
        <div className={'bg-blue-box bg-contain  bg-no-repeat flex p-1 lg:p-5'}>
            <div className={'rounded-xl bg-[#00B6FB] w-8 h-8 lg:w-10 lg:h-10 items-center flex justify-center'}>
                <PeopleAltIcon fontSize={'inherit'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-[53%] ml-1 lg:ml-5'}>
                <h1 className={'text-xxs lg:text-xs '}>Clients</h1>
                <h1 className={'mt-1 lg:text-xl text-xs font-bold '}>659</h1>
            </div>
        </div>
    )
}

export const RevenueChip = () => {
    return (
        <div className={'bg-orange-box bg-contain  bg-no-repeat flex p-1 lg:p-5'}>
            <div className={'rounded-xl bg-[#FE5B2E] w-8 h-8 lg:w-10 lg:h-10 items-center flex justify-center'}>
                <PaidIcon fontSize={'inherit'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-[53%] ml-1 lg:ml-5'}>
                <h1 className={'text-xxs lg:text-xs '}>Revenue</h1>
                <h1 className={'mt-1 lg:text-xl text-xs font-bold '}>$12K</h1>
            </div>
        </div>
    )
}

export const ProductSoldChip = () => {
    return (
        <div className={'bg-gray-box bg-contain  bg-no-repeat flex p-1 lg:p-5'}>
            <div className={'rounded-xl bg-[#DCDCDC] w-8 h-8 lg:w-10 lg:h-10 items-center flex justify-center'}>
                <ShoppingCartIcon fontSize={'inherit'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-[53%] ml-1 lg:ml-5'}>
                <h1 className={'text-xxs lg:text-xs '}>Sold Items</h1>
                <h1 className={'mt-1 lg:text-xl text-xs font-bold '}>4534</h1>
            </div>
        </div>
    )
}
