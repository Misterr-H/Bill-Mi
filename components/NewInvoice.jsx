import Face2Icon from '@mui/icons-material/Face2';
import dynamic from "next/dynamic";
import Link from "next/link";

const Graph = dynamic(() => import('./Graph'), {ssr: false})

const NewInvoice = () => {
    const data = [
        {
            name: '04-05',
            amount: 4000,
        },
        {
            name: '05-05',
            amount: 3000,
        },
        {
            name: '06-05',
            amount: 2000,
        },
        {
            name: '07-05',
            amount: 2780,
        },
        {
            name: '08-05',
            amount: 1890,
        },
        {
            name: '09-05',
            amount: 2390,
        },
        {
            name: '10-05',
            amount: 3490,
        }
    ]

    return (
        <div className={'flex flex-col rounded-3xl bg-primary p-10 md:w-[33.33vw] text-white'}>
            <div className={'flex items-center justify-between border-b-1 pb-10 border-neutral-600'}>
                <h1 className={'text-xl w-1/2 text-white'}>Create New Invoice</h1>
                <Link href={'/new-invoice'}>
                    <button className={`
                    bg-white
                    text-primary
                    hover:scale-105
                    duration-200
                    hover:shadow-xl
                    hover:shadow-gray-600
                    rounded-full
                    shadow-gray-600
                    shadow-lg
                    w-40
                    h-12
                    `}>Get started</button>
                </Link>
            </div>

            <div className={'flex flex-col mt-10 border-b-1 border-neutral-600 pb-10'}>
                <h1 className={'text-lg font text-white'}>Client of the month</h1>
                <div className={'flex hover:scale-105 duration-200 items-center rounded-full bg-secondary mx-0 lg:mx-5 p-1 lg:p-5 mt-2 cursor-pointer'}>
                    <div className={'p-4 bg-primary rounded-full'}>
                        <Face2Icon fontSize={'large'} className={'text-white'}/>
                    </div>
                    <div className={'flex flex-col ml-5'}>
                        <h1 className={'text-lg text-white'}>John Doe</h1>
                        <span className={'text-xxs lg:text-xs font-thin'}>$12000</span>
                        <span className={'text-xxs lg:text-xs font-thin'}>MI ID: 29343424234</span>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col my-auto'}>
                <span className={'text-2xl'}>Earning Graph</span>
                <div className={'mt-10'}>
                    <Graph data={data}/>
                </div>

            </div>

        </div>
    )
}

export default NewInvoice;