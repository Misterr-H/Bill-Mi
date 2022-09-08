import WidgetsIcon from '@mui/icons-material/Widgets';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const InvoicesChip = () => {
    return (
        <div className={'bg-purple-box bg-contain  bg-no-repeat flex py-5 px-5'}>
            <div className={'rounded-xl bg-[#6B34FE] w-10 h-10 items-center flex justify-center'}>
                <WidgetsIcon fontSize={'small'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-20'}>
                <h1 className={' text-xs ml-5'}>Invoices</h1>
                <h1 className={'mt-1 text-xl font-bold ml-5'}>1432</h1>
            </div>
        </div>
    )
}

export const ClientsChip = () => {
    return (
        <div className={'bg-blue-box bg-contain  bg-no-repeat flex py-5 px-5'}>
            <div className={'rounded-xl bg-[#00B6FB] w-10 h-10 items-center flex justify-center'}>
                <PeopleAltIcon fontSize={'small'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-20'}>
                <h1 className={' text-xs ml-5'}>Clients</h1>
                <h1 className={'mt-1 text-xl font-bold ml-5'}>659</h1>
            </div>
        </div>
    )
}

export const RevenueChip = () => {
    return (
        <div className={'bg-orange-box bg-contain  bg-no-repeat flex py-5 px-5'}>
            <div className={'rounded-xl bg-[#FE5B2E] w-10 h-10 items-center flex justify-center'}>
                <PaidIcon fontSize={'small'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-20'}>
                <h1 className={' text-xs ml-5'}>Revenue</h1>
                <h1 className={'mt-1 text-xl font-bold ml-5'}>$12K</h1>
            </div>
        </div>
    )
}

export const ProductSoldChip = () => {
    return (
        <div className={'bg-gray-box bg-contain  bg-no-repeat flex py-5 px-5'}>
            <div className={'rounded-xl bg-[#DCDCDC] w-10 h-10 items-center flex justify-center'}>
                <ShoppingCartIcon fontSize={'small'} className={'text-white'}/>
            </div>
            <div className={'flex flex-col w-20'}>
                <h1 className={' text-xs ml-5'}>Sold Items</h1>
                <h1 className={'mt-1 text-xl font-bold ml-5'}>4534</h1>
            </div>
        </div>
    )
}
